import path from 'path';
import { promisify } from 'util';
import express from 'express';
import { CronJob } from 'cron';
import expressOasGenerator from 'express-oas-generator';
import { NlpManager } from 'node-nlp';
import redis from 'redis';
import config, { COUNTRY_FLAGS, OPEN_BORDER_INTENTS } from './config/constants';
import registerMiddlewares from './middlewares';
import { errorHandler } from './middlewares/error-handler';
import { getClassifiedCountries } from './nlp/utils';
import { getPageSource, getParsedPageSource } from './scraper';
import { data as pageSourceData } from './scraper/page-source';
import { asyncWrap, isEnv } from './utils';

const app = express();
const { PORT } = config;

const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

redisClient.on('connect', () => {
  console.log('Connection to Redis is established');
  const job = new CronJob('0 */12 * * *', async () => {
    console.log('Started upsertData cron job...');
    try {
      const modelFileName = path.join(__dirname, './nlp/model.nlp');
      const nlpManager = new NlpManager({ languages: ['sr'], modelFileName });
      nlpManager.load(modelFileName);
      const pageSource = !isEnv('production') ? pageSourceData : await getPageSource(config.WEBPAGE_URL);
      const parsedPageSource = getParsedPageSource(pageSource);
      const countries = await getClassifiedCountries(parsedPageSource, nlpManager);
      return setAsync('countries', JSON.stringify(countries))
        .then(() => console.log('Finished upsertData cron job...'));
    } catch (err) {
      console.error(err);
    }
  }, null, null, null, null, true);
  job.start();
});

registerMiddlewares(app);
expressOasGenerator.init(app, {});
const getCountriesHandler = async (_, res) => {
  const classifiedCountries = await getAsync('countries');
  if (!classifiedCountries) return res.json([]);

  const countries = JSON.parse(classifiedCountries);
  const openBorderCountries = countries
    .filter((country) => OPEN_BORDER_INTENTS.includes(country.status))
    .map((country) => ({ ...country, flag: COUNTRY_FLAGS[country.name] || '🇷🇸' }));
  return res.json(openBorderCountries);
};
app.get('/api/countries', asyncWrap(getCountriesHandler));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

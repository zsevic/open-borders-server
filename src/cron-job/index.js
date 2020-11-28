import path from 'path';
import latinize from 'latinize';
import { NlpManager } from 'node-nlp';
import * as countriesService from '../api/countries/countries.service';
import config, { CLOSED_BORDER, NO_TEST_REQUIRED, OPEN_BORDER, SKIP_INTENTS, SKIP_SENTENCE } from '../config/constants';
import { getPageSource, getParsedPageSource } from '../scraper';
// import { data } from '../scraper/page-source';

export const upsertData = async () => {
  console.log('Started upsertData cron job...');
  try {
    const modelFileName = path.join(__dirname, '../nlp/model.nlp');
    const nlpManager = new NlpManager({ languages: ['sr'], modelFileName });
    nlpManager.load(modelFileName);
    const data = await getPageSource(config.WEBPAGE_URL);
    const parsedPageSource = getParsedPageSource(data);
    const countries = await Promise.all(parsedPageSource.map(async (country) => {
      const infoSentences = country.info.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
      for (let i = 0; i < infoSentences.length; i += 1) {
        const countryInfo = latinize(infoSentences[i]);
        try {
          const { intent } = await nlpManager.process(countryInfo);
          if (intent === SKIP_SENTENCE) {
            continue;
          }
          if (i === infoSentences.length - 1 && SKIP_INTENTS.includes(intent) || i === 1 && intent === CLOSED_BORDER) {
            return {
              ...country,
              status: NO_TEST_REQUIRED,
            };
          }
          if (intent === OPEN_BORDER) {
            continue;
          }

          return {
            ...country,
            status: intent,
          };
        } catch (err) {
          console.log('Not classified:', countryInfo);
          return {
            ...country,
            status: 'None',
          };
        }
      }
    }));
    return countriesService.bulkUpsert(countries).then(() => console.log('Finished upsertData cron job...'));
  } catch (err) {
    console.error(err);
  }
};

import path from 'path';
import latinize from 'latinize';
import { NlpManager } from 'node-nlp';
import * as countriesService from '../api/countries/countries.service';
import config from '../config/constants';
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
      const countryInfo = latinize(country.info.split('.').slice(0, 2).join('.'));
      try {
        const { intent: status } = await nlpManager.process(countryInfo);
        return {
          ...country,
          status,
        };
      } catch (err) {
        console.log('Not classified:', countryInfo);
        return {
          ...country,
          status: 'None',
        };
      }
    }));
    return countriesService.bulkUpsert(countries).then(() => console.log('Finished upsertData cron job...'));
  } catch (err) {
    console.error(err);
  }
};

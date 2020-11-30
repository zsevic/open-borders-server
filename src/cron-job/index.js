import path from 'path';
import { NlpManager } from 'node-nlp';
import * as countriesService from '../api/countries/countries.service';
import config from '../config/constants';
import { getClassifiedCountries } from '../nlp/utils';
import { getPageSource, getParsedPageSource } from '../scraper';
// import { data as pageSource } from '../scraper/page-source';

export const upsertData = async () => {
  console.log('Started upsertData cron job...');
  try {
    const modelFileName = path.join(__dirname, '../nlp/model.nlp');
    const nlpManager = new NlpManager({ languages: ['sr'], modelFileName });
    nlpManager.load(modelFileName);
    const pageSource = await getPageSource(config.WEBPAGE_URL);
    const parsedPageSource = getParsedPageSource(pageSource);
    const classifiedCountries = await getClassifiedCountries(parsedPageSource, nlpManager);
    return countriesService.bulkUpsert(classifiedCountries).then(() => console.log('Finished upsertData cron job...'));
  } catch (err) {
    console.error(err);
  }
};

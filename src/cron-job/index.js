import path from 'path';
import { promisify } from 'util';
import latinize from 'latinize';
import { BayesClassifier } from 'natural';
import * as countriesService from '../api/countries/countries.service';
import config from '../config/constants';
import { getPageSource, getParsedPageSource } from '../scraper';
// import { data } from '../scraper/page-source';

const loadClassifierAsync = promisify(BayesClassifier.load);

export const upsertData = async () => {
  console.log('Running upsertData cron job...');
  try {
    const classifier = await loadClassifierAsync(path.join(__dirname, '../nlp/classifier.json'), null);
    const data = await getPageSource(config.WEBPAGE_URL);
    const parsedPageSource = getParsedPageSource(data);
    const countries = parsedPageSource.map((country) => {
      const countryInfo = latinize(country.info.split('.').slice(0, 2).join('.'));
      return {
        ...country,
        status: classifier.classify(countryInfo),
      };
    });
    return countriesService.bulkUpsert(countries);
  } catch (err) {
    console.error(err);
  }
};

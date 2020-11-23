import path from 'path';
import { promisify } from 'util';
import { BayesClassifier } from 'natural';
import * as countriesService from '../api/countries/countries.service';
import { data } from '../scraper/page-source';
import { getParsedPageSource } from '../scraper';

const loadClassifierAsync = promisify(BayesClassifier.load);

export const scrapeAndClassify = async () => {
  const classifier = await loadClassifierAsync(path.join(__dirname, '../nlp/classifier.json'), null);
  const parsedPageSource = getParsedPageSource(data);
  const countries = parsedPageSource.map((country) => ({
    ...country,
    status: classifier.classify(country.info),
  }));
  return countriesService.bulkUpsert(countries);
};

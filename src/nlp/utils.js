import latinize from 'latinize';
import { trainingData } from './training-data';
import { CLOSED_BORDER, NO_TEST_REQUIRED, SKIP_INTENTS } from '../config/constants';

export const addTrainingData = (manager) => {
  trainingData.forEach((data) => {
    manager.addDocument('sr', latinize(data.text), data.category);
  });
};

export const getClassifiedCountries = async (countries, nlpManager) => Promise.all(countries.map(async (country) => {
  const infoSentences = country.info.replace(/(V|R)\./g, '$1').replace(/<a.*<\/a>/g, '').replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
  for (let i = 0; i < infoSentences.length; i += 1) {
    const countryInfo = latinize(infoSentences[i]);
    const { intent } = await nlpManager.process(countryInfo);
    if (i === infoSentences.length - 1 && SKIP_INTENTS.includes(intent) || i === 1 && intent === CLOSED_BORDER) {
      return {
        ...country,
        status: NO_TEST_REQUIRED,
      };
    }
    if (SKIP_INTENTS.includes(intent)) {
      continue;
    }

    return {
      ...country,
      status: intent,
    };
  }
}));

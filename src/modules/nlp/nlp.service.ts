import path from 'path';
import { Injectable } from '@nestjs/common';
import latinize from 'latinize';
import { NlpManager } from 'node-nlp';
import { CountryInfo } from 'modules/country/country.types';
import {
  CLOSED_BORDER,
  MODEL_LANGUAGE,
  NO_TEST_REQUIRED,
  SKIPPED_INTENTS,
} from './nlp.constants';
import { trainingData } from './nlp.data';

@Injectable()
export class NlpService {
  addTrainingData = (manager): void => {
    trainingData.forEach(data => {
      manager.addDocument(
        MODEL_LANGUAGE,
        latinize(data.utterance),
        data.intent,
      );
    });
  };

  getClassifiedCountries = async (countries: CountryInfo[]) => {
    const nlpManager = this.getNlpManagerWithTrainedModel();
    return Promise.all(
      countries.map(async country => {
        const infoSentences = country.info
          .replace(/([VRSU])\./g, '$1')
          .replace(/<a[^>]*>([^<]+)<\/a>/g, '')
          .replace(/([.?!])\s*(?=[A-Z])/g, '$1|')
          .split('|');
        for (let i = 0; i < infoSentences.length; i += 1) {
          const countryInfo = latinize(infoSentences[i]);
          try {
            const { intent } = await nlpManager.process(countryInfo);
            const skipLastSentenceIntent =
              i === infoSentences.length - 1 &&
              SKIPPED_INTENTS.includes(intent);
            const skipSecondSentenceClosedBorderIntent =
              i === 1 && intent === CLOSED_BORDER;
            if (
              skipLastSentenceIntent ||
              skipSecondSentenceClosedBorderIntent
            ) {
              return {
                ...country,
                status: NO_TEST_REQUIRED,
              };
            }
            if (!SKIPPED_INTENTS.includes(intent)) {
              return {
                ...country,
                status: intent,
              };
            }
          } catch (err) {
            console.error(err.message);
            if (i === infoSentences.length - 1) {
              return {
                ...country,
                status: NO_TEST_REQUIRED,
              };
            }
          }
        }
      }),
    );
  };

  private getModelFileName = (): string => {
    return path.join(__dirname, './nlp.model.json');
  };

  private getNlpManager = modelFileName => {
    const nlpManager = new NlpManager({
      languages: [MODEL_LANGUAGE],
      modelFileName,
    });
    return nlpManager;
  };

  private getNlpManagerWithTrainedModel = () => {
    const modelFileName = this.getModelFileName();
    const nlpManager = this.getNlpManager(modelFileName);
    nlpManager.load(modelFileName);
    return nlpManager;
  };

  trainAndSaveModel = async () => {
    const modelFileName = this.getModelFileName();
    const manager = this.getNlpManager(modelFileName);
    this.addTrainingData(manager);
    await manager.train();

    manager.save(modelFileName);
  };
}

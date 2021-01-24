import path from 'path';
import { Injectable, Logger } from '@nestjs/common';
import latinize from 'latinize';
import { NlpManager } from 'node-nlp';
import { CountryInfo } from 'modules/country/country.types';
import {
  MODEL_LANGUAGE,
  NO_TEST_REQUIRED,
  SKIPPED_INTENTS,
} from './nlp.constants';
import { trainingData } from './nlp.training-data';

@Injectable()
export class NlpService {
  private readonly logger = new Logger(NlpService.name);

  addTrainingData = (manager): void => {
    trainingData.forEach(data => {
      manager.addDocument(
        MODEL_LANGUAGE,
        latinize(data.utterance),
        data.intent,
      );
    });
  };

  getClassifiedCountries = async (
    countries: CountryInfo[],
  ): Promise<CountryInfo[]> => {
    const nlpManager = this.getNlpManagerWithTrainedModel();
    return Promise.all(
      countries.map(
        async (country: CountryInfo): Promise<CountryInfo> => {
          const infoSentences = country.info
            .replace(/([VRSU])\./g, '$1')
            .replace(/<a[^>]*>([^<]+)<\/a>/g, '')
            .replace(/([.?!])\s*(?=[A-Z])/g, '$1|')
            .split('|');
          for (let i = 0; i < infoSentences.length; i += 1) {
            try {
              const countryInfo = latinize(infoSentences[i]);
              const { intent } = await nlpManager.process(countryInfo);
              if (
                i === infoSentences.length - 1 &&
                SKIPPED_INTENTS.includes(intent)
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
              this.logger.error(err.message);
              if (i === infoSentences.length - 1) {
                return {
                  ...country,
                  status: NO_TEST_REQUIRED,
                };
              }
            }
          }
        },
      ),
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

  trainAndSaveModel = async (): Promise<void> => {
    const modelFileName = this.getModelFileName();
    const manager = this.getNlpManager(modelFileName);
    this.addTrainingData(manager);
    await manager.train();

    manager.save(modelFileName);
  };
}

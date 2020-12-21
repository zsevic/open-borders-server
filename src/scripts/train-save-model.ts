import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NlpModule } from 'modules/nlp/nlp.module';
import { NlpService } from 'modules/nlp/nlp.service';

(async function trainAndSaveModel() {
  const logger = new Logger(trainAndSaveModel.name);
  const app = await NestFactory.create(NlpModule, { logger });
  const nlpService = app.select(NlpModule).get(NlpService, { strict: true });

  await nlpService.trainAndSaveModel();
  logger.log('Model is trained and saved successfully');
  await app.close();
  process.exit(0);
})();

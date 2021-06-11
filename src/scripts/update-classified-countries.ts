import { writeFile } from 'fs';
import path from 'path';
import { promisify } from 'util';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { countriesInfo } from 'common/mocks/scraped-data';
import { logger } from 'common/utils';
import { NlpModule } from 'modules/nlp/nlp.module';
import { NlpService } from 'modules/nlp/nlp.service';

const writeFileAsync = promisify(writeFile);

(async function updateClassifiedCountriesMock() {
  const scriptLogger = new Logger(updateClassifiedCountriesMock.name);
  const app = await NestFactory.create(NlpModule, { logger });
  try {
    const nlpService = app.select(NlpModule).get(NlpService, { strict: true });

    const classifiedCountries = await nlpService.getClassifiedCountries(
      countriesInfo,
    );
    const classifiedCountriesMockPath = path.join(
      process.cwd(),
      'src/common/mocks/classified-countries.ts',
    );
    await writeFileAsync(
      classifiedCountriesMockPath,
      `export const classifiedCountries = ${JSON.stringify(
        classifiedCountries,
        null,
        2,
      )}`,
    );
    scriptLogger.log('Classified countries are updated successfully');
  } catch (err) {
    scriptLogger.error(err.message);
  }
  await app.close();
  process.exit(0);
})();

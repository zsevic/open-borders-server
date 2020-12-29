import { writeFile } from 'fs';
import path from 'path';
import { promisify } from 'util';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WEBPAGE_URL } from 'common/config/constants';
import { logger } from 'common/utils';
import { ScraperModule } from 'modules/scraper/scraper.module';
import { ScraperService } from 'modules/scraper/scraper.service';

const writeFileAsync = promisify(writeFile);

(async function updatePageSourceMock(url) {
  const scriptLogger = new Logger(updatePageSourceMock.name);
  const app = await NestFactory.create(ScraperModule, { logger });
  try {
    const scraperService = app
      .select(ScraperModule)
      .get(ScraperService, { strict: true });

    const pageSource = await scraperService.getPageSource(url);
    const scrapedDataPath = path.join(
      process.cwd(),
      'src/modules/scraper/scraper.scraped-data.ts',
    );
    await writeFileAsync(
      scrapedDataPath,
      `export const pageSource = \`${pageSource}\``,
    );
    const countriesInfo = await scraperService.getCountriesInfo(pageSource);
    const scrapedDataMockPath = path.join(
      process.cwd(),
      'src/common/mocks/scraped-data.ts',
    );
    await writeFileAsync(
      scrapedDataMockPath,
      `export const countriesInfo = ${JSON.stringify(countriesInfo, null, 2)}`,
    );
    scriptLogger.log('Scraper data is updated successfully');
  } catch (err) {
    scriptLogger.error(err.message);
  }
  await app.close();
  process.exit(0);
})(WEBPAGE_URL);

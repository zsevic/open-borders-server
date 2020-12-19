import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WEBPAGE_URL } from 'common/config/constants';
import { isEnv } from 'common/utils';
import { NlpService } from 'modules/nlp/nlp.service';
import { RedisCacheService } from 'modules/redis-cache/redis-cache.service';
import { data as pageSourceData } from 'modules/scraper/scraper.data';
import { ScraperService } from 'modules/scraper/scraper.service';
import { UPSERT_DATA_CRON_JOB } from './cron-job.constants';

@Injectable()
export class CronJobService {
  private readonly logger = new Logger(CronJobService.name);

  constructor(
    private readonly redisCacheService: RedisCacheService,
    private readonly nlpService: NlpService,
    private readonly scraperService: ScraperService,
  ) {}

  @Cron(CronExpression.EVERY_12_HOURS, {
    name: UPSERT_DATA_CRON_JOB,
    timeZone: 'Europe/Belgrade',
  })
  async handleCron() {
    this.logger.log(`Started ${UPSERT_DATA_CRON_JOB} cron job...`);

    const pageSource = !isEnv('production')
      ? pageSourceData
      : await this.scraperService.getPageSource(WEBPAGE_URL);
    const countriesInfo = this.scraperService.getCountriesInfo(pageSource);
    const classifiedCountries = await this.nlpService.getClassifiedCountries(
      countriesInfo,
    );
    await this.redisCacheService.set(
      'countries',
      JSON.stringify(classifiedCountries),
    );

    this.logger.log(`Finished ${UPSERT_DATA_CRON_JOB} cron job...`);
  }
}

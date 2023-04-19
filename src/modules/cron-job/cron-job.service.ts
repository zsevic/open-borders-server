import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Cache } from 'cache-manager';
import { WEBPAGE_URL } from 'common/config/constants';
import { CACHE_TTL, COUNTRY_FLAGS } from 'modules/country/country.constants';
import { CountryInfo } from 'modules/country/country.types';
import { NlpService } from 'modules/nlp/nlp.service';
import { ScraperService } from 'modules/scraper/scraper.service';
import { UPSERT_DATA_CRON_JOB } from './cron-job.constants';

@Injectable()
export class CronJobService {
  private readonly logger = new Logger(CronJobService.name);

  constructor(
    @Inject(CACHE_MANAGER) private cacheService: Cache,
    private readonly nlpService: NlpService,
    private readonly scraperService: ScraperService,
  ) {}

  @Cron(CronExpression.EVERY_12_HOURS, {
    name: UPSERT_DATA_CRON_JOB,
    timeZone: 'Europe/Belgrade',
  })
  async upsertData(): Promise<CountryInfo[]> {
    this.logger.log(`Started ${UPSERT_DATA_CRON_JOB} cron job...`);
    try {
      const pageSource = await this.scraperService.getPageSource(WEBPAGE_URL);
      const countriesInfo = this.scraperService.getCountriesInfo(pageSource);
      const classifiedCountries = await this.nlpService.getClassifiedCountries(
        countriesInfo,
      );
      const countriesData = classifiedCountries.map((country: CountryInfo) => ({
        ...country,
        flag: COUNTRY_FLAGS[country.name] || '🇷🇸',
      }));
      await this.cacheService.set('countries', JSON.stringify(countriesData), {
        ttl: CACHE_TTL,
      });

      this.logger.log(`Finished ${UPSERT_DATA_CRON_JOB} cron job...`);
      return countriesData;
    } catch (err) {
      this.logger.error(err);
    }
  }
}

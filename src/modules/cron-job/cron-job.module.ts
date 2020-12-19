import { Module } from '@nestjs/common';
import { NlpModule } from 'modules/nlp/nlp.module';
import { RedisCacheModule } from 'modules/redis-cache/redis-cache.module';
import { ScraperModule } from 'modules/scraper/scraper.module';
import { CronJobService } from './cron-job.service';

@Module({
  imports: [NlpModule, RedisCacheModule, ScraperModule],
  providers: [CronJobService],
})
export class CronJobModule {}

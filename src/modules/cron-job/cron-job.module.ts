import { CacheModule, Module, OnModuleInit } from '@nestjs/common';
import { NlpModule } from 'modules/nlp/nlp.module';
import { ScraperModule } from 'modules/scraper/scraper.module';
import { CronJobService } from './cron-job.service';

@Module({
  imports: [NlpModule, CacheModule.register(), ScraperModule],
  providers: [CronJobService],
})
export class CronJobModule implements OnModuleInit {
  constructor(private readonly cronJobService: CronJobService) {}

  onModuleInit = async () => this.cronJobService.upsertData();
}

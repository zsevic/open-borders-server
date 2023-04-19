import {
  Injectable,
  Logger,
  Module,
  OnApplicationShutdown,
} from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import * as Joi from 'joi';
import { Subject } from 'rxjs';
import config from 'common/config';
import { PORT } from 'common/config/constants';
import { CountryModule } from 'modules/country/country.module';
import { CronJobModule } from 'modules/cron-job/cron-job.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validationSchema: Joi.object({
        CLIENT_URL: Joi.string()
          .uri()
          .required(),
        NODE_ENV: Joi.string()
          .valid('production', 'development', 'test')
          .default('development')
          .required(),
        PORT: Joi.number()
          .default(PORT)
          .required(),
      }),
    }),
    ScheduleModule.forRoot(),
    CronJobModule,
    CountryModule,
  ],
  providers: [
    {
      provide: 'configService',
      useFactory: () => new ConfigService(),
    },
  ],
})
@Injectable()
export class AppModule implements OnApplicationShutdown {
  private readonly logger = new Logger(AppModule.name);
  private readonly shutdownListener$: Subject<void> = new Subject();

  onApplicationShutdown = async (signal: string): Promise<void> => {
    if (!signal) return;
    this.logger.log(`Detected signal: ${signal}`);

    this.shutdownListener$.next();
  };

  subscribeToShutdown = (shutdownFn: () => void): void => {
    this.shutdownListener$.subscribe(() => {
      this.logger.log('App is closed');
      shutdownFn();
    });
  };
}

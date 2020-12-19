import { Logger } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { setupApiDocs } from 'common/config/api-docs';
import { RATE_LIMIT_REQUESTS, RATE_LIMIT_TIME } from 'common/config/rate-limit';
import { AllExceptionsFilter } from 'common/filters';
import { loggerMiddleware } from 'common/middlewares';
import { isEnv } from 'common/utils';
import { AppModule } from 'modules/app/app.module';
import { application } from './app';

async function bootstrap(): Promise<void> {
  const app = await application.get();

  const logger = new Logger(bootstrap.name);
  const configService = app.get('configService');

  app.enableCors({
    origin: configService.get('CLIENT_URL'),
  });
  app.enable('trust proxy'); // used for rate limiter
  app.enableShutdownHooks();
  app.get(AppModule).subscribeToShutdown(() => app.close());

  app.use(compression());
  app.use(helmet());
  app.use(loggerMiddleware);
  app.use(
    rateLimit({
      windowMs: RATE_LIMIT_TIME,
      max: RATE_LIMIT_REQUESTS,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  setupApiDocs(app);

  if (isEnv('production')) {
    Sentry.init({ dsn: configService.get('SENTRY_DSN') });
  }

  await app.listen(configService.get('PORT')).then(() => {
    logger.log(`Server is running on port ${configService.get('PORT')}`);
  });
}

bootstrap();

process.on('unhandledRejection', function handleUnhandledRejection(
  err: Error,
): void {
  const logger = new Logger(handleUnhandledRejection.name);
  logger.error(err.stack);
});

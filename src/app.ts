import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { logger } from 'common/utils';
import { AppModule } from 'modules/app/app.module';

export const application = (function() {
  let _instance;
  return {
    get: async (): Promise<NestExpressApplication> => {
      if (!_instance) {
        _instance = await NestFactory.create<NestExpressApplication>(
          AppModule,
          {
            logger,
          },
        );
      }
      return _instance;
    },
  };
})();

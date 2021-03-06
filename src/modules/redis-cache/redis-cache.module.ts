import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { CACHE_TTL } from './redis-cache.constants';
import { RedisCacheService } from './redis-cache.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        auth_pass: configService.get('REDIS_PASSWORD'),
        db: configService.get('REDIS_DATABASE'),
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: CACHE_TTL,
      }),
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}

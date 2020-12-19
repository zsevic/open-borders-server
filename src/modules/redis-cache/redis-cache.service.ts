import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_TTL } from './redis-cache.constants';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  get = async (key: string) => this.cache.get(key);

  set = async (key: string, value: string) =>
    this.cache.set(key, value, {
      ttl: CACHE_TTL,
    });
}

import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NO_TEST_REQUIRED } from 'modules/nlp/nlp.constants';
import { CountryInfo } from 'modules/country/country.types';
import { RedisCacheService } from './redis-cache.service';

describe('RedisCacheService', () => {
  let redisCacheService: RedisCacheService;
  const countries: CountryInfo[] = [
    {
      name: 'country',
      info: 'info',
      status: NO_TEST_REQUIRED,
      flag: '🇷🇸',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RedisCacheService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: async () => Promise.resolve(JSON.stringify(countries)),
            set: async () => Promise.resolve(),
          },
        },
      ],
    }).compile();

    redisCacheService = module.get<RedisCacheService>(RedisCacheService);
  });

  it('should get the data from Redis database', async () => {
    expect(await redisCacheService.get('countries')).toBe(
      JSON.stringify(countries),
    );
  });

  it('should set the data to the Redis database', async () => {
    expect(
      await redisCacheService.set('countries', JSON.stringify(countries)),
    ).toBe(undefined);
  });
});

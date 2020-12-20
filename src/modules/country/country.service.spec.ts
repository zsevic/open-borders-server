import { Test, TestingModule } from '@nestjs/testing';
import { NO_TEST_REQUIRED } from 'modules/nlp/nlp.constants';
import { RedisCacheService } from 'modules/redis-cache/redis-cache.service';
import { CountryService } from './country.service';
import { CountryInfo } from './country.types';

describe('CountryService', () => {
  let countryService: CountryService;
  const result: CountryInfo[] = [
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
        CountryService,
        {
          provide: RedisCacheService,
          useValue: {
            get: async () => Promise.resolve(JSON.stringify(result)),
          },
        },
      ],
    }).compile();

    countryService = module.get<CountryService>(CountryService);
  });

  it('should get country list', async () => {
    expect(await countryService.getCountryList()).toMatchObject(result);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NO_TEST_REQUIRED } from 'modules/nlp/nlp.constants';
import { RedisCacheService } from 'modules/redis-cache/redis-cache.service';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { CountryInfo } from './country.types';

describe('CountryController', () => {
  let countryController: CountryController;
  let countryService: CountryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryService, { provide: RedisCacheService, useValue: {} }],
    }).compile();

    countryController = module.get<CountryController>(CountryController);
    countryService = module.get<CountryService>(CountryService);
  });

  it('should get country list', async () => {
    const result: CountryInfo[] = [
      {
        name: 'country',
        info: 'info',
        status: NO_TEST_REQUIRED,
        flag: '🇷🇸',
      },
    ];
    jest.spyOn(countryService, 'getCountryList').mockResolvedValue(result);

    const countryList: CountryInfo[] = await countryController.getCountryList();

    expect(countryList).toBe(result);
  });
});

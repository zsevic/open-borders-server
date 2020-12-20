import { Test, TestingModule } from '@nestjs/testing';
import { NO_TEST_REQUIRED } from 'modules/nlp/nlp.constants';
import { RedisCacheService } from 'modules/redis-cache/redis-cache.service';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { CountryInfo } from './country.types';

describe('CountryController', () => {
  let controller: CountryController;
  let service: CountryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryService, { provide: RedisCacheService, useValue: {} }],
    }).compile();

    controller = module.get<CountryController>(CountryController);
    service = module.get<CountryService>(CountryService);
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
    jest.spyOn(service, 'getCountryList').mockResolvedValue(result);

    expect(await controller.getCountryList()).toBe(result);
  });
});

import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  NO_TEST_REQUIRED,
  QUARANTINE_REQUIRED,
} from 'modules/nlp/nlp.constants';
import { CountryService } from './country.service';
import { CountryInfo } from './country.types';

describe('CountryService', () => {
  let countryService: CountryService;
  const countries: CountryInfo[] = [
    {
      name: 'BOSNA I HERCEGOVINA',
      info: 'info',
      status: NO_TEST_REQUIRED,
      flag: '🇧🇦',
    },
    {
      name: 'SAD',
      info: 'info',
      status: QUARANTINE_REQUIRED,
      flag: '🇺🇸',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountryService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: async () => Promise.resolve(JSON.stringify(countries)),
          },
        },
      ],
    }).compile();

    countryService = module.get<CountryService>(CountryService);
  });

  it('should get country list', async () => {
    const result: CountryInfo[] = [
      {
        name: 'Bosna i Hercegovina',
        info: 'info',
        status: NO_TEST_REQUIRED,
        flag: '🇧🇦',
      },
      {
        name: 'SAD',
        info: 'info',
        status: QUARANTINE_REQUIRED,
        flag: '🇺🇸',
      },
    ];
    const countryList: CountryInfo[] = await countryService.getCountryList();

    expect(countryList).toMatchObject(result);
  });
});

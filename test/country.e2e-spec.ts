import { CACHE_MANAGER, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { CountryModule } from 'modules/country/country.module';
import { CountryInfo } from 'modules/country/country.types';
import { NO_TEST_REQUIRED } from 'modules/nlp/nlp.constants';
import { CountryService } from 'modules/country/country.service';

describe('CountryModule (e2e)', () => {
  let app: INestApplication;
  const countryService = {
    getCountryList: (): CountryInfo[] => [
      {
        name: 'country',
        info: 'info',
        status: NO_TEST_REQUIRED,
        flag: '🇷🇸',
      },
    ],
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CountryModule],
    })
      .overrideProvider(CountryService)
      .useValue(countryService)
      .overrideProvider(CACHE_MANAGER)
      .useValue({})
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/api/countries (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/countries')
      .expect(200)
      .expect(countryService.getCountryList());
  });
});

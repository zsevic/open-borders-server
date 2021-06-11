import { Test, TestingModule } from '@nestjs/testing';
import { countriesInfo } from 'common/mocks/scraped-data';
import { classifiedCountries as result } from 'common/mocks/classified-countries';
import { NlpService } from './nlp.service';

describe('NlpService', () => {
  let nlpService: NlpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NlpService],
    }).compile();

    nlpService = module.get<NlpService>(NlpService);
  });

  it('should classify the countries', async () => {
    const classifiedCountries = await nlpService.getClassifiedCountries(
      countriesInfo,
    );

    expect(classifiedCountries).toMatchObject(result);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { countriesInfo as result } from 'common/mocks/scraped-data';
import { pageSource } from './scraper.scraped-data';
import { ScraperService } from './scraper.service';

describe('ScraperService', () => {
  let scraperService: ScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScraperService],
    }).compile();

    scraperService = module.get<ScraperService>(ScraperService);
  });

  it('should map countries with their info from page source', async () => {
    const countriesInfo = await scraperService.getCountriesInfo(pageSource);

    expect(countriesInfo).toMatchObject(result);
  });
});

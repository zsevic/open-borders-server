import { Test, TestingModule } from '@nestjs/testing';
import { COUNTRY_FLAGS } from 'modules/country/country.constants';
import { CountryInfo } from 'modules/country/country.types';
import { CLOSED_BORDER } from 'modules/nlp/nlp.constants';
import { NlpService } from 'modules/nlp/nlp.service';
import { RedisCacheService } from 'modules/redis-cache/redis-cache.service';
import { ScraperService } from 'modules/scraper/scraper.service';
import { CronJobService } from './cron-job.service';

describe('CronJobService', () => {
  let cronJobService: CronJobService;
  let nlpService: NlpService;
  let scraperService: ScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CronJobService,
        NlpService,
        ScraperService,
        {
          provide: RedisCacheService,
          useValue: {
            set: async () => Promise.resolve(null),
          },
        },
      ],
    }).compile();

    cronJobService = module.get<CronJobService>(CronJobService);
    nlpService = module.get<NlpService>(NlpService);
    scraperService = module.get<ScraperService>(ScraperService);
  });

  it('should upsert the data', async () => {
    const pageSource = `<div id="text">
    (ažurirano 08.12.2020.)<br><br><strong>AZERBEJDžAN</strong><br>Državljani Srbije ne mogu da uđu ili tranzitiraju jer su sve granice Azerbejdzana zatvorene za putnički saobraćaj. Državljani Srbije koji u hitnom slučaju treba da putuju u Azerbejdzan treba da podnesu zahtev za vizu u Ambasadi Azerbejdzana u Beogradu.<br>Strani državljani da bi dobili dozvolu za ulazak u zemlju moraju da dostave lekarsko uverenje o negativnom rezultatu testa. Po dolasku u Azerbejdzan, strani državljani se pregledaju i u slučaju sumnje na infekciju, lice se, bez obzira na državljanstvo, nacionalnost i svrhu putovanja, smešta u karantin od 14 dana u specijalizovanoj medicinskoj ustanovi.<br><br></div>`;
    const countryInfo: CountryInfo = {
      name: 'AZERBEJDžAN',
      info:
        'Državljani Srbije ne mogu da uđu ili tranzitiraju jer su sve granice Azerbejdzana zatvorene za putnički saobraćaj. Državljani Srbije koji u hitnom slučaju treba da putuju u Azerbejdzan treba da podnesu zahtev za vizu u Ambasadi Azerbejdzana u Beogradu. Strani državljani da bi dobili dozvolu za ulazak u zemlju moraju da dostave lekarsko uverenje o negativnom rezultatu testa. Po dolasku u Azerbejdzan, strani državljani se pregledaju i u slučaju sumnje na infekciju, lice se, bez obzira na državljanstvo, nacionalnost i svrhu putovanja, smešta u karantin od 14 dana u specijalizovanoj medicinskoj ustanovi.',
    };
    const countriesInfo: CountryInfo[] = [
      {
        ...countryInfo,
      },
    ];
    const classifiedCountries: CountryInfo[] = [
      { ...countryInfo, status: CLOSED_BORDER },
    ];
    const result: CountryInfo[] = [
      {
        ...countryInfo,
        flag: COUNTRY_FLAGS[countryInfo.name],
      },
    ];
    jest.spyOn(scraperService, 'getPageSource').mockResolvedValue(pageSource);
    jest
      .spyOn(scraperService, 'getCountriesInfo')
      .mockReturnValue(countriesInfo);
    jest
      .spyOn(nlpService, 'getClassifiedCountries')
      .mockResolvedValue(classifiedCountries);

    const countryData = await cronJobService.upsertData();

    expect(countryData).toMatchObject(result);
  });
});

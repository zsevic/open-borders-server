import { Test, TestingModule } from '@nestjs/testing';
import { CountryInfo } from 'modules/country/country.types';
import { ScraperService } from './scraper.service';

describe('ScraperService', () => {
  let scraperService: ScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScraperService],
    }).compile();

    scraperService = module.get<ScraperService>(ScraperService);
  });

  it('should get countries info from page source', async () => {
    const result: CountryInfo[] = [
      {
        name: 'AZERBEJDžAN',
        info:
          'Državljani Srbije ne mogu da uđu ili tranzitiraju jer su sve granice Azerbejdzana zatvorene za putnički saobraćaj. Državljani Srbije koji u hitnom slučaju treba da putuju u Azerbejdzan treba da podnesu zahtev za vizu u Ambasadi Azerbejdzana u Beogradu. Strani državljani da bi dobili dozvolu za ulazak u zemlju moraju da dostave lekarsko uverenje o negativnom rezultatu testa. Po dolasku u Azerbejdzan, strani državljani se pregledaju i u slučaju sumnje na infekciju, lice se, bez obzira na državljanstvo, nacionalnost i svrhu putovanja, smešta u karantin od 14 dana u specijalizovanoj medicinskoj ustanovi.',
      },
    ];
    const pageSource = `<div id="text">
    (ažurirano 08.12.2020.)<br><br><strong>AZERBEJDžAN</strong><br>Državljani Srbije ne mogu da uđu ili tranzitiraju jer su sve granice Azerbejdzana zatvorene za putnički saobraćaj. Državljani Srbije koji u hitnom slučaju treba da putuju u Azerbejdzan treba da podnesu zahtev za vizu u Ambasadi Azerbejdzana u Beogradu.<br>Strani državljani da bi dobili dozvolu za ulazak u zemlju moraju da dostave lekarsko uverenje o negativnom rezultatu testa. Po dolasku u Azerbejdzan, strani državljani se pregledaju i u slučaju sumnje na infekciju, lice se, bez obzira na državljanstvo, nacionalnost i svrhu putovanja, smešta u karantin od 14 dana u specijalizovanoj medicinskoj ustanovi.<br><br></div>`;

    expect(await scraperService.getCountriesInfo(pageSource)).toMatchObject(
      result,
    );
  });
});

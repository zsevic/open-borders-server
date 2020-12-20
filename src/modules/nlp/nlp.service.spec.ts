import { Test, TestingModule } from '@nestjs/testing';
import { CountryInfo } from 'modules/country/country.types';
import { CLOSED_BORDER } from './nlp.constants';
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
    const countryInfo = {
      name: 'AZERBEJDžAN',
      info:
        'Državljani Srbije ne mogu da uđu ili tranzitiraju jer su sve granice Azerbejdzana zatvorene za putnički saobraćaj. Državljani Srbije koji u hitnom slučaju treba da putuju u Azerbejdzan treba da podnesu zahtev za vizu u Ambasadi Azerbejdzana u Beogradu. Strani državljani da bi dobili dozvolu za ulazak u zemlju moraju da dostave lekarsko uverenje o negativnom rezultatu testa. Po dolasku u Azerbejdzan, strani državljani se pregledaju i u slučaju sumnje na infekciju, lice se, bez obzira na državljanstvo, nacionalnost i svrhu putovanja, smešta u karantin od 14 dana u specijalizovanoj medicinskoj ustanovi.',
    };
    const countriesInfo = [
      {
        ...countryInfo,
      },
    ];
    const classifiedCountries: CountryInfo[] = [
      { ...countryInfo, status: CLOSED_BORDER },
    ];

    expect(
      await nlpService.getClassifiedCountries(countriesInfo),
    ).toMatchObject(classifiedCountries);
  });
});

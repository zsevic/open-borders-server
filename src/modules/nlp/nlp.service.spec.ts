import { Test, TestingModule } from '@nestjs/testing';
import { countriesInfo } from 'common/mocks/scraped-data';
import { CountryInfo } from 'modules/country/country.types';
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
    const result: CountryInfo[] = [
      {
        name: 'AZERBEJDžAN',
        info:
          'Državljani Srbije ne mogu da uđu ili tranzitiraju jer su sve granice Azerbejdzana zatvorene za putnički saobraćaj. Državljani Srbije koji u hitnom slučaju treba da putuju u Azerbejdzan treba da podnesu zahtev za vizu u Ambasadi Azerbejdzana u Beogradu. Strani državljani da bi dobili dozvolu za ulazak u zemlju moraju da dostave lekarsko uverenje o negativnom rezultatu testa. Po dolasku u Azerbejdzan, strani državljani se pregledaju i u slučaju sumnje na infekciju, lice se, bez obzira na državljanstvo, nacionalnost i svrhu putovanja, smešta u karantin od 14 dana u specijalizovanoj medicinskoj ustanovi.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ALBANIJA',
        info:
          'Državljani Srbije mogu bez ograničenja da uđu u Albaniju ili tranzitiraju. Nema posebnih uslova. Režim ulaska je isti za sva lica bez obzira iz koje zemlje se dolazi u Albaniju.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'ALŽIR',
        info:
          'Državljani Srbije ne mogu da uđu u Alžir, kao ni drugi strani državljani. Zatvoreni su svi granični prelazi i obustavljen je međunarodni putnički saobraćaj – vazdušni, kopneni i pomorski. Izuzetak predstavljaju predstavnici stranih diplomatko-konzularnih predstavništava i radnici humanitarnih misija kojima se, uz prethodnu notifikaciju, dozvoljava ulazak, kao i predstavnici stranih kompanija koje imaju poslovni angažman u Alžiru, uz prethodnu saglasnost nadležnih alžirskih vlasti i obavezu 14-odnevnog karantina.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ANGOLA',
        info:
          'Državljani Srbije mogu da uđu na teritoriju Angole ukoliko poseduju vizu ili regulisani boravak. Po dolasku, smeštaju se u obavezni državni karantin u trajanju od 14 dana. Ovaj period može biti skraćen na sedam dana ukoliko lice o svom trošku uradi test u ovlašćenoj laboratoriji. Gore navedeno važi i za sve ostale strane državljane.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'ANDORA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju osim lica koja imaju regulisan boravak. Obavezna je samoizolacija u trajanju od 15 dana. Ulazak u Andoru je dozvoljen državljanima i rezidentima zemalja članica EU, Islanda, Lihtenštajna, Monaka, Norveške, V.Britanije, San Marina, Švajcarske i Vatikana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ANTIGVA I BARBUDA',
        info:
          'Državljanima Srbije je dozvoljen ulazak i tranzit preko Antigve i Barbude ukoliko poseduju negativan PCR test, ne stariji od sedam dana. Putnici koji dolaze brodovima mogu biti podvrgnuti karantinu ukoliko to procene lučke vlasti. Test nije potreban za decu mlađu od 12 godina.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ARGENTINA',
        info:
          'Državljani Srbije ne mogu ući u zemlju osim lica koja imaju regulisan boravak u Argentini ili nekoj od pograničnih država, kao i nosioci diplomatskih i službenih pasoša. Uz posebnu prethodnu dozvolu mogu ući i državljani Srbije koji dolaze u Argentinu u diplomatsku misiju, iz poslovnih razloga, na sportsko takmičenje ili radi spajanja porodice. U navedenim slučajevima je potrebna posebna viza, a pomenuta dozvola se dobija posredstvom Ambasade Argentine u Beogradu. Državljani Argentine i susednih država, kao i oni koji imaju stalni boravak u Argentini ili nekoj od susednih država, pre ulaska u zemlju moraju imati negativan PCR test, ne stariji od 72 sata. Nosioci diplomatskih i službenih pasoša podležu odgovarajućim sanitarnim procedurama, uključujući obavezan karantin od 14 dana. Takođe se zahteva prethodno slanje elektronskim putem tzv. izjave o odgovornosti da je putnik upoznat sa svim sanitarnim propisima i procedurama u Argentini i dokaz o zdravstvenom osiguranju koje pokriva i bolničke troškove za lečenje od SARS-CoV-2 .',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'AUSTRALIJA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju, osim onih lica koja imaju odobren stalni boravak i članova njihove uže porodice. Mogućnost ulaska postoji ako su u pitanju humanitarni ili dovoljno ubedljivi razlozi uz prethodno pribavljanje dozvole od strane nadležnih organa. Obavezan je karantin od 14 dana, u za to posebno opredeljenim objektima, a troškove boravka u izolaciji snose sami putnici. Obavezan je negativan PCR test, ne stariji od 72 sata. Tranzit državljana Srbije je dozvoljen uz posedovanje tranzitne vize (ukoliko je vreme provedeno u tranzitu do 8 sati) i dozvole za izuzeće od obaveznog karantina (ukoliko je vreme provedeno u tranzitu od 8-72 sata). Ulazak u Australiju dozvoljen je samo državljanima Australije, licima koja imaju odobren stalni boravak i članovima njihovih užih porodica, kao i državljanima Novog Zelanda koji obično prebivaju u Australiji.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'AUSTRIJA',
        info:
          'Državljanima Srbije nije dozvoljen ulazak u Austriju osim licima koja imaju regulisan boravak, kao i u posebnim slučajevima, i to za lica koja u Austriju putuju: iz poslovnih razloga; jednom licu u pratnji osobe koja u Austriju dolazi u svrhu medicinskog lečenja; radi početka ili nastavka studija, odnosno u cilju naučnog istraživanja; radi učešća u školskim aktivnostima; radi prisustvovanja sudskim ili administrativnim postupcima pred austrijskim nadležnim organima; članovima osoblja diplomatskih predstavništava, zaposlenima u međunarodnim organizacijama i licima koja sa njima žive u zajedničkom domaćinstvu; humanitarno osoblje; zbog planiranih važnih događaja u krugu porodice (venčanja, krštenja, rođendani, neperiodične posete životnom partneru). Sve navedene kategorije lica su u obavezi da prilikom ulaska na granici prilože dokaz o svrsi putovanja, odnosno dokaz da pripadaju jednoj od navedenih kategorija. Počev od 19. decembra 2020. godine navedene kategorije lica, bez obzira da li poseduju negativan PCR test, moraće da se obavežu na 10-dnevni karantin. Karantin je moguće prekinuti najranije petog dana, ukoliko lice dobije negativan nalaz na testu na korona virus (pored PCR prihvataju se i anti-gen testovi). Izuzeci od navedenog pravila (koji nisu u obavezi da budu u 10-dnevnom karantinu) ali su, ukoliko dolaze iz Srbije ili iz neke od tzv. „rizičnih zemalja", i dalje u obavezi da poseduju negativan PCR test, ne stariji od 72 sata, jesu sledeće kategorije lica: lica koja putuju iz službenih razloga; lica koja u Austriju dolaze kako bi učestvovala u sudskom procesu; lice u pratnji osobe koja u Austriju dolazi iz medicinskih razloga; diplomate akreditovane u Austriji; pripadnici humanitarnih konvoja. Od 15. januara 2021. godine uvodi se obavezna on-lajn registracija pre dolaska u Austriju, te obaveza posedovanja potvrde o izvršenoj elektronskoj registraciji (u štampanoj ili elektronskoj formi) prilikom granične kontrole. On-lajn registraciju je moguće izvršiti od 14. januara 2021. godine na sledećoj veb-stranici: https://www.oesterreich.gv.at/themen/coronavirus_in_oesterreich/pre-travel-clearance.html Lica koja spadaju u izuzetke, tj. koja nisu u obavezi da budu u karantinu, takođe su u obavezi da izvrše on-lajn registraciju i tom prilikom treba da označe polje ,,putovanje spada u izuzetak na osnovu člana 4 ili 5". U izuzetnim slučajevima, ukoliko ne postoji mogućnost on-lajn registracije, lica koja dolaze u Austriju, mogu da popune formulare E odnosno F. Tranzit kroz Austriju je dozvoljen bez zadržavanja, odnosno ukoliko je zagarantovano napuštanje zemlje bez odlaganja. Nije potreban test za tranzit. Deca do navršene 10. godine života ne moraju imati negativan test radi ulaska u Austriju, s tim da i za njih važe sve odredbe kao i za odraslu osobu pod čijim nadzorom putuju. Ulazak u Austriju bez testa i bez karantina moguć je u sledećim slučajevima: lica koja obavljaju putnički i teretni saobraćaj; lica koja dolaze zbog nege životinja/poljoprivrednih razloga; profesionalni vozači/piloti; lica koja dolaze iz posebnih interesa za Austriju; putnici u tranzitu bez zaustavljanja, čak i u slučajevima kad postoji nužna pauza u Austriji (npr. pauza između letova i sl); malogranični saobraćaj lica koja redovno prelaze granicu iz poslovnih, odnosno porodičnih razloga; pripadnici službi bezbednosti koji sprovode repatrijaciju; lica koja voze vozila javnih službi (hitna pomoć, vatrogasna i policijska vozila); lica koja dolaze iz nepredviđenih, neodložnih i naročito relevantnih razloga u krugu porodice u pojedinačnim slučajevima (npr. smrtni slučaj, sahrana, rođenje); lica koja dolaze radi medicinskog lečenja uz posedovanje potvrde austrijske medicinske ustanove o neophodnosti medicinskog lečenja u Austriji. Ulazak u Austriju iz država EU, EEZ, odnosno Švajcarske, Andore, Monaka, San Marina, Vatikana u Ujedinjenog Kraljevstva je dozvoljen bez negativnog PCR testa i karantina, pod uslovom da lica dolaze i dokažu da su u prethodnih 10 dana boravila u jednoj od zemalja koje se nalaze na listi tzv. ,,bezbednih država" (lista A). Ulazak u Austriju iz ,,trećih država" dozvoljen je isključivo ukoliko se nalaze na listi tzv. ,,bezbednih država" (lista A). Lista A se može naći na sledećem linku: https://www.sozialministerium.at/Informationen-zum-Coronavirus/Coronavirus---Rechtliches.html. Konačnu odluku o ulasku u Austriju donose nadležni pogranični organi.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'BARBADOS',
        info:
          'Državljani Srbije mogu da uđu na Barbados s tim što je neophodno da popune formular o ulasku i izlasku najkasnije 24 časa pre puta. Formular se može naći i podneti na www.travelform.gov.bb. Potreban je negativan PCR test, ne stariji od 72 sata. Ukoliko se ne poseduje test, isti će se uraditi na aerodromu. Osobe koje dolaze iz zemalja visokog rizika bez testa, biće primorane da rezulat čekaju na aerodromu. Osobe iz zemalja srednjeg rizika bez testa, rezulat testa čekaju u svom smeštaju. Osobe iz zemalja niskog rizika bez testa, koje nisu putovale u periodu od 21 dana u zemlje visokog rizika, mogu priložiti negativan test ne stariji od 7 dana. Visinu rizika zemalja određuje sedmična lista Svetske zdravstvene organizacije o broju zaraženih. Navedeno važi i za tranzit.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BAHAMI',
        info:
          'Državljani Srbije mogu da uđu na Bahame. Aerodromi su zvanično otvoreni, ali se preporučuje da se pre putovanja kontaktira avio kompanija kojom se putuje. Neophodan je negativan PCR test, ne stariji od pet dana. Deci ispod 10 godina nije potreban test. Takođe, neophodna je tzv. zdravstvena viza za koju je potrebno podneti zahtev preko sledećeg sajta: www.travel.gov.bs. Obrada zahteva za ovu vizu traje 72 sata, a cena zavisi od planirane dužine boravka. Putnici koji žele da na Bahamima ostanu duže od četiri dana, moraju na Bahamina uraditi novi brzi test na COVID-19.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BAHREIN',
        info:
          'Državljani Srbije mogu da uđu u Bahrein. Od 21. jula državljani Srbije koji uđu na međunarodni aerodrom Bahrein, moraće da snose troškove obaveznog testiranja (30 BHD-a). Rezidenti Bahreina i dalje imaju pravo besplatanog medicinskog tretmana na korona virus. Putnici po dolasku u Bahrein, koji su negativni, moraju u samoizolaciju na period od 10 dana. Posle karantina se vrši ponovno testiranja i isto se takoće plaća. Tranzitni putnici ne moraju da budu testirani i nemaju karantin. Svi putnici imaju obavezu da se registruju na ,,BeAware" aplikaciju.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'BELGIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Belgiju. Ulazak je dozvoljen samo licima koja imaju regulisan boravak u Belgiji i licima koja imaju suštinski razlog za putovanje, uz odgovarajući dokaz o razlogu putovanja (medicinski radnici, visokokvalifikovani radnici čije prisustvo je neophodno, studenti, lica koja putuju iz hitnih porodičnih razloga (spajanje porodice, poseta supružniku ili vanbračnom partneru, poseta u kontekstu zajedničkog roditeljstva, putovanja radi venčanja ili sahrane za prvi ili drugi stepen srodstva i sl.), lica koja dolaze na sastanke koje organizuju međunarodne organizacije i sl). Dozvola se dobija preko Ambasade Belgije u Beogradu. Svi putnici imaju obavezu da popune Public Health Passenger Locator Form, 48 sati pre ulaska u Belgiju, osim putnika koji putujy drugim prevoznim sredstvom osim aviona ili broda i zadržaće se u Belgiji kraće od 48 sati. Putnici koji dolaze avionom ili brodom moraju da popune Public Health Passenger Locator Form, bez obzira na to koliko vremena će boraviti u Belgiji. Nakon popunjavanja formulara, putnik će dobiti SMS ili e-mail sa dodatnim informacijama. Nakon ulaska u Belgiju obavezna je samoizolacija i testiranje koje se vrši prvog dana po ulasku, i ponovo, sedmog dana od ulaska. Ukoliko je i drugi test negativan, samoizolacija se ukida, a ukoliko je rezultat pozitivan ili se pojave simptomi bolesti, samoizolacija se produžava na još sedam dana. Lice koje u Belgiji boravi kraće od 48 sati, nema obavezu samoizolacije. Počev od 25. decembra 2020.g. lica koja nemaju državljanstvo Belgije, odnoso nisu rezidenti Belgije, prilikom ulaska moraju da poseduju negativan PCR test, ne stariji od 48 sati. Putnici koji dolaze avionom i dobiju SMS poruku da moraju da se testiraju, to mogu učiniti u Kovid test centru na briselskom aerodromu - https://brusselsairport.ecocare.center/ . Lista medicinskih ustanova u K. Belgiji u kojima je moguće uraditi test je dostupna na sledećem linku:  <a href="https://www.google.com/maps/d/viewer?mid=1cnNOMDS13iosY53TyRBz7SdIeJ7gTShY&ll=50.654111784975065%2C4.393965958984363&z=10" class="text-info" target="_blank" rel="noopener noreferrer">https://www.google.com/maps/d/viewer?mid=1cnNOMDS13iosY53TyRBz7SdIeJ7gTShY&ll=50.654111784975065%2C4.393965958984363&z=10</a> . Tranzit je dozvoljen, uz obavezu popunjavanja Public Health Passenger Locator Form. Ukoliko tranzit obuhvata određeno vreme boravka na teritoriji Belgije, lice koje tranzitira, to vreme mora provesti u samoizolaciji. Više informacija je dostupno na  <a href="https://www.info-coronavirus.be/en/faq/#faq" class="text-info" target="_blank" rel="noopener noreferrer">https://www.info-coronavirus.be/en/faq/#faq</a>  i na  <a href="https://dofi.ibz.be/sites/dvzoe/EN/Pages/Travel-to-Belgium.aspx" class="text-info" target="_blank" rel="noopener noreferrer">https://dofi.ibz.be/sites/dvzoe/EN/Pages/Travel-to-Belgium.aspx</a> , gde se može preuzeti i Public Health Passenger Locator Form.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'BELIZE',
        info:
          'Državljani Srbije mogu da uđu u Belize. Aerodromi su otvoreni dok prelazak granice drumskim i vodenim putem nije moguć. Neophodan je negativan test (PCR ili serološki), ne stariji od 72 sata. Ukoliko istekne važnost testa, na aerodromu se može uraditi brzi test po ceni od 50 USD. Potrebno je da se preuzme zdravstvena aplikacija 72 sata pre dolaska (https://www.covid19.bz/).',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BELORUSIJA',
        info:
          'Državljani Srbije mogu da uđu u Belorusiju isključivo preko aerodroma „Minsk" uz obaveznu meru samoizolacije u trajanju od 10 dana, bez obzira na posedovanje negativnog PCR testa. U periodu samoizolacije nije moguće napuštati teritoriju Belorusije. Ulazak u Belorusiju stranih državljana, uključujući i državljane Srbije, kopnenim, železničkim i rečnim putem privremeno je obustavljen uz izuzetak stranih državljana koji su supružnici, roditelji ili deca beloruskih državljana, stranih državljana sa regulisanim stalnim ili privremenim boravkom i stranih državljana koji poseduju belorusku radnu dozvolu. Navedeno ograničenje se ne odnosi na posade teretnih motornih vozila prilikom obavljanja poslova međunarodnog prevoza u drumskom i poštanskom saobraćaju, kao ni na posade brodova, aviona i vozova.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'BENIN',
        info:
          'Državljani Srbije mogu da uđu u Benin. Po dolasku na aerodromu se obavlja zdravstveni pregled i radi prvi PCR test. Licima bez vidljivih simtoma se određuje samoizolacija. Lica sa vidljivim simptomima se upućuju u Centar za izolaciju i privremeno se oduzima pasoš. Posle 15 dana se radi drugi PCR test. Treći PCR test se radi pre napuštanja Benina. Rezultati testa se dobijaju u roku od 24 do 48 sati. Troškove testiranja snose putnici i isti iznose oko 150 EUR. U slučaju da je posle 15 dana rezulat testa pozitivan, država Benin preuzima dalje lečenje bez naplate troškova.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BOLIVIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Boliviju. Bolivija ne dozvoljava ulazak strancima u Boliviju, osim u veoma izuzetnim slučajevima za koje se predviđa rigorozna procedura. Međunarodni letovi su suspendovani.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'BOSNA I HERCEGOVINA',
        info:
          'Državljani Srbije mogu bez ograničenja sa teritorije Srbije da uđu u BiH ili da tranzitiraju. Ukoliko državljani Srbije ulaze u BiH iz drugih zemalja, neophodan je negativan PCR test, ne stariji od 48 sati.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'BOCVANA',
        info:
          'Državljani Srbije ne mogu da uđu u Bocvanu osim lica sa regulisanim boravkom. Obavezan je 14-dnevni karantin. Tranzit je moguć iz susednih država ali isključivo u slučaju organizovanog repatriacinog leta, odnosno napuštanja zemlje (i regiona), uz prezentovanje negativnog testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'BRAZIL',
        info:
          'Državljani Srbije mogu da uđu u Brazil isključivo vazdušnim putem. Neophodan je negativan PCR test, ne stariji od 72 sata pre trenutka ukrcavanja na avion. Deca mlađa od 12 godina ne moraju imati PCR test ukoliko putuju u pratnji osoba koje poseduju negativan PCR test. Deca uzrasta od dve do dvanaest godina koja putuju bez pratnje moraju imati negativan PCR test. Deca mlađa od dve godine ne moraju posedovati rezultat testa. Takođe, potrebna je i potvrda o zdravstvenom stanju putnika (odštampana ili u elektronskoj formi) kojom putnik izjavljuje da je saglasan sa poštovanjem sanitarnih mera, kojih mora da se pridržava dok je u Brazilu. (link za formular potvrde:  <a href="https://formulario.anvisa.gov.br" class="text-info" target="_blank" rel="noopener noreferrer">https://formulario.anvisa.gov.br</a> ).',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BRUNEJI DARUSALAM',
        info:
          'Državljani Srbije ne mogu da uđu niti tranzitiraju kroz Bruneje Darusalam osim lica koja imaju stalni boravak. Pre putovanja, potrebno je kontaktirati najbližu Ambasadu Bruneja.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'BUGARSKA',
        info:
          'Državljani Srbije mogu da uđu u Bugarsku. Neophodan je negativan PCR test, ne stariji od 72 sata. Od obaveze posedovanja negativnog PCR testa izuzeti su: 1) državljani Srbije koji tranzitiraju, bez zadržavanja; 2) pogranični radnici; 3) vozači autobusa, angažovani na međunarodnom prevozu putnika; 4) vozači teretnih vozila, angažovani na međunarodnom prevozu robe i tereta; 5) posade plovila; 6) posade vazduhoplova, angažovane na letovima do i sa bugarskih javnih aerodroma i lica koja tehnički opslužuju vazduhoplove. Državljani Srbije, koji u Bugarskoj imaju regulisan boravak, a na ulasku u zemlju nemaju negativan PCR test, podležu obavezi karantina u kućnim uslovima u trajanju od 10 dana. Karantin se može prekinuti ako se u roku od 24 sata po povratku u Bugarsku uradi test, i isti bude negativan.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BURKINA FASO',
        info:
          'Državljani Srbije mogu da uđu u Burkinu Faso. Neophodan je negativan PCR test, ne stariji od pet dana. Svi putnici se upućuju u karantin u trajanju od 14 dana gde sami snose troškove boravka i tretmana. U karantinu se podvrgavaju testiranju prvog, osmog i četrnaestog dana.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BURUNDI',
        info:
          'Državljani Srbije mogu da uđu u Burundi. Neophodan je negativan PCR test, ne stariji do 72 sata. Po dolasku na aerodrom u Budzumburi, svi putnici se podvrgavaju dodatnom testiranju i smeštaju u hotele koji su namenjeni za tu svrhu 72 sata. Troškovi testa i smeštaja u hotelu idu na teret putnika.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'VANUATU',
        info:
          'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'VELIKA BRITANIJA',
        info:
          'Državljani Srbije mogu ući ili tranzitirati kroz Ujedinjeno Kraljevstvo pod uslovom da imaju validnu vizu. Počev od 15. januara 2021. godine, sva lica koja dolaze iz inostranstva, uključujući britanske državljane, prilikom ulaska u Englesku avionom, brodom ili vozom moraju posedovati negativan PCR test, ne stariji od 72 sata. U suprotnom je predviđena kazna od 500 funti. Pri ulasku u Ujedinjeno Kraljevstvo neophodno je da se elektronskim putem unapred popuni formular za praćenje kretanja - Passenger Locator Form (https://www.gov.uk/provide-journey-contact-details-before-travel-uk ). Putnici u tranzitu su takođe u obavezi da popune ovaj formular. Za nepopunjavanje navedenog formulara takođe je predviđena kazna u visini od 500 funti. Svi putnici, uključujući i državljane Srbije, ukoliko dolaze iz Srbije ili iz zemalja koje se, uz Srbiju, ne nalaze na listi sigurnih zemalja (https://www.gov.uk/guidance/coronavirus-covid-19-travel-corridors#countries-territories-and-regions-on-the-travel-corridor-list) a u kojima su do ulaska u Ujedinjeno Kraljevstvo boravili dve nedelje ili kroz koje su tranzitirali, dužni su da budu u samoizolaciji u trajanju od deset dana. Period trajanja desetodnevne izolacije može biti skraćen ukoliko putnici najranije petog dana po dolasku urade test i dobiju negativan rezultat. Testovi se rade o trošku putnika u nekoj od akreditovanih laboratorija sa liste: https://www.gov.uk/government/publications/list-of-private-providers-of-coronavirus-testing/list-of-private-providers-of-coronavirus-testing . Za putnike koji putuju u Škotsku, Vels i Severnu Irsku takođe važi obaveza desetodnevne samoizolacije ali bez mogućnosti skraćenja.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'VENECUELA',
        info:
          'Državljani Srbije ne mogu da uđu u Venecuelu jer su granice zatvorene za ulazak stranih državljana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'VIJETNAM',
        info:
          'Državljani Srbije ne mogu da uđu, niti tranzitiraju kroz Vijetnam.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'GAMBIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Gambiju. Međunarodni letovi su suspendovani.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'GANA',
        info:
          'Državljani Srbije mogu da uđu u Ganu. Neophodan je negativan PCR test, ne stariji od 72 sata. Pre polaska putnici su dužni se prijave elektronskim putem na sajtu:  <a href="https://myfrontierhealthcare.com/home/ghana" class="text-info" target="_blank" rel="noopener noreferrer">https://myfrontierhealthcare.com/home/ghana</a> . Putnici se, po dolasku na međunarodni aerodrom ,,Kotoka" u Akri, podvrgavaju ponovnom testiranju o svom trošku. Cena testa iznosi 150 USD. Deca do pet godina starosti se ne testiraju. Rezulatat testa se dobija za 30 minuta. Lica u tranzitu, koja ne napuštaju aerodrom, se ne testiraju.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GVATEMALA',
        info:
          'Državljani Srbije mogu da uđu u Gvatemalu. Neophodan je negativan PCR test, ne stariji od 72 sata. Takođe potrebno je registrovati se 24 sata pre ulaska na  <a href="https://servicios.igm.gob.gt/pasedesalud/" class="text-info" target="_blank" rel="noopener noreferrer">https://servicios.igm.gob.gt/pasedesalud/</a>  kako bi se dobila zdravstvena propusnica.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GVAJANA',
        info:
          'Državljani Srbije mogu da uđu u Gvajanu. Obavezan je negativan PCR test, ne stariji od 7 dana. Postoji mogućnost da se se test uradi i na licu mesta. 24 sata pre dolaska u Gvajanu, putnici moraju da elektronski popune formular koji se može naći u slsdećem linku:  <a href="https://guyanatravel.gy/" class="text-info" target="_blank" rel="noopener noreferrer">https://guyanatravel.gy/</a> .',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GVINEJA',
        info:
          'Državljani Srbije mogu da uđu u zemlju avio letom uz negativan test, ne stariji od 3 dana. Navedeno važi i za strane državljane. Zatvoreni su kopneni i pomorski granični prelazi. Izuzetak predstavljaju predstavnici stranih diplomatko-konzularnih predstavništava i radnici humanitarnih misija kojima je, uz prethodnu notifikaciju, dozvoljen ulazak na teritoriju Gvineju.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GVINEJA BISAO',
        info:
          'Državljani Srbije ne mogu da uđu u Gvineju Bisao. Nije moguć ulazak stranih državljana u Gvineju Bisao. Zatvoreni su svi granični prelazi i obustavljen je međunarodni putnički saobraćaj – vazdušni, kopneni i pomorski. Izuzetak predstavljaju predstavnici stranih diplomatko-konzularnih predstavništava i radnici humanitarnih misija kojima je, uz prethodnu notifikaciju, dozvoljen ulazak na teritoriju Gvineje Bisao.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'GRENADA',
        info:
          'Državljani Srbije mogu da uđu u Grenadu. Obavezan je negativan PCR test, ne stariji od 72 sata. Neophodno je posedovati rezervaciju u smeštaju registrovanom za opservaciju i karantin u trajanju od najmanje sedam dana. Takođe, potrebno je pre putovanja dobiti odobrenje koje se dobija preko sledećeg linka:  <a href="https://travelauth.health.gov.gd" class="text-info" target="_blank" rel="noopener noreferrer">https://travelauth.health.gov.gd</a> /. Mora da se uradi novi test nakon pet dana od ulaska i ukoliko je rezultat negativan, karantin se može napustiti.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GRUZIJA',
        info:
          'Državljani Srbije mogu ući u Gruziju ukoliko prilikom ulaska pruže na uvid dokumenta koja potvrđuju da su primljene obe doze bilo koje od postojećih vakcina protiv virusa Covid-19.',
        status: 'VACCINATION_REQUIRED',
      },
      {
        name: 'GRČKA',
        info:
          'Državljani Srbije ne mogu ući u Grčku. Izuzetak su lica koja imaju regulisan boravak u Grčkoj ili nekoj od zemalja EU ili Šengena, kao i posebne kategorije građana – vozači kamiona, studenti, sezonski radnici u poljoprivredi, državljani Srbije koji dobiju odobrenje od Ambasade Grčke u Beogradu i slično. Ulazak u Grčku je moguć uz prethodnu prijavu (Passenger Locator Form - PLF) i prezentovanje koda koji se dobije preko ove prijave (prijava se preuzima na www.travel.gor.gr). Obavezan je negativan PCR test, ne stariji od 72 sata, na engleskom jeziku. Takođe, na graničnom prelazu se vrši dodatno testiranje (brzi test). Ulazak u Grčku je moguć samo ukoliko je rezultat brzog testa negativan. Lica koja uđu u Grčku su u obavezi da provedu u kućnoj izolaciji sedam dana. Ulazak u Grčku je moguć drumskim i vazdušnim putem. Državljani Srbije koji imaju boravak u Grčkoj mogu ući na svim otvorenim drumskim prelazima (uključujući i prelaz Evzoni, prema Severnoj Makedoniji). Državljani Srbije koji imaju boravak u nekoj od zemalja EU ili Šengena mogu ući u Grčku samo na graničnom prelazu Promahonas (između Grčke i Bugarske). Radno vreme kopnenih graničnih prelaza je od 7 do 23 časa. Državljani Srbije koji imaju regulisan boravak u Grčkoj treba da popune PLF formular i prezentuju kod i prilikom napuštanja Grčke. Ulazak vazdušnim putem je moguć samo preko aerodroma u Atini. \n' +
          ' Državljani Srbije koji su vlasnici nekretnina u Grčkoj mogu da uđu sa specijalnom dozvolom koju izdaje Ambasada Grčke u Beogradu. Ulazak se odobrava isključivo vlasnicima nekretnine, ne i članovima porodice. Mesečno se odobrava ulazak do 400 lica, vlasnika nekretnina. Više detalja u vezi sa uslovima ulaska vlasnika nekretnina se može naći u sledećem linku:  \n',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'DANSKA',
        info:
          'Državljani Srbije ne mogu da uđu u Dansku osim lica koja imaju regulisani boravak ili opravdani razlog (smrt bliskog srodnika, spajanje porodice, poziv za sud i drugo) uz negativan test, ne stariji od 24 sata, ili pozitivan test, dobijen u periodu između 14 dana do 8 nedelja pre ukrcavanja na avion. Priznaju se PCR i antigen testovi, ali ne i testovi na antitela. Informacija o uslovima ulaska se može naći na sajtu danske policije - https://politi.dk/en/entry. Državljani Srbije koji ispunjavaju uslove za ulazak je potrebno da se obrate Ambasadi Danske u Beogradu radi izdavanja potvrde o opravdanosti boravka u Danskoj. Tranzit je moguć ukoliko se putuje sa razlogom ili je u pitanju povratak kući. Tranzit treba obaviti bez zadržavanja. Potrebna su odgovarajuća dokumenta kao dokaz o razlogu tranzita. Više informacija u vezi sa uslovima putovanja i boravka u Danskoj pogledajte na  <a href="https://um.dk/en/travel-and-residence/how-to-apply-for-a-visa/" class="text-info" target="_blank" rel="noopener noreferrer">https://um.dk/en/travel-and-residence/how-to-apply-for-a-visa/</a>  ',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'DOMINIKA',
        info:
          'Državljani Srbije mogu da uđu u Dominiku. Pre ulaska u zemlju potrebno je popuniti zdravstveni upitnik na sajtu  <a href="https://domcovid19.dominica.gov.dm/" class="text-info" target="_blank" rel="noopener noreferrer">https://domcovid19.dominica.gov.dm/</a> . Zdravstvene vlasti mogu, na osnovu upitnika, odbiti ulaz određenim putnicima. Neophodan je negativan PCR test, ne stariji od 72 sata. Svi putnici se podvrgavaju brzom testu po sletanju u Dominiku.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'DOMINIKANSKA REPUBLIKA',
        info:
          'Državljani Srbije mogu da uđu u Dominikansku Republiku. Neophodan je negativan test.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'EGIPAT',
        info:
          'Državljani Srbije mogu bez ograničenja da uđu u Egipat ili tranzitiraju. Od 1.septembra svim putnicima koji dolaze u Egipat potreban je negativan PCR test, ne stariji od 72 sata. Režim ulaska sa obaveznim negativnim testom se primenjuje za turističke destinacije poput Hurgade, Šarm el Šeika, Tabe, Mars Alama, Marse Matruh i važi na čitavoj teritoriji Egipta.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'EL SALVADOR',
        info:
          'Državljani Srbije mogu da uđu u El Salvador. Neophodan je negativan PCR test, ne stariji 72 sata. Test nije obavezan za decu mlađu od dve godine i akreditovane diplomate.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'EKVADOR',
        info:
          'Državljani Srbije, kao i ostali strani državljani, mogu da uđu i tranzitiraju kroz Ekvador uz obavezan PCR test, izdat maksimum deset dana pre ulaska u zemlju.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ESVATINI',
        info:
          'Državljani Srbije ne mogu da uđu u Esvatini osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana. Moguć je tranzit iz susednih država ali isključivo u slučaju organizovanog leta, odnosno napuštanja zemlje (i regiona), uz prezentovanje negativnog testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ESTONIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Estoniju. Dozvoljava se ulazak u Estoniju licima sa regulisanim boravkom ili dugoročnom vizom, kao i članovima njihovih porodica, koja dolaze iz zemalja članica EU, Šengen zone, UK, Andore, Monaka, San Marina i Vatikana, kao i državljanima trećih država sa liste EU (lista dostupna na:  <a href="https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers" class="text-info" target="_blank" rel="noopener noreferrer">https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers</a> ), pod uslovom da ne ispoljavaju simptome infekcije virusom COVID-19. Samoizolacija u trajanju od 10 dana (u slučaju dolaska iz UK – 14 dana) obavezna je za sva lica koja ispoljavaju simptome infekcije, kao i za sva lica koja dolaze iz država u kojima je u prethodnih 14 dana registrovano više od 150 novih slučajeva infekcije na 100.000 stanovnika. Državljani stranih zemalja koje nisu gore navedene mogu ući u Estoniju radi zaposlenja ili studija, uz obavezan karantin od 10 dana i dva testa – odmah po dolasku i nakon 10 dana karantina. Testiranje je omogućeno na aerodromu/u lukama svim licima koja dolaze u Estoniju (za estonske državljane besplatno, za strance po ceni od 67 evra). Putnici mogu, ukoliko žele, da skrate period samoizolacije obavljajući dva PCR testa (prvi najranije 72 sata pre putovanja, drugi nakon šest dana samoizolacije po dolasku u Estoniju). Više informacija dostupno je na internet adresi:  <a href="https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers" class="text-info" target="_blank" rel="noopener noreferrer">https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers</a>  ',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ETIOPIJA',
        info:
          'Državljani Srbije mogu ulaziti u Etiopiju. Potreban je negativan test ne stariji od 120 sati. Obavezna je izolacija od 7 dana. Putnicima u tranzitu nije potreban test. Ukoliko je tranzit duži od 24 sata, obavezna je izolacija u za to određenom hotelu.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ERITREJA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ZAMBIJA',
        info:
          'Državljani Srbije mogu da uđu u Zambiju. Obavezan je karantin u trajanju od 14 dana u prostorima koje je odredila država. Trošak u karantinu ide na teret stranog državljanina.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'ZIMBABVE',
        info:
          'Državljani Srbije ne mogu da uđu u Zimbabve osim lica sa regulisanim boravkom. Obavezan je karantin od 21 dana. Moguć je tranzit iz susednih država ali isključivo u slučaju organizovanog leta, odnosno napuštanja zemlje (i regiona) kao i prevoza karga, uz prezentovanje negativnog testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'IZRAEL',
        info:
          'Državljanima Srbije je zabranjen ulazak u Izrael, osim u slučajevima kada imaju regulisan boravak u zemlji, uz prethodnu najavu preko Ambasade Izraela u Beogradu. Potrebno je da se 24 sata pre leta za Izrael elektronski popuni odgovarajući obrazac koji se može naći na internet prezentaciji Vlade Izraela. Takođe, počev od 23. januara 2021. godine svi putnici koji imaju dozvolu za ulazak u Izrael moraju da poseduju i negativan PCR test, ne stariji od 72 sata. Negativan PCR test moraju posedovati i maloletna lica. Po dolasku u Izrael, obavezan je karantin u trajanju od 14 dana u za to namenjenim smeštajnim objektima ili u kućnoj izolaciji. Zbog specifičnih uslova, Izrael nije zemlja tranzita za strane državljane.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'INDIJA',
        info:
          'Državljani Srbije u principu ne mogu da uđu u zemlju s obzirom da je Indija obustavila izdavanje viza svim stranim državljanima. Nove vize se mogu dobiti (u nadležnim diplolatsko-konzularnim predstavništvima Indije) isključivo u sledećim posebnim slučajevima: poslovni ljudi (odnosi se samo na biznis vize), stručnjaci iz oblasti zdravstva koji dolaze u Indiju da bi obavljali tehničke poslove u indijskom zdravstvenom sektoru (na poziv relevantnih indijskih institucija), stručnjaci iz ostalih oblasti koji rade za strane kompanije koje posluju u Indiji, inženjeri i tehničko osoblje koji dolaze radi instaliranja ili servisiranja mašina i opreme stranog porekla (na poziv indijskih kompanija). Ukoliko lice ima poslovnu vizu koja još važi (izdata pre pandemije), neophodno je da se izvrši njena revalidacija u nadležnom diplomatko-konzularnom predstavništvu Indije (ovo se ne odnosi na elektronske vize, sa kojima neće biti dozvoljen ulazak u Indiju).',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'INDONEZIJA',
        info:
          'Državljani Srbije ne mogu da uđu niti tranzitiraju u Indoneziju osim lica koji imaju stalnu (KITAP) ili privremenu boravišnu dozvolu (KITAS). Negativan test na koronu je neophodan. Ukoliko se pri ulasku ne poseduje test, organizuje se testiranje i rezultat se čeka u za to određenim hotelima od strane indonežanskih vlasti. Pre putovanja, potrebno je kontaktirati najbližu ambasadu Indonezije.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'IRSKA',
        info:
          'Državljani Srbije mogu da uđu i tranzitiraju kroz Irsku. Državljani Srbije, kao i svi ostali putnici, pri ulasku u Irsku imaju obavezu da popune formular Passenger Locator Form. Počev od 16. januara 2021. godine svi putnici koji dolaze u Irsku, izuzev dece starosti do 6 godina, moraju posedovati negativan PCR test, ne stariji od 72 sata, koji je neophodno pokazati graničnim službenicima prilikom ulaska u Irsku, ali i prilikom ukrcavanja u avion/brod. Takođe, svi putnici koji dolaze iz crvene i sive zone definisane tzv. sistemom semafora EU, kao i iz zemalja koje nisu obuhvaćene zoniranjem EU, imaju obavezu samoizolacije u trajanju od 14 dana. Period samoizolacije može biti skraćen u slučaju da se rezultat PCR testa, urađenog najranije petog dana po ulasku u Irsku, pokaže negativnim.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'IRAK',
        info:
          'Stranim državljanima je zabranjen ulazak u Irak. Izuzetak su diplomate koji moraju da poseduju posebnu dozvolu MSP.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'IRAN',
        info:
          'Državljani Srbije mogu da uđu u zemlju ukoliko poseduju negativan PCR test, ne stariji od 96 sati, na engleskom jeziku. Ukoliko negativan test, usled dužine putovanja, bude stariji od 96 sati, na granici će se podvrgunti zdravstvenom pregledu, i u slučaju da imaju simptome bolesti, ponovo će se testirati o svom trošku i do rezultata testa će boraviti u karantinu. Ako rezultat ponovljenog testa bude pozitivan, boraviće u karantinu 14 dana o svom trošku. Navedeno važi i za strane državljane.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ISLAND',
        info:
          'Državljani Srbije ne mogu da uđu na Island, osim lica određenih kategorija (supružnik, vanbračni partner, dete, pastorak, unuče ili unuče osobe koja živi na Islandu, braća i sestre osobe koja živi na Islandu i slično). Detaljnije informacije se mogu naći na linku:  <a href="https://www.logreglan.is/english/regarding-travel-restrictions-to-iceland-as-a-result-of-covid-19/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.logreglan.is/english/regarding-travel-restrictions-to-iceland-as-a-result-of-covid-19/</a>  Obavezno je PCR testiranje svih dolaznih putnika. Ukinuta je mogućnost zamene testiranja za karantin u trajanju od 14 dana po dolasku na Island, koja je prethodno bila na snazi.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ISTOČNI TIMOR',
        info:
          'Državljani Srbije ne mogu da uđu niti tranzitiraju kroz Istočni Timor osim lica koja su tamo rođena i imaju boravak.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ITALIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Italiju u turističke svrhe. Od 22. septembra odobrava se ulazak u Italiju samo u određenim slučajevima: poslovni i zdravstveni razlozi, školovanje, hitan povratak u svoje mesto stanovanja/boravišta. Takođe, odobrava se ulazak osobama koje su u potvrđenoj i stalnoj emotivnoj vezi (iako ne žive zajedno) sa državljanima Italije/EU/Šengen zone ili sa licima koja imaju zakonito prebivalište (boravište na duži period) u Italiji. Prilikom ulaska neophodno je da se da na uvid lična izjava (autodichiarazione), koja se može naći na sajtu Ministarstva spoljnih poslova Italije. Za lica koja ulaze u Italiju na napred navedeni način i dalje je na snazi mera obavezne kućne samoizolacije u trajanju od 14 dana, koja se ne primenjuje u slučaju boravka do 120 sati i u slučaju tranzita, u trajanju do 36 sati.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'JAMAJKA',
        info:
          'Državljani Srbije mogu da uđu na Jamajku. Pre putovanja, neophodno je prijaviti se na sledećem sajtu: www.visitjamaica.com',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'JAPAN',
        info:
          'Državljanima Srbije koji su prethodnih 14 dana boravili u Srbiji ili tranzitirali kroz Srbiju nije dozvoljen ulazak. Od navedenog su izuzeta lica koja imaju regulisan boravak u Japanu pod uslovom da poseduju dozvolu za ponovni ulazak (re-entry permit) i da prezentuju potvrdu na formatu koji predviđaju japanski organi da su 72 pre leta bili negativno testirani na korona virus (format potvrde dostupan je na prezentaciji Ministarstva inostranih poslova Japana  <a href="https://www.mofa.go.jp/ca/fna/page25e_000334.html)" class="text-info" target="_blank" rel="noopener noreferrer">https://www.mofa.go.jp/ca/fna/page25e_000334.html)</a> . Prilikom ulaska u Japan ova lica biće ponovo testirana na korona virus, a takođe su u obavezi su da potpišu izjavu (dostupna na prezentaciji Ministarstva pravde Japana https://www.mofa.go.jp/files/100140086.pdf) kojom se obavezuju da instaliraju odgovarajuću aplikaciju na telefonu preko koje će 14 dana po ulasku svakodnevno obaveštavati zdravstvenu službu o svom stanju, da instaliraju japansku COVID-19 aplikaciju za praćenje kontakata, da neće koristiti javni prevoz, da će svih 14 dana boraviti u sopstvenom smeštaju i da će sarađivati sa medicinskim organima u slučaju pojave simptoma ili pozitivnog testa u toku 14 dana karantina.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'JEMEN',
        info: 'Državljani Srbije ne mogu da uđu u zemlju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'JERMENIJA',
        info:
          'Državljani Srbije mogu da uđu u Jermeniju. Sva lica se podvrgavaju zdravstvenoj kontroli na graničnom prelazu i upućuju u samoizolaciju u trajanju od 14 dana. Lice se oslobađa obaveze samoizolacije, ukoliko poseduje negativan PCR test, ne stariji od 72 sata. Takođe, lice može da se testira o svom trošku na aerodromu/kopnenom graničnom prelazu Jermenije, i ukoliko rezultat bude negativan, oslobađa se obaveze samoizolacije. Navedeno važi i za druge strane državljane',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'JORDAN',
        info:
          'Državljani Srbije mogu ući u Jordan. Neophodni su negativan PCR test, ne stariji od pet dana, polisa međunarodnog zdravstvenog osiguranja koje pokriva COVID-19 lečenje, registracija preko internet stranice  <a href="http://www.visitjordan.gov.jo" class="text-info" target="_blank" rel="noopener noreferrer">http://www.visitjordan.gov.jo</a> , kao i aktiviranje mobilne aplikacije „Aman" na telefonu. Dodatni detalji u vezi sa ulaskom u Jordan, u zavisnosti od zemlje iz koje se dolazi, se mogu naći na navedenom sajtu Vlade Jordana.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'JUŽNOAFRIČKA REPUBLIKA',
        info:
          'Državljani Srbije mogu da uđu u Južnofričku Republiku ili tranziotiraju. Neophodna je važeća viza ili dozvola boravka. Negativan PCR test, ne stariji od 72 sata, je neophodan ukoliko lice dolazi iz zemlje visokog rizika (spisak dostupan:  <a href="http://www.dha.gov.za/index.php/list-of-high-risk-covid-19-countries" class="text-info" target="_blank" rel="noopener noreferrer">http://www.dha.gov.za/index.php/list-of-high-risk-covid-19-countries</a> ). Po dolasku u JAR, svi putnici se podvrgavaju zdravstvenom pregledu. U slučaju da lice, i pored negativnog testa, ima povišenu telesnu temperaturu, biće upućeno u 10-dnevni karantin o sopstvenom trošku. Svi putnici moraju da imaju regulisano zdravstveno osiguranje.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'JUŽNI SUDAN',
        info:
          'Državljani Srbije mogu da ulaze u Južni Sudan ako poseduju negativan test. Pod istim uslovima ulaze i drugi strani državljani.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KABO VERDE',
        info:
          'Stranim državljanima, uključujući državljane Srbije, dozvoljen je ulazak u zemlju. Neophodan je negativan PCR test, antigenski test ili bilo koji drugi odobren molekularno biološki test na SARS-COV-2, ne stariji od 72 sata, osim za decu mlađu od sedam godina.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KAZAHSTAN',
        info:
          'Državljani Srbije ne mogu da uđu u Kazahstan, osim uz specijalnu dozvolu koju izdaje Ambasada Kazahstana u Beogradu. U Kazhastan mogu da uđu lica koja dolaze radi lečenja, osoblje diplomatsko-konzularnih predstavništava, članovi zvaničnih delegacija i međunarodnih organizacija koji dolaze na poziv Ministarstva spoljnih poslova Kazahstana. Lica koja ulaze u Kazahstan neophodno je da poseduju negativan PCR test, ne stariji od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KAMBODžA',
        info:
          'Državljani Srbije, kao ni drugi strani državljani, ne mogu da uđu u Kambodzu. Ulazak je moguć jedino uz prethodno pribavljanje vize za koju se zahtev podnosi u najbližoj Ambasadi Kamobdze. Pored vize, potreban je negativan test, ne stariji od 72 sata, kao i dokaz o zdravstvenom osiguranju u visini od 50 hiljada USD.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KAMERUN',
        info:
          'Državljani Srbije mogu da uđu u Kamerun. Neophodan je negativan PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KANADA',
        info:
          'Državljani Srbije ne mogu da uđu u Kanadu osim lica koji imaju regulisan boravak, kao i članovi njihove uže porodice. Na snazi je zabrana ulaska u Kanadu svim stranim državljanima, osim licima sa stalnim boravkom, radnicima na vitalnim poslovima, stranim studentima kojima je izdata studentska viza pre 18. marta 2020. godine, a izuzeci su mogući u hitnim slučajevima (maloletno lice bez pratnje, smrtni slučaj i dr.). Obavezan je negativan PCR test, ne stariji od 72 sata, za sva lica starija od 5 godina. Svi putnici pre ukrcavanja na let dužni su da pruže odgovarajuće informacije o putovanju, kontakt podatke, kao i plan samoizolacije u trajanju od 14 dana nakon ulaska u zemlju preko "ArriveCAN" aplikacije. Tranzit je dozvoljen uz poštovanje viznog režima bez izlaska iz tranzitnog prostora.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KATAR',
        info:
          'Državljani Srbije mogu da uđu u Katar uz prethodno dobijenu dozvolu preko „Qatar Portal". Po dolasku, obavezno je testiranje na aerodomu „Hamad" nakon čega sledi jednonedeljni karantin u hotelu. Majke sa decom starosti do 5 godina, kao i hronični bolesnici idu u kućni karantin. Svi putnici moraju imati instaliranu aplikaciju „Ehteraz". Tranzit preko aerodroma Hamad je dozvoljen, bez obaveze tranzitne vize. Ukoliko se u zemlju ulazi kopnom preko graničnog prelaza „Abu Samra" iz Saudijske Arabije, neophodan je negativan PCR, test ne stariji od 72 sata, a potom i hotelski karantin, koji se unapred rezerviše preko sajta „Discover Qatar".',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'KENIJA',
        info:
          'Državljani Srbije mogu da uđu u Keniju ukoliko poseduju negativan PCR test, ne stariji od 96 sati, i nemaju simptome COVID – 19 (telesna temperatura ne sme biti iznad 37,5 stepeni celzijusa, stalan kašalj, poteškoće u disanju i bilo koji drugi simptom nalik gripu). Neophodno je registrovati se na https://ears.health.go.ke/airline_registration/.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KINA',
        info:
          'Državljani Srbije koji poseduju važeću radnu dozvolu, dozvolu boravka po ličnom osnovu ili dozvolu boravka za priključenje porodici mogu da uđu u Kinu ukoliko poseduju sertifikat za putovanje izdat od Ambasade Kine u Beogradu. Od 6.novembra 2020. da bi se dobio sertifikat za putovanje neophodno je Ambasadi dostaviti negativne rezultate dva testa, PCR i serološkog IgM, ne starije od 48 sati. S obzirom da iz Srbije nema direktan let za Kinu, neophodno je da se i u zemlji tranzita dodatno urade pomenuti testovi (PCR i serološki IgM, ne stariji od 48 sati) i negativni rezultati istih dostave diplomatsko-konzularnom predstavništvu Kine u zemlji tranzita radi izdavanja sertifikata za putovanje. Detalji u vezi sa režimom ulaska u Kinu se mogu naći u sledećem linku:  <a href="http://rs.chineseembassy.org/srp/lsyw/tz/t1828338.htm" class="text-info" target="_blank" rel="noopener noreferrer">http://rs.chineseembassy.org/srp/lsyw/tz/t1828338.htm</a>   Lica kojima je neka od gore navedenih dozvola istekla do 28.septembra, neophodno je da podnesu zahtev za vizu u Ambasadi Kine u Beogradu. Svi putnici koji iz inostranstva dolaze u Peking, uključujući državljane Srbije, su u obavezi da 14 dana borave u centralnom karantinu i, potom, u dodatnoj samoizolaciji u trajanju od 7 dana. Hong Kong: Državljanima Srbije nije dozvoljen ulazak u Hong Kong. Tranzitiranje preko teritorije Hong Konga dozvoljeno je samo za one koji putuju sa teritorije matice Kine, Makao-a ili Tajvana. Makao: Državljanima Srbije nije dozvoljen ulazak u Makao. Tranzitiranje preko teritorije Makao takođe nije moguće. Tajvan: Državljanima Srbije dozvoljen je ulazak na Tajvan u svim drugim slučajevima osim iz razloga turizma i poseta, pod uslovom da podnesu zahteve za dobijanje ulazne dozvole kod nadležnih institucija u inostranstvu. Na ulasku u Tajvan potrebno je posedovati negativan test, ne stariji od 72 sata i obezbediti obaveznu samoizolaciju u trajanju od 14 dana. Izuzeti od ovih mera su diplomate, biznismeni i privrednici, migrantski radnici, studenti i lica sa posebnim dozvolama.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KIPAR',
        info:
          'Državljani Srbije ne mogu da uđu na teritriju Kipra osim lica koja imaju regulisani boravak ili specijalnu dozvolu za ulazak izdatu od strane Vlade Kipra. Takođe, ulazak se dozvoljava licima koja su supružnici ili maloletana deca kiparskih državljana. Za navedene kategorije lica koje mogu da uđu na Kipar obavezan je negativan PCR test, ne stariji od 72 sata. Postoji mogućnost testiranja po dolasku na aerodrom na Kipru o sopstvenom trošku. Pored negativnog testa, obavezna je mera samoizolacije u trajanju od dve nedelje, sa mogućnošću ponovnog testiranja desetog dana samoizolacije i ukoliko je test negativan, samoizolacija se prekida. Svi putnici moraju da poseduju kiparsku propusnicu za let (CyprusFlightPass) kako bi ukrcavanje bilo dozvoljeno. Sva neophodna dokumenta mogu da se nađu i popune elektronski najviše 24 sata pre leta na  <a href="https://www.cyprusflightpass.gov.cy" class="text-info" target="_blank" rel="noopener noreferrer">https://www.cyprusflightpass.gov.cy</a>  ',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KIRGIZIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Kirgiziju, osim lica koja imaju odobrenje za stalni boravak ili na osnovu prethodno pribavljenog odobrenja nadležnih organa Kirgizije u slučajevima postojanja bračnih ili rodbinskih veza. Nije potreban negativan test, ali je obavezan 14-to dnevni karantin. Testiranje obavezno samo u slučajevima postojanja simptoma bolesti.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KOLUMBIJA',
        info:
          '\n' +
          ' Državljani Srbije mogu da uđu u Kolumbiju. Neophodan je negativan PCR test, ne stariji od 96 sati. Pre puta je potrebno registrovati se preko sledećeg sajta:  \n',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KOMORI',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KONGO',
        info:
          'Državljani Srbije sa stalnim boravkom ili važećom vizom mogu da uđu u Kongo ili tranzitiraju. Na međunarodnom aerodromu u Brazavilu uvedena su obavezna testiranja prilikom dolaska i odlaska. Takođe, obavezna je samoizolacija u periodu od 14 dana. Test na COVID–19 se naplaćuje i cena iznosi 30 evra.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'KONGO, DR',
        info:
          'Državljani Srbije sa važećom vizom mogu da uđu u DR Kongo ili tranzitiraju. Neophodan je negativan PCR test za sva lica starija od 11 godina, ne stariji od sedam dana. Po dolasku na aerodrom u Kinšasi putnici se dodatno povdvrgavaju testiranju o trošku putnika (45 dolara). Takođe, pre dolaska je potrebno registrovati se preko sledećeg sajta:  <a href="http://www.inrbcovid.com/" class="text-info" target="_blank" rel="noopener noreferrer">http://www.inrbcovid.com/</a> . \n' +
          ' Prilikom izlaksa iz DR Kongo, svi putnici stariji od 11 godina su u obavezi da poseduju dokaz iz laboratorije ne stariji od 3 dana, koju je odobrilo Ministrastvo zdravlja, da su negativni na COVID–19. Cena testa prilikom odlaska iznosi 30 dolara. \n',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KOREJA, Republika',
        info:
          'Od 08. januara 2021. godine uvedena je obaveza posedovanja negativnog PCR testa, ne starijeg od 72 sata, za sve strane državljane, uključujući i one koji imaju registrovan boravak u Koreji, a kojima je dozvola ponovnog ulaska (Re-entry Permit) izdata pre 08. januara 2021. godine. Ova mera se odnosi i na nosioce diplomatskih i službenih viza (A1, A2 i A3), a od obaveze posedovanja testa izuzimaju se deca mlađa od 6 godina. Rezultat testa mora biti izdat na engleskom ili korejskom jeziku, a ykoliko je izdat na trećem jeziku, mora biti preveden na engleski ili korejski jezik i overen. Ukoliko putnici ne ispune pomenute uslove u vezi sa testom, neće im biti dozvoljen ulazak u R. Koreju. Putnici za R. Koreju su u obavezi da pokažu negativan PCR test na aerodromu prilikom ukrcavanja u avion. Putnicima u tranzitu koji ne ulaze u R. Koreju test nije potreban.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KOREJA, DNR',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KOSTARIKA',
        info:
          'Državljani Srbije mogu da uđu u Kostariku uz obavezu popunjavanja obrasca "Pase de Salud" 48 sati pre dolaska (https://salud.go.cr/). Takođe, potrebno je zdravstveno osiguranje koje pokriva troškove lečenja u slučaju korone virusa (osiguranje mora da bude na španskom jeziku i odobreno od Instituta za turizam).',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: "KOT D'IVOAR",
        info:
          "Državljani Srbije mogu da uđu u Kot D'Ivoar. Neophodan je negativan PCR test, ne stariji od pet dana. Po sletanju na aerodrom svi putnici se podvrgavaju tesiranju. Test se plaća oko 75 evra. Putnici koji nemaju test upućuju se u izolaciju u trajanju od 14 dana o trošku avio kompanije.",
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KUBA',
        info:
          'Državljani Srbije mogu da uđu na Kubu. Od 1. januara 2021. neophodan je negativan PCR test, ne stariji od 72 sata. Po dolasku na Kubu, na svim međunarodnim aerodromima, putnici se dodatno podvrgavaju PCR testu (cena testa 35 evra), nakon čega sledi obavezan karantin na adresi predviđenog boravka, do dobijanja rezultata testa (do 3 dana).',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KUVAJT',
        info:
          'Državljani Srbije ne mogu da uđu u Kuvajt direktno iz Srbije. Počev od 2. januara 2021.godine državljani Srbije mogu da uđu u Kuvajt ukoliko su prethodno boravili 14 dana u nekoj trećoj zemlji koju Kuvajt ne smatra zemljom visokog rizika (npr. Turska, Kipar). Neophodan je negativan PCR test, ne stariji od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LAOS',
        info:
          'Državljani Srbije ne mogu da uđu u Laos. Međunarodni granični prelazi su zatvoreni za ulazak stranaca iz zemalja u kojima vlada COVID-19 pandemija, što se, odnosi i na državljane Srbije. Izdavanje svih vrsta viza, osim za diplomate, predstavnike UN, eksperte, investitore i biznismene je suspendovano. Za njihov ulazak u Laos neophodna je potvrda o negativnom testu, ne stariji od 72 sata. Nakon ulaska u Laos, obavezan je boravak u „samoizolaciji" u hotelu ili određenom „karantin centru" u trajanju od 14 dana (za diplomate i predstavnike UN, 14 dana u „kućnom karantinu").',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LESOTO',
        info:
          'Državljani Srbije ne mogu da uđu u Lesoto osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana. Moguć je tranzit iz susednih država ali isključivo u slučaju organizovanog leta, odnosno napuštanja zemlje (i regiona), uz prezentovanje negativnog testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LETONIJA',
        info:
          'Državljani Srbije, kao i sva lica koja dolaze iz Srbije ili tranzitiraju kroz Srbiju, u obavezi su da imaju negativan test, ne stariji od 72 sata. Sva lica su u obavezi da, najranije 48 sati pre prelaska letonske granice, ispune elektronski upitnik na veb sajtu www.covidpass.lv u koji je unet podatak o negativnom testu na COVID-19 i da na graničnom prelazu pokažu dobijeni QR kod (potvrda o prijavi na sajt). Test nije obavezan za decu do 11 godina starosti i za lica koja pruže dokaz da su primili potrebnu dozu vakcine. Putnicima koji tranzitiraju preko aerdodroma „Riga", a ne zadržavaju se u tranzitu duže od 24 časa, takođe nije potreban test.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'LIBAN',
        info:
          'Državljani Srbije mogu ući u Liban. Neophodni su negativan PCR test, ne stariji od 96 sati, polisa međunarodnog zdravstvenog osiguranja koje pokriva COVID-19 lečenje, kao i registracija na stranici  <a href="https://survey123.arcgis.com/share/988ba32e1b634902ba3b14c3e4f1614d" class="text-info" target="_blank" rel="noopener noreferrer">https://survey123.arcgis.com/share/988ba32e1b634902ba3b14c3e4f1614d</a>  pre poletanja za Liban. Po dolasku u Liban, svaki putnik odlučuje da li će u roku od 72 sata da uradi novi PCR test ili će prihvatiti da bude u kućnom ili hotelskom karantinu 10 dana. Putnici koji dolaze iz Iraka, Turske, Egipta i Etiopije se podvrgavaju PCR testiranju na aerodromu, zatim se upućuju u hotelski karantin o svom trošku do 72 časa, do dostavljanja rezultata testa. Ukoliko je test negativan, karantin nastavljaju u svojim domovima, gde će nakon 7 dana ponoviti PCR test.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'LIBERIJA',
        info:
          'Državljani Srbije mogu da uđu u Liberiju. Poželjno je imati negativan PCR test, ne stariji od od 72 sata. Lica koja doputuju bez testa podvrgavaju se tzv. brzom testu na aerodromu. Ukoliko je rezultat testa negativan, omogućava se ulazak u zemlju. Lica sa pozitivnim rezultatom testa se pregledaju i upućuju u karantin koji traje mimimum 14 dana u okviru ustanove koju određuje državna zdravstvena institucija.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'LIBIJA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LUKSEMBURG',
        info:
          'Državljani Srbije mogu da uđu u zemlju isključivo ukoliko imaju regulisan dugoročni boravak u Luksemburgu. Izuzeci se odnose na zdravstvene radnike, granične radnike, istraživače, lica koja se bave negom starijih lica, lica zaposlena u sektoru saobraćaja, lica koja putuju iz hitnih i opravdanih porodičnih razloga, lica koja putuju za potrebe studija i visokokvalifikovane radnike ako je njihovo zapošljavanje ekonomski neophodno i njihov rad se ne može odložiti ili obavljati iz inostranstva. Takođe, od ograničenja je izuzet i kraći boravak državljana trećih zemalja koji su članovi porodice rezidenata u Luksemburgu – supružnici ili registrovani partneri i deca mlađa od 18 godina. Ove osobe treba da podnesu zahtev Odeljenju za pasoše, vize i zakonodavstvo, kako bi dobili odgovarajući sertifikat za putovanje. Zahtev se podnosi putem elektronske pošte na \n' +
          '  <a href="mailto:service.visas@mae.etat.lu" class="text-info" target="_blank" rel="noopener noreferrer">service.visas@mae.etat.lu</a> . Sva lica starija od šest godina koja žele da putuju avionom do Luksemburga moraju prilikom ukrcavanja posedovati negativan PCR test ili test na antigen virusa (brzi test) izvršen manje od 72 sati pre leta. Pored toga, svaka osoba koja putuje vazdušnim prevozom iz države koja nije članice EU ili Šengenskog prostora, mora da se, po dolasku, podvrgne dodatnom testu na virusni antigen, na aerodromu u Luksemburgu. U slučaju odbijanja da se podvrgne testu, osoba će ostati u karantinu 14 dana. Ove obaveze se na odnose na lica koja su preležala SARS-CoV-2 infekciju u prethodna tri meseca. Ova lica mogu da podnesu lekarsko uverenje koje potvrđuje navedenu činjenicu, i nije im potreban test radi ulaska u Luksemburg. Tranzit je dozvoljen i nije potrebno posedovanje negativnog PCR testa.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LITVANIJA',
        info:
          'Državljani Srbije ne mogu da uđu i borave na teritoriju Litvanije, osim lica koja imaju regulisan boravak. Tranzit preko teritorije Litvanije je dozvoljen državljanima Srbije koji poseduju regulisan boravak u nekoj od zemalja EU, Švajcarske Konfederacije i Ujedinjenog Kraljevstva. Ulazak državljana trećih zemalja u Litvaniju zavisi od broja obolelih na 100 hiljada stanovnika. Ulazak stranaca koji dolaze iz zemalja gde je više od 25 zaraženih na 100 hiljada stanovnika je ograničen na izuzetne slučajeve i ove osobe su po ulasku na teritoriju Litvanije u obavezi da budu u izolaciji 14 dana. Srbija se nalazi na listi 58 zemalja kojima je trenutno ograničen slobodan ulazak u Litvaniju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LIHTENŠTAJN',
        info:
          'Državljani Srbije ne mogu da uđu u Lihtenštajn osim lica koja imaju regulisani boravak. Lica koja imaju pravo da uđu iz Srbije u Lihtenštajn moraju da najave svoj dolazak popunjavanjem prijave na sajtu https://swissplf.admin.ch/home, ali samo ako dolaze avionom, autobusom, vozom ili brodom. Putnici koji dolaze iz Srbije avionom, od 08.02.2021. mora da poseduju i negativan PCR test. Tranzit je dozvoljen za lica koja poseduju regulisan boravak u odredišnoj zemlji u Šengenskom prostoru. U tom slučaju, potrebno je staviti na uvid dokaz o nameri i mogućnosti ulaska u tu zemlju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MADAGASKAR',
        info:
          'Državljani ne mogu ulaziti na Madagaskar. Ista zabrana, u uslovima zatvorenih aerodroma i luka, važi za sve strane državljane.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MADjARSKA',
        info:
          'Državljani Srbije ne mogu uđu u Mađarsku ukoliko je razlog putovanja turistički. Ulazak u Mađarsku u privatne svrhe je moguć samo na osnovu dobijene saglasnosti od mađarske policije. Zahtev se podnosi preko sajta www.police.hu, na mađarskom ili engleskom jeziku. Uz molbu se prilažu dokazi o razlozima putovanja (lečenje, školovanje, poslovne aktivnosti, pozivi na suđenje, porodični događaji, učešće na sportskim, kulturnim i verskim događajima od posebnog značaja i dr). Licu koje dobije saglasnost za ulazak u Mađarsku biće određen obavezan karantin u trajanju od 14 dana. Za vreme karantina moguće je testiranje o svom trošku. U slučaju dva negativna testa, urađena od strane mađarskih zdravstvenih organa u roku od 5 dana sa razmakom od najmanje 48 sati, moći će da se napusti karantin. Državljani Srbije mogu da tranzitiraju kroz Mađarsku pod određenim uslovima (utvrđena maršruta, zaustavljanje na predviđenim mestima, zemlja se mora napustiti u roku od 24 sata) i ukoliko pruže čvrsti dokazi o ispunjenosti uslova za ulazak u susednu zemlju prema kojoj napuštaju teritoriju Mađarske. Od 11.novembra zbog mere ograničenja kretanja u periodu od 20.00 do 05.00 časova, lica koja doputuju na međunarodni aerodrom „List Ferenc" u Budimpeštu u večernjim i noćnim časovima dozvoljeno je da napuste aerodrom, ali su dužni da u što kraćem periodu tranzitiraju i, bez svraćanja u naseljena mesta, napuste teritoriju Mađarske. Prilikom eventualnog zaustavljanja i provere od strane mađarske policije, potrebno je da se pokaže avionska karta. Lica koja ulaze u Mađarsku radi odlaska preko aerodroma „List Ferenc" u neku drugu zemlju treba da pruže dokaz da putuju do aerodroma (avionska karta), kao i dokaz o ispunjenosti uslova za ulazak u zemlju krajnje destinacije. Državljani Srbije koji rade u pograničnoj zoni ulaze u Mađarsku bez ograničenja (posedovanja negativnog testa na COVID-19). Oni mogu da borave u Mađarskoj u dubini do 30 km od granice, najduže do 24 sata. Zbog mere ograničenja kretanja, Mađarska mora da se napusti najkasnije do 20.00 časova. Izuzetak čine samo ona lica koja zbog radnih obaveza u Mađarskoj moraju da ostanu duže (najviše do 24 sata) što dokazuju potvrdom u obliku popunjenog formulara overenog od strane poslodavca. Za kršenje propisa može da se izrekne kazna u visini od 5.000 do 150.000 forinti (140 do 420 evra). Navedene mere se ne primenjuju na lica koja prelaze granicu Mađarske u teretnom saobraćaju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MALAVI',
        info:
          'Državljani Srbije ne mogu da uđu u Malavi osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana. Moguć je tranzit iz susednih država ali isključivo u slučaju organizovanog leta, odnosno napuštanja zemlje (i regiona), uz prezentovanje negativnog testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MALI',
        info:
          'Državljani Srbije ne mogu da uđu u Mali. Nije moguć ulazak stranih državljana u Mali. Zatvoreni su svi granični prelazi i obustavljen je međunarodni putnički saobraćaj – vazdušni i kopneni. Izuzetak predstavljaju predstavnici stranih diplomatko-konzularnih predstavništava i radnici humanitarnih misija kojima je, uz prethodnu notifikaciju, dozvoljen ulazak na teritoriju Malija.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MALDIVI',
        info:
          'Državljani Srbije, kao i ostali strani državljani, mogu da uđu na Maldive. Od 10. septembra je neophodno da strani državljani poseduju negativan PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'MALEZIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Maleziju osim ukoliko imaju boravak u ovoj zemlji. Obavezan je karantin od 14 dana. Pre puta, potrebno je kontaktirati najbližu Ambasadu Malezije',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MALTA',
        info:
          'Državljani Srbije ne mogu da uđu na Maltu. Izuzetak su lica koja su prethodnih 14 dana boravili u jednoj od „zemalja zelene liste" („zelena lista" se može naći na  <a href="https://www.visitmalta.com/en/reopening-airport" class="text-info" target="_blank" rel="noopener noreferrer">https://www.visitmalta.com/en/reopening-airport</a>  ). U tom slučaju ne postoji obaveza karantina ili negativnog testa (preporučuje se da lica imaju negativan test). Za lica koja dolaze iz „zemalja Amber liste" („Amber lista" se može naći na  <a href="https://www.visitmalta.com/en/reopening-airport" class="text-info" target="_blank" rel="noopener noreferrer">https://www.visitmalta.com/en/reopening-airport</a> ), je obavezan negativni PCR test, ne stariji od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MAROKO',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju osim lica koja imaju regulisan boravak. Neophodan je negativan PCR test, ne stariji od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MAURITANIJA',
        info:
          'Državljani Srbije mogu da uđu u Mauritaniju. Neophodan je negativni PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'MAURICIJUS',
        info:
          'Državljani Srbije ne mogu da uđu u Mauricijus osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana. Granice Mauricijusa su zatvorene a komercijalni letovi obustavljeni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MEKSIKO',
        info:
          'Državljani Srbije mogu, uz posedovanje odgovarajuće vize, bez posebnih ograničenja da uđu u Meksiko. Meksiko nije usvojio ograničenja ulaska stranaca u zemlju, ali se preduzimaju odgovarajuće mere ukoliko osobe ispoljavaju simptome na korona virus. Po dolasku u Meksiko, putnici su dužni da popune upitnik za identifikaciju faktora rizika (https://afac.hostingerapp.com/).',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'MJANMAR',
        info:
          'Za državljane Srbije, kao i za državljane svih drugih zemalja, ne postoji mogućnost ulaska u Mjanmar, imajući u vidu da su granični prelazi zatvoreni i da su suspendovani svi međunarodni komercijalni avio-letovi. Za strance koji dolaze „humanitarnim" i „specijalnim" letovima u Mjanmar, potrebna je odgovarajuća viza i potvrda o negativnom testu, ne starijem od 72 sata, kao i potvrda o provedenih sedam dana u „kućnom karantinu" u zemlji iz koje se dolazi. Nakon ulaska u Mjanmar, obavezan je boravak u „hotelskom karantinu" u trajanju od 7 dana, uključujući dodatnih 7 dana boravka u „kućnom karantinu" (za diplomate i predstavnike UN, koji žive u apartmanima, 7 dana u „hotelskom karantinu" određenom od strane Ministarstva zdravlja i sporta, odnosno 7 dana u „kućnom karantinu", ukoliko žive u „zasebnim kućama", uključujući dodatnih 7 dana u „kućnom karantinu"), nakon čega se vrši test na COVID-19.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MOZAMBIK',
        info:
          'Državljani Srbije ne mogu da uđu u Mozabik osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana. Moguć je tranzit iz susednih država ali isključivo u slučaju organizovanog leta, odnosno napuštanja zemlje (i regiona) kao i prevoza karga, uz prezentovanje negativnog testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MOLDAVIJA',
        info:
          'Državljani Srbije, kao ni strani državljani, ne mogu ući u Moldaviju, ukoliko dolaze iz zemalja koje se nalaze u tzv. „crvenoj zoni" (Srbija, Rumunija, Ukrajina), osim ako ne poseduju vizu, dozovolu boravka ili spadaju u grupu izuzetih od zabrane ulaska (detaljnije na sajtu Ambasade Srbije u Bukureštu:  <a href="http://www.bucharest.mfa.gov.rs" class="text-info" target="_blank" rel="noopener noreferrer">http://www.bucharest.mfa.gov.rs</a> ). Za sva lica koja ulaze na teritoriju Moldavije iz zemalja koje se nalaze u tzv. „crvenoj zoni", a spadaju u grupu izuzetih od zabrane, obavezna je mera samoizolacije u trajanju od 14 dana. Izuzetak predstavljaju: studenti, članovi posada, diplomate, putnici u tranzitu, lica koja pružaju zdravstvenu zaštitu.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MONAKO',
        info:
          'Za Kneževinu Monako važi isti režim ulaska kao za Francusku. Državljanima Srbije nije dozvoljen ulazak u Monako osim licima koja imaju regulisan boravak. Za lica koja dolaze iz Srbije obavezan je negativan PCR test, ne stariji od 72 sata (osim za decu mlađu od 11 godina), kao i nakon ulaska samoizolacija u trajanju od 7 dana. Pored toga, po ulasku na teritoriju Monaka, obavezna je prijava u Centru za kovid na telefon: (+377) 92.05.55.00 ili putem i mejla: \n' +
          '  <a href="mailto:covid19@gouv.mc" class="text-info" target="_blank" rel="noopener noreferrer">covid19@gouv.mc</a>',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MONGOLIJA',
        info:
          'Državljanima Srbije nije dozvoljen ulazak ni tranzitiranje preko Mongolije.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'NAMIBIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Namibiju osim lica sa regulisanim boravkom. Neophodan je negativan test, ne stariji od 72 sata. Moguć je tranzit iz susednih država ali isključivo u slučaju organizovanog repatriacinog leta, odnosno napuštanja zemlje (i regiona) uz prezentovanje negativnog testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'NAURU',
        info:
          'Svim stranim državljanima koji su tranzitirali preko ili boravili u Kini, Hong Kongu, Makau, Iranu, Italiji, Koreji, Evropi, SAD ili Aziji (osim Tajvana) u poslednjih 21 dan pre nameravanog dolaska na Nauru, do daljnjeg je zabranjen ulazak u zemlju. Ostali putnici su u obavezi da popune zdravstvenu deklaraciju pri dolasku i podvrgnu se zdravstvenom pregledu, nakon čega sledi obavezan karantin od 14 dana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'NEMAČKA',
        info:
          'Državljani Srbije ne mogu putovati u Nemačku, osim ukoliko imaju boravišnu dozvolu u Nemačkoj, nacionalnu D vizu ili boravišnu dozvolu u drugoj državi članici EU, Velikoj Britaniji, Islandu, Lihtenštajnu, Norveškoj ili Švajcarskoj. Turistička putovanja u Nemačku u cilju posete i dalje nisu dozvoljena. Putnici koji dolaze u Nemačku iz Srbije dužni su da pre ulaska u Nemačku popune elektronsku prijavu putem veb-stranice: www.einreiseanmeldung.de Elektronsku prijavu nisu dužna da popunjavaju lica koja su bila na proputovanju kroz rizično područje, bez dužeg zadržavanja, lica koja tranzitiraju kroz Nemačku i lica koja na osnovu poslovnih obaveza uđu u Nemačku radi prekograničnog prevoza putnika ili robe u drumskom, železničkom, rečnom ili vazdušnom saobraćaju. Sva lica od navršene šeste godine života koja su u poslednjih 10 dana boravila u Srbiji dužna su da poseduju potvrdu da nisu zaraženi korona virusom. Bris na osnovu kojeg je izdata potvrda, po pravilu treba da bude uzet najranije 48 sati pre ulaska u Nemačku. Priznaju se PCR-testovi i brzi antigenski testovi koji su urađeni u skladu sa zahtevima Instituta Robert Koh: <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Tests.html;jsessionid=4C696B25A82B24739A43AF4741EF4886.internet102" class="text-info" target="_blank" rel="noopener noreferrer">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Tests.html;jsessionid=4C696B25A82B24739A43AF4741EF4886.internet102</a>   Rezultat testa treba sačuvati najmanje deset dana posle ulaska u zemlju. Nakon ulaska u Nemačku, obavezna je kućna samoizolacija u trajanju od 10 dana. Najranije petog dana po ulasku u zemlju može se uraditi novi test i ukoliko je rezulatt negativan, kućna samoizolacija može da se prekine. Pozivom na broj Koordinacione službe za zakazivanje termina za test 116117 može se saznati gde se može obaviti testiranje u mestu boravka u Nemačkoj. Državljani Srbije bez vize mogu putovati u Nemačku ukoliko postoji apsolutno neophodan razlog i uz prethodnu konsulatciju sa Saveznom policijom Nemačke i to ukoliko su članovi uže porodice, članovi porodice prvog ili drugog stepena, hitni medicinski slučajevi, nevenčani partneri, ukoliko putuju poslovno iz ekonomskih razloga, zbog posete sajmovima, učešća na kongresima i dr. Za dodatne informacije može se kontaktirati Savezna nemačka policija (Bundespolizei) putem mejla: \n' +
          '  <a href="mailto:bpolp@polizei.bund.de" class="text-info" target="_blank" rel="noopener noreferrer">bpolp@polizei.bund.de</a> . Tranzit kroz Nemačku je moguć ukoliko državljani Srbije imaju dokaz o pravu ulaska u zemlju u koju putuju. Tranzit mora biti obavljen najkraćim mogućim putem i bez nepotrebnog zadržavanja. Obaveza kućne samoizolacije i obaveza posedovanja negativnog PCR testa ne važi za putnike u tranzitu, pod uslovom da koriste najkraću rutu. Prilikom prelaska granice putnici moraju predočiti dokaze o neophodnosti putovanja. Konačnu procenu i odluku o ulasku u Nemačku uvek donosi postupajući službenik granične policije. Detaljne informacije o režimu ulaska u Nemačku mogu se naći na sajtu Ambasade Srbije u Berlinu: <a href="http://berlin.mfa.gov.rs/cir/index.php" class="text-info" target="_blank" rel="noopener noreferrer">http://berlin.mfa.gov.rs/cir/index.php</a>  ',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'NIGER',
        info:
          'Državljani Srbije mogu da uđu u Niger. Neophodan je negativan PCR test, ne stariji od 72 sata. Ukoliko putnik ne poseduje test, podvrgava se zdravstvenom pregledu i testiranju o svom trošku.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'NIGERIJA',
        info:
          'Državljani Srbije mogu da uđu u Nigeriju. Neophodan je negativan PCR test, ne stariji od 72 sata. Najmanje 96 sati pre putovanja potrebno je prijaviti se elektronski preko sledećeg linka: https://nitp.ncdc.gov.ng/onboarding/homepage. Putnici po dolasku prolaze kroz medicinsku kontrolu. Obavezna je samoizolacija od sedam dana. Sedmog dana lice je dužno da se javi u izabranu laboratoriju radi ponovnog testiranja. Rezulatat se dobija u roku od 24 do 48 sati. Po dobijanju negativnog testa, lice može da napusti samoizolaciju. Lica sa pozitivnim rezultatom se smeštaju u odgovarajuću zdravstvenu ustanovu. Za lica koja se ne pridržavaju mera predviđeno je oduzimanje putne isprave i zabrana putovanja do šest meseci.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'NIKARAGVA',
        info:
          'Državljani Srbije mogu da uđu u Nikaragvu. Neophodan je negativan PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'NOVI ZELAND',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju, osim onih lica koja imaju odobren stalni boravak i članova njihove uže porodice. Mogućnost ulaska postoji ako su u pitanju humanitarni ili dovoljno ubedljivi razlozi uz prethodno pribavljanje dozvole od strane nadležnih organa. Obavezan je karantin od 14 dana, u za to posebno opredeljenim objektima, i putnici moraju da u istima rezervišu smeštaj pre polaska na put. Troškove boravka u izolaciji snose sami putnici. Sva lica se po dolasku u zemlju testiraju na COVID-19. Tranzit državljana Srbije je dozvoljen uz posedovanje tranzitne vize (uz obavezu da vreme provedeno u tranzitu bude maksimalno 24 sata). Tranzit je dozvoljen samo preko aerodroma u Oklandu. Ulazak na Novi Zeland dozvoljen je samo državljanima Novog Zelanda, licima koja imaju odobren stalni boravak i članovima njihovih užih porodica, kao i državljanima Australije koji obično prebivaju na Novom Zelandu. Od 16. januara 2021. godine, svi putnici koji dolaze iz Velike Britanije i SAD, moraju da dostave pismeni dokaz negativnog PCR testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'NORVEŠKA',
        info:
          'Državljani Srbije mogu ući u Norvešku ako imaju regulisan boravak; ako postoje posebni razlozi za ulazak u Norvešku, npr. potreba za posebnom negom osobe koja je u Norveškoj ili drugi razlozi u cilju dobrobiti lica koje se nalazi u Norveškoj; ako ostvaruju dogovoreni ili formalizovani kontakt roditelj-dete ili kada dete ima podeljeno prebivalište; ako su bliski srodnici osoba sa prebivalištem u Norveškoj, tj supružnik/ registrovani partner/ vanbračni partner/ maloletna deca ili pastorčad, roditelji ili očusi/maćehe maloletne dece ili pastorčadi; ako su novinari ili druga lica angažovana za rad u stranim medijskim institucijama; ako će boraviti samo u aerodromskom tranzitu pre napuštanja Norveške; ako je reč o pomorcima ili imaocima važeće vazduhoplovne dozvole na putu do ili iz aktivne službe; ako obavljaju komercijalni prevoz robe ili putnika i koji su na putu ka/sa takvog zadatka; ako rade u sektoru kritično važnih društvenih funkcija. Za sva lica koja mogu da uđu u Norvešku obavezan je negativan PCR ili brzi antigenski test, ne stariji od 24 sata. Neophodna je registracija svih lica u roku kraćem od 72 sata pre dolaska (registrovanje je moguće on-line na https://reg.entrynorway.no). Takođe, po dolasku je obavezan karantin u trajanju od deset dana u karantin hotelu ili drugom odgovarajućem smeštaju. Karantin može biti skraćen na sedam dana nakon urađena dva PCR testa, ako za to postoje raspoloživi kapaciteti. Dodatne informacije se mogu naći u sledećim linkovima: <a href="https://www.regjeringen.no/en/aktuelt/the-corona-situation-more-information-about-quarantine-hotels/id2784377/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.regjeringen.no/en/aktuelt/the-corona-situation-more-information-about-quarantine-hotels/id2784377/</a>  ; avkrysningsskjema_karantenehotell_engelsk.pdf (regjeringen.no ) The coronavirus situation - regjeringen.no <a href="https://www.udi.no/en/about-the-corona-situation" class="text-info" target="_blank" rel="noopener noreferrer">https://www.udi.no/en/about-the-corona-situation</a>  /',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'OMAN',
        info:
          'Državljani Srbije mogu da uđu u Sultanat Oman. Neophodan je negativan PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'PALAU',
        info:
          'Državljani Srbije mogu bez ograničenja da uđu ili tranzitiraju. Neophodno je da prilikom ulaska popune formular o zdravstvenom stanju i da budu podvrgnuti zdravstvenom pregledu. Zabranjen je ulazak za one državljane Srbije koji su prethodnih 14 dana boravili ili tranzitirali u NR Kini (uključujući Hong Kong i Makao) ili su boravili na putničkim kruzerima koji su pristajali u luke zemalja koje su pogođene bolešću COVID-19. Navedeno se odnosi na sve strane državljane.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'PALESTINA',
        info:
          'Državljani Srbije ne mogu da uđu niti da tranzitiraju preko teritorije Palestine.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'PAKISTAN',
        info:
          'Državljanima Srbije je dozvoljen ulazak u Pakistan. Na aerodromu se kontroliše temperatura. Za lica koja pokažu simptome medicinsko osoblje na aerodromu odlučuje da li će zahtevati test na koronu. U slučaju pozitivnog testa, obavezna je mera izolacije u bolničkim ili uličnim uslovima.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'PANAMA',
        info:
          'Državljani Srbije mogu da uđu u Panamu. Neohodan je negativan PCR test, ne stariji od 48 sati. I za tranzit se zahteva posedovanje negativnog PCR testa, uz zabranu napuštanja aerodroma.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'PAPUA NOVA GVINEJA',
        info:
          'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u Papua Novu Gvineju. Izuzetak su lica sa specijalnim odobrenjem nadležnih organa. Obavezan je negativan PCR test, ne stariji od sedam dana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'PARAGVAJ',
        info:
          'Državljani Srbije ne mogu ući u Paragvaj osim lica koja imaju regulisan boravak i nosioci diplomatskih i službenih pasoša sa važećom vizom. Obavezan je karantin od 14 dana, koji može biti skraćen na 7 dana ukoliko se u tom periodu urade dva testa. Takođe se zahteva prethodno slanje elektronskim putem tzv. izjave o odgovornosti da je putnik upoznat sa svim sanitarnim propisima i procedurama u Paragvaju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'PERU',
        info:
          'Državljani Srbije ne mogu ući u Peru osim lica koja imaju stalni boravak. Može se ući u zemlju vazdušnim putem, ukoliko let ne traje duže od 8 sati. Uslov za ukrcavanje u avion je negativan PCR test, ne stariji od 72 sata. Takođe se zahteva prethodno slanje elektronskim putem tzv. izjave o odgovornosti da je putnik upoznat sa svim sanitarnim propisima i procedurama u Peru. Kopnene granice su još uvek pod restriktivnim režimima lokalnih vlasti, koje izdaju posebna odobrenja. Kontakt e-mejlovi za dodatne informacije su: \n' +
          '  <a href="mailto:iperu@promperu.gob.pe" class="text-info" target="_blank" rel="noopener noreferrer">iperu@promperu.gob.pe</a>  i \n' +
          '  <a href="mailto:perulimaapto@promperu.gob.pe" class="text-info" target="_blank" rel="noopener noreferrer">perulimaapto@promperu.gob.pe</a> .',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'POLjSKA',
        info:
          'Državljani Srbije ne mogu da uđu i borave na teritoriju Poljske, osim lica koja imaju regulisan boravak. Tranzit preko teritorije Poljske je dozvoljen samo državljanima Srbije koji poseduju regulisan boravak u nekoj od zemalja EU a u cilju povratka u mesto svog prebivališta. Nije potreban test. Dozvoljen je ulazak državljanima zemalja EU, EFTA i Švajcarske Konfederacije, kao i tranzit državljanima trećih zemalja koji imaju regulisan boravak u ovim zemljama. Takođe, dozvoljen je i ulazak državljanima Crne Gore, Gruzije, Japana, Kanade, Albanije i R. Koreje.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'PORTUGALIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Portugaliju, osim lica koja imaju regulisan boravak. Kada su u pitanju nužna (neturistička) putovanja, ulazak je dozvoljen i licima po druga dva osnova 1) ukoliko imaju regulisan boravak u nekoj od država članici EU 2) u slučaju profesionalnih razloga, radi studiranja, spajanja porodice, iz zdravstvenih i humanitarnih razloga – sve navedeno na bazi reciprociteta. Za putnike koji dolaze iz Srbije, neophodan je negativan PCR test, ne stariji od 72 sata, osim za decu do dve godine starosti. Putnici koji su tranzitu i ne napuštaju aerodrom nisu u obavezi da imaju test.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'RUANDA',
        info:
          'Državljani Srbije mogu da uđu u Ruandu. Državljani Srbije, kao i svi putnici, uključujući i one koji su u tranzitu, u obavezi su da poseduju negativan PCR test, ne stariji od 72 sata. Po ulasku u Ruandu, putnici se dodatno testiraju a rezultati PCR testa dobijaju se u roku od 24 sata. Do trenutka dobijanja rezultata testa, putnici se smeštaju u hotele koji su namenjeni za tu svrhu i to o svom trošku.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'RUMUNIJA',
        info:
          'Državljani Srbije, kao ni strani državljani, ne mogu ući u Rumuniju, ukoliko nemaju regulisan boravak ili poseduju odgovarajuću vizu. U Rumuniju mogu ući lica koja putuju poslovno i prilože dokaze o poslovnoj saradnji sa privrednim subjektima u Rumuniji (pozivno pismo ili ugovor o radu); studenti, prekogranični radnici, sezonski poljoprivredni radnici, medicinsko osoblje, pomorsko i rečno osoblje, članovi međunarodnih sportskih delagacija, filmski radnici i umetnici. Za sva lica koja iz Srbije ulaze u Rumuniju, a kojima je dozvoljen ulazak, obavezna je mera samoizolacije u trajanju od 14 dana. Tranzit kroz Rumuniju je moguć.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'RUSKA FEDERACIJA',
        info:
          'Državljani Srbije mogu ući u Rusku Federaciju isključivo direktnim letom na relaciji Beograd - Moskva preko avio kompanija „Air Serbia" i „Aeroflot". Neophodan je negativan PCR test, ne stariji od 72 sata. Državljani Srbije koji u Rusku Federaciju dolaze iz drugih pravaca, sa presedanjem u nekoj trećoj zemlji (na primer Istanbulu) ili drumskim putem, neophodno je da poseduju posebnu dozvolu za ulazak Kriznog štaba Ruske Federacije.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SAMOA',
        info:
          'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'SAN MARINO',
        info:
          'Državljani Srbije mogu da uđu u San Marino ili tranzitiraju uz obavezu prethodne prijave Ministarstvu inostranih poslova San Marina, putem e-mejla: \n' +
          '  <a href="mailto:viaggiareinformati@esteri.sm" class="text-info" target="_blank" rel="noopener noreferrer">viaggiareinformati@esteri.sm</a>  ili telefonski: 00378/549888888. Po dolasku obavezno je podvrgavanje serološkom testu. U slučaju pozitivnog rezultata lice se podvrgava molekuralnom testu i ukoliko rezultat bude pozitivan podleže kućnoj samoizolaciji u trajanju od 14 dana.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SAO TOME I PRINCIPE',
        info:
          'Državljani Srbije mogu da uđu u zemlju uz negativan test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SAD',
        info:
          'Državljani Srbije mogu da uđu u SAD. Ulaz u SAD i dalje je zabranjen licima koja su boravila duže od 14 dana u Kini, Irskoj, V.Britaniji, Iranu i zemljama Šengena. Od 26.janura 2021. je obavezan negativan PCR ili NAAT test ne stariji od 3 dana, odnosno pozitivan test, ne stariji od 3 meseca, za one koji su preležali bolest, uz lekarsku potvrdu kojom se tvrdi da je lice bezbedno za putovanje. Test je obavezan i za decu počev od dve godine. Kontrolu posedovanja testa vrši avio prevoznik. Takođe, preporučuje se da se test uradi i u SAD, između trećeg i petog dana po dolasku, kao i da se bude 7 dana u samoizolaciji. Ukoliko dođe do odlaganja leta, iz bilo kojih razloga, putnici će morati da rade novi test ukoliko se ne uklapaju u traženi rok od 3 dana pre putovanja. Dodatne informacije se mogu naći u sledećem linku:  <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html" class="text-info" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html</a>  ',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'SAUDIJSKA ARABIJA',
        info:
          'Državljani Srbije koji imaju boravišnu dozvolu (iqama) sa važećom vizom ili neku od sledećih viza: poslovna, radna ili za posetu mogu da uđu u zemlju uz obavezan negativan PCR test, ne stariji od 48 sati, izdat od laboratorija akreditovanih u R. Srbiji. U slučaju da su lica boravila u ili tranzitirala kroz neku od država u kojima je otkriven novi soj virusa COVID -19 (trenutno su na listi Velika Britanija i Južnoafrička Republika) neophodno je da, pre ulaska u Saudijsku Arabiju, dve nedelje borave u nekoj od država u kojima novi soj COVID -19 nije otkriven. Za informaciju o akreditovanim laboratorijama u R. Srbiji i za informacije o vizama potrebno je kontaktirati Ambasadu Kraljevine Saudijske Arabije u Sarajevu.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SVETA LUCIJA',
        info:
          'Državljanima Srbije je dozvoljen ulazak u zemlju ukoliko poseduju negativan PCR test, ne stariji od sedam dana i popune formular koji se može naći na https://www.stlucia.org/en/covid-19/pre-arrival-form-for-visitors/',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SENEGAL',
        info:
          'Državljani Srbije mogu da uđu u Senegal, uz odobrenu vizu, pri čemu je neophodno da poseduju negativni test (PCR test i test krvi), ne stariji od 72 sata. Navedeno važi i za putnike koji provode duže od 24 časa u tranzitu. Putnici u avionu potpisuju izjavu da nemaju simptome virusa i da nisu bili u kontaktu sa zaraženim licima. Postoji i mogućnost da se zbog hitnosti putovanja putnik izuzme od obaveze prethodnog testiranja (PCR test i test krvi), ali to mora da se navede u izjavi koju avio kompanija dostavlja nadležnim vlastima na aerodromima u Senegalu. U tom slučaju, testiranje se vrši aerodromu o trošku putnika. Ulazak je moguć isključivo letovima avio kompanija Air Senegal i Royal Air Maroc.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SENT VINSENT I GRENADINI',
        info:
          'Državljani Srbije mogu da uđu u Sent Vinsent i Grenadine uz obavezu da pre puta popune i podnesu formular koji se može naći na sajtu  <a href="https://stv.servicedx.com/formmgmt/travelform" class="text-info" target="_blank" rel="noopener noreferrer">https://stv.servicedx.com/formmgmt/travelform</a> . Obavezan je negativan PCR test, ne stariji od 72 sata. Osobe koje dolaze iz zemalja visokog ili srednjeg rizika biće dodatno testirane na aerodromu i primorane na karantin u trajanju od 10, odnosno 5 dana o svom trošku. Ukoliko rezultat testa bude negativan, karantin se može napustiti.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SENT KITS I NEVIS',
        info:
          'Državljani Srbije mogu da uđu u Sent Kits i Nevis. Putnici su u obavezi da popune formular na sajtu  <a href="http://www.covid19.gov.kn" class="text-info" target="_blank" rel="noopener noreferrer">http://www.covid19.gov.kn</a> , kao i da dostave negativan PCR test, ne stariji od 72 sata. Putnici se na aerodromu podvrgavaju pregledu i popunjavaju zdravstveni upitnik. \n' +
          ' Neophodno je preuzeti aplikaciju na telefonu za praćenje kontakata. Prvih sedam dana boravka se može provesti isključivo u hotelu. Između 7 i 14 dana mora se uraditi novi RCR test o svom trošku, i ukoliko isti bude negativan, omogućava se kretanje van hotelskog kompleksa. \n',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SEVERNA MAKEDONIJA',
        info:
          'U skladu sa odlukom Vlade, od 12.oktobra državljani Srbije mogu da uđu u Severnu Makedoniju bez posedovanja negativnog PCR testa. Istovremeno, u saopštenju Vlade Severne Makedonije se apeluje da se putovanja svedu na minimum i isključivo za neodložne potrebe.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'SEJŠELI',
        info: 'Državljani Srbije ne mogu da uđu na Sejšele.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'SIJERA LEONE',
        info:
          'Državljani Srbije mogu da uđu u Sijera Leone uz negativan PCR test, ne stariji od 72 sata, i dozvolu putovanja koja se dobija preko portala Vlade Sijera Leonea (www.travel.gov.sl). Takođe, po dolasku u zemlju su dužni da popune zdravstveni upitnik i prezentuju potvrdu o uplati za novi PCR i RDT test kojima će biti podvrgnuti po dolasku u zemlju. U slučaju da je RDT test negativan, putnicima je dozvoljeno da napuste aerodrom. U obrnutom slučaju se stavljaju u izolaciju u neki od hotela u gradu Lunđi dok se ne dobiju rezultati PCR testa. Vreme za dobijanje rezultata PCR testa je 48 sati. U slučaju da je PCR test pozitivan zdravstvene vlasti Sijera Leone prinudno upućuju putnika u neki od centara za lečenje.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SINGAPUR',
        info:
          'Državljani Srbije ne mogu da uđu niti tranzitiraju u Singapur osim lica koja imaju stalnu boravišnu ili radnu dozvolu. Moguće su kratkoročne posete rezidentu Singapura a da ga posećuju supružnik ili deca. Za takvu vrstu poseta je potrebno podneti zahtev, te se stoga savetuje da se prethodno kontaktira najbliža ambasada Singapura.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'SIRIJA',
        info:
          'Državljani Srbije mogu ući u Siriju jedino iz Libana, preko kopnenog GP „Masna". Za ulazak je neophodan negativan PCR test urađen u državnoj laboratoriji u Bejrutu, ne stariji od 12 sati. Po ulasku u Siriju, neophodna je samoizolacija u trajanju od 5 dana. Državljani Srbije ne mogu tranzitirati kroz Siriju.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SLOVAČKA',
        info:
          'Državljani Srbije mogu da uđu u Slovačku. Lica koja su tokom prethodnih 14 dana posetila zemlju koja nije na listi manje rizičnih zemalja (lista se može naći na: http://korona.gov.sk/ehranica) mogu ući pod uslovom poštovanja epidemioloških mera (izolacija u kućnim uslovima, do dobijanja negativnog testa koji se radi najranije petog dana izolacije). Lica koja su u prethodnih 14 dana boravila u državama EU koje nisu na listi manje rizičnih, u Slovačku mogu ući i bez poštovanja epidemioloških mera, ukoliko imaju negativan PCR test, ne stariji od 72 sata, urađen u laboratoriji koja se nalazi van teritorije Slovačke. Preko graničnih prelaza sa Ukrajinom mogu ući državljani Srbije koji imaju boravak u Slovačkoj, u rodbinskoj vezi su sa osobom koja boravi u Slovačkoj ili je državljanin Slovačke, kao i lica koja tranzitiraju u drugu državu EU u kojoj imaju dozvolu za boravak. Pre ulaska na teritoriju Slovačke, neophodno je registrovati se elektronski na: http://korona.gov.sk/ehranica. Ukoliko državljani Srbije u Slovačku doputuju avio saobraćajem, a u prethodnih 14 dana su posetili državu koja nije na listi manje rizičnih, u obavezi su da se pre putovanja registruju na internet stranicama: 1.  <a href="http://korona.gov.sk/ehranica" class="text-info" target="_blank" rel="noopener noreferrer">http://korona.gov.sk/ehranica</a>   2.  <a href="https://www.mindop.sk/covid/forms/edit/1e4445fcda2395ad4890058010b20135469f" class="text-info" target="_blank" rel="noopener noreferrer">https://www.mindop.sk/covid/forms/edit/1e4445fcda2395ad4890058010b20135469f</a>   Moguć je tranzit kroz Slovačku ukoliko se poseduje dozvola za boravak u nekoj od država članica EU. Tranzit može da traje do osam sati. Ostalim licima je neophodna dozvola za tranzit.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'SLOVENIJA',
        info:
          'Državljani Srbije ili lica koja imaju boravak u Srbiji, ukoliko ne dolaze iz zemalja na zelenoj listi, mogu ući u Sloveniju uz obavezni karantin od 10 dana (sa mogućnošću da posle 5 dana urade PCR test u Sloveniji i sa negativnim rezeltatom se oslobode daljeg karantina) ili uz posedovanje PCR testa, ne starijeg od 48 sati, urađenog u Srbiji (u jednoj od institucija R. Srbije sa spiska čiji se testovi priznaju) ili u jednoj od zemalja EU, odnosno Šengenskog prostora. Negativan rezultat testa izvršenog po metodi HAGT se priznaje ukoliko je urađen u državi članici EU, odnosno državi Šengenskog prostora. Državljani Srbije mogu ući u Sloveniju bez karantina i negativnog testa u sledećim slučajevima: prekogranični dnevni radni migrant, koji je u radnom odnosu u jednoj od država članica EU ili drugoj državi šengenskog područja za šta poseduje dokaz i vraća se u roku od 14 sati od prelaska granice; lice koje je upućeno na ili sa izvršenja zadataka u sektoru međunarodnog prevoza i to pri prelasku granice dokazuje »Potvrdom za radnike u sektoru međunarodnog prevoza« ili drugim odgovarajućim dokumentom iz kog se može videti da ga je uputio poslodavac; lice koje vrši prevoz robe u Sloveniju ili iz Slovenije u privrednom saobraćaju, kao i za teretni saobraćaj u tranzitu i napušta Sloveniju u roku od 8 sati po prelasku granice; lice koje putuje u tranzitu kroz Sloveniju i napušta Sloveniju najkasnije u roku od 6 sati po ulasku; predstavniku stranog bezbednosnog organa (policije ili pravosuđa), koji izvršava zvanični zadatak i napušta Sloveniju čim je to po izvršenju zadatka moguće; osoba koja je zbog medicinskih razloga došla u Sloveniju sanitetskim vozilom; osobe sa diplomatskim putnim ispravama; licu koje ima dokaz o planiranom zdravstvenom pregledu ili zahvatu u Sloveniji, drugoj državi EU ili drugoj državi šengenskog područja i vraća se preko granice odmah po obavljenom zdravstvenom pregledu ili zahvatu; državljaninu države članice EU ili šengenskog prostora, koji dolazi iz druge članice EU ili šengenskog prostora, gde je čuvao i nudio pomoć licima kojima je to potrebno, brigu o i negu članova porodice, roditeljsku negu i kontakt sa detetom, ili je otklanjao neposrednu opasnost po zdravlje, život i nepokretnost, i preko granice se vraća u roku od 12 sati po prelasku granice; detetu koje nije navršilo 13 godina i granicu prelazi sa članom uže porodice, koji nije upućen u kućni karantin i nije mu zabranjen ulazak u Sloveniju; licu koje dnevno ili povremeno prelazi granicu zbog uključenosti u vaspitanje, obrazovanje ili naučno istraživanje u Sloveniji ili državi članici EU ili šengenskog područja i to dokazuje odgovarajućim dokazima; pripadniku službe zaštite i spasavanja, zdravstva, policije, vatrogasaca ili drugom licu koje vrši humanitarni prevoze ili nudi pomoć u spasavanju i otklanjanju posledica elementarnih nepogoda. Za tranzit kroz Sloveniju neophodno je posedovanje dokaza o ulasku u državu u koju se lice uputilo (boravišna dozvola, overeno pozivno pismo, rezervacija hotela...) i nije potrebno posedovanje negativnog PCR testa. Tranzit može trajati maksimalno šest sati.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SOLOMONOVA OSTRVA',
        info:
          'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak na Solomonova ostrva. Izuzeta su lica sa specijalnim odobrenjem nadležnih organa koja moraju da poseduju dupli negativan PCR test (ne stariji od 7 i 2 dana pre putovanja). Takođe, obavezan je karantin od 14 dana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'SOMALIJA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju, osim lica koja imaju regulisan boravak i to specijalnim letovima Turkish Airlines iz Istanbula za Mogadiš koji se organizuju jednom nedeljeno.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'SUDAN, REPUBLIKA',
        info:
          'Državljani Srbije mogu da uđu u Sudan. Neophodan je negativan PCR test, ne stariji od 48 sati.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SURINAM',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'TAJLAND',
        info:
          'Državljani Srbije mogu da uđu u Kraljevinu Tajland sa turističkom vizom uz ispunjavanje odgovorajućih uslova od kojih je jedan 14-dnevni karantin. Neophodan je negativan PCR test, ne stariji od 72 sata. Takođe, potreban je i Certificate of Entry i drugi dokumenti, tako da je pre putovanja neophodno kontaktirati Počasni konzulat u Beogradu ili najbližu ambasadu Tajlanda.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'TANZANIJA',
        info:
          'Državljani Srbije mogu ulaziti u Tanzaniju. Ukoliko dražava polaska ili avio-kompanija kojom su doputovali traže negativan test kao uslov za putovanje, putnici su obavezni da pokažu rezultate testa prilikom ulaska u Tanzaniju. Svi putnici se detaljno proveravaju po dolasku, a, u slučaju potrebe, može se tražiti da se uradi brzi test. Strani državljani pod istim uslovima ulaze u Tanzaniju.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'TADžIKISTAN',
        info:
          'Državljani Srbije ne mogu da uđu u Tadzikistan, osim lica koja imaju odobrenje za stalni boravak ili na osnovu prethodno pribavljenog odobrenja nadležnih organa Tadzikistana u slučajevima postojanja bračnih ili rodbinskih veza. Nije potreban negativan test, ali je obavezan 14-to dnevni karantin. Testiranje obavezno samo u slučajevima postojanja simptoma bolesti.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'TOGO',
        info:
          'Državljani Srbije mogu da uđu u Togo. Neophodan je negativan PCR test, ne stariji od pet dana. Po dolasku na aerodrom u Togo putnici se podvrgavaju ponovnom testiranju. Takođe, i pre napuštanja Togoa putnici su dužni da urade PCR test. Troškove oba testa snose putnici. Po dolasku u Togo putnici su u obavezi da instaliraju mobilnu aplikaciju TOGO SAFE, koja mora biti aktivna tokom boravka i najmanje još 30 dana po napuštanju Togoa. U slučaju nepridržavanja ove mere, licu se može odrediti karantin i izreći novčana kazna.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'TONGA',
        info:
          'Svim stranim državljanima, uključujući državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju, osim uz specijalno odobrenje nadležnih organa. Obavezan je karantin od 14 dana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'TUVALU',
        info:
          'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'TUNIS',
        info:
          'Državljani Srbije mogu da uđu u Tunis. Neophodan je negativan PCR test, ne stariji od 72 sata. Putnici se odmah po ulasku u zemlju transportuju u hotel, o svom trošku, u kojem se boravi u karantinu nedelju dana. Nakon nedelju dana vrši se dodatno testiranje i ukoliko je rezulat negativan, karantin se prekida.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'TURSKA',
        info:
          'Državljani Srbije mogu ući u Tursku. Neophodan je negativan PCR test za sva lica starija od od šest godina. Test ne treba da bude stariji od 72 sata. Test je obavezan i za lica koja su u tranzitu. U slučaju da putnik ne poseduje negativan PCR test, obavezan je karantin na adresi koja se prijavi kao mesto boravka. Ukoliko se ne poseduje adresa boravka, mesto karantina će utvrditi nadležna zdravstvena uprava. Sedmog dana karantina se lica testiraju i ukoliko rezulat bude negativan karantin se prekida.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'TURKMENISTAN',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'TRINIDAD I TOBAGO',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'UGANDA',
        info:
          'U Ugandu mogu da uđu državljani Srbije. Neophodan je negativan PCR test, ne stariji od 120 sati.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'UJEDINjENI ARAPSKI EMIRATI',
        info:
          `Državljani Srbije mogu da uđu u UAE. Neophodan je negativan PCR test, ne stariji od 48 sati (za sve emirate osim za Abu Dabi). Dvostruko testiranje (PCR-test), pre putovanja i po dolasku u UAE nije više obavezno za UAE rezidente, turiste i tranzitne turiste koji dolaze iz 60-tak zemalja, uključujući Srbiju. Oni imaju mogućnost da se testiraju u Srbiji (test ne stariji od 48 sati) ili po sletanju na Dubai aerodrom. Nalaz testa sa aerodroma se dobija u roku od jednog do dva dana na mobilni telefon. U emiratu Dubai je obavezna samoizolacija do dobijanja rezultata testa sa aerodroma. Praćenje pridržavanja mere samoizolacije se obavlja preko mobilnog telefona (obavezna instalacija Al Hosn aplikacije). Za ulazak u Abu Dabi je neophodan PCR test, ne stariji od 72 sata. Putnici iz zemalja koje su na ''zelenoj listi'' i imaju negativan test nemaju obavezu karantina. Za putnike iz ostalih zemalja je obavezan karantin u trajanju od 10 dana i nošenje GPS narukvice. Po dolasku u Abu Dabi na aerodromu se radi dodatno PCR testiranje. Za one koji ostaju u Abu Dabiju duže od 6 dana neprekidno, obavezan je PCR test šestog dana i još jedan dvanaestog dana. Lista zemalja na zelenoj listi se može naći u sledećem linku:  <a href="https://visitabudhabi.ae/en/plan-your-trip/covid-safe-travel/permitted-countries" class="text-info" target="_blank" rel="noopener noreferrer">https://visitabudhabi.ae/en/plan-your-trip/covid-safe-travel/permitted-countries</a>   \n` +
          ' Specifičnost UAE je da između emirata Abu Dabi i Dubai postoji kontrolni punkt koji se ne može preći bez negativnog nalaza PCR ili DPI testa. Takođe, svi nerezidenti i rezidenti UAE, koji preko Dubai aerodroma dođu u UAE i nastave kopnom ka Abu Dabiju, na punktu će dobiti narukvicu kojom se prati obavezna samoizolacija u trajanju od 10 dana. Više informacija o režimu ulaska u Abu Dabi se može naći u sldećem linku:  \n',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'UKRAJINA',
        info:
          'Državljani Srbije mogu da uđu u Ukrajinu. Neophodna je polisa zdravstvenog osiguranja izdata od strane osiguravajuće kompanije registrovane u Ukrajini ili osiguravajuće kompanije koja ima predstavništvo ili ugovorne odnose sa osiguravajućom kompanijom – partnerom na teritoriji Ukrajine. Polisa mora da pokriva troškove lečenja COVID-19 i da važi sve vreme boravka u Ukrajini. Lica koja imaju stalni boravak u Ukrajini su izuzeta od posedovanja polise zdravstvenog osiguranja. Postoji obaveza samoizolacije za sva lica koja dolaze u Ukrajinu iz zemalja sa značajnom aktivnošću virusa COVID-19, uključujući i Srbiju. Osobe koje podležu samoizolaciji u obavezi su da instaliraju i aktiviraju mobilnu aplikaciju „Diй vdoma". Od samoizolacije su izuzeta lica koja poseduju negativan PCR test, ne stariji od 48 sati, deca mlađa od 12 godina, diplomate i članovi njihovih porodica, osobe koje dolaze u svrhu obuke u ustanovama za visoko obrazovanja, osobe koje su državljani zemalja sa značajnom aktivnošću virusa COVID-19 i nisu se nalazile na teritoriji tih država poslednjih 14 dana ili koje tranzitiraju preko teritorije Ukrajine i imaju dokumenta koja potvrđuju izlazak iz zemlje u periodu od 48 sati, vozači i članovi posada teretnih vozila i autobusa, koji obavljaju redovni prevoz, članove posada vazdušnih, pomorskih i rečnih brodova, članovi voznih i železničkih konvoja, javni radnici u oblasti kulture sa pozivom kulturne institucije. Ulazak i izlazak sa teritorije Donjecka, Luganska, Krima i Sevastopolja podrazumeva da strani državljani poseduju polisu zdravstvenog osiguranja na troškove lečenja od COVID-19.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'URUGVAJ',
        info:
          'Državljani Srbije ne mogu ući u Urugvaj osim lica koja imaju stalni boravak; nosioci diplomatskih i službenih pasoša koji stupaju na dužnost; lica koja traže spajanje porodice; lica koja dokažu ekonomski i pravni razlog za boravak u Urugvaju. Lica koja mogu ući u zemlju podležu odgovarajućim sanitarnim procedurama i dobijaju tzv. sanitarni pasoš nakon što elektronski prijave svoje putovanje i dostave negativan PCR test 72 sati pre ulaska u zemlju. Po ulasku u zemlju, obavezan je karantin od 14 dana. Isti može biti skraćen na sedam dana, ukoliko lice sedmog dana dobije negativan rezultat testiranja. Opširnije informacije se mogu dobiti u sledećem linku:  <a href="https://www.gub.uy/ingreso-uruguay-para-extranjeros" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gub.uy/ingreso-uruguay-para-extranjeros</a>  ',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'FILIPINI',
        info:
          'Državljani Srbije ne mogu da uđu niti tranzitiraju na Filipine osim supružnika i dece filipinskih državljana i nosioca boravišne dozvole. Prilikom dolaska podleže se medicinskoj evaluaciji i vrsti karantina koji bude određen. Pre putovanja, potrebno je kontaktirati najbližu ambasadu Filipina.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'FINSKA',
        info:
          'Državljani Srbije ne mogu da uđu u Finsku, osim lica koja imaju regulisan boravak. Tranzit je dozvoljen na aerodromima. Dozvoljen je ulazak u Finsku licima sa stalnim boravkom, članovima porodica i emotivnim partnerima finskih državljana (bez obzira na državljanstvo), kao i licima koja dolaze iz određenog broja evropskih i trećih država (samo esencijalna i putovanja vezana za posao u slučaju trećih zemalja). Samoizolacija u trajanju od 10 dana se preporučuje svim licima koja doputuju u Finsku iz rizičnih područja. Putnici mogu, ukoliko žele, da skrate period samoizolacije obavljajući dva PCR testa (prvi najranije 72 sata pre putovanja, drugi nakon tri dana samoizolacije po dolasku u Finsku). U slučaju da ne poseduju dokaz o negativnom testu urađenom pre putovanja, a žele da skrate period samoizolacije, putnici mogu da urade test odmah po dolasku u Finsku (usluga je besplatna i dostupna na aerodromu, više informacija u sledećem linku: https://www.finentry.fi/en/), pa zatim da urade drugi test nakon 72 sata. Nema potrebe za samoizolacijom i testiranjem u Finskoj ukoliko putnici poseduju medicinsku potvrdu da su u periodu kraćem od 6 meseci preležali Covid-19 ili ukoliko planiraju da borave u Finskoj manje od 72 sata i poseduju negativan test urađen najranije 72 sata pre dolaska u Finsku. Detaljne informacije dostupne su na internet adresi: https://thl.fi/en/web/infectious-diseases-and-vaccinations/what-s-new/coronavirus-covid-19-latest-updates/travel-and-the-coronavirus-pandemic Odgovori finske granične službe (na engleskom jeziku) na upite o režimu ulaska mogu se dobiti pozivom na tel. +358295420100 ili slanjem e-mejla na adresu: \n' +
          '  <a href="mailto:rajavartiolaitos@raja.fi" class="text-info" target="_blank" rel="noopener noreferrer">rajavartiolaitos@raja.fi</a>',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'FIDžI',
        info:
          'Državljani Srbije mogu da uđu u Fidzi. Neophodan je negativan PCR test, ne stariji od 48 sati. Takođe, obavezan je karantin od 14 dana.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'FRANCUSKA',
        info:
          'Državljanima Srbije koji nemaju regulisan boravak u Francuskoj ili u nekoj od zemalja EU, nije dozvoljen ulazak na teritoriju Francuske. Tranzit preko aerodroma u Francuskoj je moguć samo ukoliko ne podrazumeva napuštanje međunarodne zone i ukoliko ne traje duže od 24 sata. Za putnike koji dolaze iz Srbije, obavezan je negativan PCR test, ne stariji od 72 sata (osim za decu mlađu od 11 godina), kao i nakon ulaska samoizolacija u trajanju od 7 dana. Putnicima koji nemaju negativan PCR test, ne dozvoljava se ukrcavanje u avion. Izuzetno može biti dozvoljen ulazak za putnike iz Srbije koji dolaze u Francusku radi vršenja osnovne profesionalne aktivnosti, studija, nastavne aktivnosti ili iz medicinskih razloga. Za dobijanje specijalne dozvole za ulazak u Francusku, nadležna je Ambasada Francuske u Beogradu. Za više informacija o režimu ulaska u Francusku, molimo da posetite internet stranicu Ambasade Srbije u Parizu:  <a href="http://www.paris.mfa.gov.rs/odrzavanje/uploads/Režim_ulaska_u_Francusku_16_11_2020.pdf" class="text-info" target="_blank" rel="noopener noreferrer">http://www.paris.mfa.gov.rs/odrzavanje/uploads/Režim_ulaska_u_Francusku_16_11_2020.pdf</a>  ',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'HAITI',
        info:
          'Državljani Srbije mogu da uđu u Republiku Haiti. Neophodan je negativan test, ne stariji od 72 časa. Kopnena granica sa Dominikanskom Republikom je zatvorena.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'HOLANDIJA',
        info:
          'Državljani Srbije ne mogu da ulaze u Holandiju ukoliko nemaju regulisan boravak ili ukoliko ne potpadaju pod neki od izuzetaka od zabrane ulaska u Holandiju. Licima koja potpadaju pod izuzetak od zabrane putovanja i koja dolaze iz Srbije se savetuje da budu u kućnom karantinu u trajanju od 10 dana. Tranzit je dozvoljen. Dozvoljava se ulazak licima koja imaju neodložnu i hitnu potrebu da posete svoje porodice (neizlečiva bolest ili u slučaju sahrane), osobama kojima je potrebna međunarodna zaštita, osobama koje se primaju iz humanitarnih razloga, studentima, visoko obrazovanim migrantima i osobama koje su u emotivnoj vezi sa holandskim državljanima. Od 29. decembra 2020. godine lica koja dolaze avionom u Holandiju moraju da poseduju negativan test, ne stariji od 72 sata. Potrebno je da to bude molekularni PCR test i test na Sars-Cov-2/COVID-19. Drugi tipovi testa, uključujući brzi test, se ne prihvataju. Navedena odluka se odnosi na sve osobe (starije od 13 godina) koje dolaze avionom u Holandiju iz oblasti koje su definisane kao visoko rizične po pitanju širenja virusa, što trenutno obuhvata gotovo sve zemlje Evrope i sveta. Negativan test je obavezan i za holandske državljane i državljane EU, a odnosi se i na putovanja izvan teritorije EU u Holandiju, kao i na putovanja iz ostalih država EU u Holandiju. Odluka o obavezi posedovanja negativnog testa se ne odnosi na ulazak u Holandiju kopnenim putem. Dodatne informacije o proceduri ulaska i izuzecima od zabrane putovanja mogu se naži u sledežem linku:  <a href="https://www.government.nl/topics/coronavirus-covid-19/tackling-new-coronavirus-in-the-netherlands/travel-and-holidays/visiting-the-netherlands" class="text-info" target="_blank" rel="noopener noreferrer">https://www.government.nl/topics/coronavirus-covid-19/tackling-new-coronavirus-in-the-netherlands/travel-and-holidays/visiting-the-netherlands</a>  ',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'HONDURAS',
        info:
          'Državljani Srbije mogu da uđu u Honduras. Neophodan je negativan PCR test, ne stariji od 72 sata, ili negativan brzi kovid test. Takođe, potrebno je registrovati se u imigracionom institutu (https://prechequeo.inm.gob.hn/Login).',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'HRVATSKA',
        info:
          'Državljani Srbije koji u Hrvatsku putuju iz turističkih ili drugih privrednih interesa, školovanja, neodložnih razloga (npr. lečenje, smrtni slučaj, vlasnici nekretnina u Hrvatskoj i dr.) ili drugih ličnih neodložnih razloga mogu ući u Hrvatsku uz negativni PCR test, ne stariji od 48 sati ili PCR testiranjem po dolasku u Hrvatsku uz obaveznu samoizolaciju do dobijanja negativnog nalaza. Za lica u tranzitu nije potreban test, ali je neophodan dokaz da je odobren ulazak u sledeću zemlju. Tranzit ne sme biti duži od 12 sati. Državljani zemalja EU i Šengena mogu ulaziti u Hrvatsku uz određena ograničenja.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'CENTRALNOAFRIČKA REPUBLIKA',
        info:
          'Državljani Srbije mogu sa važećom vizom da uđu u Centralnoafričku Republiku ili tranzitiraju. Nije potrebno testiranje.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'CRNA GORA',
        info:
          'Državljani Srbije mogu ući u Crnu Goru bez posedovanja negativnog PCR testa preko svih graničnih prelaza, uz poštovanje zdravstvenih mera, u skladu sa zdravstvenim upozorenjem Instituta za javno zdrvlje Crne Gore. Zdravstveno upozorenje dostupno je na svim graničnim prelazima u Crnoj Gori i objavljuje se na internet stranici Ministarstva zdravlja i Instituta za javno zdravlje Crne Gore. Obrazac zdravstvenog upozorenja možete preuzeti sa ove internet adrese: https://mzd.gov.me/ResourceManager/FileDownload.aspx?rid=422471&rType=2&file=Obavje%C5%A1tenje%20-%20zdravstveno%20upozorenje%20IJZCG%2011.01.2021.pdf  Detalji u vezi sa ulaskom stranih državljana u Crnu Goru se mogu naći u sledećem linku:  <a href="https://www.gov.me/naslovna" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.me/naslovna</a>  ',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'ČAD',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ČEŠKA REPUBLIKA',
        info:
          'Državljni Srbije ne mogu da uđu u Češku Republiku osim lica sa regulisanim boravakom. Izuzetak su određene kategorije lica kao što su: članovi porodice čeških državljana; ako je ulazak u interesu Češke; hitne situacije – unapred zakazana medicinska intervencija, odazivanje na poziv državnog organa; tranzit kroz Češku; radnici u međunarodnom transportu; diplomate akreditovane u Češkoj i članovi njihovih porodica; kao i partneri čeških državljana. Sva lica koja su u prethodnih 14 dana provela više od 12 sati u nekoj od zemalja koje nisu na listi zemalja sa niskim rizikom od COVID-19, dužna su da se pre ulaska u Češku, prijave nadležnom regionalnom zavodu za javno zdravlje, slanjem popunjenog formulara koji se može preuzeti putem sledećeg linka  <a href="https://plf.uzis.cz" class="text-info" target="_blank" rel="noopener noreferrer">https://plf.uzis.cz</a>  /. Kopiju navedenog formulara dužna su da prezentuju prilikom kontrole na granici, kao i sve vreme boravka u Češkoj. U roku od 5 dana od dana ulaska u Češku dužna su da se testiraju i ograniče svoje kretanje.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ČILE',
        info:
          'Državljani Srbije mogu ući u Čile. Strani državljani koji nemaju stalni boravak u Čileu mogu ući u zemlju vazdušnim putem sa sletanjem isključivo na međunarodni aerodrom Arturo Merino Benitez u blizini Santjaga. Uslov za ukrcavanje u avion je negativan PCR test, ne stariji od 72 sata. Obavezno je zdravstveno osiguranje kojim je pokriveno i lečenje od COVID-19 i koje nije ispod vrednosti od 30.000 američkih dolara. Prilikom sletanja u Čile popunjavaju se odgovarajući formulari, uključujući tzv. formular o praćenju kretanja, čiji sadržaj se može naći na sledećoj veb stranici https://www.c19.cl/formularios.html. Strani državljani koji dolaze iz zemalja koje se, u datom trenutku, nalaze u kategoriji „Community Transmission" na listi Svetske zdravstvene organizacije (https://covid19.who.int/table), podležu obaveznom karantinu od 14 dana. Državljani Čilea kao i strani državljani koji imaju stalni boravak podležu obaveznom karantinu od 14 dana, samo ukoliko nisu uradili testiranje pre puta ili po dolasku u Čile.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'DžIBUTI',
        info:
          'Državljani Srbije mogu da uđu u Džibuti. Neophodan je negativan PCR test. Po dolasku u Džibuti radi se i brzi test.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ŠVAJCARSKA',
        info:
          'Državljani Srbije ne mogu da uđu u Švajcarsku Konfederaciju osim lica koja imaju regulisani boravak. Lica koja imaju pravo da uđu iz Srbije u Švajcarsku moraju da najave svoj dolazak popunjavanjem prijave na sajtu  <a href="https://swissplf.admin.ch/home" class="text-info" target="_blank" rel="noopener noreferrer">https://swissplf.admin.ch/home</a> , ali samo ako dolaze avionom, autobusom, vozom ili brodom. Putnici koji dolaze iz Srbije avionom, od 08.02.2021. mora da poseduju i negativan PCR test. Tranzit je dozvoljen za lica koja poseduju regulisan boravak u odredišnoj zemlji u Šengenskom prostoru. U tom slučaju, potrebno je staviti na uvid dokaz o nameri i mogućnosti ulaska u tu zemlju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ŠVEDSKA',
        info:
          'Državljani Srbije ne mogu da uđu u Švedsku. Nije dozvoljen ni tranzit državljana Srbije preko aerodroma u Švedskoj. Izuzetak su lica koja imaju regulisan boravak. Pogranični organi su ovlašćeni za izricanje mera karantina ukoliko procene da je potrebno. Stranim državljanima iz država van EU nije dozvoljen ulazak u Švedsku, a zabrana se odnosi i na putnike u tranzitu. Zabrana ulaska se ne odnosi na državljane članica EU, državljane UK, Norveške, Islanda, Lihtenštajna, Andore, Monaka, San Marina, Švajcarske i Vatikana, kao i Australije, Kanade, Gruzije, Japana, Novog Zelanda, Ruande, Južne Koreje, Tajlanda, Tunisa i Urugvaja. ŠPANIJA Državljani Srbije ne mogu da uđu u Španiju. Od navedenog su izuzeta lica sa stalnim ili privremenim boravkom u Španiji i zemljama EU i Šengena, nosioci dugotrajne vize, studenti sa odgovarajaućom dozvolom, diplomatsko osoblje u cilju vršenja dužnosti, visokokvalifikovani radnici čiji je rad neophodan i ne može se odložiti ili obavljati na daljinu, uključujući učesnike sportskih događaja na visokom nivou, lica koja putuju iz propisno akreditovanih imperativnih porodičnih razloga i lica koji dokumentuju razloge više sile ili potrebe, ili im je ulazak dozvoljen iz humanitarnih razloga. Takođe, izuzeta su i lica sa boravkom u zemaljama - Australija, Kanada, Gruzija, Japan, Novi Zeland, Ruanda, Južna Koreja, Tajland, Tunis, Urugvaj i Kina, pod uslovom da dolaze direktno iz tih zemalja. Od 23. novembra je neophodan negativan PCR test, ne stariji od 72 sata za putnike koji ulaze u Španiju iz rizičnih zemalja EU (crvena i siva zona) i 37 trećih zemalja, među kojima je i Srbija. Svi putnici moraju da popune zdravstveni obrazac pre ulaska u zemlju putem internet adrese  <a href="http://www.spth.gob.es" class="text-info" target="_blank" rel="noopener noreferrer">http://www.spth.gob.es</a>  ili putem besplatne aplikacije SPAIN TRAVEL HEALTH-SpTH.\n' +
          '\n',
        status: 'CLOSED_BORDER',
      },
    ];

    const classifiedCountries = await nlpService.getClassifiedCountries(
      countriesInfo,
    );

    expect(classifiedCountries).toMatchObject(result);
  });
});

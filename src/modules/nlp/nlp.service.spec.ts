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
          'Državljani Srbije ne mogu da uđu ili tranzitiraju jer su sve granice Azerbejdžana zatvorene za putnički saobraćaj. Državljani Srbije koji u hitnom slučaju treba da putuju u Azerbejdžan treba da podnesu zahtev za vizu u Ambasadi Azerbejdžana u Beogradu. \n' +
          'Strani državljani i diplomate da bi dobili dozvolu za ulazak u zemlju od 1. marta moraju da dostave lekarsko uverenje o negativnom rezultatu testa sa QR kodom (isto važi i za izlazak iz zemlje). Putnici koji u sertifikatu u kojem se navode rezultati ispitivanja nemaju QR kod neće biti primljeni na letove. Po dolasku u Azerbejdžan, strani državljani se pregledaju i u slučaju sumnje na infekciju, lice se, bez obzira na državljanstvo, nacionalnost i svrhu putovanja, smešta u karantin od 14 dana u specijalizovanoj medicinskoj ustanovi. \n' +
          'Referentne klinike i laboratorije u Azerbejdžanu za testiranje na koronavirus (COVID-19) mogu se naći na sledećem linku:  <a href="https://www.azal.az/en/information/covid-clinics" class="text-info" target="_blank" rel="noopener noreferrer">https://www.azal.az/en/information/covid-clinics</a>',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ALBANIJA',
        info:
          'Državljani Srbije mogu ući u Albaniju bez posebnih uslova. Nije potreban PCR test,  niti se izriče mera karantina.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'ALŽIR',
        info:
          'Državljani Srbije ne mogu da uđu u Alžir, kao ni drugi strani državljani.   \n' +
          'Zatvoreni su svi granični prelazi i obustavljen je međunarodni putnički saobraćaj – vazdušni, kopneni i pomorski. Izuzetak predstavljaju predstavnici stranih diplomatko-konzularnih predstavništava i radnici humanitarnih misija kojima se, uz prethodnu notifikaciju, dozvoljava ulazak, kao i predstavnici stranih kompanija koje imaju poslovni angažman u Alžiru, uz prethodnu saglasnost nadležnih alžirskih vlasti i obavezu 14-odnevnog karantina.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ANGOLA',
        info:
          'Državljani Srbije mogu da uđu na teritoriju Angole ukoliko poseduju negativan PCR test, ne stariji od 72 sata. Pored toga, neophodno je 72 sata pre putovanja popuniti formular za prijavu dolaska („Formulário de registo de viagem“), koji se može naći na internet strani  <a href="www.covid19.gov.ao" class="text-info" target="_blank" rel="noopener noreferrer">www.covid19.gov.ao</a> . Karantin je obavezan od prvog dana ulaska. Strani državljani sa prebivalištem u Angoli i akreditovane diplomate, koji ulaze sa netativnim PCR u obavezi su da provedu sedam dana u kućnom karantinu. Stranci bez stalnog prebivališta u zemlji moraju da ostanu u vaninstitucionalnom karantinu pri čemu troškove boravka snose sami. Po isteku sedmodnevnog karantina potrebno je uraditi brzi tzv. serološki test. Ako je rezultat testa negativan, karantin se završava i dobija se pismeno odobrenje zdravstvenih vlasti Angole za slobodno kretanje. Troškovi testiranja iznose 20.000 kvanzi (oko 25 evra). U slučaju da je rezultat testa pozitivan, lice ostaje u izolaciji i mora poštovati konkretna uputstva angolskih zdravstvenih vlasti.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ANDORA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju osim lica koja imaju regulisan boravak. Obavezna je  samoizolacija u trajanju od 15 dana. \n' +
          'Ulazak u Andoru je dozvoljen državljanima i rezidentima zemalja članica EU, Islanda, Lihtenštajna, Monaka, Norveške, V.Britanije, San Marina, Švajcarske i Vatikana.',
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
          'Državljani Srbije ne mogu ući u zemlju osim ako su: lica koja imaju regulisan stalni boravak u Argentini ili nekoj od pograničnih država; nosioci diplomatskih i službenih pasoša. Uz posebnu prethodnu dozvolu mogu ući i državljani Srbije koji dolaze u Argentinu u diplomatsku misiju, iz poslovnih razloga, na sportsko takmičenje ili radi spajanja porodice. U navedenim slučajevima je potrebna posebna viza, a pomenuta dozvola se dobija posredstvom Ambasade Argentine u Beogradu. Državljani Argentine i susednih država, kao i oni koji imaju stalni boravak u Argentini ili nekoj od susednih država, pre ulaska u zemlju moraju imati negativan PCR test, ne stariji od 72 sata. Takođe se zahteva prethodno slanje elektronskim putem tzv. izjave o odgovornosti da je putnik upoznat sa svim sanitarnim propisima i procedurama u Argentini i dokaz o zdravstvenom osiguranju, koje pokriva i bolničke troškove vezano za lečenje od SARS-CoV-2 . Obavezan je karantin od 10 dana. Prilikom ulaska u Argentinu putnici se testiraju na aerodoromu. U slučaju da je test pozitivan, dotično lice se upućuje u specijalno određen karantinski smeštaj za koji samo snosi troškove boravka.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'AUSTRALIJA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju, osim onih lica koja imaju odobren stalni boravak i članova njihove uže porodice. Mogućnost ulaska postoji ako su u pitanju humanitarni ili dovoljno ubedljivi razlozi uz prethodno pribavljanje dozvole od strane nadležnih organa. Obavezan je karantin od 14 dana, u za to posebno opredeljenim objektima, a troškove boravka u izolaciji snose sami putnici. Obavezan je negativan PCR test, ne stariji od 72 sata. \n' +
          'Tranzit državljana Srbije je dozvoljen uz posedovanje tranzitne vize (ukoliko je vreme provedeno u tranzitu do 8 sati) i dozvole za izuzeće od obaveznog karantina (ukoliko je vreme provedeno u tranzitu od 8-72 sata). \n' +
          'Ulazak u Australiju dozvoljen je samo državljanima Australije, licima koja imaju odobren stalni boravak i članovima njihovih užih porodica, kao i državljanima Novog Zelanda koji obično prebivaju u Australiji.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'AUSTRIJA',
        info:
          'Državljanima Srbije nije dozvoljen ulazak u Austriju, osim onima koji imaju regulisan boravak u Austriji, kao i u posebnim slučajevima, i to za lica koja u Austriju putuju: iz poslovnih razloga; jednom licu u pratnji osobe koja u Austriju dolazi u svrhu medicinskog lečenja; radi početka ili nastavka studija, odnosno u cilju naučnog istraživanja; radi učešća u školskim aktivnostima; radi prisustvovanja sudskim ili administrativnim postupcima pred austrijskim nadležnim organima; članovima osoblja diplomatskih predstavništava, zaposlenima u međunarodnim organizacijama i licima koja sa njima žive u zajedničkom domaćinstvu; humanitarno osoblje; zbog planiranih važnih događaja u krugu porodice (venčanja, krštenja, rođendani, neperiodične posete životnom partneru). Navedene kategorije lica su u obavezi da prilikom ulaska na granici prilože dokaz o svrsi putovanja, odnosno dokaz da pripadaju jednoj od navedenih kategorija. Pre putovanja u Austriju obavezna je elektronska registracija, koja se može obaviti najranije 72 sata pre putovanja, te i obaveza posedovanja potvrde o izvršenoj elektronskoj registraciji (u štampanoj ili elektronskoj formi) prilikom granične kontrole. Elektronsku registraciju (Pre – Travel Clearance – PTC) je moguće izvršiti na sledećoj veb-stranici:  <a href="https://entry.ptc.gv.at" class="text-info" target="_blank" rel="noopener noreferrer">https://entry.ptc.gv.at</a> . Od 11.marta 2021. godine prilikom ulaska u Austriju potrebno je imati negativan PCR test, ne stariji od 72 sata od momenta uzimanja uzorka ili negativan antigenski test, ne stariji od 48 sati od momenta uzimanja uzorka. Ukoliko lice ne poseduje navedeni test u obavezi je da uradi test u Austriji u roku od 24 sata. I pored toga važi obaveza 10-dnevnog karantina, koji je moguće prekinuti najranije petog dana, ukoliko lice dobije negativan nalaz na testu na korona virus (pored PCR prihvataju se i anti-gen testovi). Izuzeci od navedenog pravila (koji nisu u obavezi da budu u 10-dnevnom karantinu) ali su, ukoliko dolaze iz Srbije ili iz neke od tzv. „rizičnih zemalja“, u obavezi da poseduju negativan PCR test ne stariji od 72 sata ili negativan antigenski test ne stariji od 48 sati, jesu sledeće kategorije: lica koja putuju iz službenih razloga; lica koja u Austriju dolaze kako bi učestvovala u sudskom procesu; lice u pratnji osobe koja u Austriju dolazi iz medicinskih razloga; diplomate akreditovane u Austriji; pripadnici humanitarnih konvoja. Lica koja spadaju u izuzetke, tj. koja nisu u obavezi da budu u karantinu, takođe su u obavezi da izvrše elektronsku registraciju i tom prilikom treba da označe polje ,,putovanje spada u izuzetak na osnovu člana 4. ili 5”. Tranzit kroz Austriju je dozvoljen bez zadržavanja, odnosno ukoliko je zagarantovano napuštanje zemlje bez odlaganja. Nije potreban test za tranzit, kao ni elektronska registracija. Deca do navršene 10. godine života ne moraju imati negativan test radi ulaska u Austriju, s tim da i za njih važe sve odredbe kao i za odraslu osobu pod čijim nadzorom putuju. Ulazak u Austriju bez testa i bez karantina moguć je u sledećim slučajevima: lica koja obavljaju putnički i teretni saobraćaj; lica koja dolaze zbog nege životinja/poljoprivrednih razloga; profesionalni vozači/piloti; lica koja dolaze iz posebnih interesa za Austriju; putnici u tranzitu bez zaustavljanja, čak i u slučajevima kad postoji nužna pauza u Austriji (npr. pauza između letova i sl); pripadnici službi bezbednosti koji sprovode repatrijaciju; lica koja voze vozila javnih službi (hitna pomoć, vatrogasna i policijska vozila); lica koja dolaze iz  <a href="https://www.sozialministerium.at/Informationen-zum-Coronavirus/Coronavirus---Haeufig-gestellte-Fragen/FAQ--Reisen-und-Tourismus.html" class="text-info" target="_blank" rel="noopener noreferrer">https://www.sozialministerium.at/Informationen-zum-Coronavirus/Coronavirus---Haeufig-gestellte-Fragen/FAQ--Reisen-und-Tourismus.html</a>  u krugu porodice u pojedinačnim slučajevima (npr. smrtni slučaj, sahrana, rođenje); lica koja dolaze radi medicinskog lečenja uz posedovanje potvrde austrijske medicinske ustanove o neophodnosti medicinskog lečenja u Austriji. Ulazak u Austriju iz država EU, EEZ, odnosno Švajcarske, Andore, Monaka, San Marina, Vatikana je dozvoljen bez negativnog PCR testa i karantina, pod uslovom da lica dolaze i dokažu da su u prethodnih 10 dana boravila u jednoj od zemalja koje se nalaze na listi tzv. ,,bezbednih država”  (lista A). Ulazak u Austriju iz ,,trećih država” dozvoljen je isključivo ukoliko se nalaze na listi tzv. ,,bezbednih država” (lista A). Lista A se može  naći na sledećem linku:  <a href="https://www.sozialministerium.at/Informationen-zum-Coronavirus/Coronavirus---Rechtliches.html" class="text-info" target="_blank" rel="noopener noreferrer">https://www.sozialministerium.at/Informationen-zum-Coronavirus/Coronavirus---Rechtliches.html</a> . Konačnu odluku o ulasku u Austriju donose nadležni pogranični organi.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'BARBADOS',
        info:
          'Državljani Srbije mogu da uđu na Barbados s tim što je neophodno da popune formular o ulasku i izlasku najkasnije 24 časa pre puta. Formular se može naći i podneti na  <a href="www.travelform.gov.bb" class="text-info" target="_blank" rel="noopener noreferrer">www.travelform.gov.bb</a> . Potreban je negativan PCR test, ne stariji od 72 sata. Ukoliko se ne poseduje test, isti će se uraditi na aerodromu. \n' +
          'Osobe koje dolaze iz zemalja visokog rizika bez testa, biće primorane da rezulat čekaju na aerodromu. Osobe iz zemalja srednjeg rizika bez testa, rezulat testa čekaju u svom smeštaju. Osobe iz zemalja niskog rizika bez testa, koje nisu putovale u periodu od 21 dana u zemlje visokog rizika, mogu priložiti negativan test ne stariji od 7 dana. Visinu rizika zemalja određuje sedmična lista Svetske zdravstvene organizacije o broju zaraženih. \n' +
          'Navedeno važi i za tranzit.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BAHAMI',
        info:
          'Državljani Srbije mogu da uđu na Bahame. Aerodromi su zvanično otvoreni, ali se preporučuje da se pre putovanja kontaktira avio kompanija kojom se putuje. Neophodan je negativan PCR test, ne stariji od pet dana. Deci ispod 10 godina nije potreban test. Takođe, neophodna je tzv. zdravstvena viza za koju je potrebno podneti zahtev preko sledećeg sajta:  <a href="www.travel.gov.bs" class="text-info" target="_blank" rel="noopener noreferrer">www.travel.gov.bs</a> . Obrada zahteva za ovu vizu traje 72 sata, a cena zavisi od planirane dužine boravka. Putnici koji žele da na Bahamima ostanu duže od četiri dana, moraju na Bahamina uraditi novi brzi test na COVID-19.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BAHREIN',
        info:
          'Državljani Srbije mogu da uđu u Bahrein.  \n' +
          'Putnici po dolasku na međunarodni aerodrom u Bahreinu podležu PCR testiranju, prijavljuju se preko aplikacije "Be Aware Bahrain" i imaju obavezu samoizolacije. Ako je prvi test negativan, ostaje se u samoizolaciji u trajanju od 10 dana. Posle petog dana, ponovo se vrše PCR testiranje i ako je rezultat negativan, ostaje se u samoizolaciji. Testiranje po treći put se vrši nakon desetog dana samoizolacije i ukoliko je rezultat negativan, lice može da se slobodno kreće. Troškove obaveznog testiranja snose putnici (36 BHD-a po testu). Rezidenti Bahreina imaju pravo besplatnog medicinskog tretmana na korona virus.  \n' +
          'Tranzitni putnici se ne testiraju.',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'BELGIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Belgiju. Ulazak je dozvoljen samo licima koja imaju regulisan boravak u Belgiji i licima koja imaju suštinski razlog za putovanje, uz odgovarajući dokaz o razlogu putovanja (medicinski radnici, visokokvalifikovani radnici čije prisustvo je neophodno, studenti, lica koja putuju iz hitnih porodičnih razloga (spajanje porodice, poseta supružniku ili vanbračnom partneru, poseta u kontekstu zajedničkog roditeljstva, putovanja radi venčanja ili sahrane za prvi ili drugi stepen srodstva i sl.), lica koja dolaze na sastanke koje organizuju međunarodne organizacije i sl). Dozvola se dobija preko Ambasade Belgije u Beogradu. \n' +
          'Svi putnici imaju obavezu da popune Public Health Passenger Locator Form, 48 sati pre ulaska u Belgiju, osim putnika koji putujy drugim prevoznim sredstvom osim aviona ili broda i zadržaće se u Belgiji kraće od 48 sati. Putnici koji dolaze avionom ili brodom moraju da popune Public Health Passenger Locator Form, bez obzira na to koliko vremena će boraviti u Belgiji. Nakon popunjavanja formulara, putnik će dobiti SMS ili e-mejl sa dodatnim informacijama. \n' +
          'Nakon ulaska u Belgiju obavezna je samoizolacija i testiranje koje se vrši prvog dana po ulasku, i ponovo, sedmog dana od ulaska. Ukoliko je i drugi test negativan, samoizolacija se ukida, a ukoliko je rezultat pozitivan ili se pojave simptomi bolesti, samoizolacija se produžava na još sedam dana. Lice koje u Belgiji boravi kraće od 48 sati, nema obavezu samoizolacije. \n' +
          'Lica koja nemaju državljanstvo Belgije, odnoso nisu rezidenti Belgije, prilikom ulaska moraju da poseduju negativan PCR test, ne stariji od 48 sati. \n' +
          'Putnici koji dolaze avionom i dobiju SMS poruku da moraju da se testiraju, to mogu učiniti u Kovid test centru na briselskom aerodromu -  <a href="https://brusselsairport.ecocare.center/" class="text-info" target="_blank" rel="noopener noreferrer">https://brusselsairport.ecocare.center/</a>  . \n' +
          'Lista medicinskih ustanova u Belgiji u kojima je moguće uraditi test je dostupna u sledećem linku:      <a href="https://www.google.com/maps/d/viewer?mid=1cnNOMDS13iosY53TyRBz7SdIeJ7gTShY&ll=50.654111784975065%2C4.393965958984363&z=10 ." class="text-info" target="_blank" rel="noopener noreferrer">https://www.google.com/maps/d/viewer?mid=1cnNOMDS13iosY53TyRBz7SdIeJ7gTShY&ll=50.654111784975065%2C4.393965958984363&z=10 .</a> \n' +
          'Tranzit je dozvoljen, uz obavezu popunjavanja Public Health Passenger Locator Form. Ukoliko tranzit obuhvata određeno vreme boravka na teritoriji Belgije, lice koje tranzitira, to vreme mora provesti u samoizolaciji. Više informacija je dostupno na  <a href="https://www.info-coronavirus.be/en/faq/#faq i na https://dofi.ibz.be/sites/dvzoe/EN/Pages/Travel-to-Belgium.aspx" class="text-info" target="_blank" rel="noopener noreferrer">https://www.info-coronavirus.be/en/faq/#faq i na https://dofi.ibz.be/sites/dvzoe/EN/Pages/Travel-to-Belgium.aspx</a> , gde se može preuzeti i Public Health Passenger Locator Form.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'BELIZE',
        info:
          'Državljani Srbije mogu da uđu u Belize. Aerodromi su otvoreni dok prelazak granice drumskim i vodenim putem nije moguć. Neophodan je negativan test (PCR ili serološki), ne stariji od 72 sata. Ukoliko istekne važnost testa, na aerodromu se može uraditi brzi test po ceni od 50 USD. Potrebno je da se preuzme zdravstvena aplikacija 72 sata pre dolaska ( <a href="https://www.covid19.bz/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.covid19.bz/</a> ).',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'BELORUSIJA',
        info:
          'Državljani Srbije mogu da uđu u Belorusiju isključivo preko aerodroma „Minsk" uz obaveznu meru samoizolacije u trajanju od 10 dana, bez obzira na posedovanje negativnog PCR testa. U periodu samoizolacije nije moguće napuštati teritoriju Belorusije.  \n' +
          'Ulazak u Belorusiju stranih državljana, uključujući i državljane Srbije, kopnenim, železničkim i rečnim putem privremeno je obustavljen uz izuzetak stranih državljana koji su supružnici, roditelji ili deca beloruskih državljana, stranih državljana sa regulisanim stalnim ili privremenim boravkom i stranih državljana koji poseduju belorusku radnu dozvolu. Navedeno ograničenje se ne odnosi na posade teretnih motornih vozila prilikom obavljanja poslova međunarodnog prevoza u drumskom i poštanskom saobraćaju, kao ni na posade brodova, aviona i vozova.',
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
          'Državljani Srbije ne mogu da uđu u Boliviju.  \n' +
          'Bolivija ne dozvoljava ulazak strancima u Boliviju, osim u veoma izuzetnim slučajevima za koje se predviđa rigorozna procedura. Međunarodni letovi su suspendovani.',
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
          'Državljani Srbije mogu da uđu u Brazil isključivo vazdušnim putem. Neophodan je negativan PCR test, ne stariji od 72 sata pre trenutka ukrcavanja na avion. Deca mlađa od 12 godina ne moraju imati PCR test ukoliko putuju u pratnji osoba koje poseduju negativan PCR test. Deca uzrasta od dve do dvanaest godina koja putuju bez pratnje moraju imati negativan PCR test. Deca mlađa od dve godine ne moraju posedovati rezultat testa. Takođe, potrebna je i potvrda o zdravstvenom stanju putnika (odštampana ili u elektronskoj formi) kojom putnik izjavljuje da je saglasan sa poštovanjem sanitarnih mera, kojih mora da se pridržava dok je u Brazilu. (link za formular potvrde:   <a href="https://formulario.anvisa.gov.br" class="text-info" target="_blank" rel="noopener noreferrer">https://formulario.anvisa.gov.br</a> ).',
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
          'Državljani Srbije mogu da uđu u Bugarsku sa jednim od sledećih dokumenata: dokument o potpuno završenoj vakcinaciji protiv COVID-19; negativan PCR test, ne stariji od 72 sata ili negativan brzi antigen test, ne stariji od 48 sati (računajući od datuma testiranja upisanog u dokument). Državljani Srbije koji su preležali COVID-19, osim sa gore navedenim dokumentima, mogu ući i sa dokumentom koji pokazuje pozitivan rezultat PCR testiranja ili brzog antigen testa u periodu od 15. do 180. dana (računajući od datuma testiranja upisanog u dokument). Detaljna informacija, uključujući i listu priznatih vakcina i brzih antigen testova, može se naći na sajtu Ambasade Srbije u Bugarskoj :  <a href="http://sofia.mfa.gov.rs/cir/" class="text-info" target="_blank" rel="noopener noreferrer">http://sofia.mfa.gov.rs/cir/</a>',
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
          'Državljani Srbije mogu da uđu u Burundi. Neophodan je negativan PCR test, ne stariji do 72 sata. \n' +
          'Po dolasku na aerodrom u Budžumburi, svi putnici se podvrgavaju dodatnom testiranju i smeštaju u hotele koji su namenjeni za tu svrhu. Obavezan je karantin do dobijanja negativnog rezultata PCR testa. Troškovi testa i smeštaja u hotelu idu na teret putnika.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'VANUATU',
        info:
          'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju. VELIKA BRITANIJA I SEVERNA IRSKA \n' +
          'Državljani Srbije mogu ući ili tranzitirati kroz Ujedinjeno Kraljevstvo pod uslovom da imaju validnu vizu. Sva lica koja dolaze iz inostranstva, uključujući britanske državljane, prilikom ulaska u Englesku avionom, brodom ili vozom moraju posedovati negativan PCR test, ne stariji od 72 sata. U suprotnom je predviđena kazna od 500 funti. \n' +
          'Pri ulasku u Ujedinjeno Kraljevstvo neophodno je da se elektronskim putem unapred popuni formular za praćenje kretanja - Passenger Locator Form ( <a href="https://www.gov.uk/provide-journey-contact-details-before-travel-uk" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.uk/provide-journey-contact-details-before-travel-uk</a> ). Putnici u tranzitu su takođe u obavezi da popune ovaj formular. Za nepopunjavanje navedenog formulara predviđena je kazna u visini od 500 funti. \n' +
          'Svi putnici, uključujući i državljane Srbije, ukoliko dolaze iz Srbije ili iz zemalja koje se, uz Srbiju, ne nalaze na listi sigurnih zemalja ( <a href="https://www.gov.uk/guidance/coronavirus-covid-19-travel-corridors#countries-territories-and-regions-on-the-travel-corridor-list" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.uk/guidance/coronavirus-covid-19-travel-corridors#countries-territories-and-regions-on-the-travel-corridor-list</a> ) a u kojima su do ulaska u Ujedinjeno Kraljevstvo boravili dve nedelje ili kroz koje su tranzitirali, dužni su da budu u samoizolaciji u trajanju od deset dana. Period trajanja desetodnevne izolacije može biti skraćen ukoliko putnici najranije petog dana po dolasku urade test i dobiju negativan rezultat. Testovi se rade o trošku putnika u nekoj od akreditovanih laboratorija sa liste:  <a href="https://www.gov.uk/government/publications/list-of-private-providers-of-coronavirus-testing/list-of-private-providers-of-coronavirus-testing" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.uk/government/publications/list-of-private-providers-of-coronavirus-testing/list-of-private-providers-of-coronavirus-testing</a> . Takođe, svi putnici koji dolaze u Ujedinjeno Kraljevstvo dužni su da, o svom trošku, urade test drugog i osmog dana nakon početka karantina. Testove je potrebno rezervisati unapred putem sledećeg portala:  <a href="https://quarantinehotelbookings.ctmportal.co.uk/" class="text-info" target="_blank" rel="noopener noreferrer">https://quarantinehotelbookings.ctmportal.co.uk/</a> . \n' +
          'Za putnike koji putuju u Škotsku, Vels i Severnu Irsku, a ne dolaze iz zemalja sa „crvene liste“, takođe, važi obaveza desetodnevne samoizolacije, ali bez mogućnosti skraćenja.',
        status: 'CLOSED_BORDER',
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
        name: 'GABON',
        info:
          'Državljani Srbije ne mogu da uđu u Gabon, osim lica sa regulisanim boravkom koja se po dolasku na aerodorom ponovo podvrgavaju PCR testu i 48-časovnoj izolaciji do dobijanja rezultata. Lica kojima rezultat bude pozitivan, moraju i dalje da budu u izolaciji i slede uputstva gabonskih zdravstvenih vlasti. \n' +
          'Kopnene granice su zatvorene, a vazdušni saobraćaj je ograničen.',
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
          'Državljani Srbije mogu da uđu u Ganu. Neophodan je negativan PCR test, ne stariji od 72 sata.  Pre polaska putnici su dužni se prijave elektronskim putem na sajtu:   <a href="https://myfrontierhealthcare.com/home/ghana" class="text-info" target="_blank" rel="noopener noreferrer">https://myfrontierhealthcare.com/home/ghana</a> . Putnici se, po dolasku na međunarodni aerodrom ,,Kotoka” u Akri, podvrgavaju ponovnom testiranju o svom trošku. Cena testa iznosi 150 USD. Deca do pet godina starosti se ne testiraju. Rezulatat testa se dobija za 30 minuta. Lica u tranzitu, koja ne napuštaju aerodrom, se ne testiraju.',
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
          'Državljani Srbije mogu da uđu u Gvajanu. Obavezan je negativan  PCR test, ne stariji od 7 dana. Postoji mogućnost da se se test uradi i na licu mesta. 24 sata pre dolaska u Gvajanu, putnici moraju da elektronski popune formular koji se može naći u slsdećem linku:  <a href="https://guyanatravel.gy/" class="text-info" target="_blank" rel="noopener noreferrer">https://guyanatravel.gy/</a> .',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GVINEJA',
        info:
          'Državljani Srbije mogu da uđu u zemlju avio letom uz negativan test, ne stariji od 3 dana. Navedeno važi i za strane državljane. \n' +
          'Zatvoreni su kopneni i pomorski granični prelazi. Izuzetak predstavljaju predstavnici stranih diplomatko-konzularnih predstavništava i radnici humanitarnih misija kojima je, uz prethodnu notifikaciju, dozvoljen ulazak na teritoriju Gvineju.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GVINEJA BISAO',
        info:
          'Državljani Srbije ne mogu da uđu u Gvineju Bisao.  \n' +
          'Nije moguć ulazak stranih državljana u Gvineju Bisao. Zatvoreni su svi granični prelazi i obustavljen je međunarodni putnički saobraćaj – vazdušni, kopneni i pomorski. Izuzetak predstavljaju predstavnici stranih diplomatko-konzularnih predstavništava i radnici humanitarnih misija kojima je, uz prethodnu notifikaciju, dozvoljen ulazak na teritoriju Gvineje Bisao.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'GRENADA',
        info:
          'Državljani Srbije mogu da uđu u Grenadu. Obavezan je negativan PCR test, ne stariji od 72 sata. Neophodno je posedovati rezervaciju u smeštaju registrovanom za opservaciju i karantin u trajanju od najmanje sedam dana. Takođe, potrebno je pre putovanja dobiti odobrenje koje se dobija preko sledećeg linka:  <a href="https://travelauth.health.gov.gd/" class="text-info" target="_blank" rel="noopener noreferrer">https://travelauth.health.gov.gd/</a> . Mora da se uradi novi test nakon pet dana od ulaska i ukoliko je rezultat negativan, karantin se može napustiti.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'GRUZIJA',
        info:
          'Državljani Srbije mogu ući u Gruziju avionom iz bilo koje zemlje pod uslovom da prilikom ulaska u zemlju pruže na uvid dokument kojim se potvrđuju da su primljene obe doze bilo koje od postojećih vakcina protiv virusa Covid-19. Sledeće kategorije su oslobođene navedene obaveze: Predstavnici diplomatskih misija i međunarodnih organizacija akreditovanih u Gruziji i članovi njihovih porodica; članovi porodica gruzijskih državljana, bez obzira na državljanstvo (supružnik, deca mlađa od 18 godina); osobe koje u Gruziju stižu kao deo humanitarne misije; članovi zvaničnih delegacija (odlučuje se od slučaja do slučaja); lica angažovana u međunarodnom saobraćaju.',
        status: 'VACCINATION_REQUIRED',
      },
      {
        name: 'GRČKA',
        info:
          'Državljani Srbije mogu da uđu u Grčku avionom ili preko dva drumska prelaza između Grčke i Bugarske – Promahonas i Nimfea. Državljani Srbije koji imaju regulisan boravak u Grčkoj, kao i profesionalni vozači u drumskom transportu, mogu ući i preko ostalih graničnih prelaza. Svi putnici koji dolaze u Grčku, moraju prethodno popuniti elektronski obrazac prijave - Passenger Location Form, preko sajta  <a href="http://www.travel.gov.gr" class="text-info" target="_blank" rel="noopener noreferrer">http://www.travel.gov.gr</a>   (najmanje 24 časa pre ulaska u Grčku) i pri ulasku prezentovati dobijeni kod. Neophodan je negativan PCR test, ne stariji od 72 sata (oslobođena su deca do 5 godina starosti) ili potvrda o završenoj vakcinaciji najmanje 14 dana pre dolaska u Grčku izdatu od nadležnog organa (potvrda o vakcinaciji, pored ličnih podataka, treba da sadrži tip primljene vakcije i broj doza). Takođe, putnici mogu biti testirani i brzim testom na graničnom prelazu. Drumski granični prelazi Promahonas, Nimfea i Kipi otvoreni su svakog dana od 7 do 23 časa, dok su prelazi Evzoni i Kakavia, na kojima je ulazak u Grčku limitiran na 400 osoba dnevno (ovo ograničenje se ne odnosi na vozače u međunarodnom drumskom transportu), otvoreni od 7 do 19 časova. Izuzetno, za profesionalne vozače u drumskom transportu (jedna osoba po vozilu), prelaz Evzoni je otvoren od 7 do 23 časa.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'DANSKA',
        info:
          'Državljani Srbije mogu da uđu u Dansku ukoliko imaju regulisan boravak ili pod sledećim uslovima: dokaz ovaljanom razlogu (smrt bliskog srodnika, spajanje porodice, poziv za sud i drugo), popunjen obrazac u vezisa testiranjem (ovaj obrazac preuzeti sa linka  <a href="https://en.coronasmitte.dk/rules-and-regulations/entry-into-denmark/entry-forms-and-certificates" class="text-info" target="_blank" rel="noopener noreferrer">https://en.coronasmitte.dk/rules-and-regulations/entry-into-denmark/entry-forms-and-certificates</a> ), negativan PCR ili Antigeni test, ne stariji od 24 sata. Test je obavezan i za osobe u tranzitu. Detaljne informacije o uslovima ulaska u sledećem linku:  <a href="https://politi.dk/en/entry" class="text-info" target="_blank" rel="noopener noreferrer">https://politi.dk/en/entry</a> . Svaki putnik, bez obzira na priloženi negativni test, u obavezi je da u roku od 24 sata po ulasku u Dansku uradi brzi test na Kovid-19. Ovaj test je besplatan, a mesta gde se nalaze punktovi se mogu naći u sledećem linku:  <a href="https://www.sos.eu/en/for-you/free-covid-19-rapid-test/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.sos.eu/en/for-you/free-covid-19-rapid-test/</a> . Punkt za brze testove nalazi se i na aerodromu Kastrup, te je moguće izvršiti ovu obavezu neposredno po sletanju. Bez obzira na rezultat obaveznog brzog testa, samoizolacija u trajanju od 10 dana je obavezna. Dozvoljeno je da se skrati desetodnevna samoizolacija ako se uradi PCR test na Kovid-19, ali tek  posle četvrtog dana od dana ulasku u zemlju. Sve gorenavedene mere (osim dokaza o valjanom razlogu) se odnose i nadiplomate, osobe sa studentskim i radnim vizama,  dostavljače roba -  na sve osobe sa regulisanim boravkom.Više informacija na:  <a href="https://coronasmitte.dk/en/entry-into-denmark" class="text-info" target="_blank" rel="noopener noreferrer">https://coronasmitte.dk/en/entry-into-denmark</a> . Tranzit je moguć ukoliko se putuje sa valjanim razlogom ili zbog povratka kući. Tranzit se obavlja bez zadržavanja. Potrebna su odgovarajuća dokumenta kao dokaz o razlogu tranzita i negativan test na korona virus.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'DOMINIKA',
        info:
          'Državljani Srbije mogu da uđu u Dominiku. Pre ulaska u zemlju potrebno je popuniti  zdravstveni upitnik na sajtu  <a href="https://domcovid19.dominica.gov.dm/" class="text-info" target="_blank" rel="noopener noreferrer">https://domcovid19.dominica.gov.dm/</a> . Zdravstvene vlasti mogu, na osnovu upitnika, odbiti ulaz određenim putnicima. Neophodan je negativan PCR test, ne stariji od 72 sata. Svi putnici se podvrgavaju brzom testu po sletanju u Dominiku.',
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
        name: 'EKVATORIJALNA GVINEJA',
        info:
          'Državljani Srbije mogu ući u Ekvatorijalnu Gvineju. Obavezan je negativni PCR test, ne stariji od 48 sati. Po dolasku, putnici se odmah podvrgavaju brzom testu. Ako je rezultat negativan, sledi hotelski karantin, a nakon pet dana se ponovo radi PCR test. Sa negativnim rezultatom karantin se završava. U suprotnom, nastavljaju se karantinske mere, a u slučaju ispoljavanja simptoma putnici se upućuju u bolnicu namenjenu za pacijente sa COVID-19. Troškovi testiranja, karantina i eventualnog boravka u kovid bolnici idu na teret putnika.',
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
          'Državljani Srbije ne mogu da uđu u Estoniju, osim ako dolaze zbog zaposlenja ili studiranja (u tom slučaju, obavezan je karantin u trajanju od 10 dana, kao i dva PCR testa – odmah po dolasku u Estoniju i nakon 6 dana karantina). \n' +
          'Dozvoljava se ulazak u Estoniju licima sa regulisanim boravkom ili dugoročnom vizom, kao i članovima njihovih porodica, koja dolaze iz zemalja članica EU, Šengen zone, UK, Andore, Monaka, San Marina i Vatikana, kao i državljanima trećih država sa liste EU (lista dostupna na:  <a href="https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers" class="text-info" target="_blank" rel="noopener noreferrer">https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers</a> ), pod uslovom da ne ispoljavaju simptome infekcije virusom COVID-19. Samoizolacija u trajanju od 10 dana obavezna je za sva lica koja ispoljavaju simptome infekcije, kao i za sva lica koja dolaze iz država u kojima je u prethodnih 14 dana registrovano više od 150 novih slučajeva infekcije na 100.000 stanovnika. Testiranje je omogućeno na aerodromu i u lukama svim licima koja dolaze u Estoniju (za estonske državljane besplatno, za strance po ceni od 52 do 75 evra; više informacija na:  <a href="https://koroonatestimine.ee/en/for-patients/testing-after-a-trip-abroad/" class="text-info" target="_blank" rel="noopener noreferrer">https://koroonatestimine.ee/en/for-patients/testing-after-a-trip-abroad/</a> ). Putnici mogu, ukoliko žele, da skrate period samoizolacije obavljajući dva PCR testa (prvi najranije 72 sata pre putovanja, drugi nakon 6 dana samoizolacije po dolasku u Estoniju). Više informacija dostupno je na internet adresi:  <a href="https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers" class="text-info" target="_blank" rel="noopener noreferrer">https://vm.ee/en/information-countries-and-self-isolation-requirements-passengers</a> . Samoizolacija i testiranje nisu potrebni ukoliko putnici poseduju dokaz da su preležali virus ili da su vakcinisani u poslednjih 6 meseci (detaljnije na adresi:  <a href="https://vm.ee/en/coronavirus-2019-ncov" class="text-info" target="_blank" rel="noopener noreferrer">https://vm.ee/en/coronavirus-2019-ncov</a> ). Najkasnije 72 sata pre putovanja u Estoniju (osim u slučaju direktnog tranzita), neophodno je popuniti elektronski formular dostupan na internet adresi:  <a href="https://iseteenindus.terviseamet.ee/" class="text-info" target="_blank" rel="noopener noreferrer">https://iseteenindus.terviseamet.ee/</a> .',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'ETIOPIJA',
        info:
          'Državljani Srbije mogu da uđu u Etiopiju. Potreban je negativan test ne stariji od 120 sati, odnosno pet dana. Obavezna je izolacija od 7 dana. \n' +
          'Putnicima u tranzitu nije potreban test. Ukoliko je tranzit duži od 24 sata, obavezna je izolacija u za to određenom hotelu.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ERITREJA',
        info:
          'Državljani Srbije mogu da uđu u Eritreju. Obavezan je negativan PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
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
          'Državljani R. Srbije mogu da uđu u Izrael pod uslovom da prethodno pribave odobrenje izraelskih vlasti (organ imigracione vlasti ili Ministarstvo inostranih poslova). Takođe, potrebno je da popune upitnik – zdravstvenu deklaraciju, 24 sata pre putovanja, kao i da poseduju negativan rezultat PCR testa. Navedena dokumenta se proveravaju na aerodromu pre leta za Izrael. \n' +
          'Svi putnici moraju biti pokriveni putnim zdravstvenim osiguranjem koje uključuje i eventualnu zarazu od COVID-19. \n' +
          'Po dolasku u Izrael obavezna je mera karantina u trajanju od 14 dana. Ovaj period se može skratiti na 10 dana, ukoliko se posle 9. dana uradi i drugi PCR test. \n' +
          'Za dodatne informacije i izuzetke od navedenih restrikcija, molimo posetite internet stranici:  <a href="https://www.gov.il/en/departments/guides/flying-to-israel-guidlines" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.il/en/departments/guides/flying-to-israel-guidlines</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'INDIJA',
        info:
          'Državljani Srbije u principu ne mogu da uđu u zemlju s obzirom da je Indija obustavila izdavanje viza svim stranim državljanima. Nove vize se mogu dobiti (u nadležnim diplolatsko-konzularnim predstavništvima Indije) isključivo u sledećim posebnim slučajevima: poslovni ljudi (odnosi se samo na biznis vize), stručnjaci iz oblasti zdravstva koji dolaze u Indiju da bi obavljali tehničke poslove u indijskom zdravstvenom sektoru (na poziv relevantnih indijskih institucija), stručnjaci iz ostalih oblasti koji rade za strane kompanije koje posluju u Indiji, inženjeri i tehničko osoblje koji dolaze radi instaliranja ili servisiranja mašina i opreme stranog porekla (na poziv indijskih kompanija). Ukoliko lice ima poslovnu vizu koja još važi (izdata pre pandemije), neophodno je da se izvrši njena revalidacija u nadležnom diplomatko-konzučlarnom predstavništvu Indije (ovo se ne odnosi na elektronske vize, sa kojima neće biti dozvoljen ulazak u Indiju).',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'INDONEZIJA',
        info:
          'Državljani Srbije ne mogu da uđu niti tranzitiraju u Indoneziju osim lica koji imaju stalnu (KITAP) ili privremenu boravišnu dozvolu (KITAS). Negativan test na koronu je neophodan. Ukoliko se pri ulasku ne poseduje test, organizuje se testiranje i rezultat se čeka u za to određenim hotelima od strane indonežanskih vlasti. Pre  putovanja, potrebno je kontaktirati najbližu ambasadu Indonezije.',
        status: 'CLOSED_BORDER',
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
          'Državljani Srbije mogu da uđu u Iran ukoliko poseduju negativan PCR test, ne stariji od 72 sata da datuma testiranja. Ukoliko negativan test, usled dužine putovanja, bude stariji od 72 sata, putnik se na granici podvrgava zdravstvenom pregledu. U slučaju da se utvrde simptomi bolesti, putnik se ponovo testira o svom trošku i do dobijanja rezultata testa boravi u karantinu. Ako rezultat ponovljenog testa bude pozitivan, obavezan je karantin u trajanju od 14 dana o svom trošku.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'IRSKA',
        info:
          'Državljani Srbije mogu da uđu i tranzitiraju kroz Irsku.  Državljani Srbije, kao i ostali putnici, pri ulasku u Irsku su u obavezi da popune formular Passenger Locator Form ( <a href="https://cvd19plf-prod1.powerappsportals.com/en-us/" class="text-info" target="_blank" rel="noopener noreferrer">https://cvd19plf-prod1.powerappsportals.com/en-us/</a> ). Takođe, svi putnici koji dolaze u Irsku, izuzev dece starosti do 6 godina,  moraju posedovati negativan PCR test, ne stariji od 72 sata, koji je neophodno pokazati graničnim službenicima prilikom ulaska u Irsku, ali i prilikom ukrcavanja u avion/brod. \n' +
          'Dodatno, državljani Srbije koji dolaze direktno iz Srbije ili iz neke od zemalja sa liste (ili su kroz njih tranzitirali):  <a href="https://www.gov.ie/en/publication/b4020-travelling-to-ireland-during-the-covid-19-pandemic/#designated-states-mandatory-hotel-quarantine" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.ie/en/publication/b4020-travelling-to-ireland-during-the-covid-19-pandemic/#designated-states-mandatory-hotel-quarantine</a> , u obavezi su da borave u  hotelskom karantinu u trajanju od 14 dana . Potrebno je unapred rezervisati i platiti boravak u izabranom hotelu. \n' +
          'Ostali putnici imaju obavezu samoizolacije u trajanju od 14 dana. Period samoizolacije može biti skraćen u slučaju da se rezultat PCR testa, urađenog najranije petog dana po ulasku u Irsku, pokaže negativnim. \n' +
          'Detalji u vezi sa ulaskom u Irsku se mogu naći u sledećem linku:  <a href="https://www.gov.ie/en/publication/b4020-travelling-to-ireland-during-the-covid-19-pandemic/#designated-states-mandatory-hotel-quarantine" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.ie/en/publication/b4020-travelling-to-ireland-during-the-covid-19-pandemic/#designated-states-mandatory-hotel-quarantine</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'ISLAND',
        info:
          'Državljani R. Srbije mogu da uđu na Island pod uslovom da: imaju regulisan boravak na Islandu; su u rodbinskom srodstvu sa državljanima Islanda ili licem koje ima regulisan boravak na Islandu; su u dugoročnoj emotivnoj vezi sa islandskim državljaninom ili licem koje ima regulisan boravak na Islandu; poseduju potvrdu o izvršenoj vakcinaciji ili potvrdu o preležanom virusu. Za ulazak na Island priznaje se isključivo potvrda o vakcinaciji sa jednom od sledećih vakcina: Comirnaty Pfizer BioNTech, Moderna, AstraZeneca, Janssen. \n' +
          'Sva lica su u obavezi da se podvrgnu još najmanje jednom testiranju prilikom ulaska na Island, uključujući i ona sa sertifikatom o vakcinaciji i/ili preležanom virusu, kao i da budu u karantinu do dobijanja rezultata testa. \n' +
          'Imajući u vidu da je za dokazivanje rodbinskih ili emotivnih odnosa potrebno priložiti odgovarajuću dokumentaciju, za detaljne informacije o navedenom, kao i o ostalim uslovima ulaska na Island, uključujući i formulare koje je potrebno popuniti, posetite sledeće linkove: <a href="https://www.logreglan.is/english/regarding-travel-restrictions-to-iceland-as-a-result-of-covid-19/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.logreglan.is/english/regarding-travel-restrictions-to-iceland-as-a-result-of-covid-19/</a> <a href="https://www.covid.is/sub-categories/visiting-iceland" class="text-info" target="_blank" rel="noopener noreferrer">https://www.covid.is/sub-categories/visiting-iceland</a>',
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
          'Državljani Srbije ne mogu da uđu u Italiju u turističke svrhe. Ulazak iz Srbije u Italiju dozvoljen je samo u određenim slučajevima: poslovni i zdravstveni razlozi, školovanje, hitan povratak u mesto stanovanja/boravišta, ukoliko su u potvrđenoj i stalnoj emotivnoj vezi (iako ne žive zajedno) sa državljanima Italije/EU/Šengen zone ili sa licima koja imaju zakonito prebivalište (boravište na duži period) u Italiji. Prilikom ulaska neophodno je da se priloži na uvid: negativan PCR ili antigenski test, urađen do 48 sati pre ulaska u Italiju, kao i lična izjava (autodichiarazione). Za lica kojima je omogućen ulazak u Italiju, obavezna je mera kućne samoizolacije u trajanju od 10 dana. Po završetku samoizolacije neophodno je ponoviti PCR ili antigenski test. Napred navedene mere ne primenjuju se u slučaju boravka do 120 sati, u slučaju tranzita u trajanju do 36 sati, kao i u drugim slučajevima koje možete naći u sledećem linku:  <a href="https://www.esteri.it/mae/resource/doc/2021/04/normativa_documento_definitivo_eng.pdf" class="text-info" target="_blank" rel="noopener noreferrer">https://www.esteri.it/mae/resource/doc/2021/04/normativa_documento_definitivo_eng.pdf</a>  Lična izjava na engleskom jeziku se može naći u sledećem linku:  <a href="https://www.esteri.it/mae/resource/doc/2021/03/modulo_rientro_sintetico_05_marzo_2021_eng_compilabile.pdf" class="text-info" target="_blank" rel="noopener noreferrer">https://www.esteri.it/mae/resource/doc/2021/03/modulo_rientro_sintetico_05_marzo_2021_eng_compilabile.pdf</a>',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'JAMAJKA',
        info:
          'Državljani Srbije mogu da uđu na Jamajku. Pre putovanja, neophodno je prijaviti se na sledećem sajtu:  <a href="www.visitjamaica.com" class="text-info" target="_blank" rel="noopener noreferrer">www.visitjamaica.com</a>',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'JAPAN',
        info:
          'Državljanima Srbije koji su prethodnih 14 dana boravili u Srbiji ili tranzitirali kroz Srbiju nije dozvoljen ulazak. Od navedenog su izuzeta lica koja imaju regulisan boravak u Japanu  pod uslovom da poseduju dozvolu za ponovni ulazak (re-entry permit) i da prezentuju potvrdu na formatu koji predviđaju japanski organi da su 72 pre leta bili negativno testirani na korona virus (format potvrde dostupan je na prezentaciji Ministarstva inostranih poslova Japana  <a href="https://www.mofa.go.jp/ca/fna/page25e_000334.html" class="text-info" target="_blank" rel="noopener noreferrer">https://www.mofa.go.jp/ca/fna/page25e_000334.html</a> ). Prilikom ulaska u Japan ova lica biće ponovo testirana na korona virus, a takođe su u obavezi su da potpišu izjavu (dostupna na sajtu Ministarstva spoljnjih poslova Japana  <a href="https://www.mofa.go.jp/files/100168885.pdf" class="text-info" target="_blank" rel="noopener noreferrer">https://www.mofa.go.jp/files/100168885.pdf</a> ) kojom se obavezuju da instaliraju odgovarajuću aplikaciju na telefonu preko koje će 14 dana po ulasku svakodnevno obaveštavati zdravstvenu službu o svom stanju, da instaliraju japansku COVID-19  aplikaciju za praćenje kontakata, da neće koristiti javni prevoz, da će svih 14 dana boraviti u sopstvenom smeštaju i da će sarađivati sa medicinskim organima u slučaju pojave simptoma ili pozitivnog testa u toku 14 dana karantina.',
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
          'Državljani Srbije mogu da uđu u Jermeniju. Sva lica se podvrgavaju zdravstvenoj kontroli na graničnom prelazu i upućuju u samoizolaciju u trajanju od 14 dana. Lice se oslobađa obaveze samoizolacije, ukoliko poseduje negativan PCR test, ne stariji od 72 sata. Takođe, lice može da se testira o svom trošku na aerodromu/kopnenom graničnom prelazu Jermenije, i ukoliko rezultat bude negativan, oslobađa se obaveze samoizolacije. \n' +
          'Navedeno važi i za druge strane državljane',
        status: 'QUARANTINE_REQUIRED',
      },
      {
        name: 'JORDAN',
        info:
          'Državljani Srbije mogu ući u Jordan. Neophodni su negativan PCR test, ne stariji od pet dana, polisa međunarodnog zdravstvenog osiguranja koje pokriva COVID-19 lečenje, registracija preko internet stranice  <a href="www.visitjordan.gov.jo" class="text-info" target="_blank" rel="noopener noreferrer">www.visitjordan.gov.jo</a> , kao i aktiviranje mobilne aplikacije „Aman“ na  telefonu. Dodatni detalji u vezi sa ulaskom u Jordan, u zavisnosti od zemlje iz koje se dolazi, se mogu naći na navedenom sajtu Vlade Jordana.',
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
          'Državljani Srbije mogu da ulaze u Južni Sudan ako poseduju negativan test.  \n' +
          'Pod istim uslovima ulaze i drugi strani državljani.',
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
          'Državljani Srbije ne mogu da uđu u Kazahstan, osim uz specijalnu dozvolu koju izdaje Ambasada Kazahstana u Beogradu.  \n' +
          'U Kazhastan mogu da uđu lica koja dolaze radi lečenja, osoblje diplomatsko-konzularnih predstavništava, članovi zvaničnih delegacija i međunarodnih organizacija koji dolaze na  poziv Ministarstva spoljnih poslova Kazahstana. Lica koja ulaze u Kazahstan neophodno je da poseduju negativan PCR test, ne stariji od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KAMBODžA',
        info:
          'Državljani Srbije, kao ni drugi strani državljani, ne mogu da uđu u Kambodžu.  Ulazak je moguć jedino uz prethodno pribavljanje vize za koju se zahtev podnosi u najbližoj Ambasadi Kamobdže. Pored vize, potreban je negativan test, ne stariji  od 72 sata, kao i dokaz o zdravstvenom osiguranju u visini od 50 hiljada USD.',
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
          'Državljani Srbije ne mogu da uđu u Kanadu osim lica koji imaju regulisan boravak, kao i članovi njihove uže porodice. Na snazi je zabrana ulaska u Kanadu svim stranim državljanima, osim licima sa stalnim boravkom, radnicima na vitalnim poslovima, stranim studentima kojima je izdata studentska viza pre 18. marta 2020. godine, a izuzeci su mogući u hitnim slučajevima (maloletno lice bez pratnje, smrtni slučaj i dr.). Obavezan je negativan PCR test, ne stariji od 72 sata, za sva lica starija od 5 godina. Svi putnici pre ukrcavanja na let dužni su da pruže odgovarajuće informacije o putovanju, kontakt podatke, kao i plan samoizolacije u trajanju od 14 dana nakon ulaska u zemlju preko "Arrive CAN" aplikacije.  \n' +
          'Tranzit je dozvoljen uz poštovanje viznog režima bez izlaska iz tranzitnog prostora.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'KATAR',
        info:
          'Državljani Srbije mogu da uđu u Katar uz prethodno dobijenu dozvolu preko „Qatar Portal" i negativan PCR test, ne stariji od 72 sata, izdat od strane akreditovanih zdravstvenih centara u Republici Srbiji. Po dolasku, samo za određene kategorije se vrši novo testiranje na aerodromu „Hamad“. Sledi jednonedeljni karantin u hotelu. \n' +
          'Ukoliko se u zemlju ulazi kopnom preko graničnog prelaza Abu Samra iz Saudijske Arabije neophodan je negativan PCR test, ne stariji od 72 sata, a potom hotelski karantin koji se unapred rezerviše preko sajta „Discover Qatar“. \n' +
          'Strani državljani sa regulisanim boravkom u Kataru i koji su vakcinisani u Kataru protiv COVID-19 mogu, 14 dana od primanja druge doze, putovati u inostranstvo i vratiti se u Katar, uz negativan PCR test pri povratku, bez obaveznog karantina, u periodu od devet meseci od primanja druge doze vakcine. \n' +
          'Osobe koje su vakcinisane u inostranstvu vakcinama „Fajzer“, „Astra Zeneka“, „Moderna“ - dve doze, 14 dana od vakcinacije drugom dozom i „Džonson Džonson“- jedna doza, mogu ući u Katar uz posedovanje negativnog PCR testa, ne starijeg od 72 sata, bez karantina. Ako nije prošlo 14 dana od vakcine, obavezan je kućni karantin od 7 dana ili sve dok se ne napuni 14 dana od prijema druge doze. \n' +
          'Svi putnici moraju imati instaliranu aplikaciju „Ehteraz". \n' +
          'Osobe koje su prebole COVID-19 pre minimalno 6 meseci i imaju o tome potvrdu od strane akreditovanih medicinskih centara, ne stariju od 72 sata i nemaju simptome, mogu ući u Katar bez karantina. \n' +
          'Tranzit preko aerodroma Hamad je dozvoljen. Preporučuje se, posebno pred planirani put, da se aktuelna informacija o uslovima ulaska proveri preko sajta Ministarstva zdravlja Katara   <a href="http://www.moph.gov.qa/" class="text-info" target="_blank" rel="noopener noreferrer">http://www.moph.gov.qa/</a> .',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KENIJA',
        info:
          'Državljani Srbije mogu da uđu u Keniju ukoliko poseduju negativan PCR test, ne stariji od 96 sati i nemaju simptome COVID – 19 (telesna temperatura ne sme biti iznad 37,5 stepeni celzijusa, stalan kašalj, poteškoće u disanju i bilo koji drugi simptom nalik gripu). \n' +
          'Neophodno je registrovati se putem sledećeg linka:   <a href="https://ears.health.go.ke/airline_registration/" class="text-info" target="_blank" rel="noopener noreferrer">https://ears.health.go.ke/airline_registration/</a> , kako bi se dobio QR Code koji se mora pokazati prilikom sletanja na aerodrom. \n' +
          'Prilikom odlaska iz Kenije svi putnici su u obavezi da imaju negativan PCR test, koji je urađen u ovlašćenoj laboratoriji i postavljen na onlajn platformu  <a href="https://africacdc.org/trusted-travel/" class="text-info" target="_blank" rel="noopener noreferrer">https://africacdc.org/trusted-travel/</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KINA',
        info:
          'Državljani Srbije koji poseduju važeću radnu dozvolu, dozvolu boravka po ličnom osnovu ili dozvolu boravka za priključenje porodici mogu da uđu u Kinu ukoliko poseduju sertifikat za putovanje izdat od Ambasade Kine u Beogradu. Od 6.novembra 2020. da bi se dobio sertifikat za putovanje neophodno je Ambasadi dostaviti negativne rezultate dva testa, PCR i serološkog IgM, ne starije od 48 sati. \n' +
          'S obzirom da iz Srbije nema direktan let za Kinu, neophodno je da se i u zemlji tranzita dodatno urade pomenuti testovi (PCR i serološki IgM, ne stariji od 48 sati) i negativni rezultati istih dostave diplomatsko-konzularnom predstavništvu Kine u zemlji tranzita radi izdavanja sertifikata za putovanje. Detalji u vezi sa režimom ulaska u Kinu se mogu naći u sledećem linku:   <a href="http://rs.chineseembassy.org/srp/lsyw/tz/t1828338.htm" class="text-info" target="_blank" rel="noopener noreferrer">http://rs.chineseembassy.org/srp/lsyw/tz/t1828338.htm</a>   \n' +
          'Lica kojima je neka od gore navedenih dozvola istekla do 28.septembra, neophodno je da podnesu zahtev za vizu u Ambasadi Kine u Beogradu. \n' +
          'Svi putnici koji iz inostranstva dolaze u Peking, uključujući državljane Srbije, su u obavezi da 14 dana borave u centralnom karantinu i, potom, u dodatnoj samoizolaciji u trajanju od 7 dana. \n' +
          'Hong Kong: Državljanima Srbije nije dozvoljen ulazak u Hong Kong. Tranzitiranje preko teritorije Hong Konga dozvoljeno je samo za one koji putuju sa teritorije matice Kine, Makao-a ili Tajvana. \n' +
          'Makao: Državljanima Srbije nije dozvoljen ulazak u Makao. Tranzitiranje preko teritorije Makao takođe nije moguće. \n' +
          'Tajvan: Državljanima Srbije dozvoljen je ulazak na Tajvan u svim drugim slučajevima osim iz razloga turizma i poseta, pod uslovom da podnesu zahteve za dobijanje ulazne dozvole kod nadležnih institucija u inostranstvu. Na ulasku u Tajvan potrebno je posedovati negativan test, ne stariji od 72 sata i obezbediti obaveznu samoizolaciju u trajanju od 14 dana. Izuzeti od ovih mera su diplomate, biznismeni i privrednici, migrantski radnici, studenti i lica sa posebnim dozvolama.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KIPAR',
        info:
          'Državljani Srbije mogu da uđu u Republiku Kipar. Neophodan je negativan PCR test,  ne stariji od 72 sata. Po dolasku na Kipar, lice se o svom trošku dodatno testira i ima obavezu samoizolacije do dobijanja negativnog rezultata. \n' +
          'Lica koja imaju regulisan boravak na Kipru mogu se ukrcati na let bez negativnog testa, ali onda su dužni po dolasku na Kipar da urade dva testa (prvi odmah po dolasku a drugi tri dana nakon dolaska, vreme između dva testa se provodi u samoizolaciji). Ukoliko su rezultati testova negativni, može se prekinuti samoizolacija. Rezultati testiranja moraju biti poslati na sledeću elektronsku adresu:  <a href="mailto:monada@mphs.moh.gov.cy" class="text-info" target="_blank" rel="noopener noreferrer">monada@mphs.moh.gov.cy</a> _Putnici koji poseduju sertifikat o vakcinisanju na teritoriji Kipra neće morati da budu podvrgnuti dodatnom PCR testiranju po dolasku na Kipar. Jedini uslov je da je prošao određen broj dana od poslednje primljene doze vakcine i datuma putovanja (Džonson i Džonson 14 dana, Moderna 14 dana, Fajzer-Biotik 7 dana, Astra-Zeneka 7 dana). \n' +
          'Svi putnici su u obavezi da elektronski popune propusnicu (CyprusFlightPass) 24 sata pre leta na  <a href="https://www.cyprusflightpass.gov.cy/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.cyprusflightpass.gov.cy/</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
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
          'Državljani Srbije mogu da uđu u Kolumbiju. Neophodan je negativan PCR test, ne stariji od 96 sati. Pre puta je potrebno registrovati se preko sledećeg sajta:  <a href="https://apps.migracioncolombia.gov.co" class="text-info" target="_blank" rel="noopener noreferrer">https://apps.migracioncolombia.gov.co</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KOMORI',
        info:
          'Državljani Srbije mogu da uđu u zemlju. Obavezan je negativan PCR test, ne stariji do 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
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
          'Prilikom izlaksa iz DR Kongo, svi putnici stariji od 11 godina su u obavezi da poseduju dokaz iz laboratorije ne stariji od 3 dana, koju je odobrilo Ministrastvo zdravlja, da su negativni na COVID–19. Cena testa prilikom odlaska iznosi 30 dolara.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KOREJA, Republika',
        info:
          'Od 08. januara 2021. godine uvedena je obaveza posedovanja negativnog PCR testa, ne starijeg od 72 sata, za sve strane državljane, uključujući i one koji imaju registrovan boravak u Koreji, a kojima je dozvola ponovnog ulaska (Re-entry Permit) izdata pre 08. januara 2021. godine. Ova mera se odnosi i na nosioce diplomatskih i službenih viza (A1, A2 i A3), a od obaveze posedovanja testa izuzimaju se deca mlađa od 6 godina. \n' +
          'Rezultat testa mora biti izdat na engleskom ili korejskom jeziku, a ykoliko je izdat na trećem jeziku, mora biti preveden na engleski ili korejski jezik i overen. Ukoliko putnici ne ispune pomenute uslove u vezi sa testom, neće im biti dozvoljen ulazak u R. Koreju.  \n' +
          'Putnici za R. Koreju su u obavezi da pokažu negativan PCR test na aerodromu prilikom ukrcavanja u avion.  \n' +
          'Putnicima u tranzitu koji ne ulaze u R. Koreju test nije potreban.',
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
          'Državljani Srbije mogu da uđu u Kostariku uz obavezu popunjavanja obrasca "Pase de Salud" 48 sati pre dolaska ( <a href="https://salud.go.cr/" class="text-info" target="_blank" rel="noopener noreferrer">https://salud.go.cr/</a> ). Takođe, potrebno je zdravstveno osiguranje koje pokriva troškove lečenja u slučaju korone virusa (osiguranje mora da bude na španskom jeziku i odobreno od Instituta za turizam).',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'KOT D’IVOAR',
        info:
          'Državljani Srbije mogu da uđu u  Kot D’Ivoar. Neophodan je negativan PCR test, ne stariji od pet dana. Po sletanju na aerodrom svi putnici se podvrgavaju tesiranju. Test se plaća oko 75 evra. Putnici koji nemaju test upućuju se u izolaciju u trajanju od 14 dana o trošku avio kompanije.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KUBA',
        info:
          'Državljani Srbije mogu da uđu u R. Kubu. Neophodan je negativan PCR test, ne stariji od 72 sata. Po dolasku na Kubu, na svim međunarodnim aerodromima putnici se dodatno podvrgavaju PCR testu (cena testa 35 evra). Sledi obavezana izolacija u za to predviđenim hotelima do dobijanja negativnog rezultata testa (5-7 dana).',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'KUVAJT',
        info: 'Državljani Srbije ne mogu da uđu u Kuvajt.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LAOS',
        info:
          'Državljani Srbije ne mogu da uđu u Laos. \n' +
          'Međunarodni granični prelazi su zatvoreni za ulazak stranaca iz zemalja u kojima vlada COVID-19 pandemija, što se, odnosi i na državljane Srbije. Izdavanje svih vrsta viza, osim za diplomate, predstavnike UN, eksperte, investitore i biznismene je suspendovano. Za njihov ulazak u Laos neophodna je potvrda o negativnom testu, ne stariji od 72 sata. Nakon ulaska u Laos, obavezan je boravak u „samoizolaciji“ u hotelu ili određenom „karantin centru“ u trajanju od 14 dana (za diplomate i predstavnike UN, 14 dana u „kućnom karantinu“).',
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
          'Državljani Srbije, kao i sva lica koja dolaze iz Srbije ili tranzitiraju kroz Srbiju, u obavezi su da imaju negativan test, ne stariji od 72 sata. Sva lica su u obavezi da, najranije 48 sati pre prelaska letonske granice, ispune elektronski upitnik na veb sajtu  <a href="www.covidpass.lv" class="text-info" target="_blank" rel="noopener noreferrer">www.covidpass.lv</a>  u koji je unet podatak o negativnom testu na COVID-19 i da na graničnom prelazu pokažu dobijeni QR kod (potvrda o prijavi na sajt).  \n' +
          'Test nije obavezan za decu do 11 godina starosti i za lica koja pruže dokaz da su primili potrebnu dozu vakcine. Putnicima koji tranzitiraju preko aerdodroma „Riga“, a ne zadržavaju se u tranzitu duže od 24 časa, takođe nije potreban test.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'LIBAN',
        info:
          'Državljani Srbije mogu da uđu u Liban. Neophodni su negativan PCR test, ne stariji od 96 sati i polisa međunarodnog zdravstvenog osiguranja koje pokriva lečenje COVID-19. Deci mlađoj od 12 godina nije potreban test. Lica koja su se vakcinisala, umesto PCR testa, prilažu dokaz da su primili drugu dozu vakcine protiv COVID-19.  Pre putovanja potrebno je izvršiti registraciju putem sledeće internet stranice:  <a href="https://covid.pcm.gov.lb" class="text-info" target="_blank" rel="noopener noreferrer">https://covid.pcm.gov.lb</a> , na kojoj se takođe mogu pronaći dodatne korisne informacije.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'LIBERIJA',
        info:
          'Državljani Srbije mogu da uđu u  Liberiju. Poželjno je imati negativan PCR test, ne stariji od od 72 sata. Lica koja doputuju bez testa podvrgavaju se tzv. brzom testu na aerodromu. Ukoliko je rezultat testa negativan, omogućava se ulazak u zemlju. Lica sa pozitivnim rezultatom testa se pregledaju i upućuju u karantin koji traje mimimum 14 dana u okviru ustanove koju određuje državna zdravstvena institucija.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'LIBIJA',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LITVANIJA',
        info:
          'Državljani Srbije ne mogu da uđu i borave na teritoriju Litvanije, osim lica koja imaju regulisan boravak. Tranzit preko teritorije Litvanije je dozvoljen državljanima Srbije koji poseduju regulisan boravak u nekoj od zemalja EU, Švajcarske Konfederacije i Ujedinjenog Kraljevstva.  \n' +
          'Ulazak državljana trećih zemalja u Litvaniju zavisi od broja obolelih na 100 hiljada stanovnika. Ulazak stranaca koji dolaze iz zemalja gde je više od 25 zaraženih na 100 hiljada stanovnika je ograničen na izuzetne slučajeve i ove osobe su po ulasku na teritoriju Litvanije u obavezi da budu u izolaciji 14 dana. Srbija se nalazi na listi 58 zemalja kojima je trenutno ograničen slobodan ulazak u Litvaniju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LIHTENŠTAJN',
        info:
          'Državljani Srbije ne mogu da uđu u Lihtenštajn osim lica koja imaju regulisani boravak. \n' +
          'Detalji o režimu ulaska u Lihtenštajn se mogu naći u informaciji o ulasku u Švajcarsku Konfederaciju s obzirom da je reč o identičnim uslovima.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'LUKSEMBURG',
        info:
          'Državljani Srbije mogu da uđu u zemlju isključivo ukoliko imaju regulisan dugoročni boravak u Luksemburgu. Izuzeci se odnose na zdravstvene radnike, granične radnike, istraživače, lica koja se bave negom starijih lica, lica zaposlena u sektoru saobraćaja, lica koja putuju iz hitnih i opravdanih porodičnih razloga, lica koja putuju za potrebe studija i visokokvalifikovane radnike ako je njihovo zapošljavanje ekonomski neophodno i njihov rad se ne može odložiti ili obavljati iz inostranstva. Takođe, od ograničenja je izuzet i kraći boravak državljana trećih zemalja koji su članovi porodice rezidenata u Luksemburgu – supružnici ili registrovani partneri i deca mlađa od 18 godina. Ove osobe treba da podnesu zahtev Odeljenju za pasoše, vize i zakonodavstvo, kako bi dobili odgovarajući sertifikat za putovanje. Zahtev se podnosi putem elektronske pošte na  <a href="mailto:service.visas@mae.etat.lu" class="text-info" target="_blank" rel="noopener noreferrer">service.visas@mae.etat.lu</a> . \n' +
          'Sva lica starija od šest godina koja žele da putuju avionom do Luksemburga moraju prilikom ukrcavanja posedovati negativan PCR test ili test na antigen virusa (brzi test) izvršen manje od 72 sati pre leta. Pored toga, svaka osoba koja putuje vazdušnim prevozom iz države koja nije članice EU ili Šengenskog prostora, mora da se, po dolasku, podvrgne dodatnom testu na virusni antigen, na aerodromu u Luksemburgu. U slučaju odbijanja da se podvrgne testu, osoba će ostati u karantinu 14 dana. Ove obaveze se na odnose na lica koja su preležala SARS-CoV-2 infekciju u prethodna tri meseca. Ova lica mogu da podnesu lekarsko uverenje koje potvrđuje navedenu činjenicu, i nije im potreban test radi ulaska u Luksemburg.  \n' +
          'Tranzit je dozvoljen i nije potrebno posedovanje negativnog PCR testa.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MADAGASKAR',
        info:
          'Državljani ne mogu ulaziti na Madagaskar. Ista zabrana, u uslovima zatvorenih aerodroma i luka, važi za sve strane državljane.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'MAĐARSKA',
        info:
          'Državljani Srbije mogu da uđu na teritoriju Mađarske bez obaveze karantina ili testiranja, pod uslovom da poseduju potvrdu o završenoj vakcinaciji (bez obzira koja vrsta vakcine je u pitanju). Maloletna lica koja putuju u pratnji vakcinisanog odraslog lica u Mađarsku ulaze bez posedovanja negativnog PCR testa. Potvrda o vakcinaciji omogućava pristup uslugama koje zahtevaju dokaz o izvršenoj imunizaciji. Vlasnici potvrda imaju pravo odlaska u pozorišta, bioskope, fitnes klubove, zabavne parkove, biblioteke, igraonice za decu, kasina, sportske događaje i hotele, otvorene i zatvorene bazene, velnes-centre i banje. U unutrašnjim prostorijama ugostiteljskih objekata mogu da borave samo osobe sa potvrdama o vakcinaciji, dok na terasama ugostiteljskih objekata mogu da borave i lica koja ne poseduju ove potvrde. Za državljane Srbije koji nisu vakcinisani, ulazak u Mađarsku u privatne svrhe je moguć samo na osnovu dobijene saglasnosti od mađarske policije. Zahtev se podnosi preko sajta  <a href="http://www.police.hu" class="text-info" target="_blank" rel="noopener noreferrer">http://www.police.hu</a> , na mađarskom ili engleskom jeziku. Uz molbu se prilažu dokazi o razlozima putovanja (lečenje, školovanje, poslovne aktivnosti, pozivi na suđenje, porodični događaji, učešće na sportskim, kulturnim i verskim događajima od posebnog značaja i dr). Licu koje dobije saglasnost za ulazak u Mađarsku biće određen obavezan karantin u trajanju od 10 dana. Za vreme karantina moguće je testiranje o svom trošku. U slučaju dva negativna testa, urađena od strane mađarskih zdravstvenih organa u roku od 5 dana sa razmakom od najmanje 48 sati, moći će da se napusti karantin. Državljani Srbije mogu da tranzitiraju kroz Mađarsku pod određenim uslovima (utvrđena maršruta, zaustavljanje na predviđenim mestima, zemlja se mora napustiti u roku od 24 sata) i ukoliko pruže dokaze o ispunjenosti uslova za ulazak u susednu zemlju prema kojoj napuštaju teritoriju Mađarske. Državljani Srbije koji rade u pograničnoj zoni ulaze u Mađarsku bez ograničenja (posedovanja negativnog testa na COVID-19). Oni mogu da borave u Mađarskoj u dubini do 30 km od granice, najduže do 24 sata. Zbog mere ograničenja kretanja, Mađarska mora da se napusti najkasnije do 20.00 časova. Izuzetak čine samo ona lica koja zbog radnih obaveza u Mađarskoj moraju da ostanu duže (najviše do 24 sata) što dokazuju potvrdom u obliku popunjenog formulara overenog od strane poslodavca. Navedene mere se ne primenjuju na lica koja prelaze granicu Mađarske u teretnom saobraćaju.',
        status: 'NO_TEST_REQUIRED',
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
          'Državljani Srbije mogu da uđu u Mali. Neophodan je negativan PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
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
          'Državljani Srbije ne mogu da uđu na Maltu. Izuzetak su lica koja su prethodnih 14 dana boravili u jednoj od „zemalja zelene liste“ („zelena lista“ se može naći na   <a href="https://www.visitmalta.com/en/reopening-airport" class="text-info" target="_blank" rel="noopener noreferrer">https://www.visitmalta.com/en/reopening-airport</a>  ). U tom slučaju ne postoji obaveza karantina ili negativnog testa (preporučuje se da lica imaju negativan test). Za lica koja dolaze iz „zemalja Amber liste“ („Amber lista“ se može naći na   <a href="https://www.visitmalta.com/en/reopening-airport" class="text-info" target="_blank" rel="noopener noreferrer">https://www.visitmalta.com/en/reopening-airport</a>  ), je obavezan negativni PCR test, ne stariji od 72 sata.',
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
          'Državljani Srbije mogu, uz posedovanje odgovarajuće vize, bez posebnih ograničenja da uđu u Meksiko. Meksiko nije usvojio ograničenja ulaska stranaca u zemlju, ali se preduzimaju odgovarajuće mere ukoliko osobe ispoljavaju simptome na korona virus. Po dolasku u Meksiko, putnici su dužni da popune upitnik za identifikaciju faktora rizika ( <a href="https://afac.hostingerapp.com/" class="text-info" target="_blank" rel="noopener noreferrer">https://afac.hostingerapp.com/</a> ).',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'MJANMAR',
        info:
          'Za državljane Srbije, kao i za državljane svih drugih zemalja, ne postoji mogućnost ulaska u Mjanmar, imajući u vidu da su granični prelazi zatvoreni i da su suspendovani svi međunarodni komercijalni avio-letovi. Za strance koji dolaze „humanitarnim“ i „specijalnim“ letovima u Mjanmar, potrebna je odgovarajuća viza i potvrda o negativnom testu, ne starijem od 72 sata, kao i potvrda o provedenih sedam dana u „kućnom karantinu“ u zemlji iz koje se dolazi. Nakon ulaska u Mjanmar, obavezan je boravak u „hotelskom karantinu“ u trajanju od 7 dana, uključujući dodatnih 7 dana boravka u „kućnom karantinu“ (za diplomate i predstavnike UN, koji žive u apartmanima, 7 dana u „hotelskom karantinu“ određenom od strane Ministarstva zdravlja i sporta, odnosno 7 dana u „kućnom karantinu“, ukoliko žive u „zasebnim kućama“, uključujući dodatnih 7 dana u „kućnom karantinu“), nakon čega se vrši test na COVID-19.',
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
          'Državljani Srbije mogu da uđu u Moldaviju. Neophodan je negativan PCR test, ne stariji od 72 sata (od uzimanja uzorka). Lica koja prilikom ulaska na teritoriju Moldavije ne prilože negativan rezultat PCR testa, u obavezi su da potpišu izjavu kojom se obavezuju da će se pridržavati utvrđene mere samoizolacije/karantina u trajanju od 14 dana. Navedene mere ne odnose se na sledeće kategorije lica: deca uzrasta do pet god; vozači teretnih vozila; posade aviona/brodova; lica koja putuju iz zdravstvenih ili humanitarnih razloga, uključujući i osobu koja je u njihovoj pratnji (ukoliko prilože medicinsku dokumentaciju); učenici i studenti; prekogranični radnici; diplomatsko i konzularno osoblje; članovi međunarodnih organizacija; putnici u tranzitu; lica koja prilože potvrdu o vakcinaciji (na rumunskom, engleskom ili ruskom jeziku). Tranzit je moguć po unapred utvrđenim tranzitnim rutama dobijenim od granične policije prilikom ulaska na teritoriju Moldavije.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'MONAKO',
        info:
          'Za Kneževinu Monako važi isti režim ulaska kao za Francusku. Državljanima Srbije nije dozvoljen ulazak u Monako osim licima koja imaju regulisan boravak. Za lica koja dolaze iz Srbije obavezan je negativan PCR test, ne stariji od 72 sata (osim za decu mlađu od 11 godina), kao i nakon ulaska samoizolacija u trajanju od 7 dana. Pored toga, po ulasku na teritoriju Monaka, obavezna je prijava u Centru za kovid na telefon: (+377) 92.05.55.00 ili putem i mejla:  <a href="mailto:covid19@gouv.mc" class="text-info" target="_blank" rel="noopener noreferrer">covid19@gouv.mc</a>',
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
          'Svim stranim državljanima koji su tranzitirali preko ili boravili u Kini, Hong Kongu, Makau, Iranu, Italiji, Koreji, Evropi, SAD ili Aziji (osim Tajvana) u poslednjih 21 dan pre nameravanog dolaska na Nauru, do daljnjeg je zabranjen ulazak u zemlju.   \n' +
          'Ostali putnici su u obavezi da popune zdravstvenu deklaraciju pri dolasku i podvrgnu se zdravstvenom pregledu, nakon čega sledi obavezan karantin od 14 dana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'NEMAČKA',
        info:
          'Državljani Srbije mogu putovati u Nemačku ukoliko imaju boravišnu dozvolu u Nemačkoj, nacionalnu D vizu ili boravišnu dozvolu u drugoj državi članici EU, Velikoj Britaniji, Islandu, Lihtenštajnu, Norveškoj ili Švajcarskoj i ukoliko ispunjavaju uslove za ulazak: negativan test/obaveza karantina i elektronska prijava ulaska. \n' +
          'Turistička putovanja u Nemačku u cilju posete i dalje nisu dozvoljena. Putnici koji dolaze u Nemačku iz Srbije dužni su da pre ulaska u Nemačku popune elektronsku prijavu putem veb-stranice:  <a href="http://www.einreiseanmeldung.de" class="text-info" target="_blank" rel="noopener noreferrer">http://www.einreiseanmeldung.de</a>  Elektronsku prijavu nisu dužna da popunjavaju lica koja su bila na proputovanju kroz rizično područje, bez dužeg zadržavanja, lica koja tranzitiraju kroz Nemačku (osim ako se tranzitira avionskim putem u okviru EU) i lica koja na osnovu poslovnih obaveza uđu u Nemačku radi prekograničnog prevoza putnika ili robe u drumskom, železničkom, rečnom ili vazdušnom saobraćaju. \n' +
          'Sva lica od navršene šeste godine života koja su  u  poslednjih 10 dana boravila u Srbiji  dužna su da poseduju potvrdu da nisu zaraženi korona virusom. Bris na osnovu kojeg je izdata potvrda, po pravilu treba da bude uzet najranije 48 sati pre ulaska u Nemačku. Priznaju se PCR-testovi i brzi antigenski testovi koji su urađeni u skladu sa zahtevima  <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Tests.html;jsessionid=4C696B25A82B24739A43AF4741EF4886.internet102" class="text-info" target="_blank" rel="noopener noreferrer">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Tests.html;jsessionid=4C696B25A82B24739A43AF4741EF4886.internet102</a> : <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Tests.html;jsessionid=4C696B25A82B24739A43AF4741EF4886.internet102" class="text-info" target="_blank" rel="noopener noreferrer">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Tests.html;jsessionid=4C696B25A82B24739A43AF4741EF4886.internet102</a> \n' +
          'Rezultat testa treba sačuvati najmanje deset dana posle ulaska u zemlju. \n' +
          'Nakon ulaska u Nemačku, obavezna je  kućn a  samoizolacij a  u trajanju od 10 dana.  Najranije petog dana  po ulasku u zemlju može se uraditi novi test i ukoliko je rezultat negativan, kućna samoizolacija može da se prekine. Pozivom na broj Koordinacione službe za zakazivanje termina za test 116117 može se saznati gde se može obaviti testiranje u mestu boravka u Nemačkoj. \n' +
          'Državljani Srbije bez vize mogu putovati u Nemačku ukoliko postoji apsolutno neophodan razlog i uz prethodnu konsultaciju sa Saveznom policijom Nemačke i to ukoliko su članovi uže porodice, članovi porodice prvog ili drugog stepena, hitni medicinski slučajevi, nevenčani partneri, ukoliko putuju poslovno iz ekonomskih razloga, zbog posete sajmovima, učešća na kongresima i dr. Za dodatne informacije može se kontaktirati Savezna nemačka policija (Bundespolizei) putem mejla:  <a href="mailto:bpolp@polizei.bund.de" class="text-info" target="_blank" rel="noopener noreferrer">bpolp@polizei.bund.de</a> . \n' +
          'Tranzit kroz Nemačku je moguć ukoliko državljani Srbije imaju dokaz o pravu ulaska u zemlju u koju putuju. Tranzit mora biti obavljen najkraćim mogućim putem i bez nepotrebnog zadržavanja. Obaveza kućne samoizolacije i obaveza posedovanja negativnog PCR testa ne važi za putnike u drumskom tranzitu, pod uslovom da koriste najkraću rutu. Za tranzit vazdušnim putem test na COVID-19 je obavezan čak i ako se u Nemačkoj ne napušta međunarodna tranzitna zonu. Ukoliko se napušta međunarodna tranzitna zona radi presedanja na let kojim se odlazi na drugi aerodrom unutar Evropske unije, test na COVID-19 i elektronska prijava za ulazak u zemlju su obavezni pre ulaska u Nemačku. \n' +
          'Prilikom prelaska granice putnici moraju predočiti dokaze o neophodnosti putovanja. Konačnu procenu i odluku o ulasku u Nemačku uvek donosi postupajući službenik granične policije. \n' +
          'Detaljne informacije o režimu ulaska u Nemačku mogu se naći na sajtu Ambasade Srbije u Berlinu: <a href="http://berlin.mfa.gov.rs/cir/index.php" class="text-info" target="_blank" rel="noopener noreferrer">http://berlin.mfa.gov.rs/cir/index.php</a>',
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
          'Državljani Srbije mogu da uđu u Nigeriju. Neophodan je negativan PCR test, ne stariji od 72 sata. Najmanje 96 sati pre putovanja potrebno je prijaviti se elektronski preko sledećeg linka:  <a href="https://nitp.ncdc.gov.ng/onboarding/homepage" class="text-info" target="_blank" rel="noopener noreferrer">https://nitp.ncdc.gov.ng/onboarding/homepage</a> . Putnici po dolasku prolaze kroz medicinsku kontrolu. Obavezna je samoizolacija od sedam dana. Sedmog dana lice je dužno da se javi u izabranu laboratoriju radi ponovnog testiranja. Rezulatat se dobija u roku od 24 do 48 sati. Po dobijanju negativnog testa, lice može da napusti samoizolaciju. Lica sa pozitivnim rezultatom se smeštaju u odgovarajuću zdravstvenu ustanovu. Za lica koja se ne pridržavaju mera predviđeno je oduzimanje putne isprave i zabrana putovanja do šest meseci.',
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
          'Državljani Srbije ne mogu da uđu u zemlju, osim onih lica koja imaju odobren stalni boravak i članova njihove uže porodice. Mogućnost ulaska postoji ako su u pitanju humanitarni ili dovoljno ubedljivi razlozi uz prethodno pribavljanje dozvole od strane nadležnih organa. Obavezan je karantin od 14 dana, u za to posebno opredeljenim objektima, i putnici moraju da u istima rezervišu smeštaj pre polaska na put. Troškove boravka u izolaciji snose sami putnici. Sva lica se po dolasku u zemlju testiraju na COVID-19. \n' +
          'Tranzit državljana Srbije je dozvoljen uz posedovanje tranzitne vize (uz obavezu da vreme provedeno u tranzitu bude maksimalno 24 sata). Tranzit je dozvoljen samo preko aerodroma u Oklandu. \n' +
          'Ulazak na Novi Zeland dozvoljen je samo državljanima Novog Zelanda, licima koja imaju odobren stalni boravak i članovima njihovih užih porodica, kao i državljanima Australije koji obično prebivaju na Novom Zelandu. \n' +
          ' Od 16. januara 2021. godine, svi putnici koji dolaze iz Velike Britanije i SAD, moraju da dostave pismeni dokaz negativnog PCR testa, ne starijeg od 72 sata.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'NORVEŠKA',
        info:
          'Državljani Srbije ne mogu ući u Norvešku osim lica koja imaju regulisan boravak ili ako postoje posebni razlozi kao što su: potreba za posebnom negom osobe koja je u Norveškoj ili drugi razlozi u cilju dobrobiti lica koje se nalazi u Norveškoj; ako se ostvaruje dogovoreni ili formalizovani kontakt roditelj-dete ili kada dete ima podeljeno prebivalište; ako su bliski srodnici osoba sa prebivalištem u Norveškoj; ako je lice samo u aerodromskom tranzitu;  ako lice obavlja komercijalni prevoz robe ili putnika ili radi u sektoru kritično važnih društvenih funkcija. \n' +
          'Za sva lica koja mogu da uđu u Norvešku obavezan je negativan PCR ili brzi antigenski test, ne stariji 24 sata i elektronska registracija u roku kraćem od 72 sata pre dolaska  . Po ulasku u Norvešku obavezan je novi brzi test, kao i desetodnevni karantin u karantin hotelu.Dodatne informacije se mogu naći u sledećim linkovima: <a href="https://www.regjeringen.no/en/aktuelt/the-corona-situation-more-information-about-quarantine-hotels/id2784377/;%20" class="text-info" target="_blank" rel="noopener noreferrer">https://www.regjeringen.no/en/aktuelt/the-corona-situation-more-information-about-quarantine-hotels/id2784377/;%20</a> <a href="https://www.regjeringen.no/contentassets/48bf71bca8fe45888e83807f6d1f9061/avkrysningsskjema_karantenehotell_engelsk.pdf" class="text-info" target="_blank" rel="noopener noreferrer">https://www.regjeringen.no/contentassets/48bf71bca8fe45888e83807f6d1f9061/avkrysningsskjema_karantenehotell_engelsk.pdf</a> <a href="https://www.regjeringen.no/en/topics/koronavirus-covid-19/id2692388/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.regjeringen.no/en/topics/koronavirus-covid-19/id2692388/</a> <a href="https://www.udi.no/en/about-the-corona-situation/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.udi.no/en/about-the-corona-situation/</a>',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'OMAN',
        info:
          'Državljani Srbije mogu da uđu u Sultanat Oman. Neophodan je negativan PCR test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'PAKISTAN',
        info:
          'Državljanima Srbije je dozvoljen ulazak u Pakistan. Na aerodromu se kontroliše temperatura. Za lica koja pokažu simptome medicinsko osoblje na aerodromu odlučuje da li će zahtevati test na koronu. U slučaju pozitivnog testa, obavezna je mera izolacije u bolničkim ili uličnim uslovima.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'PALAU',
        info:
          'Državljani Srbije mogu bez ograničenja da uđu ili tranzitiraju. Neophodno je da prilikom ulaska popune formular o zdravstvenom stanju i da budu podvrgnuti zdravstvenom pregledu. Zabranjen je ulazak za one državljane Srbije koji su prethodnih 14 dana boravili ili tranzitirali u NR Kini (uključujući Hong Kong i Makao) ili su boravili na putničkim kruzerima koji su pristajali u luke zemalja koje su pogođene bolešću COVID-19.  \n' +
          'Navedeno se odnosi na sve strane državljane.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'PALESTINA',
        info:
          'Državljani Srbije ne mogu da uđu niti da tranzitiraju preko teritorije Palestine.',
        status: 'CLOSED_BORDER',
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
          'Državljani Srbije ne mogu ući u Peru osim lica koja imaju stalni boravak. Može se ući u zemlju vazdušnim putem, ukoliko let ne traje duže od 8 sati. Uslov za ukrcavanje u avion je negativan PCR test, ne stariji od 72 sata. Takođe se zahteva prethodno slanje elektronskim putem tzv. izjave o odgovornosti da je putnik upoznat sa svim sanitarnim propisima i procedurama u Peru.    \n' +
          'Kopnene granice su još uvek pod restriktivnim režimima lokalnih vlasti, koje izdaju posebna odobrenja. Kontakt e-mejlovi za dodatne informacije su:  <a href="mailto:iperu@promperu.gob.pe" class="text-info" target="_blank" rel="noopener noreferrer">iperu@promperu.gob.pe</a>  i  <a href="mailto:perulimaapto@promperu.gob.pe" class="text-info" target="_blank" rel="noopener noreferrer">perulimaapto@promperu.gob.pe</a> .',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'POLjSKA',
        info:
          'Državljani Srbije ne mogu da uđu i borave na teritoriju Poljske, osim lica koja imaju regulisan boravak. Tranzit preko teritorije Poljske je dozvoljen samo državljanima Srbije koji poseduju regulisan boravak u nekoj od zemalja EU a u cilju povratka u mesto svog prebivališta. Nije potreban test. \n' +
          'Dozvoljen je ulazak državljanima zemalja EU, EFTA i Švajcarske Konfederacije, kao i tranzit državljanima trećih zemalja koji imaju regulisan boravak u ovim zemljama. Takođe, dozvoljen je i ulazak državljanima Crne Gore, Gruzije, Japana, Kanade, Albanije i R. Koreje.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'PORTUGALIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Portugaliju, osim lica koja imaju regulisan boravak. Kada su u pitanju nužna (neturistička) putovanja, ulazak je dozvoljen i licima po druga dva osnova 1) ukoliko imaju regulisan boravak u nekoj od država članici EU 2) u slučaju profesionalnih razloga, radi studiranja, spajanja porodice, iz zdravstvenih i humanitarnih razloga – sve navedeno na bazi reciprociteta. \n' +
          'Za putnike koji dolaze iz Srbije, neophodan je negativan PCR test, ne stariji od 72 sata, osim za decu do dve godine starosti. \n' +
          'Putnici u tranzitu su takođe u obavezi da imaju test.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'RUANDA',
        info:
          'Državljani Srbije, kao i svi putnici koji dolaze u Ruandu, presedaju, tranzitiraju i odlaze iz Ruande, su u obavezi su da pokažu negativan PCR test, urađen u licenciranoj laboratoriji, ne stariji od 72 sata. \n' +
          'Pre leta svi putnici su u obavezi da popune elektronsku aplikaciju ( <a href="http://www.rbc.gov.rw/" class="text-info" target="_blank" rel="noopener noreferrer">http://www.rbc.gov.rw/</a> ) i dobiju jedinstveni zdravstveni kod (Unique Health Code), koji prikazuju prilikom sletanja u Ruandu. \n' +
          'Za putnike koji ulaze u Ruandu, obavezujući je još jedan PCR test koji se radi po dolasku, a rezultati testa dobijaju se u roku od 24 sata. Do trenutka dobijanja rezultata testa, putnici se, o svom trošku, smeštaju u hotele koji su namenjeni za tu svrhu. Sve aktuelne informacije u vezi sa ulaskom u Ruandu mogu se pronaći na sledećem linku:  <a href="https://travel.rbc.gov.rw/travel/" class="text-info" target="_blank" rel="noopener noreferrer">https://travel.rbc.gov.rw/travel/</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'RUMUNIJA',
        info:
          'Državljani Srbije ne mogu ući u Rumuniju ukoliko nemaju regulisan boravak. \n' +
          'Tranzit je moguć pod uslovom da se teritorija Rumunije napusti u roku od 24 sata. \n' +
          'U Rumuniju mogu ući lica koja putuju poslovno i prilože dokaze o saradnji sa privrednim subjektima u Rumuniji (pozivno pismo ili ugovor o radu), članovi porodice rumunskih i državljana drugih država članica EU, studenti, prekogranični radnici, sezonski poljoprivredni radnici, medicinsko osoblje, pomorsko i rečno osoblje, članovi međunarodnih sportskih delagacija, filmski radnici i umetnici.  \n' +
          'Licima koja iz Srbije ulaze u Rumuniju i kojima je dozvoljen ulazak, ukoliko prilože negativan PCR test, ne stariji od 72 sata, određuje se mera samoizolacije/ karantina u trajanju od 10 dana. Licima koja ne poseduju negativan PCR test, određuje se mera samoizolacije/karantina u trajanju od 14 dana. \n' +
          'Od navedene mere samoizolacije/karantina izuzete su sledeće kategorije: lica koja ostaju na teritoriji Rumunije najduže 72 sata, ukoliko prilože negativan PCR test; lica koja su vakcinisana, a po isteku 10 dana od primanja druge doze vakcine; lica za koja je potvrđeno da su bila pozitivna na virus u poslednjih 90 dana pre ulaska u Rumuniju, što dokazuju prezentovanjem medicinske dokumentacije; predstavnici stranih kompanija koje imaju predstavništva/filijale u Rumuniji; vozači teretnih vozila (veća od 2.4 tone) i putničnih vozila (sa više od 9 sedišta); diplomate; pomorsko i rečno osoblje; prekogranični radnici; studenti; članovi međunarodnih sportskih delegacija; filmski radnici.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'RUSKA FEDERACIJA',
        info:
          'Državljani Srbije mogu ući u Rusku Federaciju isključivo direktnim letom na relaciji Beograd - Moskva preko avio kompanija „Air Serbia“ i „Aeroflot“. Neophodan je negativan PCR test, ne stariji od 72 sata. \n' +
          'Državljani Srbije koji u Rusku Federaciju dolaze iz drugih pravaca, sa presedanjem u nekoj trećoj zemlji (na primer Istanbulu) ili drumskim putem, neophodno je da poseduju posebnu dozvolu za ulazak Kriznog štaba Ruske Federacije.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SAD',
        info:
          'Državljani Srbije mogu da uđu u SAD. Međutim, u SAD  ne mogu  da uđu ona lica koja su tokom prethodnih 14 dana boravili u NR Kini (osim Hong Konga i Makao), Iranu, 26 zemalja Šengen zone, V. Britaniji i Brazilu. Pod boravkom se smatra i tranzitiranje kroz međunarodnu zonu. \n' +
          'Obavezan je negativan PCR ili NAAT test, ne stariji od 3 dana ili za one koji su preležali bolest pozitivan test, ne stariji od 3 meseca, uz lekarsku potvrdu kojom se tvrdi da je lice bezbedno za putovanje. Test je obavezan i za decu počev od dve godine. Kontrolu posedovanja testa vrši avio prevoznik. Takođe, preporučuje se da se test uradi i u SAD, između trećeg i petog dana po dolasku, kao i da se bude 7 dana u samoizolaciji. Ukoliko dođe do odlaganja leta, iz bilo kojih razloga, putnici će morati da rade novi test ukoliko se ne uklapaju u traženi rok od 3 dana pre putovanja. \n' +
          'Dodatne informacije se mogu naći na sledećem linku:  <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html" class="text-info" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html</a>',
        status: 'CLOSED_BORDER',
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
          'Državljani Srbije mogu da uđu u San Marino ili tranzitiraju uz obavezu prethodne prijave Ministarstvu inostranih poslova San Marina, putem e-mejla:  <a href="mailto:viaggiareinformati@esteri.sm" class="text-info" target="_blank" rel="noopener noreferrer">viaggiareinformati@esteri.sm</a>   ili telefonski: 00378/549888888. Po dolasku obavezno je podvrgavanje serološkom testu. U slučaju pozitivnog rezultata lice se podvrgava molekuralnom testu i ukoliko rezultat bude pozitivan podleže kućnoj samoizolaciji u trajanju od 14 dana.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SAO TOME I PRINCIPE',
        info:
          'Državljani Srbije mogu da uđu u zemlju uz  negativan test, ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SAUDIJSKA ARABIJA',
        info:
          'Državljani Srbije koji imaju boravišnu dozvolu (iqama) sa važećom vizom ili neku od sledećih viza: poslovna, radna ili za posetu, mogu da uđu u zemlju uz obavezan negativan PCR test, ne stariji od 48 sati, izdat od strane akreditovane laboratorije u Srbiji. \n' +
          'Od 20. maja 2021, pored negativnog PCR testa, biće obavezan i karantin (smeštaj u nekom od centara koji nadležni organ Saudijske Arabije odredi) za putnike koji nemaju dokaz o vakcinisanju sa jednom od sledećih vakcina: dve doze Fajzer-Biontek, dve doze Oksford-AstraZeneka, dve doze Moderna, jedna doza Džonson&Džonson. \n' +
          'Neophodno je putno zdravstveno osiguranje koje, između ostalog, pokriva puno bolničko lečenje od COVID-19, kao i troškove karantina. U slučaju da troškovi smeštaja tokom karantina nisu obuhvaćeni, snosi ih putnik. \n' +
          'Zabranjen je ulazak licima koja su bila u tranzitu ili boravila u nekoj od sledećih država: UAE, Egipat, Liban, Turska, SAD, VB, Nemačka, Francuska, Italija, Irska, Portugal, Švajcarska, Švedska, Brazil, Argentina, JAR, Indija, Indonezija, Pakistan i Japan. Zabrana se odnosi i na putnike koji su bili u tranzitu kroz bilo koju od navedenih 20 država u prethodnih 14 dana.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SVETA LUCIJA',
        info:
          'Državljanima Srbije je dozvoljen ulazak u zemlju ukoliko poseduju negativan PCR test, ne stariji od sedam dana i popune formular koji se može naći na  <a href="https://www.stlucia.org/en/covid-19/pre-arrival-form-for-visitors/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.stlucia.org/en/covid-19/pre-arrival-form-for-visitors/</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SENEGAL',
        info:
          'Državljani Srbije mogu da uđu u Senegal, uz odobrenu vizu, pri čemu je neophodno da poseduju negativni test (PCR test i test krvi), ne stariji od 72 sata. Navedeno važi i za putnike koji provode duže od 24 časa u tranzitu. Putnici u avionu potpisuju izjavu da nemaju simptome virusa i da nisu bili u kontaktu sa zaraženim licima. Postoji i mogućnost da se zbog hitnosti putovanja putnik izuzme od obaveze prethodnog testiranja (PCR test i test krvi), ali to mora da se navede u izjavi koju avio kompanija dostavlja nadležnim vlastima na aerodromima u Senegalu. U tom slučaju, testiranje se vrši aerodromu o trošku putnika.     \n' +
          'Ulazak je moguć isključivo letovima avio kompanija Air Senegal i Royal Air Maroc.',
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
          'Državljani Srbije mogu da uđu u Sent Kits i Nevis. Putnici su u obavezi da popune formular na sajtu  <a href="www.covid19.gov.kn" class="text-info" target="_blank" rel="noopener noreferrer">www.covid19.gov.kn</a> ,  kao i da dostave negativan PCR test, ne stariji od 72 sata. Putnici se na aerodromu podvrgavaju pregledu i popunjavaju zdravstveni upitnik. \n' +
          'Neophodno je preuzeti aplikaciju na telefonu za praćenje kontakata. Prvih sedam dana boravka se može provesti isključivo u hotelu. Između 7 i 14 dana mora se uraditi novi RCR test o svom trošku, i ukoliko isti bude negativan, omogućava se kretanje van hotelskog kompleksa.',
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
        info:
          'Državljani Srbije mogu da putuju na Sejšele ali uz prethodno pribavljeno odobrenje od strane zdravstvenih vlasti. Obavezan je negativan PCR test, ne stariji od 72 sata. Preko posebne platforme na stranici  <a href="https://seychelles.govtas.com/" class="text-info" target="_blank" rel="noopener noreferrer">https://seychelles.govtas.com/</a>  se pribavlja odobrenje za ulazak. Putnici se ohrabruju da se pre puta vakcinišu, ali njihov status u tom pogledu ne utiče na ulazak u zemlju. Osiguranje koje pokriva COVID-19 je obavezno.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SIJERA LEONE',
        info:
          'Državljani Srbije mogu da uđu u Sijera Leone uz negativan PCR test, ne stariji od 72 sata, i dozvolu putovanja koja se dobija preko portala Vlade Sijera Leonea ( <a href="www.travel.gov.sl" class="text-info" target="_blank" rel="noopener noreferrer">www.travel.gov.sl</a> ).  Takođe, po dolasku u zemlju su dužni da popune zdravstveni upitnik i prezentuju potvrdu o uplati za novi PCR i RDT test kojima će biti podvrgnuti po dolasku u zemlju.  \n' +
          'U slučaju da je RDT test negativan, putnicima je dozvoljeno da napuste aerodrom. U obrnutom slučaju se stavljaju u izolaciju u neki od hotela u gradu Lunđi dok se ne dobiju rezultati PCR testa. Vreme za dobijanje rezultata PCR testa je 48 sati. U slučaju da je PCR test pozitivan zdravstvene vlasti Sijera Leone prinudno upućuju putnika u neki od centara za lečenje.',
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
          'Državljani Srbije mogu ući u Siriju jedino iz Libana, preko kopnenog GP „Masna“. Za ulazak je neophodan negativan PCR test urađen u državnoj laboratoriji u Bejrutu, ne stariji od 12 sati. Po ulasku u Siriju, neophodna je samoizolacija u trajanju od 5 dana. Državljani Srbije ne mogu tranzitirati kroz Siriju.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'SLOVAČKA',
        info:
          'Državljani Srbije mogu da uđu u Slovačku ukoliko imaju konkretan razlog (npr. poslovni put, poseta bliskim osobama, radi zaposlenja i sl). Neophodna je elektronska registracija pre ulaska na teritoriju Slovačke na:  <a href="http://korona.gov.sk/ehranica" class="text-info" target="_blank" rel="noopener noreferrer">http://korona.gov.sk/ehranica</a> , kao i izolacija u kućnim uslovima do dobijanja negativnog testa koji se radi najranije osmog dana izolacije. Osobe koje dolaze avionom treba da popune formular na sajtu  <a href="http://www.mindop.sk/covid" class="text-info" target="_blank" rel="noopener noreferrer">http://www.mindop.sk/covid</a> . \n' +
          'Osobe koje su tokom prethodnih 14 dana posetile isključivo države: članice Evropske unije, Island, Norvešku, Lihtenštajn, Švajcarsku ili Ujedinjeno Kraljevstvo mogu ući u Slovačku bez poštovanja epidemioloških mera ukoliko su: vakcinisani drugom dozom  mRNA (iRNK)  vakcine protiv  COVID-19,  nakon 14 dana od vakcinacije; vakcinisani prvom dozom  COVID-19  vektorske vakcine nakon 4 nedelje od vakcinacije; vakcinisani prvom dozom vakcine protiv  COVID-19 , ako je ona primljena u intervalu od 180 dana od preležane bolesti  COVID-19. \n' +
          'Tranzit je moguć za sve osobe, sa članovima porodice, ukoliko putuju u državu u kojoj imaju odobren boravak ili čiji su državljani. Tranzit može da traje do osam sati. Ostalim licima je neophodna dozvola za tranzit (osim izuzetaka, kao što su vozači kamiona, autobusa i sl).',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'SLOVENIJA',
        info:
          'Državljani Srbije mogu da uđu u Sloveniju uz obavezni karantin od 10 dana ili posedovanje PCR ili brzog antigenskog testa (HAGT), ne starijeg od 48 sati i urađenog u jednoj od zemalja EU, odnosno Šengenskog prostora, Ujedinjenom Kraljevstvu i SAD. \n' +
          'Od obaveze karantina i posedovanja pomenutih testova, državljani Srbije su izuzeti u sledećim slučajevima: ukoliko prilože potvrdu o pozitivnom HAGT ili PCR testu starijem od 21 dan, ali ne i starijem od 6 meseci, odnosno potvrdu lekara da su preležali COVID-19, a da od početka simptoma nije prošlo više od šest meseci ( test/potvrda izdata u EU, Ujedinjenom Kraljevstvu i SAD ); ukoliko prilože  negativan PCR  test, ne stariji od 48 sati, izdat u Srbiji,  a  ulaze u Sloveniju na kontrolnoj tački A-aerodrom ; ukoliko prilože potvrdu o vakcinaciji protiv COVID-19 kojom se dokazuje da je od primanja druge doze vakcine proizvođača  Biontech/Pfizer  proteklo najmanje 7 dana,  Moderna, Sputnik V, Johnson&Johnson, Sinovac Biotech, Sinopharm  proteklo najmanje 14 dana i   AstraZeneca  najmanje 21 dan; ukoliko se tranzitira kroz Sloveniju i napušta zemlja najkasnije u roku od 12 sati nakon ulaska; ukoliko je reč o osobama sa diplomatskom putnom ispravom; ukoliko je reč o licu koje dnevno ili povremeno prelazi granicu radi angažovanja u oblasti vaspitanja, obrazovanja ili naučnog istraživanja i to potvrđuje odgovarajućim dokazima; ukoliko je reč o licima u sektoru međunarodnog prevoza; ukoliko je reč o licima koja vrši prevoz robe u Sloveniju ili iz Slovenije u privrednom saobraćaju; ukoliko su vlasnici nekretnina ili zakupci zemljišta u pograničnim delovima; ukoliko je reč o licu koje je dovezeno u Sloveniju spasilačkim ili sanitetnim vozilom, kao i pratećoj zdravstvenoj pratnji u tom vozilu; ukoliko su pripadnici služba zaštite i spasavanja, zdravstva, policije, vatrogasaca ili druga lica koja vrše humanitarni prevoz i vraćaju se u roku od 24 sata; ukoliko se granica prelazi iz hitnih razloga vezanih za otklanjanje neposredne opasnosti za zdravlje, život, nekretninu i poslovnih razloga, a vraća se u roku od 12 sati po prelasku granice; ukoliko je pripadnik policije ili službenik državnih organa koji se vraća sa upućivanja na rad u inostranstvu, kao i službenik državnih organa i akreditovani novinar na službenom putu u inostranstvu; ukoliko ima zakazanu zdravstvenu uslugu u Sloveniji i vraća se nazad odmah po obavljenoj usluzi. \n' +
          'Za tranzit kroz Sloveniju neophodno je posedovanje dokaza o omogućenom ulasku u državu u koju se lice uputilo (boravišna dozvola, overeno pozivno pismo, rezervacija hotela i sl.) i nije potrebno posedovanje negativnog PCR testa. Tranzit može trajati maksimalno 12 sati. \n' +
          'Detaljnije informacije možete pronaći na sledećem linku:  <a href="https://www.gov.si/en/topics/coronavirus-disease-covid-19/border-crossing/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.si/en/topics/coronavirus-disease-covid-19/border-crossing/</a>',
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
          'Državljani Srbije mogu da uđu u Somaliju. Neophodan je negativan PCR test, ne stariji od 96 sati. \n' +
          'Prilikom odlaska iz Somalije svi putnici su u obavezi da imaju negativan PCR test ne stariji od 72 sata.',
        status: 'NEGATIVE_TEST_REQUIRED',
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
          'Državljani Srbije mogu da uđu u Tanzaniju. Neophodan je negativan PCR test, ne stariji od 72 sata. Po dolasku, svi putnici se o svom trošku (25 dolara) podvrgavaju dodatnom testiranju (brzi test). \n' +
          'Pre dolaska u Tanzaniju (u roku od 24 sata) svi putnici moraju da popune obrazac na sajtu  <a href="https://afyamsafiri.moh.go.tz/" class="text-info" target="_blank" rel="noopener noreferrer">https://afyamsafiri.moh.go.tz/</a> .',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'TADžIKISTAN',
        info:
          'Državljani Srbije ne mogu da uđu u Tadžikistan, osim lica koja imaju odobrenje za stalni boravak ili na osnovu prethodno pribavljenog odobrenja nadležnih organa Tadžikistana u slučajevima postojanja bračnih ili rodbinskih veza. Nije potreban negativan test, ali je obavezan 14-to dnevni karantin. Testiranje obavezno samo u slučajevima postojanja simptoma bolesti.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'TOGO',
        info:
          'Državljani Srbije mogu da uđu u Togo. Neophodan je negativan PCR test, ne stariji od pet dana. Po dolasku na aerodrom u Togo putnici se podvrgavaju ponovnom testiranju. Takođe, i pre napuštanja Togoa putnici su dužni da urade PCR test. Troškove oba testa snose putnici.  Po dolasku u Togo putnici su u obavezi da instaliraju mobilnu aplikaciju TOGO SAFE, koja mora biti aktivna tokom boravka i najmanje još 30 dana po napuštanju Togoa. U slučaju nepridržavanja ove mere, licu se može odrediti karantin i izreći novčana kazna.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'TONGA',
        info:
          'Svim stranim državljanima, uključujući državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju, osim uz specijalno odobrenje nadležnih organa.  \n' +
          'Obavezan je karantin od 14 dana.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'TRINIDAD I TOBAGO',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
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
          'Državljani Srbije mogu da uđu u Tunis. Neophodan je negativan PCR test, ne stariji od 72 sata. Po ulasku u Tunis obavezan je karantin u hotelu u trajanju od sedam dana, o trošku putnika. Nakon isteka 7 dana,  radi se test i ukoliko je isti negativan, karantin se prekida.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'TURSKA',
        info:
          'Državljani Srbije mogu da uđu na teritoriju Turske bez obaveze karantina ili testiranja pod uslovom da poseduju potvrdu o vakcinaciji, izdatu od strane nadležnog organa R. Srbije. Lica do 18 godina starosti, mogu da uđu u Tursku u pratnji odraslog člana porodice koji poseduje potvrdu o vakcinaciji. Lica koja su preležala COVID-19, mogu da uđu u Tursku sa potvrdom o imunitetu izdatom od strane nadležnog organa Srbije. \n' +
          'Za državljane Srbije koji nisu vakcinisani neophodan je negativan PCR test, ne stariji od 72 sata. Test je potreban za sva lica starija od šest godina. \n' +
          'U slučaju da lice ulazi u Tursku drumskim prevozom i ne poseduje negativan PCR test, obavezan je karantin na adresi koja se prijavi kao mesto boravka. Ukoliko se ne poseduje adresa boravka, mesto karantina će utvrditi nadležna zdravstvena uprava. Sedmog dana karantina se lice testira i ukoliko rezultat bude negativan, karantin se prekida. \n' +
          'U roku od 72 sata pre dolaska u Tursku neophodno je elektronski se registrovati putem sledećeg linka:  <a href="https://register.health.gov.tr/" class="text-info" target="_blank" rel="noopener noreferrer">https://register.health.gov.tr/</a>  . Tokom registracije se dodeljuje takozvani HES KOD koji predstavlja elektronski vid praćenja zdravstvenog stanja putnika. Neophodan je za ulazak u sve tržne centre, restorane, državne ustanove i druge objekte. Svi putnici su dužni da pri ulasku u Tursku pokažu isti u štampanoj ili elektronskoj formi.',
        status: 'NO_TEST_REQUIRED',
      },
      {
        name: 'TURKMENISTAN',
        info:
          'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'UGANDA',
        info:
          'Državljani Srbije mogu da uđu u Ugandu. Neophodan je negativan PCR test, ne stariji od 120 sati. \n' +
          'Prilikom odlaska iz Ugande svi putnici su u obavezi da poseduju negativan PCR test, koji je urađen u ovlašćenoj laboratoriji. Sve aktuelne informacije u vezi sa ulaskom u Ugandu mogu se pronaći na internet stranici:  <a href="https://www.health.go.ug/covid/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.health.go.ug/covid/</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'UJEDINjENI ARAPSKI EMIRATI',
        info:
          'Državljani Srbije mogu da uđu u UAE. Neophodan je negativan PCR test, ne stariji od 48 sati (za sve emirate osim za Abu Dabi). Dvostruko testiranje (PCR-test), pre putovanja i po dolasku u UAE nije više obavezno za UAE rezidente, turiste i tranzitne turiste koji dolaze iz 60-tak zemalja, uključujući Srbiju. Oni imaju mogućnost da se testiraju u Srbiji (test ne stariji od 48 sati) ili po sletanju na Dubai aerodrom. Nalaz testa sa aerodroma se dobija u roku od jednog do dva dana na mobilni telefon. U emiratu Dubai je obavezna samoizolacija do dobijanja rezultata testa sa aerodroma. Praćenje pridržavanja mere samoizolacije se obavlja preko mobilnog telefona (obavezna instalacija Al Hosn aplikacije). \n' +
          `Za ulazak u Abu Dabi je neophodan PCR test,  ne stariji od 72 sata. Putnici iz zemalja koje su na ''zelenoj listi'' i imaju negativan test  nemaju obavezu karantina. Za putnike iz ostalih zemalja je obavezan karantin u trajanju od 10 dana i nošenje GPS narukvice. Po dolasku u Abu Dabi na aerodromu se radi dodatno PCR testiranje. Za one koji ostaju u Abu Dabiju duže od 6 dana neprekidno, obavezan je PCR test šestog dana i još jedan dvanaestog dana. Lista zemalja na zelenoj listi se može naći u sledećem linku:  <a href="https://visitabudhabi.ae/en/plan-your-trip/covid-safe-travel/permitted-countries " class="text-info" target="_blank" rel="noopener noreferrer">https://visitabudhabi.ae/en/plan-your-trip/covid-safe-travel/permitted-countries </a> \n` +
          'Specifičnost UAE je da između emirata Abu Dabi i Dubai postoji kontrolni punkt koji se ne može preći bez negativnog nalaza PCR ili DPI testa. Takođe, svi nerezidenti i rezidenti UAE, koji preko Dubai aerodroma dođu u UAE i nastave kopnom ka Abu Dabiju, na punktu će dobiti narukvicu kojom se prati obavezna samoizolacija u trajanju od 10 dana. Više informacija o režimu ulaska u Abu Dabi se može naći u sldećem linku:  <a href="https://visitabudhabi.ae/en/plan-your-trip/covid-safe-travel" class="text-info" target="_blank" rel="noopener noreferrer">https://visitabudhabi.ae/en/plan-your-trip/covid-safe-travel</a>',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'UZBEKISTAN',
        info:
          'Državljani Srbije ne mogu da uđu u Uzbekistan. Granice su zatvorene.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'UKRAJINA',
        info:
          'Državljani Srbije mogu da uđu u Ukrajinu ukoliko poseduju negativan PCR test, ne stariji od 72 sata, i polisu zdravstvenog osiguranja na troškove lečenja od virusa COVID-19 za vreme boravka u Ukrajini izdatu od strane osiguravajuće kompanije registrovane u Ukrajini ili osiguravajuće kompanije koja ima predstavništvo ili ugovorne odnose sa osiguravajućom kompanijom – partnerom na teritoriji Ukrajine. Od obaveze posedovanja PCR testa i osiguranja su izuzeti: lica koja imaju stalni boravak u Ukrajini, izbeglice, zaposleni u diplomatsko-konzularnim predstavništvima i predstavništva međunarodnih misija i organizacija akreditovanim u Ukrajini i članovi njihovih porodica, vozači i članovi posada teretnih vozila, autobusa u redovnom i neredovnom prevozu, članovi vazduhoplovnih i pomorskih posada, rečnih brodova, članovi voznih i železničkih posada, pripadnici jedinica oružanih snaga država članica NATO-a i država članica programa „Partnerstvo za mir“, koji učestvuju u obuci jedinica Oružanih snaga. Deca, strani državljani, mlađa od 12 godina, moraju posedovati samo osiguranje na troškove lečenja od COVID-19, ali ne i negativni PCR test. Strani državljani sa stalnim boravkom u Ukrajini podležu samoizolaciji u trajanju od 14 dana i dužni su da instaliraju mobilnu aplikaciju „Vdoma“. Od obaveze samoizolacije izuzeti su: lica mlađa od 12 godina, vozači i članovi posada teretnih vozila i autobusa u redovnom prevozu, članovi posada vazduhoplova i brodova, rečnih brodova, članovi voznih i železničkih posada, osobe koje transportuju matične ćelije radi transplantacije, osobe sa negativnim PCR testom, ne starijim od 72 sata do prelaska državne granice. Samoizolacija se može prekinuti pre isteka perioda od 14 dana u slučaju dobijanja negativnog PCR testa, koji je urađen nakon prelaska državne granice. Testiranje nije moguće obaviti na graničnim punktovima. Ulazak i izlazak sa teritorije Donjecka, Luganska, Krima i Sevastopolja podrazumeva da strani državljani poseduju polisu zdravstvenog osiguranja na troškove lečenja od COVID-19. Navedena polisa osiguranja nije potrebna stranim državljanima sa stalnim boravkom u Ukrajini, zaposlenima u predstavništvima međunarodnih misija i organizacija akreditovanim u Ukrajini.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'URUGVAJ',
        info:
          'Državljani Srbije ne mogu ući u Urugvaj osim u izuzetnim slučajevima i uz posebno odobrenje koje se traži putem sledeće e-mejl adrese:  <a href="mailto:dnm-consultas@minterior.gub.uy" class="text-info" target="_blank" rel="noopener noreferrer">dnm-consultas@minterior.gub.uy</a> . Strani državljani sa stalnim boravkom u Urugvaju mogu ući u zemlju uz prethodnu registraciju i pod uslovima navedenim na sledećem sajtu:  <a href="https://www.gub.uy/tramites/creacion-usuario-gubuy-id-uruguay-auto-registro" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gub.uy/tramites/creacion-usuario-gubuy-id-uruguay-auto-registro</a> .',
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
          'Državljani Srbije ne mogu da uđu u Finsku, osim lica koja imaju regulisan boravak. Tranzit je dozvoljen na aerodromima. \n' +
          'Dozvoljen je ulazak u Finsku licima sa stalnim boravkom, članovima porodica i emotivnim partnerima finskih državljana (bez obzira na državljanstvo), kao i licima koja dolaze iz određenog broja evropskih i trećih država (samo esencijalna i putovanja vezana za posao). Po ulasku u zemlju, sva lica (osim dece rođene posle 2008. g. i prevoznika, na koje se primenjuju posebne zdravstvene instrukcije) koja dolaze iz zemalja visokog rizika (sa više od 25 novih slučajeva infekcije na 100.000 stanovnika u poslednje dve nedelje; lista zemalja i druge korisne informacije dostupne na:  <a href="https://raja.fi/en/guidelines-for-border-traffic-during-pandemic" class="text-info" target="_blank" rel="noopener noreferrer">https://raja.fi/en/guidelines-for-border-traffic-during-pandemic</a> ) bivaju usmeravana na zdravstveni pregled, koji može uključivati i PCR test (čak i u slučaju posedovanja dokaza o primljene dve doze vakcine) - odbijanje pregleda može rezultirati novčanom ili kaznom zatvora u trajanju do tri meseca. Putnici i sami mogu da zakažu testiranje (besplatno) putem linka:  <a href="https://www.finentry.fi/en/" class="text-info" target="_blank" rel="noopener noreferrer">https://www.finentry.fi/en/</a> . PCR test nije neophodan u slučaju posedovanja dokaza o preležanom virusu u poslednjih 6 meseci ili negativnog rezultata testa (PCR ili antigenskog) ne starijeg od 72 sata, kao i u slučaju dolaska iz država sa manje od 25 novih slučajeva na 100.000 stanovnika u poslednje dve nedelje. Neophodna je samoizolacija u trajanju od 14 dana, ukoliko se ne radi drugi test u Finskoj, ili do dobijanja negativnog rezultata drugog testa. \n' +
          'Detaljne informacije dostupne su na internet adresi:  <a href="https://thl.fi/en/web/infectious-diseases-and-vaccinations/what-s-new/coronavirus-covid-19-latest-updates/travel-and-the-coronavirus-pandemic" class="text-info" target="_blank" rel="noopener noreferrer">https://thl.fi/en/web/infectious-diseases-and-vaccinations/what-s-new/coronavirus-covid-19-latest-updates/travel-and-the-coronavirus-pandemic</a> . \n' +
          'Odgovori finske granične službe (na engleskom jeziku) na upite o režimu ulaska mogu se dobiti pozivom na tel. +358295420100 ili slanjem imejla na adresu:  <a href="mailto:rajavartiolaitos@raja.fi" class="text-info" target="_blank" rel="noopener noreferrer">rajavartiolaitos@raja.fi</a>',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'FIDžI',
        info:
          'Državljani Srbije mogu da uđu u Fidži. Neophodan je negativan PCR test, ne stariji od 48 sati. Takođe, obavezan je karantin od 14 dana.',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'FRANCUSKA',
        info:
          'Državljanima Srbije koji nemaju regulisan boravak u Francuskoj ili u nekoj od zemalja EU, nije dozvoljen ulazak na teritoriju Francuske. Tranzit preko aerodroma u Francuskoj je moguć samo ukoliko ne podrazumeva napuštanje međunarodne zone i ukoliko ne traje duže od 24 sata. Za putnike koji dolaze iz Srbije, obavezan je negativan PCR test, ne stariji od 72 sata (osim za decu mlađu od 11 godina), kao i nakon ulaska samoizolacija u trajanju od 7 dana. Putnicima koji nemaju negativan PCR test, ne dozvoljava se ukrcavanje u avion.  \n' +
          'Izuzetno može biti dozvoljen ulazak za putnike iz Srbije koji dolaze u Francusku radi vršenja osnovne profesionalne aktivnosti, studija, nastavne aktivnosti ili iz medicinskih razloga. Za dobijanje specijalne dozvole za ulazak u Francusku, nadležna je Ambasada Francuske u Beogradu. \n' +
          'Za više informacija o režimu ulaska u Francusku, molimo da posetite internet stranicu Ambasade Srbije u Parizu:  <a href="http://www.paris.mfa.gov.rs/odrzavanje/uploads/Režim_ulaska_u_Francusku_16_11_2020.pdf" class="text-info" target="_blank" rel="noopener noreferrer">http://www.paris.mfa.gov.rs/odrzavanje/uploads/Režim_ulaska_u_Francusku_16_11_2020.pdf</a>',
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
          'Državljani Srbije ne mogu da uđu u  Holandiju osim lica imaju regulisan boravak ili potpadaju pod neki od izuzetaka od zabrane ulaska. Dozvoljava se ulazak licima koja imaju neodložnu i hitnu potrebu da posete svoje porodice (neizlečiva bolest ili u slučaju sahrane), osobama kojima je potrebna međunarodna zaštita i osobama koje se primaju iz humanitarnih razloga. Licima koja potpadaju pod izuzetak od zabrane putovanja i koja dolaze iz Srbije se strogo preporučuje da budu u kućnom karantinu u trajanju od 10 dana. \n' +
          'Licima starijim od 13 godina, koja dolaze avionom ili brodom u Holandiju, neophodno je da pored obavezujućeg negativnog PCR testa, ne starijeg od 72 sata, poseduju i negativan rezultat na brzom testu na COVID-19 koji mora biti urađen maksimalno 24 časa pre ukrcavanja na avion ili brod. Ukoliko lice poseduje negativan PCR test koji nije stariji od 24 časa nije potrebno da poseduje i brzi test. \n' +
          'Tranzit je dozvoljen. \n' +
          'Dodatne informacije o proceduri ulaska i izuzecima od zabrane putovanja mogu se naći u sledećem linku:  <a href="https://www.government.nl/topics/coronavirus-covid-19" class="text-info" target="_blank" rel="noopener noreferrer">https://www.government.nl/topics/coronavirus-covid-19</a>',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'HONDURAS',
        info:
          'Državljani Srbije mogu da uđu u Honduras. Neophodan je negativan PCR test, ne stariji od 72 sata, ili negativan brzi kovid test. Takođe, potrebno je registrovati se u imigracionom institutu ( <a href="https://prechequeo.inm.gob.hn/Login" class="text-info" target="_blank" rel="noopener noreferrer">https://prechequeo.inm.gob.hn/Login</a> ).',
        status: 'NEGATIVE_TEST_REQUIRED',
      },
      {
        name: 'HRVATSKA',
        info:
          'Državljani Srbije koji u Hrvatsku putuju iz turističkih razloga i imaju potvrdu o uplaćenom smeštaju (u hotelu, kampu, kod privatnog iznajmljivača ili u drugom obliku turističkog smeštaja), koji su vlasnici nekretnina u Hrvatskoj ili putuju u Hrvatsku zbog neodložnih ličnih/porodičnih razloga/poslovnih obaveza mogu da uđu u Republiku Hrvatsku ukoliko: ·         prilože negativan PCR ili brzi antigenski test, ne stariji od 48 sati; ·         prilože potvrdu o vakcinaciji  (prošlo više od 14 dana od primanja druge doze vakcine); ·         ukoliko je osoba prebolela COVID-19  (poseduje lekarsku potvrdu o tome ili pozitivan nalaz PCR ili brzog antigenskog testa), te je nakon toga vakcinisana najmanje jednom dozom vakcine, izuzeće od obaveze posedovanja negativnog PCR ili brzog antigenskog testa odnosno samoizolacije se produžava do pet (5) meseci od primene vakcine; ·         prilože potvrdu o pozitivnom PCR testu ili brzom antigenskom testu kojim se potvrđuje da se osoba oporavila od virusa SARS-CoV-2, pri čemu je test urađen u prethodnih 180 dana, a stariji je od 11 dana računajući od dana dolaska na granični prelaz, ili uz potvrdu lekara da je osoba preležala COVID-19; ·         uz obavezu PCR ili brzog antigenskog testiranja odmah po dolasku u Hrvatsku (o vlastitom trošku), uz samoizolaciju do dobijanja negativnog rezultata. U slučaju da testiranje nije moguće obaviti određuje se mera samoizolacije u trajanju od 10 dana. Pored navedenog, prilikom ulaska u Hrvatsku, svi putnici su u obavezi da prilože i verodostojnu dokumentaciju u svrhu dokazivanja razloga putovanja u Hrvatsku. Za lica u tranzitu nije potreban test, ali je neophodan dokaz da je odobren ulazak u sledeću zemlju. Tranzit ne sme biti duži od 12 sati. Deca mlađa od sedam godina koja putuju u pratnji roditelja/staratelja izuzeta su od obaveze posedovanja negativnog PCR testa i samoizolacije ukoliko roditelji/staratelji poseduju negativan PCR test ili brzi antigentski test, odnosno potvrdu o vakcinaciji ili preboleloj bolesti COVID-19. Osobe koje putuju u Hrvatsku iz humanitarnih razloga - pomoć područjima pogođenim zemljotresom mogu ući u Hrvatsku po osnovu prethodne saglasnosti Stožera civilne zaštite Hrvatske. Za te lica se ne zahteva potvrda o testiranju i vakcinaciji, niti im se određuje samoizolacija.',
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
          'Državljani Srbije mogu ući u Crnu Goru bez posedovanja negativnog PCR testa preko svih graničnih prelaza, uz poštovanje zdravstvenih mera, u skladu sa zdravstvenim upozorenjem Instituta za javno zdrvlje Crne Gore.  \n' +
          'Zdravstveno upozorenje dostupno je na svim graničnim prelazima u Crnoj Gori i objavljuje se na internet stranici Ministarstva zdravlja i Instituta za javno zdravlje Crne Gore. Obrazac zdravstvenog upozorenja možete preuzeti sa ove internet adrese: <a href="//mzd.gov.me/ResourceManager/FileDownload.aspx?rid=422471&rType=2&file=Obavje%C5%A1tenje%20-%20zdravstveno%20upozorenje%20IJZCG%2011.01.2021.pdf " class="text-info" target="_blank" rel="noopener noreferrer">//mzd.gov.me/ResourceManager/FileDownload.aspx?rid=422471&rType=2&file=Obavje%C5%A1tenje%20-%20zdravstveno%20upozorenje%20IJZCG%2011.01.2021.pdf </a> \n' +
          'Detalji u vezi sa ulaskom stranih državljana u Crnu Goru se mogu naći u sledećem linku:  <a href="https://www.gov.me/naslovna" class="text-info" target="_blank" rel="noopener noreferrer">https://www.gov.me/naslovna</a>',
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
          'Državljni Srbije ne mogu da uđu u Češku Republiku osim lica sa regulisanim boravkom. Izuzetak su određene kategorije lica kao što su: članovi porodice čeških državljana; ako je ulazak u interesu Češke; hitne situacije – unapred zakazana medicinska intervencija, odazivanje na poziv državnog organa; tranzit kroz Češku; radnici u međunarodnom transportu; diplomate akreditovane u Češkoj i članovi njihovih porodica; kao i partneri čeških državljana. Sva lica koja dolaze iz Srbije, kao tamno crvene zone, dužna su: da poseduju RT-PCR test, ne stariji od 72 sata; da se, pre ulaska u Češku, prijave nadležnom regionalnom zavodu za javno zdravlje (po mestu gde borave) i popune elektronski formular koji se može preuzeti putem sledećeg linka  <a href="https://plf.uzis.cz/" class="text-info" target="_blank" rel="noopener noreferrer">https://plf.uzis.cz/</a> ; da kopiju navedenog formulara prezentuju prilikom kontrole na granici, kao i sve vreme boravka u Češkoj; da se o sopstvenom trošku, testiraju na COVID-19, najranije 5. dana od dana ulaska u Češku, i, bez odlaganja, rezultat testa dostave nadležnom zavodu za javno zdravlje; moraju biti u samoizolaciji do dobijanja negativnog rezultata testa; obaveza nošenja maske tipa FFP2, KN95, N95, AS/NZ P2, DS FFR traje 14 dana. Zaposlena lica i studenti imaju obavezu da obaveste svog poslodavca, odnosno obrazovnu ustanovu o boravku u tamno crvenoj zoni dužem od 12 časova. \n' +
          'Tranzit kroz Češku ne sme trajati duže od 12 sati. Sva lica u tranzitu dužna su da poseduju negativan rezultat RT-PCR, ne stariji od 72 sata ili antigenski test, ne stariji od 24 sata. Sve vreme trajanja tranzita važi obaveza nošenja maske tipa FFP2, KN95, N95, AS/NZ P2, DS FFR. Navedena obaveza ne važi za tranzit na aerodromu ali važi za lica koja kopnom nastavljaju put po dolasku avionom u Češku. Radnici u međunarodnom transportu koji preko Češke tranzitiraju do Nemačke u obavezi su da, prilikom ulaska u Češku, poseduju negativan rezultat RT-PCR/antigenskog testa na COVID-19, ne stariji od 36 sati, odnosno za ulazak u SRN ne stariji od 48 sati.  \n' +
          'Prilikom dolaska u Češku, na medicinsku intervenciju vantelesne oplodnje, obavezno je testiranje na COVID-19 u Češkoj. U slučaju pozitivnog rezultata testa urađenog u Češkoj, paru se određuje dvonedeljni karantin kao obavezan, zbog čega će biti onemogućen da obavi medicinsku intervenciju u planiranom terminu. Potrebno je, pre polaska na put, uplatiti adekvatno zdravstveno osiguranje koje pokriva COVID-19.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ČILE',
        info:
          'Državljani Srbije ne mogu ući u Čile osim lica koja imaju stalni boravak. Lica koji imaju stalni boravak u Čileu mogu ući u zemlju vazdušnim putem isključivo preko međunarodnog aerodroma Arturo Merino Benitez u blizini Santjaga. Uslov za ukrcavanje u avion je negativan PCR test, ne stariji od 72 sata. Neophodno je imati odgovarajuće odobrenje koje izdaju čileanska diplomatsko-konzularna predstavništva, kao i  zdravstveno osiguranje kojim je pokriveno i lečenje od COVID-19 i koje nije ispod vrednosti od 30.000 USA dolara. Prilikom sletanja u Čile popunjavaju se odgovarajući formulari, uključujući tzv. formular o praćenju kretanja čiji sadržaj se može naći na sledećoj veb stranici:  <a href="https://www.c19.cl/formularios.html" class="text-info" target="_blank" rel="noopener noreferrer">https://www.c19.cl/formularios.html</a> . Lica koja imaju odobrenje za ulazak podležu obaveznom karantinu od 10 dana u specijalno određenim za to karantinskim smeštajima. Preporučuje se rezervacija datog smeštaja pre polaska na put. U prvih pet dana se obavlja PCR test i ukoliko je rezultat negativan, ostatak karantina može da se provede u sopstvenom prebivalištu. Lica koja dolaze iz zemalja sa visokim stepenom rizka imaju obavezni karantin od 14 dana. Izlazak iz Čilea je zabranjen svim licima, osim u urgentnim i humanitarnim slučajevima.',
        status: 'CLOSED_BORDER',
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
          'Državljani Srbije ne mogu da uđu u Švajcarsku Konfederaciju osim lica koja imaju regulisani boravak. \n' +
          'Lica koja imaju pravo da uđu iz Srbije u Švajcarsku moraju da najave svoj dolazak popunjavanjem prijave na sajtu  <a href="https://swissplf.admin.ch/home" class="text-info" target="_blank" rel="noopener noreferrer">https://swissplf.admin.ch/home</a> , ali samo ako dolaze avionom, autobusom, vozom ili brodom. Putnici koji dolaze iz Srbije avionom, moraju da poseduju i negativan PCR test. \n' +
          'Od 22.febraura 2021.g. putnici koji dolaze iz Srbije moraju unapred da najave svoj dolazak na sajtu  <a href="https://swissplf.admin.ch/home" class="text-info" target="_blank" rel="noopener noreferrer">https://swissplf.admin.ch/home</a> , da poseduju negativan PCR test, ne stariji od 72 sata (bez obzira na prevozno sredstvo kojim dolaze) i da se podvrgnu desetodnevnom karantinu (kućnoj izolaciji), koji može da se prekine negativnim PCR testom tek sedmog dana od ulaska u Švajcarsku. \n' +
          'Više informacija se mogu naći u sledećem linku:   <a href="https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/empfehlungen-fuer-reisende/liste.html " class="text-info" target="_blank" rel="noopener noreferrer">https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/empfehlungen-fuer-reisende/liste.html </a> \n' +
          'Tranzit je dozvoljen za lica koja poseduju regulisan boravak u odredišnoj zemlji u Šengenskom prostoru. U tom slučaju, potrebno je staviti na uvid dokaz o nameri i mogućnosti ulaska u tu zemlju.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ŠVEDSKA',
        info:
          'Državljani Srbije ne mogu da uđu u Švedsku, osim lica koja imaju regulisani boravak najmanje godinu dana. Nije dozvoljen ni tranzit preko aerodroma u Švedskoj.  \n' +
          'Svi strani državljani koji ulaze u Švedsku moraju posedovati negativan PCR test, ne stariji od 48 sati. Od ovog pravila izuzete su osobe mlađe od 18 godina, kao i lica koja imaju dozvolu boravka u Švedskoj i lica zaposlena u sektoru saobraćaja.',
        status: 'CLOSED_BORDER',
      },
      {
        name: 'ŠPANIJA',
        info:
          'Državljani Srbije ne mogu da uđu u Španiju. Od navedenog su izuzeta lica sa stalnim ili privremenim boravkom u Španiji i zemljama EU i Šengena, nosioci dugotrajne vize, studenti sa odgovarajaućom dozvolom, diplomatsko osoblje u cilju vršenja dužnosti, visokokvalifikovani radnici čiji je rad neophodan i ne može se odložiti ili obavljati na daljinu, uključujući učesnike sportskih događaja na visokom nivou, lica koja putuju iz propisno akreditovanih imperativnih porodičnih razloga i lica koji dokumentuju razloge više sile ili potrebe, ili im je ulazak dozvoljen iz humanitarnih razloga. Takođe, izuzeta su i lica sa boravkom u zemaljama - Australija, Kanada, Gruzija, Japan, Novi Zeland, Ruanda, Južna Koreja, Tajland, Tunis, Urugvaj i Kina, pod uslovom da dolaze direktno iz tih zemalja. \n' +
          'Od 23. novembra je neophodan negativan PCR test, ne stariji od 72 sata za putnike koji ulaze u Španiju iz rizičnih zemalja EU (crvena i siva zona) i 37 trećih zemalja, među kojima je i Srbija. \n' +
          'Svi putnici moraju da popune zdravstveni obrazac pre ulaska u zemlju putem internet adrese  <a href="http://www.spth.gob.es" class="text-info" target="_blank" rel="noopener noreferrer">http://www.spth.gob.es</a>  ili putem besplatne aplikacije SPAIN TRAVEL HEALTH-SpTH.',
        status: 'CLOSED_BORDER',
      },
    ];

    const classifiedCountries = await nlpService.getClassifiedCountries(
      countriesInfo,
    );

    expect(classifiedCountries).toMatchObject(result);
  });
});

import {
  CLOSED_BORDER,
  NEGATIVE_TEST_REQUIRED,
  NO_TEST_REQUIRED,
  OPEN_BORDER,
  QUARANTINE_REQUIRED,
  SKIP_SENTENCE,
} from './nlp.constants';

export const trainingData = [
  {
    utterance: 'Državljani Srbije ne mogu da uđu u zemlju',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Državljani Srbije ne mogu ući u Argentinu',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Državljani Srbije ne mogu da uđu u zemlju',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Državljanima Srbije nije dozvoljen ulazak u Austriju',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Državljani Srbije ne mogu da uđu u Bocvanu',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Drzavljani Srbije ne mogu da udu na Sejsele',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Drzavljani Srbije ne mogu udu u Madarsku ukoliko je razlog putovanja turisticki',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Drzavljanima Srbije nije dozvoljen ulazak u Hong Kong',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Drzavljani Srbije ne mogu da udu u Italiju u turisticke svrhe',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Drzavljani Srbije ne mogu da udu u Estoniju',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Drzavljani Srbije u principu ne mogu da udu u zemlju s obzirom da je Indija obustavila izdavanje viza svim stranim drzavljanima',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Drzavljanima Srbije dozvoljen je ulazak na Tajvan u svim drugim slucajevima osim iz razloga turizma i poseta',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Za drzavljane Srbije, kao i za drzavljane svih drugih zemalja, ne postoji mogucnost ulaska u Mjanmar',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Drzavljanima Srbije nije dozvoljen ulazak u Monako',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Drzavljanima Srbije koji su prethodnih 14 dana boravili u Srbiji ili tranzitirali kroz Srbiju nije dozvoljen ulazak',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Drzavljani Srbije mogu uci u Norvesku ako imaju regulisan boravak u zemlji ili norvesko drzavljanstvo',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Licima koja nisu državljani Kabo Verde nije dozvoljen ulazak u zemlju, uključujući državljane Srbije',
    intent: CLOSED_BORDER,
  },
  {
    utterance: 'Stranim državljanima je zabranjen ulazak u Irak',
    intent: CLOSED_BORDER,
  },
  {
    utterance:
      'Državljani Srbije mogu bez ograničenja da uđu u Albaniju ili tranzitiraju',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu bez ograničenja iz Srbije da uđu u BiH ili da tranzitiraju',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu ući u Bugarsku bez negativnog PCR testa ako dolaze iz Srbije',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance: 'Državljani Srbije mogu ući u Tursku bez negativnog PCR testa',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu da uđu u Severnu Makedoniju bez posedovanja negativnog PCR testa',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance: 'Nije potrebno testiranje',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance:
      'Ukoliko državljani Srbije na teritoriju Moldavije ulaze ili tranzitiraju iz zemalja koje se nalaze u „crvenoj zoni" (Rumunija, Ukrajina, itd), obavezan je karantin u trajanju od 14 dana',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance:
      'Za lica koja pokazu simptome medicinsko osoblje na aerodromu odlucuje da li ce zahtevati test na koronu',
    intent: NO_TEST_REQUIRED,
  },
  {
    utterance: 'Državljani Srbije mogu da uđu u Brazil vazdušnim putem',
    intent: OPEN_BORDER,
  },
  {
    utterance: 'Državljani Srbije mogu da uđu na Jamajku',
    intent: OPEN_BORDER,
  },
  {
    utterance: 'Drzavljani Srbije mogu da udu u Benin',
    intent: OPEN_BORDER,
  },
  {
    utterance: 'Drzavljani Srbije mogu uci u Jordan',
    intent: OPEN_BORDER,
  },
  {
    utterance: 'Drzavljani Srbije mogu ulaziti u Tanzaniju',
    intent: OPEN_BORDER,
  },
  {
    utterance:
      'Državljani Srbije mogu da uđu na teritoriju Angole ukoliko poseduju vizu ili regulisani boravak',
    intent: OPEN_BORDER,
  },
  {
    utterance: 'Državljani Srbije mogu ući na Island',
    intent: OPEN_BORDER,
  },
  {
    utterance:
      'Državljanima Srbije je od 13. aprila potrebna viza za ulaz u R. Koreju',
    intent: OPEN_BORDER,
  },
  {
    utterance:
      'Državljani Srbije mogu bez ograničenja da uđu u Egipat ili tranzitiraju',
    intent: OPEN_BORDER,
  },
  {
    utterance:
      'Državljani Srbije mogu, uz posedovanje odgovarajuće vize, bez posebnih ograničenja da uđu u Meksiko',
    intent: OPEN_BORDER,
  },
  {
    utterance: 'Državljanima Srbije je dozvoljen ulazak u Pakistan',
    intent: OPEN_BORDER,
  },
  {
    utterance:
      'Drzavljani Srbije mogu da udu u Kinu ukoliko poseduju sertifikat za putovanje izdat od Ambasade Kine u Beogradu',
    intent: OPEN_BORDER,
  },
  {
    utterance:
      'Po dolasku na aerodromu se obavlja zdravstveni pregled i radi prvi PCR test',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Drzavljanima Srbije je dozvoljen ulazak i tranzit preko Antigve i Barbude ukoliko poseduju negativan PCR test, ne stariji od sedam dana',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Drzavljani Srbije, kao i ostali strani drzavljani, mogu da udu i tranzitiraju kroz Ekvador uz obavezan PCR test',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance: 'Neophodni su negativan PCR test, ne stariji od pet dana',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Drzavljani Srbije ili lica koja imaju boravak u Srbiji, ukoliko ne dolaze iz zemalja koje su na zelenoj listi, mogu uci u Sloveniju uz obavezni karantin od 10 dana ili posedovanje PCR testa, ne stariji od 48 sati, uraden u jednoj od zemalja EU ili u Srbiji',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu da uđu u zemlju avio letom uz negativan test, ne stariji od 3 dana',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu da uđu na teritoriju Kipra ukoliko poseduju negativan PCR test, ne stariji od 72 sata',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Ukoliko drazava polaska ili avio-kompanija kojom su doputovali traze negativan test kao uslov za putovanje, putnici su obavezni da pokazu rezultate testa prilikom ulaska u Tanzaniju',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance: 'Neophodan je negativan PCR test',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Putnici koji imaju negativan PCR test, ne stariji od 48 sati ili negativan test na antitela, ne stariji od 5 dana, ne moraju ici u karantin',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Svim putnicima koji dolaze u Egipat potreban je negativan PCR test, ne stariji od 72 sata',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu da ulaze u Južni Sudan ako poseduju negativan test',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Ova mera se može skratiti na sedam dana ako lice o svom trošku uradi test po ulasku u Hrvatsku i isti bude negativan',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Mogu ući u Sloveniju uz obavezni karantin od 10 dana ili posedovanje PCR testa, ne stariji od 48 sati, urađen u jednoj od zemalja EU ili u Srbiji',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance: 'Od putnika se traži da poseduju negativan PCR',
    intent: NEGATIVE_TEST_REQUIRED,
  },
  {
    utterance:
      'Po dolasku, smeštaju se u obavezni državni karantin u trajanju od 14 dana',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Obavezan je karantin u trajanju od 14 dana u prostorima koje je odredila država',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Putnici koji dolaze na Island mogu izabrati da li će da urade dva testa, prvi po dolasku i naredni za pet dana tokom kojih će biti u karantinu ili će bez testiranja biti u karantinu 14 dana po dolasku',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance: 'Obavezan je karantin od 14 dana',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Po dolasku na Kubu, na svim međunarodnim aerodromima, putnici se podvrgavaju PCR testu, nakon čega sledi obavezan karantin na adresi predviđenog boravka, do dobijanja rezultata testa (do 3 dana)',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije, kao i sva lica koja dolaze iz Srbije ili tranzitiraju kroz Srbiju, u obavezi su na samoizolaciju u trajanju od 14 dana po ulasku u Letoniju',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu da uđu u SAD sa svim tipovima američkih viza, bez posedovanja negativnog PCR testa i uz preporučenu 14-dnevnu samoizolaciju',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Mogu ući pod uslovom poštovanja epidemioloških mera (izolacija u kućnim uslovima, do dobijanja negativnog testa koji se radi najranije petog dana izolacije)',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance: 'Obavezna je samoizolacija u trajanju od dve nedelje',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Svi putnici, ukljucujuci i drzavljane Srbije, ukoliko dolaze iz Srbije, duzni su da budu u samoizolaciji u trajanju od dve nedelje',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance: 'Nakon cega sledi jednonedeljni karantin u hotelu',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance:
      'Državljani Srbije mogu da uđu u Belorusiju uz obaveznu meru samoizolacije u trajanju od 10 dana',
    intent: QUARANTINE_REQUIRED,
  },
  {
    utterance: 'Formular se može naći i podneti na',
    intent: SKIP_SENTENCE,
  },
  {
    utterance:
      'Aerodromi su otvoreni dok prelazak granice drumskim i vodenim putem nije moguc',
    intent: SKIP_SENTENCE,
  },
  {
    utterance:
      'Državljani Srbije, kao i svi ostali putnici, pri ulasku u Irsku imaju obavezu da popune formular Passenger Locator Form',
    intent: SKIP_SENTENCE,
  },
  {
    utterance: 'Za ulazak stranih državljana je neophodna boravišna dozvola',
    intent: SKIP_SENTENCE,
  },
  {
    utterance:
      'Zahtevaju od svih putnika starijih od 5 godina da u roku od pet dana pre puta posredstvom Portala za kontrolu putnika predaju rezultate testa na COVID-19',
    intent: SKIP_SENTENCE,
  },
  {
    utterance:
      'Pre ulaska u zemlju potrebno je popuniti zdravstveni upitnik na sajtu',
    intent: SKIP_SENTENCE,
  },
  {
    utterance:
      'Zdravstvene vlasti mogu, na osnovu upitnika, odbiti ulaz određenim putnicima',
    intent: SKIP_SENTENCE,
  },
  {
    utterance:
      'Na međunarodnom aerodromu u Brazavilu uvedena su obavezna testiranja prilikom dolaska i odlaska',
    intent: SKIP_SENTENCE,
  },
  {
    utterance:
      'Lica koja imaju stalni boravak u Ukrajini su izuzeta od posedovanja polise zdravstvenog osiguranja',
    intent: SKIP_SENTENCE,
  },
];

import {
  CLOSED_BORDER, NEGATIVE_TEST_REQUIRED, NO_TEST_REQUIRED, OPEN_BORDER, QUARANTINE_REQUIRED,
} from '../config/constants';

export const trainingData = [{
  text: 'Državljani Srbije ne mogu da uđu u zemlju',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije ne mogu ući u Argentinu',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije ne mogu da uđu u zemlju',
  category: CLOSED_BORDER,
}, {
  text: 'Državljanima Srbije nije dozvoljen ulazak u Austriju',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije ne mogu da uđu u Bocvanu',
  category: CLOSED_BORDER,
}, {
  text: 'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljani Srbije ne mogu da udu na Sejsele',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljani Srbije ne mogu udu u Madarsku ukoliko je razlog putovanja turisticki',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljanima Srbije nije dozvoljen ulazak u Hong Kong',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljani Srbije ne mogu da udu u Italiju u turisticke svrhe',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljani Srbije ne mogu da udu u Estoniju',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljani Srbije u principu ne mogu da udu u zemlju s obzirom da je Indija obustavila izdavanje viza svim stranim drzavljanima',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljanima Srbije dozvoljen je ulazak na Tajvan u svim drugim slucajevima osim iz razloga turizma i poseta',
  category: CLOSED_BORDER,
}, {
  text: 'Za drzavljane Srbije, kao i za drzavljane svih drugih zemalja, ne postoji mogucnost ulaska u Mjanmar',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljanima Srbije nije dozvoljen ulazak u Monako',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljanima Srbije koji su prethodnih 14 dana boravili u Srbiji ili tranzitirali kroz Srbiju nije dozvoljen ulazak',
  category: CLOSED_BORDER,
}, {
  text: 'Drzavljani Srbije mogu uci u Norvesku ako imaju regulisan boravak u zemlji ili norvesko drzavljanstvo',
  category: CLOSED_BORDER,
}, {
  text: 'Licima koja nisu državljani Kabo Verde nije dozvoljen ulazak u zemlju, uključujući državljane Srbije',
  category: CLOSED_BORDER,
}, {
  text: 'Stranim državljanima je zabranjen ulazak u Irak',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije mogu bez ograničenja da uđu u Albaniju ili tranzitiraju',
  category: NO_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu bez ograničenja iz Srbije da uđu u BiH ili da tranzitiraju',
  category: NO_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu ući u Bugarsku bez negativnog PCR testa ako dolaze iz Srbije',
  category: NO_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu ući u Tursku bez negativnog PCR testa',
  category: NO_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu u Severnu Makedoniju bez posedovanja negativnog PCR testa',
  category: NO_TEST_REQUIRED
}, {
  text: 'Nije potrebno testiranje',
  category: NO_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu u Brazil vazdušnim putem',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu da uđu na Jamajku',
  category: OPEN_BORDER,
}, {
  text: 'Drzavljani Srbije mogu da udu u Benin',
  category: OPEN_BORDER,
}, {
  text: 'Drzavljani Srbije mogu uci u Jordan',
  category: OPEN_BORDER,
}, {
  text: 'Drzavljani Srbije mogu ulaziti u Tanzaniju',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu da uđu na teritoriju Angole ukoliko poseduju vizu ili regulisani boravak',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu ući na Island',
  category: OPEN_BORDER,
}, {
  text: 'Državljanima Srbije je od 13. aprila potrebna viza za ulaz u R. Koreju',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu bez ograničenja da uđu u Egipat ili tranzitiraju',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu, uz posedovanje odgovarajuće vize, bez posebnih ograničenja da uđu u Meksiko',
  category: OPEN_BORDER,
}, {
  text: 'Državljanima Srbije je dozvoljen ulazak u Pakistan',
  category: OPEN_BORDER,
}, {
  text: 'Po dolasku na aerodromu se obavlja zdravstveni pregled i radi prvi PCR test',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Drzavljanima Srbije je dozvoljen ulazak i tranzit preko Antigve i Barbude ukoliko poseduju negativan PCR test, ne stariji od sedam dana',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Drzavljani Srbije, kao i ostali strani drzavljani, mogu da udu i tranzitiraju kroz Ekvador uz obavezan PCR test',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Neophodni su negativan PCR test, ne stariji od pet dana',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Drzavljani Srbije ili lica koja imaju boravak u Srbiji, ukoliko ne dolaze iz zemalja koje su na zelenoj listi, mogu uci u Sloveniju uz obavezni karantin od 10 dana ili posedovanje PCR testa, ne stariji od 48 sati, uraden u jednoj od zemalja EU ili u Srbiji',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu u zemlju avio letom uz negativan test, ne stariji od 3 dana',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu na teritoriju Kipra ukoliko poseduju negativan PCR test, ne stariji od 72 sata',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Ukoliko drazava polaska ili avio-kompanija kojom su doputovali traze negativan test kao uslov za putovanje, putnici su obavezni da pokazu rezultate testa prilikom ulaska u Tanzaniju',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Neophodan je negativan PCR test',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Putnici koji imaju negativan PCR test, ne stariji od 48 sati ili negativan test na antitela, ne stariji od 5 dana, ne moraju ici u karantin',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Svim putnicima koji dolaze u Egipat potreban je negativan PCR test, ne stariji od 72 sata',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da ulaze u Južni Sudan ako poseduju negativan test',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Ova mera se može skratiti na sedam dana ako lice o svom trošku uradi test po ulasku u Hrvatsku i isti bude negativan',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Mogu ući u Sloveniju uz obavezni karantin od 10 dana ili posedovanje PCR testa, ne stariji od 48 sati, urađen u jednoj od zemalja EU ili u Srbiji',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Po dolasku, smeštaju se u obavezni državni karantin u trajanju od 14 dana',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Obavezan je karantin u trajanju od 14 dana u prostorima koje je odredila država',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Putnici koji dolaze na Island mogu izabrati da li će da urade dva testa, prvi po dolasku i naredni za pet dana tokom kojih će biti u karantinu ili će bez testiranja biti u karantinu 14 dana po dolasku',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Obavezan je karantin od 14 dana',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Po dolasku na Kubu, na svim međunarodnim aerodromima, putnici se podvrgavaju PCR testu, nakon čega sledi obavezan karantin na adresi predviđenog boravka, do dobijanja rezultata testa (do 3 dana)',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Državljani Srbije, kao i sva lica koja dolaze iz Srbije ili tranzitiraju kroz Srbiju, u obavezi su na samoizolaciju u trajanju od 14 dana po ulasku u Letoniju',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu u SAD sa svim tipovima američkih viza, bez posedovanja negativnog PCR testa i uz preporučenu 14-dnevnu samoizolaciju',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Mogu ući pod uslovom poštovanja epidemioloških mera (izolacija u kućnim uslovima, do dobijanja negativnog testa koji se radi najranije petog dana izolacije)',
  category: QUARANTINE_REQUIRED,
}];

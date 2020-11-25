import latinize from 'latinize';
import natural from 'natural';
import {
  CLOSED_BORDER, NEGATIVE_TEST_REQUIRED, OPEN_BORDER, QUARANTINE_REQUIRED,
} from '../config/constants';

const classifier = new natural.BayesClassifier();
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u zemlju'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu bez ograničenja da uđu u Albaniju'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na teritoriju Angole ukoliko poseduju vizu ili regulisani boravak. Po dolasku, smeštaju se u obavezni državni karantin'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu ući u Argentinu'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u zemlju'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljanima Srbije nije dozvoljen ulazak u Austriju'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u zemlju'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu bez ograničenja iz Srbije da uđu u BiH'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Bocvanu'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Brazil vazdušnim putem'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu niti tranzitiraju kroz Bruneje Darusalam'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu ući u Bugarsku bez negativnog PCR testa'), OPEN_BORDER);
classifier.addDocument(latinize('Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u zemlju avio letom uz negativan test'), NEGATIVE_TEST_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu ući u Grčku'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Dansku'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Esvatini'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Estoniju'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Zambiju. Obavezan je karantin'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Zimbabve'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Izrael'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije u principu ne mogu da uđu u zemlju'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu niti tranzitiraju u Indoneziju'), CLOSED_BORDER);
classifier.addDocument(latinize('Stranim državljanima je zabranjen ulazak u Irak'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu ući na Island. Putnici koji dolaze na Island mogu izabrati da li će da urade dva testa, prvi po dolasku i naredni za pet dana tokom kojih će biti u karantinu ili će bez testiranja biti u karantinu 14 dana po dolasku.'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Italiju'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na Jamajku'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na teritoriju Kipra ukoliko poseduju negativan PCR test'), NEGATIVE_TEST_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije mogu uz važeću vizu bez ograničenja da uđu ili tranzitiraju u DR Kongo'), OPEN_BORDER);
classifier.addDocument(latinize('Državljanima Srbije je od 13. aprila potrebna viza za ulaz u R. Koreju. Obavezan je karantin'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Kostariku'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Kot D\'Ivoar. Neophodan je negativan PCR test'), NEGATIVE_TEST_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na Kubu počev od 15.novembra. Po dolasku na Kubu, na svim međunarodnim aerodromima, putnici se podvrgavaju PCR testu, nakon čega sledi obavezan karantin na adresi predviđenog boravka, do dobijanja rezultata testa (do 3 dana)'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Lesoto'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije, kao i sva lica koja dolaze iz Srbije ili tranzitiraju kroz Srbiju, u obavezi su na samoizolaciju u trajanju od 14 dana po ulasku u Letoniju'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Lihtenštajn'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu i borave na teritoriju Litvanije'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u zemlju isključivo ukoliko imaju regulisan dugoročni boravak u Luksemburgu'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljanima Srbije nije dozvoljen ulazak u Makao'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani ne mogu ulaziti na Madagaskar'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu uđu u Mađarsku'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Malavi'), CLOSED_BORDER);
classifier.addDocument(latinize('U skladu sa odlukom Vlade, od 12.oktobra državljani Srbije mogu da uđu u Severnu Makedoniju bez posedovanja negativnog PCR testa'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu ući u Tursku bez negativnog PCR testa'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Džibuti. Neophodan je negativan PCR test'), NEGATIVE_TEST_REQUIRED);

classifier.train();

// console.log(classifier.classify(latinize('Državljani Srbije mogu da uđu u Republiku Haiti. Neophodan je negativan test, ne stariji od 72 časa')));
// console.log(classifier.classify(latinize('Državljani Srbije mogu uz važeću vizu bez ograničenja da uđu ili tranzitiraju u R. Kongo. Nije potrebno testiranje')));
// console.log(classifier.classify(latinize('Državljani Srbije ne mogu uđu u Mađarsku ukoliko je razlog putovanja turistički. Ulazak u Mađarsku u privatne svrhe je moguć samo na osnovu dobijene saglasnosti od mađarske policije')));

classifier.save('src/nlp/classifier.json', (error) => {
  if (error) {
    throw new Error(error);
  }
  console.log('Classifier is successfully saved');
});

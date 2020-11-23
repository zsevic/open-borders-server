import natural from 'natural';
import { CLOSED_BORDER, NEGATIVE_TEST_REQUIRED, OPEN_BORDER } from '../config/constants';

const classifier = new natural.BayesClassifier();
classifier.addDocument('Državljani Srbije mogu da uđu u Džibuti. Neophodan je negativan PCR test. Po dolasku u Džibuti radi se i brzi test.', NEGATIVE_TEST_REQUIRED);
classifier.addDocument('Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.', CLOSED_BORDER);
classifier.addDocument('Državljani Srbije mogu ući u Tursku bez negativnog PCR testa.', OPEN_BORDER);
classifier.addDocument('Državljani Srbije mogu bez ograničenja da uđu u Albaniju ili tranzitiraju. Nema posebnih uslova. Režim ulaska je isti za sva lica bez obzira iz koje zemlje se dolazi u Albaniju.', OPEN_BORDER);

classifier.train();

// console.log(classifier.classify('Državljani Srbije mogu da uđu u Republiku Haiti. Neophodan je negativan test, ne stariji od 72 časa. Kopnena granica sa Dominikanskom Republikom je zatvorena.'));
// console.log(classifier.classify('U skladu sa odlukom Vlade, od 12.oktobra državljani Srbije mogu da uđu u Severnu Makedoniju bez posedovanja negativnog PCR testa. Istovremeno, u saopštenju Vlade Severne Makedonije se apeluje da se putovanja svedu na minimum i isključivo za neodložne potrebe.'));

classifier.save('src/nlp/classifier.json', (error) => {
  if (error) {
    throw new Error(error);
  }
  console.log('Classifier is successfully saved');
});

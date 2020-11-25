import latinize from 'latinize';
import natural from 'natural';
import {
  CLOSED_BORDER, NEGATIVE_TEST_REQUIRED, OPEN_BORDER, QUARANTINE_REQUIRED,
} from '../config/constants';

const classifier = new natural.BayesClassifier();
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu bez ograničenja da uđu u Albaniju ili tranzitiraju. Nema posebnih uslova.'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na teritoriju Angole ukoliko poseduju vizu ili regulisani boravak. Po dolasku, smeštaju se u obavezni državni karantin u trajanju od 14 dana.'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu ući u Argentinu osim lica koja imaju regulisan boravak u Argentini ili nekoj od pograničnih država, kao i nosioci diplomatskih i službenih pasoša.,Neophodan je negativan PCR test, ne stariji od 72 sata.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u zemlju, osim onih lica koja imaju odobren stalni boravak i članova njihove uže porodice. Mogućnost ulaska postoji ako su u pitanju humanitarni ili dovoljno ubedljivi razlozi, uz prethodno pribavljanje dozvole od strane nadležnih organa.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljanima Srbije nije dozvoljen ulazak u Austriju osim licima koja imaju regulisan boravak, kao i u posebnim slučajevima, i to za lica koja u Austriju putuju: iz poslovnih razloga; jednom licu u pratnji osobe koja u Austriju dolazi u svrhu medicinskog lečenja; radi početka ili nastavka studija, odnosno u cilju naučnog istraživanja; radi učešća u školskim aktivnostima; radi prisustvovanja sudskim ili administrativnim postupcima pred austrijskim nadležnim organima; članovima osoblja diplomatskih predstavništava, zaposlenima u međunarodnim organizacijama i licima koja sa njima žive u zajedničkom domaćinstvu; humanitarno osoblje; zbog planiranih važnih događaja u krugu porodice (venčanja, krštenja, rođendani, neperiodične posete životnom partneru).,Sve navedene kategorije lica prilikom ulaska u Austriju moraju da imaju negativan PCR test, ne stariji od 72 sata.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u zemlju.,Ulazak je dozvoljen samo za putnike iz zemalja EU, Velike Britanije i Kanade ukoliko poseduju negativan PCR test, ne stariji od 10 dana, u štampanoj formi i popune tzv. elektronsku zdravstvenu vizu na sajtu'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu bez ograničenja iz Srbije da uđu u BiH ili da tranzitiraju.,Od 12.septembra stranim državljanima je potreban negativan PCR test.'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Bocvanu osim lica sa regulisanim boravkom. Obavezan je 14-dnevni karantin.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Brazil vazdušnim putem.,Strani državljani ne mogu da uđu u Brazil kopnenim i vodenim putevima.'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu niti tranzitiraju kroz Bruneje Darusalam osim lica koja imaju stalni boravak. Pre putovanja, potrebno je kontaktirati najbližu Ambasadu Bruneja.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu ući u Bugarsku bez negativnog PCR testa ako dolaze iz Srbije ili država članica EU ili Šengenskog sporazuma (uključujući San Marino, Andoru, Monako i Vatikan), V.Britanije, Severne Irske, Australije, Kanade, Gruzije, Japana, Novog Zelanda, Ruande, Republike Koreje, Tajlanda, Tunisa, Urugvaja, Ujedinjenih Arapskih Emirata, Belorusije i Turske. Ako državljanin Srbije dolazi iz zemlje koja nije prethodno navedana, neophodan je negativan PCR test, ne stariji od 72 sata.'), OPEN_BORDER);
classifier.addDocument(latinize('Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u zemlju avio letom uz negativan test, ne stariji od 3 dana. Navedeno važi i za strane državljane.'), NEGATIVE_TEST_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu ući u Grčku. Izuzetak su državljani Srbije koji imaju regulisan boravak u Grčkoj ili nekoj od zemalja EU ili Šengena, vlasnici nekretnina kao i posebne kategorije građana – vozači kamiona, studenti, sezonski radnici u poljoprivredi, lica koja dobiju odobrenje od Ambasade Grčke u Beogradu.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Dansku osim lica koja imaju regulisani boravak ili opravdani razlog (smrt bliskog srodnika, spajanje porodice, poziv za sud i drugo). Informacija o uslovima ulaska se može naći na sajtu danske policije - ,.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Esvatini osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Estoniju.,Dozvoljava se ulazak u Estoniju licima sa regulisanim boravkom ili dugoročnom vizom, kao i članovima njihovih porodica, koja dolaze iz zemalja članica EU, Šengen zone, UK, Andore, Monaka, San Marina i Vatikana, kao i državljanima trećih država sa liste EU (lista dostupna na: ,), pod uslovom da ne ispoljavaju simptome infekcije virusom COVID-19.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Zambiju. Obavezan je karantin u trajanju od 14 dana u prostorima koje je odredila država.'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Zimbabve osim lica sa regulisanim boravkom. Obavezan je karantin od 21 dana.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Izrael osim lica koja imaju regulisan boravak uz prethodnu najavu preko Ambasade Izraela u Beogradu. Takođe, u izuzetnim slučajevima (npr. urgentno lečenje), može se od Ministarstva spoljnih poslova Izraela zatražiti dozvola za ulazak u zemlju.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije u principu ne mogu da uđu u zemlju s obzirom da je Indija obustavila izdavanje viza svim stranim državljanima. Nove vize se mogu dobiti (u nadležnim diplolatsko-konzularnim predstavništvima Indije) isključivo u sledećim posebnim slučajevima: poslovni ljudi (odnosi se samo na biznis vize), stručnjaci iz oblasti zdravstva koji dolaze u Indiju da bi obavljali tehničke poslove u indijskom zdravstvenom sektoru (na poziv relevantnih indijskih institucija), stručnjaci iz ostalih oblasti koji rade za strane kompanije koje posluju u Indiji, inženjeri i tehničko osoblje koji dolaze radi instaliranja ili servisiranja mašina i opreme stranog porekla (na poziv indijskih kompanija).'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu niti tranzitiraju u Indoneziju osim lica koji imaju stalnu (KITAP) ili privremenu boravišnu dozvolu (KITAS). Negativan test na koronu je neophodan.'), CLOSED_BORDER);
classifier.addDocument(latinize('Stranim državljanima je zabranjen ulazak u Irak. Izuzetak su diplomate koji moraju da poseduju posebnu dozvolu MSP.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu ući na Island.,Putnici koji dolaze na Island mogu izabrati da li će da urade dva testa, prvi po dolasku i naredni za pet dana tokom kojih će biti u karantinu ili će bez testiranja biti u karantinu 14 dana po dolasku.'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Italiju u turističke svrhe.,Od 22. septembra odobrava se ulazak u Italiju samo u određenim slučajevima: poslovni i zdravstveni razlozi, školovanje, hitan povratak u svoje mesto stanovanja/boravišta.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na Jamajku. Pre putovanja, neophodno je prijaviti se na sledećem sajtu: '), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na teritoriju Kipra ukoliko poseduju negativan PCR test, ne stariji od 72 sata. Određene kategorije lica test mogu da urade po dolasku na Kipar (o sopstvenom trošku): kiparski državljani, njihovi supružnici iz drugih zemalja i njihova maloletna deca; lica koja imaju regulisan boravak na Kipru; lica koja imaju specijalnu dozvolu za ulazak od strane Vlade Kipara; lica koja dolaze iz države u kojoj nije moguće da se uradi testiranje na korona virus.'), NEGATIVE_TEST_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije mogu uz važeću vizu bez ograničenja da uđu ili tranzitiraju u DR Kongo. Nije potrebno testiranje.'), OPEN_BORDER);
classifier.addDocument(latinize('Državljanima Srbije je od 13. aprila potrebna viza za ulaz u R. Koreju. Obavezan je karantin od 14 dana.'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Kostariku uz obavezu popunjavanja obrasca "Pase de Salud" 48 sati pre dolaska (,). Takođe, potrebno je zdravstveno osiguranje koje pokriva troškove lečenja u slučaju korone virusa (osiguranje mora da bude na španskom jeziku i odobreno od Instituta za turizam).'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Kot D\'Ivoar. Neophodan je negativan PCR test, ne stariji od pet dana.'), NEGATIVE_TEST_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu na Kubu počev od 15.novembra.,Po dolasku na Kubu, na svim međunarodnim aerodromima, putnici se podvrgavaju PCR testu, nakon čega sledi obavezan karantin na adresi predviđenog boravka, do dobijanja rezultata testa (do 3 dana).'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Lesoto osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije, kao i sva lica koja dolaze iz Srbije ili tranzitiraju kroz Srbiju, u obavezi su na samoizolaciju u trajanju od 14 dana po ulasku u Letoniju. Ne dozvoljava se ulazak stranim državljanima koji su prethodnih 14 dana boravili ili tranzitirali u zemljama pogođenim zaraznom bolešću COVID-19, u kojima je broj obolelih 25, ili veći, na 100.000 stanovnika.'), QUARANTINE_REQUIRED);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Lihtenštajn, osim lica koja imaju regulisan boravak. Od 20. avgusta ne postoji obaveza desetodnevnog karantina za državljane Srbije sa regulisanim boravkom u Lihtenštajnu.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu i borave na teritoriju Litvanije, osim lica koja imaju regulisan boravak. Tranzit preko teritorije Litvanije je dozvoljen državljanima Srbije koji poseduju regulisan boravak u nekoj od zemalja EU, Švajcarske Konfederacije i Ujedinjenog Kraljevstva.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Lihtenštajn, osim lica koja imaju regulisan boravak. Od 20. avgusta ne postoji obaveza desetodnevnog karantina za državljane Srbije sa regulisanim boravkom u Lihtenštajnu.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u zemlju isključivo ukoliko imaju regulisan dugoročni boravak u Luksemburgu. Izuzeci se odnose na zdravstvene radnike, granične radnike, istraživače, lica koja se bave negom starijih lica, lica zaposlena u sektoru saobraćaja, lica koja putuju iz hitnih i opravdanih porodičnih razloga, lica koja putuju za potrebe studija i visokokvalifikovane radnike ako je njihovo zapošljavanje ekonomski neophodno i njihov rad se ne može odložiti ili obavljati iz inostranstva.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljanima Srbije nije dozvoljen ulazak u Makao. Tranzitiranje preko teritorije Makao takođe nije moguće.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani ne mogu ulaziti na Madagaskar. Ista zabrana, u uslovima zatvorenih aerodroma i luka, važi za sve strane državljane'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu uđu u Mađarsku ukoliko je razlog putovanja turistički. Ulazak u Mađarsku u privatne svrhe je moguć samo na osnovu dobijene saglasnosti od mađarske policije.'), CLOSED_BORDER);
classifier.addDocument(latinize('Državljani Srbije ne mogu da uđu u Malavi osim lica sa regulisanim boravkom. Obavezan je karantin od 14 dana.'), CLOSED_BORDER);
classifier.addDocument(latinize('U skladu sa odlukom Vlade, od 12.oktobra državljani Srbije mogu da uđu u Severnu Makedoniju bez posedovanja negativnog PCR testa. Istovremeno, u saopštenju Vlade Severne Makedonije se apeluje da se putovanja svedu na minimum i isključivo za neodložne potrebe.'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu ući u Tursku bez negativnog PCR testa.'), OPEN_BORDER);
classifier.addDocument(latinize('Državljani Srbije mogu da uđu u Džibuti. Neophodan je negativan PCR test.'), NEGATIVE_TEST_REQUIRED);
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

import {
  CLOSED_BORDER, NEGATIVE_TEST_REQUIRED, OPEN_BORDER, QUARANTINE_REQUIRED,
} from '../config/constants';

export const trainingData = [{
  text: 'Državljani Srbije ne mogu da uđu u zemlju. Granice i aerodromi su zatvoreni.',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije ne mogu ući u Argentinu osim lica koja imaju regulisan boravak u Argentini ili nekoj od pograničnih država, kao i nosioci diplomatskih i službenih pasoša.,Neophodan je negativan PCR test, ne stariji od 72 sata.',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije ne mogu da uđu u zemlju, osim onih lica koja imaju odobren stalni boravak i članova njihove uže porodice. Mogućnost ulaska postoji ako su u pitanju humanitarni ili dovoljno ubedljivi razlozi, uz prethodno pribavljanje dozvole od strane nadležnih organa.',
  category: CLOSED_BORDER,
}, {
  text: 'Državljanima Srbije nije dozvoljen ulazak u Austriju osim licima koja imaju regulisan boravak, kao i u posebnim slučajevima, i to za lica koja u Austriju putuju: iz poslovnih razloga; jednom licu u pratnji osobe koja u Austriju dolazi u svrhu medicinskog lečenja; radi početka ili nastavka studija, odnosno u cilju naučnog istraživanja; radi učešća u školskim aktivnostima; radi prisustvovanja sudskim ili administrativnim postupcima pred austrijskim nadležnim organima; članovima osoblja diplomatskih predstavništava, zaposlenima u međunarodnim organizacijama i licima koja sa njima žive u zajedničkom domaćinstvu; humanitarno osoblje; zbog planiranih važnih događaja u krugu porodice (venčanja, krštenja, rođendani, neperiodične posete životnom partneru).,Sve navedene kategorije lica prilikom ulaska u Austriju moraju da imaju negativan PCR test, ne stariji od 72 sata.',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije ne mogu da uđu u Bocvanu osim lica sa regulisanim boravkom. Obavezan je 14-dnevni karantin.',
  category: CLOSED_BORDER,
}, {
  text: 'Svim stranim državljanima, uključujući i državljane Srbije, do daljnjeg je zabranjen ulazak u zemlju.',
  category: CLOSED_BORDER,
}, {
  text: 'Državljani Srbije mogu bez ograničenja da uđu u Albaniju ili tranzitiraju. Nema posebnih uslova.',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu bez ograničenja iz Srbije da uđu u BiH ili da tranzitiraju.,Od 12.septembra stranim državljanima je potreban negativan PCR test.',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu da uđu u Brazil vazdušnim putem.,Strani državljani ne mogu da uđu u Brazil kopnenim i vodenim putevima.',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu ući u Bugarsku bez negativnog PCR testa ako dolaze iz Srbije ili država članica EU ili Šengenskog sporazuma (uključujući San Marino, Andoru, Monako i Vatikan), V.Britanije, Severne Irske, Australije, Kanade, Gruzije, Japana, Novog Zelanda, Ruande, Republike Koreje, Tajlanda, Tunisa, Urugvaja, Ujedinjenih Arapskih Emirata, Belorusije i Turske. Ako državljanin Srbije dolazi iz zemlje koja nije prethodno navedana, neophodan je negativan PCR test, ne stariji od 72 sata.',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu da uđu na Jamajku. Pre putovanja, neophodno je prijaviti se na sledećem sajtu: ',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu ući u Tursku bez negativnog PCR testa. Pri ulasku u zemlju postoji obavezni lekarski pregled i merenje temperature.',
  category: OPEN_BORDER,
}, {
  text: 'Državljani Srbije mogu da uđu u zemlju avio letom uz negativan test, ne stariji od 3 dana. Navedeno važi i za strane državljane.',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu na teritoriju Kipra ukoliko poseduju negativan PCR test, ne stariji od 72 sata. Određene kategorije lica test mogu da urade po dolasku na Kipar (o sopstvenom trošku): kiparski državljani, njihovi supružnici iz drugih zemalja i njihova maloletna deca; lica koja imaju regulisan boravak na Kipru; lica koja imaju specijalnu dozvolu za ulazak od strane Vlade Kipara; lica koja dolaze iz države u kojoj nije moguće da se uradi testiranje na korona virus.',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu u Kot D\'Ivoar. Neophodan je negativan PCR test, ne stariji od pet dana.',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Drzavljani Srbije mogu ulaziti u Tanzaniju. Ukoliko drazava polaska ili avio-kompanija kojom su doputovali traze negativan test kao uslov za putovanje, putnici su obavezni da pokazu rezultate testa prilikom ulaska u Tanzaniju',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu u Džibuti. Neophodan je negativan PCR test.',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Drzavljani Srbije mogu da udu u Sent Vinsent i Grenadine uz obavezu da pre puta popune i podnesu formular koji se moze naci na ,. Putnici koji imaju negativan PCR test, ne stariji od 48 sati ili negativan test na antitela, ne stariji od 5 dana, ne moraju ici u karantin',
  category: NEGATIVE_TEST_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu na teritoriju Angole ukoliko poseduju vizu ili regulisani boravak. Po dolasku, smeštaju se u obavezni državni karantin u trajanju od 14 dana.',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu u Zambiju. Obavezan je karantin u trajanju od 14 dana u prostorima koje je odredila država.',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Državljani Srbije mogu ući na Island.,Putnici koji dolaze na Island mogu izabrati da li će da urade dva testa, prvi po dolasku i naredni za pet dana tokom kojih će biti u karantinu ili će bez testiranja biti u karantinu 14 dana po dolasku.',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Državljanima Srbije je od 13. aprila potrebna viza za ulaz u R. Koreju. Obavezan je karantin od 14 dana.',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Državljani Srbije mogu da uđu na Kubu počev od 15.novembra.,Po dolasku na Kubu, na svim međunarodnim aerodromima, putnici se podvrgavaju PCR testu, nakon čega sledi obavezan karantin na adresi predviđenog boravka, do dobijanja rezultata testa (do 3 dana).',
  category: QUARANTINE_REQUIRED,
}, {
  text: 'Državljani Srbije, kao i sva lica koja dolaze iz Srbije ili tranzitiraju kroz Srbiju, u obavezi su na samoizolaciju u trajanju od 14 dana po ulasku u Letoniju. Ne dozvoljava se ulazak stranim državljanima koji su prethodnih 14 dana boravili ili tranzitirali u zemljama pogođenim zaraznom bolešću COVID-19, u kojima je broj obolelih 25, ili veći, na 100.000 stanovnika.',
  category: QUARANTINE_REQUIRED,
}];

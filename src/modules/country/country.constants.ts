export const CACHE_TTL_MS = parseInt(process.env.CACHE_TTL) || 12 * 60 * 60 * 1000; // 12 hours

export const COUNTRY_FLAGS = {
  ALBANIJA: '🇦🇱',
  ALŽIR: '🇩🇿',
  ANDORA: '🇦🇩',
  ANGOLA: '🇦🇴',
  'ANTIGVA I BARBUDA': '🇦🇬',
  ARGENTINA: '🇦🇷',
  AUSTRALIJA: '🇦🇺',
  AUSTRIJA: '🇦🇹',
  AZERBEJDžAN: '🇦🇿',
  BAHAMI: '🇧🇸',
  BAHREIN: '🇧🇭',
  BARBADOS: '🇧🇧',
  BELGIJA: '🇧🇪',
  BELIZE: '🇧🇿',
  BELORUSIJA: '🇧🇾',
  BENIN: '🇧🇯',
  BOCVANA: '🇧🇼',
  BOLIVIJA: '🇧🇴',
  'BOSNA I HERCEGOVINA': '🇧🇦',
  BRAZIL: '🇧🇷',
  'BRUNEJI DARUSALAM': '🇧🇳',
  BUGARSKA: '🇧🇬',
  'BURKINA FASO': '🇧🇫',
  BURUNDI: '🇧🇮',
  'CENTRALNOAFRIČKA REPUBLIKA': '🇨🇫',
  'CRNA GORA': '🇲🇪',
  ČAD: '🇹🇩',
  'ČEŠKA REPUBLIKA': '🇨🇿',
  ČILE: '🇨🇱',
  DANSKA: '🇩🇰',
  'Devičanska ostrva SAD': '🇻🇮',
  DOMINIKA: '🇩🇲',
  'DOMINIKANSKA REPUBLIKA': '🇩🇴',
  'Država Njujork': '🇺🇸',
  DžIBUTI: '🇩🇯',
  EGIPAT: '🇪🇬',
  EKVADOR: '🇪🇨',
  'EKVATORIJALNA GVINEJA': '🇬🇶',
  'EL SALVADOR': '🇸🇻',
  ERITREJA: '🇪🇷',
  ESTONIJA: '🇪🇪',
  ESVATINI: '🇸🇿',
  ETIOPIJA: '🇪🇹',
  FILIPINI: '🇵🇭',
  FINSKA: '🇫🇮',
  FIDžI: '🇫🇯',
  FRANCUSKA: '🇫🇷',
  GABON: '🇬🇦',
  GAMBIJA: '🇬🇲',
  GANA: '🇬🇭',
  GRČKA: '🇬🇷',
  GRENADA: '🇬🇩',
  GRUZIJA: '🇬🇪',
  GVATEMALA: '🇬🇬',
  GVAJANA: '🇬🇾',
  GVINEJA: '🇬🇳',
  'GVINEJA BISAO': '🇬🇼',
  HAITI: '🇭🇹',
  HOLANDIJA: '🇳🇱',
  'Hong Kong': '🇭🇰',
  HONDURAS: '🇭🇳',
  HRVATSKA: '🇭🇷',
  INDIJA: '🇮🇳',
  INDONEZIJA: '🇮🇩',
  IRAK: '🇮🇶',
  IRAN: '🇮🇷',
  IRSKA: '🇮🇪',
  ISLAND: '🇮🇸',
  'ISTOČNI TIMOR': '🇹🇱',
  ITALIJA: '🇮🇹',
  IZRAEL: '🇮🇱',
  JAMAJKA: '🇯🇲',
  JAPAN: '🇯🇵',
  JEMEN: '🇾🇪',
  JERMENIJA: '🇦🇲',
  JORDAN: '🇯🇴',
  'JUŽNI SUDAN': '🇸🇸',
  'JUŽNOAFRIČKA REPUBLIKA': '🇿🇦',
  'KABO VERDE': '🇨🇻',
  KAMBODžA: '🇰🇭',
  KAMERUN: '🇨🇲',
  KANADA: '🇨🇦',
  KATAR: '🇶🇦',
  KAZAHSTAN: '🇰🇿',
  KENIJA: '🇰🇪',
  KINA: '🇨🇳',
  KIPAR: '🇨🇾',
  KIRGIZIJA: '🇰🇬',
  KOLUMBIJA: '🇨🇴',
  KOMORI: '🇰🇲',
  KONGO: '🇨🇬',
  'KONGO, DR': '🇨🇩',
  'KOREJA, DNR': '🇰🇵',
  'KOREJA, Republika': '🇰🇷',
  KOSTARIKA: '🇨🇷',
  'KOT D’IVOAR': '🇨🇮',
  KUBA: '🇨🇺',
  KUVAJT: '🇰🇼',
  LAOS: '🇱🇦',
  LESOTO: '🇱🇸',
  LETONIJA: '🇱🇻',
  LIBAN: '🇱🇧',
  LIBERIJA: '🇱🇷',
  LIBIJA: '🇱🇾',
  LIHTENŠTAJN: '🇱🇮',
  LITVANIJA: '🇱🇹',
  LUKSEMBURG: '🇱🇺',
  MADAGASKAR: '🇲🇬',
  MADjARSKA: '🇭🇺',
  MAĐARSKA: '🇭🇺',
  Makao: '🇲🇴',
  MALAVI: '🇲🇼',
  MALDIVI: '🇲🇻',
  MALEZIJA: '🇲🇾',
  MALI: '🇲🇱',
  MALTA: '🇲🇹',
  MAROKO: '🇲🇦',
  MAURICIJUS: '🇲🇺',
  MAURITANIJA: '🇲🇷',
  MEKSIKO: '🇲🇽',
  MJANMAR: '🇲🇲',
  MOLDAVIJA: '🇲🇩',
  MONGOLIJA: '🇲🇳',
  MONAKO: '🇲🇨',
  MOZAMBIK: '🇲🇿',
  NAMIBIJA: '🇳🇦',
  NAURU: '🇳🇷',
  NEMAČKA: '🇩🇪',
  NIGER: '🇳🇪',
  NIGERIJA: '🇳🇬',
  NIKARAGVA: '🇳🇮',
  NORVEŠKA: '🇳🇴',
  'NOVI ZELAND': '🇳🇿',
  OMAN: '🇴🇲',
  PAKISTAN: '🇵🇰',
  PALAU: '🇵🇼',
  PALESTINA: '🇵🇸',
  PANAMA: '🇵🇦',
  'PAPUA NOVA GVINEJA': '🇵🇬',
  PARAGVAJ: '🇵🇾',
  Peking: '🇨🇳',
  PERU: '🇵🇪',
  POLjSKA: '🇵🇱',
  Portoriko: '🇵🇷',
  PORTUGALIJA: '🇵🇹',
  RUANDA: '🇷🇼',
  RUMUNIJA: '🇷🇴',
  'RUSKA FEDERACIJA': '🇷🇺',
  SAD: '🇺🇸',
  SAMOA: '🇼🇸',
  'SAN MARINO': '🇸🇲',
  'SAO TOME I PRINCIPE': '🇸🇹',
  'SAUDIJSKA ARABIJA': '🇸🇦',
  SEJŠELI: '🇸🇨',
  SENEGAL: '🇸🇳',
  'SENT KITS I NEVIS': '🇰🇳',
  'SENT VINSENT I GRENADINI': '🇻🇨',
  'SEVERNA MAKEDONIJA': '🇲🇰',
  'SIJERA LEONE': '🇸🇱',
  SINGAPUR: '🇸🇬',
  SIRIJA: '🇸🇾',
  SLOVAČKA: '🇸🇰',
  SLOVENIJA: '🇸🇮',
  'SOLOMONOVA OSTRVA': '🇸🇧',
  SOMALIJA: '🇸🇴',
  'SUDAN, REPUBLIKA': '🇸🇩',
  SURINAM: '🇸🇷',
  'SVETA LUCIJA': '🇱🇨',
  ŠPANIJA: '🇪🇸',
  ŠVAJCARSKA: '🇨🇭',
  ŠVEDSKA: '🇸🇪',
  TADžIKISTAN: '🇹🇯',
  TAJLAND: '🇹🇭',
  Tajvan: '🇹🇼',
  TANZANIJA: '🇹🇿',
  TOGO: '🇹🇬',
  TONGA: '🇹🇴',
  'TRINIDAD I TOBAGO': '🇹🇹',
  TUNIS: '🇹🇳',
  TURKMENISTAN: '🇹🇲',
  TURSKA: '🇹🇷',
  TUVALU: '🇹🇻',
  UGANDA: '🇺🇬',
  'UJEDINjENI ARAPSKI EMIRATI': '🇦🇪',
  UKRAJINA: '🇺🇦',
  URUGVAJ: '🇺🇾',
  UZBEKISTAN: '🇺🇿',
  VANUATU: '🇻🇺',
  'VELIKA BRITANIJA': '🇬🇧',
  VENECUELA: '🇻🇪',
  VIJETNAM: '🇻🇳',
  ZAMBIJA: '🇿🇲',
  ZIMBABVE: '🇿🇼',
};

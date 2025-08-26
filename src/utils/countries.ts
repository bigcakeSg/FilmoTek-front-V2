const countries: Record<string, Record<string, string>> = {
  AC: {
    fr: 'Île de l’Ascension',
    en: 'Ascension Island'
  },
  AD: {
    fr: 'Andorre',
    en: 'Andorra'
  },
  AE: {
    fr: 'Émirats arabes unis',
    en: 'United Arab Emirates'
  },
  AF: {
    fr: 'Afghanistan',
    en: 'Afghanistan'
  },
  AG: {
    fr: 'Antigua-et-Barbuda',
    en: 'Antigua & Barbuda'
  },
  AI: {
    fr: 'Anguilla',
    en: 'Anguilla'
  },
  AL: {
    fr: 'Albanie',
    en: 'Albania'
  },
  AM: {
    fr: 'Arménie',
    en: 'Armenia'
  },
  AO: {
    fr: 'Angola',
    en: 'Angola'
  },
  AQ: {
    fr: 'Antarctique',
    en: 'Antarctica'
  },
  AR: {
    fr: 'Argentine',
    en: 'Argentina'
  },
  AS: {
    fr: 'Samoa américaines',
    en: 'American Samoa'
  },
  AT: {
    fr: 'Autriche',
    en: 'Austria'
  },
  AU: {
    fr: 'Australie',
    en: 'Australia'
  },
  AW: {
    fr: 'Aruba',
    en: 'Aruba'
  },
  AX: {
    fr: 'Îles Åland',
    en: 'Åland Islands'
  },
  AZ: {
    fr: 'Azerbaïdjan',
    en: 'Azerbaijan'
  },
  BA: {
    fr: 'Bosnie-Herzégovine',
    en: 'Bosnia & Herzegovina'
  },
  BB: {
    fr: 'Barbade',
    en: 'Barbados'
  },
  BD: {
    fr: 'Bangladesh',
    en: 'Bangladesh'
  },
  BE: {
    fr: 'Belgique',
    en: 'Belgium'
  },
  BF: {
    fr: 'Burkina Faso',
    en: 'Burkina Faso'
  },
  BG: {
    fr: 'Bulgarie',
    en: 'Bulgaria'
  },
  BH: {
    fr: 'Bahreïn',
    en: 'Bahrain'
  },
  BI: {
    fr: 'Burundi',
    en: 'Burundi'
  },
  BJ: {
    fr: 'Bénin',
    en: 'Benin'
  },
  BL: {
    fr: 'Saint-Barthélemy',
    en: 'St. Barthélemy'
  },
  BM: {
    fr: 'Bermudes',
    en: 'Bermuda'
  },
  BN: {
    fr: 'Brunei',
    en: 'Brunei'
  },
  BO: {
    fr: 'Bolivie',
    en: 'Bolivia'
  },
  BQ: {
    fr: 'Pays-Bas caribéens',
    en: 'Caribbean Netherlands'
  },
  BR: {
    fr: 'Brésil',
    en: 'Brazil'
  },
  BS: {
    fr: 'Bahamas',
    en: 'Bahamas'
  },
  BT: {
    fr: 'Bhoutan',
    en: 'Bhutan'
  },
  BV: {
    fr: 'Île Bouvet',
    en: 'Bouvet Island'
  },
  BW: {
    fr: 'Botswana',
    en: 'Botswana'
  },
  BY: {
    fr: 'Biélorussie',
    en: 'Belarus'
  },
  BZ: {
    fr: 'Belize',
    en: 'Belize'
  },
  CA: {
    fr: 'Canada',
    en: 'Canada'
  },
  CC: {
    fr: 'Îles Cocos',
    en: 'Cocos (Keeling) Islands'
  },
  CD: {
    fr: 'Congo-Kinshasa',
    en: 'Congo - Kinshasa'
  },
  CF: {
    fr: 'République centrafricaine',
    en: 'Central African Republic'
  },
  CG: {
    fr: 'Congo-Brazzaville',
    en: 'Congo - Brazzaville'
  },
  CH: {
    fr: 'Suisse',
    en: 'Switzerland'
  },
  CI: {
    fr: 'Côte d’Ivoire',
    en: 'Côte d’Ivoire'
  },
  CK: {
    fr: 'Îles Cook',
    en: 'Cook Islands'
  },
  CL: {
    fr: 'Chili',
    en: 'Chile'
  },
  CM: {
    fr: 'Cameroun',
    en: 'Cameroon'
  },
  CN: {
    fr: 'Chine',
    en: 'China'
  },
  CO: {
    fr: 'Colombie',
    en: 'Colombia'
  },
  CP: {
    fr: 'Île Clipperton',
    en: 'Clipperton Island'
  },
  CQ: {
    fr: 'Sark',
    en: 'Sark'
  },
  CR: {
    fr: 'Costa Rica',
    en: 'Costa Rica'
  },
  CU: {
    fr: 'Cuba',
    en: 'Cuba'
  },
  CV: {
    fr: 'Cap-Vert',
    en: 'Cape Verde'
  },
  CW: {
    fr: 'Curaçao',
    en: 'Curaçao'
  },
  CX: {
    fr: 'Île Christmas',
    en: 'Christmas Island'
  },
  CY: {
    fr: 'Chypre',
    en: 'Cyprus'
  },
  CZ: {
    fr: 'Tchéquie',
    en: 'Czechia'
  },
  DE: {
    fr: 'Allemagne',
    en: 'Germany'
  },
  DG: {
    fr: 'Diego Garcia',
    en: 'Diego Garcia'
  },
  DJ: {
    fr: 'Djibouti',
    en: 'Djibouti'
  },
  DK: {
    fr: 'Danemark',
    en: 'Denmark'
  },
  DM: {
    fr: 'Dominique',
    en: 'Dominica'
  },
  DO: {
    fr: 'République dominicaine',
    en: 'Dominican Republic'
  },
  DZ: {
    fr: 'Algérie',
    en: 'Algeria'
  },
  EA: {
    fr: 'Ceuta et Melilla',
    en: 'Ceuta & Melilla'
  },
  EC: {
    fr: 'Équateur',
    en: 'Ecuador'
  },
  EE: {
    fr: 'Estonie',
    en: 'Estonia'
  },
  EG: {
    fr: 'Égypte',
    en: 'Egypt'
  },
  EH: {
    fr: 'Sahara occidental',
    en: 'Western Sahara'
  },
  ER: {
    fr: 'Érythrée',
    en: 'Eritrea'
  },
  ES: {
    fr: 'Espagne',
    en: 'Spain'
  },
  ET: {
    fr: 'Éthiopie',
    en: 'Ethiopia'
  },
  EU: {
    fr: 'Union européenne',
    en: 'European Union'
  },
  EZ: {
    fr: 'zone euro',
    en: 'Eurozone'
  },
  FI: {
    fr: 'Finlande',
    en: 'Finland'
  },
  FJ: {
    fr: 'Fidji',
    en: 'Fiji'
  },
  FK: {
    fr: 'Îles Malouines',
    en: 'Falkland Islands'
  },
  FM: {
    fr: 'Micronésie',
    en: 'Micronesia'
  },
  FO: {
    fr: 'Îles Féroé',
    en: 'Faroe Islands'
  },
  FR: {
    fr: 'France',
    en: 'France'
  },
  GA: {
    fr: 'Gabon',
    en: 'Gabon'
  },
  GB: {
    fr: 'Royaume-Uni',
    en: 'United Kingdom'
  },
  GD: {
    fr: 'Grenade',
    en: 'Grenada'
  },
  GE: {
    fr: 'Géorgie',
    en: 'Georgia'
  },
  GF: {
    fr: 'Guyane française',
    en: 'French Guiana'
  },
  GG: {
    fr: 'Guernesey',
    en: 'Guernsey'
  },
  GH: {
    fr: 'Ghana',
    en: 'Ghana'
  },
  GI: {
    fr: 'Gibraltar',
    en: 'Gibraltar'
  },
  GL: {
    fr: 'Groenland',
    en: 'Greenland'
  },
  GM: {
    fr: 'Gambie',
    en: 'Gambia'
  },
  GN: {
    fr: 'Guinée',
    en: 'Guinea'
  },
  GP: {
    fr: 'Guadeloupe',
    en: 'Guadeloupe'
  },
  GQ: {
    fr: 'Guinée équatoriale',
    en: 'Equatorial Guinea'
  },
  GR: {
    fr: 'Grèce',
    en: 'Greece'
  },
  GS: {
    fr: 'Géorgie du Sud-et-les Îles Sandwich du Sud',
    en: 'South Georgia & South Sandwich Islands'
  },
  GT: {
    fr: 'Guatemala',
    en: 'Guatemala'
  },
  GU: {
    fr: 'Guam',
    en: 'Guam'
  },
  GW: {
    fr: 'Guinée-Bissau',
    en: 'Guinea-Bissau'
  },
  GY: {
    fr: 'Guyana',
    en: 'Guyana'
  },
  HK: {
    fr: 'R.A.S. chinoise de Hong Kong',
    en: 'Hong Kong SAR China'
  },
  HM: {
    fr: 'Îles Heard-et-MacDonald',
    en: 'Heard & McDonald Islands'
  },
  HN: {
    fr: 'Honduras',
    en: 'Honduras'
  },
  HR: {
    fr: 'Croatie',
    en: 'Croatia'
  },
  HT: {
    fr: 'Haïti',
    en: 'Haiti'
  },
  HU: {
    fr: 'Hongrie',
    en: 'Hungary'
  },
  IC: {
    fr: 'Îles Canaries',
    en: 'Canary Islands'
  },
  ID: {
    fr: 'Indonésie',
    en: 'Indonesia'
  },
  IE: {
    fr: 'Irlande',
    en: 'Ireland'
  },
  IL: {
    fr: 'Israël',
    en: 'Israel'
  },
  IM: {
    fr: 'Île de Man',
    en: 'Isle of Man'
  },
  IN: {
    fr: 'Inde',
    en: 'India'
  },
  IO: {
    fr: 'Territoire britannique de l’océan Indien',
    en: 'British Indian Ocean Territory'
  },
  IQ: {
    fr: 'Irak',
    en: 'Iraq'
  },
  IR: {
    fr: 'Iran',
    en: 'Iran'
  },
  IS: {
    fr: 'Islande',
    en: 'Iceland'
  },
  IT: {
    fr: 'Italie',
    en: 'Italy'
  },
  JE: {
    fr: 'Jersey',
    en: 'Jersey'
  },
  JM: {
    fr: 'Jamaïque',
    en: 'Jamaica'
  },
  JO: {
    fr: 'Jordanie',
    en: 'Jordan'
  },
  JP: {
    fr: 'Japon',
    en: 'Japan'
  },
  KE: {
    fr: 'Kenya',
    en: 'Kenya'
  },
  KG: {
    fr: 'Kirghizstan',
    en: 'Kyrgyzstan'
  },
  KH: {
    fr: 'Cambodge',
    en: 'Cambodia'
  },
  KI: {
    fr: 'Kiribati',
    en: 'Kiribati'
  },
  KM: {
    fr: 'Comores',
    en: 'Comoros'
  },
  KN: {
    fr: 'Saint-Christophe-et-Niévès',
    en: 'St. Kitts & Nevis'
  },
  KP: {
    fr: 'Corée du Nord',
    en: 'North Korea'
  },
  KR: {
    fr: 'Corée du Sud',
    en: 'South Korea'
  },
  KW: {
    fr: 'Koweït',
    en: 'Kuwait'
  },
  KY: {
    fr: 'Îles Caïmans',
    en: 'Cayman Islands'
  },
  KZ: {
    fr: 'Kazakhstan',
    en: 'Kazakhstan'
  },
  LA: {
    fr: 'Laos',
    en: 'Laos'
  },
  LB: {
    fr: 'Liban',
    en: 'Lebanon'
  },
  LC: {
    fr: 'Sainte-Lucie',
    en: 'St. Lucia'
  },
  LI: {
    fr: 'Liechtenstein',
    en: 'Liechtenstein'
  },
  LK: {
    fr: 'Sri Lanka',
    en: 'Sri Lanka'
  },
  LR: {
    fr: 'Liberia',
    en: 'Liberia'
  },
  LS: {
    fr: 'Lesotho',
    en: 'Lesotho'
  },
  LT: {
    fr: 'Lituanie',
    en: 'Lithuania'
  },
  LU: {
    fr: 'Luxembourg',
    en: 'Luxembourg'
  },
  LV: {
    fr: 'Lettonie',
    en: 'Latvia'
  },
  LY: {
    fr: 'Libye',
    en: 'Libya'
  },
  MA: {
    fr: 'Maroc',
    en: 'Morocco'
  },
  MC: {
    fr: 'Monaco',
    en: 'Monaco'
  },
  MD: {
    fr: 'Moldavie',
    en: 'Moldova'
  },
  ME: {
    fr: 'Monténégro',
    en: 'Montenegro'
  },
  MF: {
    fr: 'Saint-Martin',
    en: 'St. Martin'
  },
  MG: {
    fr: 'Madagascar',
    en: 'Madagascar'
  },
  MH: {
    fr: 'Îles Marshall',
    en: 'Marshall Islands'
  },
  MK: {
    fr: 'Macédoine du Nord',
    en: 'North Macedonia'
  },
  ML: {
    fr: 'Mali',
    en: 'Mali'
  },
  MM: {
    fr: 'Myanmar (Birmanie)',
    en: 'Myanmar (Burma)'
  },
  MN: {
    fr: 'Mongolie',
    en: 'Mongolia'
  },
  MO: {
    fr: 'R.A.S. chinoise de Macao',
    en: 'Macao SAR China'
  },
  MP: {
    fr: 'Îles Mariannes du Nord',
    en: 'Northern Mariana Islands'
  },
  MQ: {
    fr: 'Martinique',
    en: 'Martinique'
  },
  MR: {
    fr: 'Mauritanie',
    en: 'Mauritania'
  },
  MS: {
    fr: 'Montserrat',
    en: 'Montserrat'
  },
  MT: {
    fr: 'Malte',
    en: 'Malta'
  },
  MU: {
    fr: 'Maurice',
    en: 'Mauritius'
  },
  MV: {
    fr: 'Maldives',
    en: 'Maldives'
  },
  MW: {
    fr: 'Malawi',
    en: 'Malawi'
  },
  MX: {
    fr: 'Mexique',
    en: 'Mexico'
  },
  MY: {
    fr: 'Malaisie',
    en: 'Malaysia'
  },
  MZ: {
    fr: 'Mozambique',
    en: 'Mozambique'
  },
  NA: {
    fr: 'Namibie',
    en: 'Namibia'
  },
  NC: {
    fr: 'Nouvelle-Calédonie',
    en: 'New Caledonia'
  },
  NE: {
    fr: 'Niger',
    en: 'Niger'
  },
  NF: {
    fr: 'Île Norfolk',
    en: 'Norfolk Island'
  },
  NG: {
    fr: 'Nigeria',
    en: 'Nigeria'
  },
  NI: {
    fr: 'Nicaragua',
    en: 'Nicaragua'
  },
  NL: {
    fr: 'Pays-Bas',
    en: 'Netherlands'
  },
  NO: {
    fr: 'Norvège',
    en: 'Norway'
  },
  NP: {
    fr: 'Népal',
    en: 'Nepal'
  },
  NR: {
    fr: 'Nauru',
    en: 'Nauru'
  },
  NU: {
    fr: 'Niue',
    en: 'Niue'
  },
  NZ: {
    fr: 'Nouvelle-Zélande',
    en: 'New Zealand'
  },
  OM: {
    fr: 'Oman',
    en: 'Oman'
  },
  PA: {
    fr: 'Panama',
    en: 'Panama'
  },
  PE: {
    fr: 'Pérou',
    en: 'Peru'
  },
  PF: {
    fr: 'Polynésie française',
    en: 'French Polynesia'
  },
  PG: {
    fr: 'Papouasie-Nouvelle-Guinée',
    en: 'Papua New Guinea'
  },
  PH: {
    fr: 'Philippines',
    en: 'Philippines'
  },
  PK: {
    fr: 'Pakistan',
    en: 'Pakistan'
  },
  PL: {
    fr: 'Pologne',
    en: 'Poland'
  },
  PM: {
    fr: 'Saint-Pierre-et-Miquelon',
    en: 'St. Pierre & Miquelon'
  },
  PN: {
    fr: 'Îles Pitcairn',
    en: 'Pitcairn Islands'
  },
  PR: {
    fr: 'Porto Rico',
    en: 'Puerto Rico'
  },
  PS: {
    fr: 'Territoires palestiniens',
    en: 'Palestinian Territories'
  },
  PT: {
    fr: 'Portugal',
    en: 'Portugal'
  },
  PW: {
    fr: 'Palaos',
    en: 'Palau'
  },
  PY: {
    fr: 'Paraguay',
    en: 'Paraguay'
  },
  QA: {
    fr: 'Qatar',
    en: 'Qatar'
  },
  QO: {
    fr: 'régions éloignées de l’Océanie',
    en: 'Outlying Oceania'
  },
  RE: {
    fr: 'La Réunion',
    en: 'Réunion'
  },
  RO: {
    fr: 'Roumanie',
    en: 'Romania'
  },
  RS: {
    fr: 'Serbie',
    en: 'Serbia'
  },
  RU: {
    fr: 'Russie',
    en: 'Russia'
  },
  RW: {
    fr: 'Rwanda',
    en: 'Rwanda'
  },
  SA: {
    fr: 'Arabie saoudite',
    en: 'Saudi Arabia'
  },
  SB: {
    fr: 'Îles Salomon',
    en: 'Solomon Islands'
  },
  SC: {
    fr: 'Seychelles',
    en: 'Seychelles'
  },
  SD: {
    fr: 'Soudan',
    en: 'Sudan'
  },
  SE: {
    fr: 'Suède',
    en: 'Sweden'
  },
  SG: {
    fr: 'Singapour',
    en: 'Singapore'
  },
  SH: {
    fr: 'Sainte-Hélène',
    en: 'St. Helena'
  },
  SI: {
    fr: 'Slovénie',
    en: 'Slovenia'
  },
  SJ: {
    fr: 'Svalbard et Jan Mayen',
    en: 'Svalbard & Jan Mayen'
  },
  SK: {
    fr: 'Slovaquie',
    en: 'Slovakia'
  },
  SL: {
    fr: 'Sierra Leone',
    en: 'Sierra Leone'
  },
  SM: {
    fr: 'Saint-Marin',
    en: 'San Marino'
  },
  SN: {
    fr: 'Sénégal',
    en: 'Senegal'
  },
  SO: {
    fr: 'Somalie',
    en: 'Somalia'
  },
  SR: {
    fr: 'Suriname',
    en: 'Suriname'
  },
  SS: {
    fr: 'Soudan du Sud',
    en: 'South Sudan'
  },
  ST: {
    fr: 'Sao Tomé-et-Principe',
    en: 'São Tomé & Príncipe'
  },
  SV: {
    fr: 'Salvador',
    en: 'El Salvador'
  },
  SX: {
    fr: 'Saint-Martin (partie néerlandaise)',
    en: 'Sint Maarten'
  },
  SY: {
    fr: 'Syrie',
    en: 'Syria'
  },
  SZ: {
    fr: 'Eswatini',
    en: 'Eswatini'
  },
  TA: {
    fr: 'Tristan da Cunha',
    en: 'Tristan da Cunha'
  },
  TC: {
    fr: 'Îles Turques-et-Caïques',
    en: 'Turks & Caicos Islands'
  },
  TD: {
    fr: 'Tchad',
    en: 'Chad'
  },
  TF: {
    fr: 'Terres australes françaises',
    en: 'French Southern Territories'
  },
  TG: {
    fr: 'Togo',
    en: 'Togo'
  },
  TH: {
    fr: 'Thaïlande',
    en: 'Thailand'
  },
  TJ: {
    fr: 'Tadjikistan',
    en: 'Tajikistan'
  },
  TK: {
    fr: 'Tokelau',
    en: 'Tokelau'
  },
  TL: {
    fr: 'Timor oriental',
    en: 'Timor-Leste'
  },
  TM: {
    fr: 'Turkménistan',
    en: 'Turkmenistan'
  },
  TN: {
    fr: 'Tunisie',
    en: 'Tunisia'
  },
  TO: {
    fr: 'Tonga',
    en: 'Tonga'
  },
  TR: {
    fr: 'Turquie',
    en: 'Türkiye'
  },
  TT: {
    fr: 'Trinité-et-Tobago',
    en: 'Trinidad & Tobago'
  },
  TV: {
    fr: 'Tuvalu',
    en: 'Tuvalu'
  },
  TW: {
    fr: 'Taïwan',
    en: 'Taiwan'
  },
  TZ: {
    fr: 'Tanzanie',
    en: 'Tanzania'
  },
  UA: {
    fr: 'Ukraine',
    en: 'Ukraine'
  },
  UG: {
    fr: 'Ouganda',
    en: 'Uganda'
  },
  UM: {
    fr: 'Îles mineures éloignées des États-Unis',
    en: 'U.S. Outlying Islands'
  },
  UN: {
    fr: 'Nations Unies',
    en: 'United Nations'
  },
  US: {
    fr: 'États-Unis',
    en: 'United States'
  },
  UY: {
    fr: 'Uruguay',
    en: 'Uruguay'
  },
  UZ: {
    fr: 'Ouzbékistan',
    en: 'Uzbekistan'
  },
  VA: {
    fr: 'État de la Cité du Vatican',
    en: 'Vatican City'
  },
  VC: {
    fr: 'Saint-Vincent-et-les Grenadines',
    en: 'St. Vincent & Grenadines'
  },
  VE: {
    fr: 'Venezuela',
    en: 'Venezuela'
  },
  VG: {
    fr: 'Îles Vierges britanniques',
    en: 'British Virgin Islands'
  },
  VI: {
    fr: 'Îles Vierges des États-Unis',
    en: 'U.S. Virgin Islands'
  },
  VN: {
    fr: 'Viêt Nam',
    en: 'Vietnam'
  },
  VU: {
    fr: 'Vanuatu',
    en: 'Vanuatu'
  },
  WF: {
    fr: 'Wallis-et-Futuna',
    en: 'Wallis & Futuna'
  },
  WS: {
    fr: 'Samoa',
    en: 'Samoa'
  },
  XA: {
    fr: 'pseudo-accents',
    en: 'Pseudo-Accents'
  },
  XB: {
    fr: 'pseudo-bidi',
    en: 'Pseudo-Bidi'
  },
  XK: {
    fr: 'Kosovo',
    en: 'Kosovo'
  },
  YE: {
    fr: 'Yémen',
    en: 'Yemen'
  },
  YT: {
    fr: 'Mayotte',
    en: 'Mayotte'
  },
  ZA: {
    fr: 'Afrique du Sud',
    en: 'South Africa'
  },
  ZM: {
    fr: 'Zambie',
    en: 'Zambia'
  },
  ZW: {
    fr: 'Zimbabwe',
    en: 'Zimbabwe'
  },
  ZZ: {
    fr: 'région indéterminée',
    en: 'Unknown Region'
  }
};

export const code2country = (code: string, lang: string = 'en'): string => {
  const language = lang !== 'en' && lang !== 'fr' ? 'en' : lang;
  return countries[code]?.[language] || code;
};

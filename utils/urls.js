export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

export const cloudinaryImageUrls = {
  serwis: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/serwis.webp",
  serwis_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis",
  telewizor: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-telewizorow-przemysl-naprawa-telewizora.png",
  telewizor_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto,w_300/v1/Serwis/serwis-telewizorow-przemysl-naprawa-telewizoras",
  ekspres: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
  ekspres_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-ekspresow-przemysl-naprawa-ekspresu",
  ekspres_2: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu.png",
  ekspres_2_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu",
  zmywarka: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
  zmywarka_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto,w_300/v1/Serwis/serwis-zmywarek-przemysl-naprawa-zmywarki",
  pralka: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715052/Serwis/serwis-pralek-przemysl-naprawa-pralki.png",
  pralka_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-pralek-przemysl-naprawa-pralki",
  suszarka: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-suszarek-przemysl-naprawa-suszarki.png",
  suszarka_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/serwis-suszarek-przemysl-naprawa-suszarki",
  logoGoogle: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168332/Serwis/logoGoogle.png",
  logoGoogle_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/logoGoogle",
  logo: "https://res.cloudinary.com/difc0i71u/image/upload/v1733813310/Serwis/logo.png",
  logo_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/logo",
  mapa: "https://res.cloudinary.com/difc0i71u/image/upload/v1732595296/Serwis/mapa.png",
  mapa_auto: "https://res.cloudinary.com/difc0i71u/image/upload/f_auto,q_auto/v1/Serwis/mapa",
};

export const imageUrls = {
  serwis: `${BASE_URL}/images/serwis-rtv-agd-przemysl-1.webp`,
  serwis_1: BASE_URL + "/images/serwis.jpg",
  telewizor: BASE_URL + "/images/naprawa-telewizorow-przemysl-serwis-1.webp",
  _telewizor: BASE_URL + "/images/telewizor.webp",
  telewizor_300: BASE_URL + "/images/serwis-telewizorow-przemysl-naprawa-telewizora_300.webp",
  ekspres: BASE_URL + "/images/naprawa-ekspresow-przemysl-serwis-1.webp",
  _ekspres: BASE_URL + "/images/ekspres.webp",
  ekspres_300: BASE_URL + "/images/serwis-ekspresow-przemysl-naprawa-ekspresu_300.webp",
  ekspres_2: BASE_URL + "/images/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu.webp",
  _ekspres_2: BASE_URL + "/images/ekspres-pro.webp",
  ekspres_2_300: BASE_URL + "/images/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu_300.webp",
  zmywarka: BASE_URL + "/images/naprawa-zmywarek-przemysl-serwis-1.webp",
  _zmywarka: BASE_URL + "/images/zmywarka.webp",
  zmywarka_300: BASE_URL + "/images/serwis-zmywarek-przemysl-naprawa-zmywarki_300.webp",
  pralka: BASE_URL + "/images/naprawa-pralek-przemysl-serwis-1.webp",
  _pralka: BASE_URL + "/images/pralka.webp",
  pralka_300: BASE_URL + "/images/serwis-pralek-przemysl-naprawa-pralki_300.webp",
  suszarka: BASE_URL + "/images/naprawa-suszarek-przemysl-serwis-2.webp",
  _suszarka: BASE_URL + "/images/suszarka.webp",
  suszarka_300: BASE_URL + "/images/serwis-suszarek-przemysl-naprawa-suszarki_300.webp",
  logoGoogle: BASE_URL + "/images/logoGoogle.webp",
  logo: BASE_URL + "/images/logo.svg",
  mapa: BASE_URL + "/images/mapa.webp",
};

export const appUrls = {
  home: BASE_URL + "/",
  kontakt: BASE_URL + "/kontakt/",
  o_mnie: BASE_URL + "/o-mnie/",
  opinie: BASE_URL + "/opinie/",
  naprawa_pralek: BASE_URL + "/naprawa-pralek/",
  naprawa_suszarek: BASE_URL + "/naprawa-suszarek/",
  naprawa_zmywarek: BASE_URL + "/naprawa-zmywarek/",
  naprawa_ekspresow: BASE_URL + "/naprawa-ekspresow/",
  naprawa_telewizorow: BASE_URL + "/naprawa-telewizorow/",
};

export const routes = {
  '/': {
    priority: '1.0',
    image: `${BASE_URL}/images/serwis-rtv-agd-przemysl-1.webp`,
    caption: 'Profesjonalny serwis RTV-AGD w Przemyślu',
    title: 'Serwis RTV-AGD'
  },
  '/o-mnie/': {
    priority: '0.5',
    image: `${BASE_URL}/images/serwis-rtv-agd-przemysl-1.webp`,
    caption: 'O mnie - profesjonalny serwis RTV-AGD w Przemyślu',
    title: 'O mnie - Serwis RTV-AGD'
  },
  '/opinie/': {
    priority: '0.5',
    image: `${BASE_URL}/images/serwis-rtv-agd-przemysl-1.webp`,
    caption: 'Opinie klientów o serwisie RTV-AGD w Przemyślu',
    title: 'Opinie - Serwis RTV-AGD'
  },
  '/kontakt/': {
    priority: '0.5',
    image: `${BASE_URL}/images/serwis-rtv-agd-przemysl-1.webp`,
    caption: 'Kontakt - profesjonalny serwis RTV-AGD w Przemyślu',
    title: 'Kontakt - Serwis RTV-AGD'
  },
  '/naprawa-pralek/': {
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-pralek-przemysl-serwis-1.webp`,
    caption: 'Naprawa pralek automatycznych w Przemyślu',
    title: 'Serwis pralek automatycznych'
  },
  '/naprawa-suszarek/': {
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-suszarek-przemysl-serwis-2.webp`,
    caption: 'Naprawa suszarek do ubrań w Przemyślu',
    title: 'Serwis suszarek'
  },
  '/naprawa-zmywarek/': {
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-zmywarek-przemysl-serwis-1.webp`,
    caption: 'Naprawa zmywarek do naczyń w Przemyślu',
    title: 'Serwis zmywarek'
  },
  '/naprawa-ekspresow/': {
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-ekspresow-przemysl-serwis-1.webp`,
    caption: 'Naprawa ekspresów do kawy w Przemyślu',
    title: 'Serwis ekspresów do kawy'
  },
  '/naprawa-telewizorow/': {
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-telewizorow-przemysl-serwis-1.webp`,
    caption: 'Naprawa telewizorów w Przemyślu',
    title: 'Serwis telewizorów'
  },
}

export const dataUrl = BASE_URL ? `${BASE_URL}/data.json` : "http://localhost:3000/data.json";
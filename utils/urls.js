const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

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
  serwis: baseUrl + "/images/serwis-rtv-agd-przemysl.webp",
  serwis_1: baseUrl + "/images/serwis.jpg",
  telewizor: baseUrl + "/images/serwis-telewizorow-przemysl-naprawa-telewizora.webp",
  telewizor_300: baseUrl + "/images/serwis-telewizorow-przemysl-naprawa-telewizora_300.webp",
  ekspres: baseUrl + "/images/serwis-ekspresow-przemysl-naprawa-ekspresu.webp",
  ekspres_300: baseUrl + "/images/serwis-ekspresow-przemysl-naprawa-ekspresu_300.webp",
  ekspres_2: baseUrl + "/images/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu.webp",
  ekspres_2_300: baseUrl + "/images/serwis-ekspresow-przemysl-profesjonalna-naprawa-ekspresu_300.webp",
  zmywarka: baseUrl + "/images/naprawa-zmywarek-przemysl-serwis-zmywarki.webp",
  zmywarka_300: baseUrl + "/images/serwis-zmywarek-przemysl-naprawa-zmywarki_300.webp",
  pralka: baseUrl + "/images/naprawa-pralek-przemysl.webp",
  pralka_300: baseUrl + "/images/serwis-pralek-przemysl-naprawa-pralki_300.webp",
  suszarka: baseUrl + "/images/naprawa-suszarek-przemysl.webp",
  suszarka_300: baseUrl + "/images/serwis-suszarek-przemysl-naprawa-suszarki_300.webp",
  logoGoogle: baseUrl + "/images/logoGoogle.webp",
  logo: baseUrl + "/images/logo.svg",
  mapa: baseUrl + "/images/mapa.webp",
};

export const appUrls = {
  home: baseUrl + "/",
  kontakt: baseUrl + "/kontakt/",
  o_mnie: baseUrl + "/o-mnie/",
  opinie: baseUrl + "/opinie/",
  naprawa_pralek: baseUrl + "/naprawa-pralek/",
  naprawa_suszarek: baseUrl + "/naprawa-suszarek/",
  naprawa_zmywarek: baseUrl + "/naprawa-zmywarek/",
  naprawa_ekspresow: baseUrl + "/naprawa-ekspresow/",
  naprawa_telewizorow: baseUrl + "/naprawa-telewizorow/",
};

export const dataUrl = baseUrl ? `${baseUrl}/data.json` : "http://localhost:3000/data.json";
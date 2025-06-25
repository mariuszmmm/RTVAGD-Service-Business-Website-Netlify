import imageUrls from './urls';

const BASE_URL = 'https://naprawaprzemysl.pl';

const routes = {
  '/': {
    changefreq: 'daily',
    priority: '1.0',
    image: `${BASE_URL}/images/serwis-rtv-agd-przemysl-1.webp`,
    caption: 'Profesjonalny serwis RTV-AGD w Przemyślu',
    title: 'Serwis RTV-AGD'
  },
  '/naprawa-pralek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: imageUrls.pralka,
    caption: 'Naprawa pralek automatycznych w Przemyślu',
    title: 'Serwis pralek automatycznych'
  },
  '/naprawa-suszarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-suszarek-przemysl-serwis-2.webp`,
    caption: 'Naprawa suszarek do ubrań w Przemyślu',
    title: 'Serwis suszarek'
  },
  '/naprawa-zmywarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-zmywarek-przemysl-serwis-1.webp`,
    caption: 'Naprawa zmywarek do naczyń w Przemyślu',
    title: 'Serwis zmywarek'
  },
  '/naprawa-ekspresow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-ekspresow-przemysl-serwis-1.webp`,
    caption: 'Naprawa ekspresów do kawy w Przemyślu',
    title: 'Serwis ekspresów do kawy'
  },
  '/naprawa-telewizorow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-telewizorow-przemysl-serwis-1.webp`,
    caption: 'Naprawa telewizorów w Przemyślu',
    title: 'Serwis telewizorów'
  },
  '/o-mnie/': {
    changefreq: 'weekly',
    priority: '0.5',
  }, '/opinie/': {
    changefreq: 'weekly',
    priority: '0.5',
  },
  '/kontakt/': {
    changefreq: 'monthly',
    priority: '0.5',
  },
}

module.exports = { routes, BASE_URL };
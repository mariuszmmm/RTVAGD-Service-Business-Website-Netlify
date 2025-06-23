const fs = require('fs');
const path = require('path');
const { dataForMetaTags } = require('../src/utils/dataForMetaTags');

console.log('dataForMetaTags', dataForMetaTags);

const BASE_URL = 'https://naprawaprzemysl.pl';
const routes = {
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
    image: `${BASE_URL}/images/naprawa-suszarek-przemysl-serwis-1.webp`,
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

const urlsXml = Object.entries(routes)
  .map(([route]) => {
    return [
      `  <url>`,
      `    <loc>${BASE_URL}${route}</loc>`,
      `    <lastmod>${new Date().toISOString()}</lastmod>`,
      `    <changefreq>daily</changefreq>`,
      `    <priority>${routes[route].priority || '0.8'}</priority>`,
      `    <mobile:mobile/>`,
      `    <image:image>`,
      `      <image:loc>${routes[route].image}</image:loc>`,
      `      <image:caption>${routes[route].caption}</image:caption>`,
      `      <image:title>${routes[route].title}</image:title>`,
      `    </image:image>`,
      `  </url>`
    ].join('\n');;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"\n` +
  `  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  urlsXml + '\n' +
  `</urlset>`;

const outputPath = path.join(__dirname, '..', 'test.xml');

try {
  fs.writeFileSync(outputPath, sitemap.trim());
  console.log('✅ sitemap.xml został wygenerowany!');
  console.log('Ścieżka do pliku:', outputPath);
  console.log('\n--- Zawartość test.xml ---\n');
  console.log(fs.readFileSync(outputPath, 'utf8'));
} catch (err) {
  console.error('❌ Błąd podczas zapisu pliku:', err);
}

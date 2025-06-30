const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://naprawaprzemysl.pl';
const routes = {
  '/': {
    changefreq: 'daily',
    priority: '1.0',
    image: `${BASE_URL}/images/naprawa-rtv-i-agd-przemysl-serwis.webp`,
    caption: 'Naprawa pralek Przemyśl, naprawa suszarek Przemyśl, naprawa zmywarek Przemyśl, naprawa telewizorów Przemyśl, naprawa ekspresów Przemyśl',
    title: 'Profesjonalna naprawa RTV i AGD w Przemyślu'
  },
  '/naprawa-pralek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-pralek-przemysl-serwis.webp`,
    caption: 'Szybka i profesjonalna naprawa pralek automatycznych w Przemyślu.',
    title: 'Naprawa pralek Przemyśl – Serwis RTV i AGD'
  },
  '/naprawa-suszarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-suszarek-przemysl.webp`,
    caption: 'Serwis suszarek Przemyśl - naprawa suszarki kondensacyjnej',
    title: 'Profesjonalna naprawa suszarek w Przemyślu - Serwis kondensacyjnych'
  },
  '/naprawa-zmywarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-zmywarek-przemysl.webp`,
    caption: 'Serwis zmywarek Przemyśl - naprawa zmywarki do naczyń',
    title: 'Profesjonalna naprawa zmywarek w Przemyślu - Serwis AGD'
  },
  '/naprawa-ekspresow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/serwis-ekspresow-przemysl-naprawa-ekspresu.webp`,
    caption: 'Serwis ekspresów Przemyśl - naprawa ekspresu do kawy',
    title: 'Profesjonalna naprawa ekspresów do kawy w Przemyślu'
  },
  '/naprawa-telewizorow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/serwis-telewizorow-przemysl-naprawa-telewizora.webp`,
    caption: 'Serwis telewizorów Przemyśl - naprawa telewizora LCD LED',
    title: 'Profesjonalna naprawa telewizorów w Przemyślu - Serwis RTV'
  },
  '/o-mnie/': {
    changefreq: 'weekly',
    priority: '0.5',
  },
  '/opinie/': {
    changefreq: 'weekly',
    priority: '0.5',
  },
  '/kontakt/': {
    changefreq: 'monthly',
    priority: '0.5',
  },
}

const urlsXml = Object.entries(routes)
  .map(([route]) => {
    const data = routes[route];
    const imageBlock = data.image && data.caption && data.title
      ? [
        `    <image:image>`,
        `      <image:loc>${data.image}</image:loc>`,
        `      <image:caption>${data.caption}</image:caption>`,
        `      <image:title>${data.title}</image:title>`,
        `    </image:image>`
      ].join('\n')
      : '';
    return [
      `  <url>`,
      `    <loc>${BASE_URL}${route}</loc>`,
      `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`,
      `    <changefreq>${data.changefreq || 'daily'}</changefreq>`,
      `    <priority>${data.priority || '0.8'}</priority>`,
      imageBlock,
      `  </url>`
    ].filter(Boolean).join('\n');
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  urlsXml + '\n' +
  `</urlset>`;

const outputPath = path.join(__dirname, '..', 'sitemap.xml');

try {
  fs.writeFileSync(outputPath, sitemap.trim());
  console.log('✅ sitemap.xml został wygenerowany!');
  console.log('Ścieżka do pliku:', outputPath);
  console.log('\n--- Zawartość sitemap.xml ---\n');
  console.log(fs.readFileSync(outputPath, 'utf8'));
} catch (err) {
  console.error('❌ Błąd podczas zapisu pliku:', err);
}

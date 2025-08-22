const fs = require('fs');
const path = require('path');
const { imagesParameters } = require('../../utils/imagesParametrs');

const BASE_URL = 'https://naprawaprzemysl.pl';
const routes = {
  '/': {
    changefreq: 'daily',
    priority: '1.0',
    image: `${BASE_URL}/images/serwis-rtv-agd.webp`,
    caption: 'Profesjonalna naprawa sprzętu RTV i AGD w Przemyślu.',
    title: 'Serwis RTV i AGD Przemyśl'
  },
  '/naprawa-pralek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-pralek-700.webp`,
    caption: 'Profesjonalna naprawa pralek w Przemyślu.',
    title: 'Serwis Pralek Przemyśl'
  },
  '/naprawa-suszarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-suszarek-2.webp`,
    caption: 'Profesjonalna naprawa suszarek do prania w Przemyślu.',
    title: 'Serwis Suszarek Przemyśl'
  },
  '/naprawa-zmywarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: "https://res.cloudinary.com/difc0i71u/image/upload/c_limit,w_1024/f_auto/q_auto/v1755748024/Serwis/naprawa-zmywarek",
    caption: 'Profesjonalna naprawa zmywarek w Przemyślu.',
    title: 'Serwis Zmywarek Przemyśl'
  },
  '/naprawa-ekspresow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-ekspresow-2.webp`,
    caption: 'Profesjonalna naprawa ekspresów do kawy w Przemyślu.',
    title: 'Serwis Ekspresów do Kawy Przemyśl'
  },
  '/naprawa-telewizorow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-telewizorow-2.webp`,
    caption: 'Profesjonalna naprawa telewizorów w Przemyślu.',
    title: 'Serwis Telewizorów Przemyśl'
  },
  '/o-mnie/': {
    changefreq: 'weekly',
    priority: '0.5',
  },
  '/opinie/': {
    changefreq: 'daily',
    priority: '0.8',
  },
  '/kontakt/': {
    changefreq: 'monthly',
    priority: '0.8',
  },
}

const urlsXml = Object.entries(routes)
  .map(([route], index) => {
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
      `  </url>`,
    ].filter(Boolean).join('\n')
      + (index === Object.entries(routes).length - 1 ? '' : '\n');
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

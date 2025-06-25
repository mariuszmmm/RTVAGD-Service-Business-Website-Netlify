import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
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
    image: `${BASE_URL}/images/naprawa-pralek-przemysl-serwis-1.webp`,
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

export {
  sitemap,
  outputPath,
  BASE_URL,
  routes
};

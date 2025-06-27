const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://naprawaprzemysl.pl';
const routes = {
  '/': {
    changefreq: 'daily',
    priority: '1.0',
    image: `${BASE_URL}/images/serwis-rtv-agd-przemysl-1.webp`,
    caption: 'Naprawa RTV i AGD w Przemyślu. Profesjonalny serwis pralek, zmywarek, suszarek, telewizorów i ekspresów do kawy.',
    title: 'Naprawa RTV i AGD Przemyśl - Profesjonalny Serwis'
  },
  '/naprawa-pralek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-pralek-przemysl-serwis-1.webp`,
    caption: 'Naprawa pralek Przemyśl. Profesjonalny serwis pralek automatycznych, szybka diagnoza i dojazd do klienta.',
    title: 'Naprawa Pralek Przemyśl - Serwis AGD'
  },
  '/naprawa-suszarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-suszarek-przemysl-serwis-2.webp`,
    caption: 'Naprawa suszarek do ubrań Przemyśl. Serwis suszarek kondensacyjnych i bębnowych. Gwarancja jakości.',
    title: 'Naprawa Suszarek Przemyśl - Serwis AGD'
  },
  '/naprawa-zmywarek/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-zmywarek-przemysl-serwis-1.webp`,
    caption: 'Naprawa zmywarek Przemyśl. Serwis zmywarek wolnostojących i do zabudowy. Skuteczne usuwanie awarii.',
    title: 'Naprawa Zmywarek Przemyśl - Serwis AGD'
  },
  '/naprawa-ekspresow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-ekspresow-przemysl-serwis-1.webp`,
    caption: 'Naprawa ekspresów do kawy Przemyśl. Profesjonalny serwis ekspresów ciśnieniowych i automatycznych.',
    title: 'Naprawa Ekspresów do Kawy Przemyśl - Serwis'
  },
  '/naprawa-telewizorow/': {
    changefreq: 'daily',
    priority: '0.9',
    image: `${BASE_URL}/images/naprawa-telewizorow-przemysl-serwis-1.webp`,
    caption: 'Naprawa telewizorów Przemyśl. Serwis TV LCD, LED, OLED. Szybka i skuteczna naprawa telewizorów wszystkich marek.',
    title: 'Naprawa Telewizorów Przemyśl - Serwis RTV'
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

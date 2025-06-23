const fs = require('fs');
const path = require('path');
const { imageUrls } = require('../../utils/urls');

const BASE_URL = 'https://naprawaprzemysl.pl';
const routes = {
  '/': {
    priority: '1.0',
    image: imageUrls.serwis,
    caption: 'Profesjonalny serwis RTV-AGD w Przemyślu',
    title: 'Serwis RTV-AGD'
  },
  '/o-mnie/': {
    priority: '0.5',
    image: imageUrls.serwis,
    caption: 'O mnie - profesjonalny serwis RTV-AGD w Przemyślu',
    title: 'O mnie - Serwis RTV-AGD'
  },
  '/opinie/': {
    priority: '0.5',
    image: imageUrls.serwis,
    caption: 'Opinie klientów o serwisie RTV-AGD w Przemyślu',
    title: 'Opinie - Serwis RTV-AGD'
  },
  '/kontakt/': {
    priority: '0.5',
    image: imageUrls.serwis,
    caption: 'Kontakt - profesjonalny serwis RTV-AGD w Przemyślu',
    title: 'Kontakt - Serwis RTV-AGD'
  },
  '/naprawa-pralek/': {
    priority: '0.9',
    image: imageUrls.pralka,
    caption: 'Naprawa pralek automatycznych w Przemyślu',
    title: 'Serwis pralek automatycznych'
  },
  '/naprawa-suszarek/': {
    priority: '0.9',
    image: imageUrls.suszarka,
    caption: 'Naprawa suszarek do ubrań w Przemyślu',
    title: 'Serwis suszarek'
  },
  '/naprawa-zmywarek/': {
    priority: '0.9',
    image: imageUrls.zmywarka,
    caption: 'Naprawa zmywarek do naczyń w Przemyślu',
    title: 'Serwis zmywarek'
  },
  '/naprawa-ekspresow/': {
    priority: '0.9',
    image: imageUrls.ekspres,
    caption: 'Naprawa ekspresów do kawy w Przemyślu',
    title: 'Serwis ekspresów do kawy'
  },
  '/naprawa-telewizorow/': {
    priority: '0.9',
    image: imageUrls.telewizor,
    caption: 'Naprawa telewizorów w Przemyślu',
    title: 'Serwis telewizorów'
  },
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${Object.entries(routes)
    .map(([route]) => {
      return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()} </lastmod>
    <changefreq>daily</changefreq>
    <priority>${routes[route].priority || '0.8'} </priority>
    <mobile:mobile/>
    <image:image>
      <image:loc>${routes[route].image} </image:loc>
      <image:caption>${routes[route].caption} </image:caption>
      <image:title>${routes[route].title} </image:title>
    </image:image>
  </url>`;
    })
    .join('\n')}
</urlset>`;

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

const fs = require('fs');
const path = require('path');
const { routes } = require('../../utils/urls');

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

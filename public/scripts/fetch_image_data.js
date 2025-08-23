const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });
const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  secure: true,
});

const imagePublicIds = [
  "Serwis/naprawa-zmywarek",
  // Dodaj tutaj public_id innych obrazów, których potrzebujesz
];

async function fetchImageData() {
  console.log("Pobieranie danych obrazów z Cloudinary...");
  try {
    const imageDetails = await Promise.all(
      imagePublicIds.map(id => cloudinary.api.resource(id))
    );

    const imageParameters = {};
    imageDetails.forEach(detail => {
      const key = detail.public_id.split('/').pop().replace("-", "_");
      imageParameters[key] = {
        public_id: detail.public_id,
        version: `v${detail.version}`,
        width: detail.width,
        height: detail.height,
      };
    });

    // const outputPath = path.resolve(process.cwd(), 'public/image-data.json');
    const filePath = path.join(__dirname, '..', 'image-data.json');

    fs.writeFileSync(filePath, JSON.stringify(imageParameters, null, 2), 'utf-8');
    console.log('✅ image-data.json został wygenerowany!');
    console.log('Ścieżka do pliku:', filePath);
    console.log('\n--- Zawartość image-data.json ---\n');
    console.log(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error("Błąd podczas pobierania wersji obrazów:", error);
    process.exit(1);
  }
}

fetchImageData();
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

async function fetchVersions() {
  console.log("Pobieranie wersji obrazów z Cloudinary...");
  try {
    const imageDetails = await Promise.all(
      imagePublicIds.map(id => cloudinary.api.resource(id))
    );

    const imageParameters = {};
    imageDetails.forEach(detail => {
      // Użyjemy ostatniej części public_id jako klucza
      const key = detail.public_id.split('/').pop();
      imageParameters[key] = {
        public_id: detail.public_id,
        version: `v${detail.version}`,
        width: detail.width,
        height: detail.height,
      };
    });

    const outputPath = path.resolve(process.cwd(), 'public/image-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(imageParameters, null, 2));
    console.log(`Pomyślnie zapisano dane obrazów w ${outputPath}`);
  } catch (error) {
    console.error("Błąd podczas pobierania wersji obrazów:", error);
    process.exit(1); // Zakończ z błędem, aby zatrzymać proces budowania
  }
}

fetchVersions();
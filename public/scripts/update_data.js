require('dotenv').config();

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const PLACE_ID = 'ChIJrWDpGyR_O0cRpvj4OFLVPPw';

if (!KEY) {
  console.error('Brakuje KEY w zmiennych środowiskowych.');
  process.exit(1);
}

async function fetchData() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=pl&key=${KEY}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const json = await res.json();
  if (!json.result || !Array.isArray(json.result.reviews)) {
    console.error('Nieprawidłowa odpowiedź Google API:', JSON.stringify(json, null, 2));
    throw new Error('Brak danych „reviews” w odpowiedzi Google.');
  }

  reviews = json.result.reviews;
  rating = json.result.rating || 0;
  user_ratings_total = json.result.user_ratings_total || 0;
  const update_time = new Date().toISOString().replace('T', ' ').substring(0, 19);

  const newReviews = json.result.reviews.map(item => ({
    author_name: item.author_name || '',
    profile_photo_url: item.profile_photo_url || '',
    text: item.text || '',
    rating: item.rating || 0,
    time: item.time || 0,
  }));

  const filteredRewievs = newReviews.filter(review => review.text && review.rating > 4);
  const sortedReviews = filteredRewievs.sort((a, b) => b.time - a.time);

  return {
    reviews: sortedReviews,
    rating: rating,
    user_ratings_total: user_ratings_total,
    update_time: update_time,
  };
}

(async () => {
  try {
    const data = await fetchData();
    const filePath = path.join(__dirname, '..', 'data.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Zapisano dane do ${filePath}`);
  } catch (err) {
    console.error('Błąd podczas pobierania danych:', err);
    process.exit(1);
  }
})();
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const PLACE_ID = 'ChIJrWDpGyR_O0cRpvj4OFLVPPw';
let test = null;

if (!KEY) {
  console.error('Brakuje KEY w zmiennych środowiskowych.');
  process.exit(1);
}

async function fetchData() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=pl&key=${KEY}`;
  const aditionalUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews&language=pl&reviews_sort=newest&key=${KEY}`;

  const res = await fetch(url);
  const aditionalRes = await fetch(aditionalUrl);
  if (!res.ok || !aditionalRes.ok) {
    throw new Error(`HTTP error! status: ${res.status}, ${aditionalRes.status}`);
  }

  const json = await res.json();
  const aditionalJson = await aditionalRes.json();
  if (!json.result || !aditionalJson.result || !Array.isArray(aditionalJson.result.reviews) || !Array.isArray(json.result.reviews)) {
    console.error('Nieprawidłowa odpowiedź Google API:', JSON.stringify(json, null, 2));
    console.error('Nieprawidłowa odpowiedź Google API:', JSON.stringify(aditionalJson, null, 2));
    throw new Error('Brak danych w odpowiedzi Google.');
  }

  const reviews = json.result.reviews;
  const additionalReviews = aditionalJson.result.reviews;
  const rating = json.result.rating || 0;
  const user_ratings_total = json.result.user_ratings_total || 0;
  const update_time = new Date().toISOString().replace('T', ' ').substring(0, 19);

  const newReviews = reviews.map(item => ({
    author_name: item.author_name || '',
    profile_photo_url: item.profile_photo_url || '',
    text: item.text || '',
    rating: item.rating || 0,
    time: item.time || 0,
  }));

  const newAdditionalReviews = additionalReviews.map(item => ({
    author_name: item.author_name || '',
    profile_photo_url: item.profile_photo_url || '',
    text: item.text || '',
    rating: item.rating || 0,
    time: item.time || 0,
  }));

  const filteredRewievs = newReviews.filter(review => review.text && review.rating > 4);
  const additionalFilteredRewievs = newAdditionalReviews.filter(review => review.text && review.rating > 4);

  const uniqueReviews = [];
  [...filteredRewievs, ...additionalFilteredRewievs].forEach(rewiew => {
    if (!uniqueReviews.some(uniqueRewiew => uniqueRewiew.text === rewiew.text)) {
      uniqueReviews.push(rewiew);
    }
  })

  const sortedReviews = uniqueReviews.sort((a, b) => b.time - a.time);

  return {
    reviews: sortedReviews,
    rating,
    user_ratings_total,
    update_time,
    test,
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
<?php
header('Content-Type: application/json');
$apiKey = getenv('GOOGLE_API_KEY'); 
$placeId = getenv('PLACE_ID');

if (!$apiKey || !$placeId) {
  echo json_encode(['error' => 'Missing API key or Place ID']);
  exit;
}

$url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=$placeId&fields=reviews,rating&language=pl&key=$apiKey";

$response = file_get_contents($url);
$jsonResponse = json_decode($response, true);

if (json_last_error() !== JSON_ERROR_NONE) {
  echo json_encode(['error' => 'Invalid JSON response']);
  exit;
}

$reviews = $jsonResponse['result']['reviews'] ?? [];
$rating = $jsonResponse['result']['rating'] ?? null;

if (!is_array($reviews)) {
  echo json_encode(['error' => 'Invalid response from Google Places API']);
  exit;
}

$newReviews = array_filter(array_map(function($item) {
  return [
    'rating' => $item['rating'],
    'text' => $item['text'],
    'author_name' => $item['author_name'],
    'profile_photo_url' => $item['profile_photo_url'],
    'time' => $item['time'],
  ];
}, $reviews), function($item) {
    return $item['rating'] > 4;
});

$data = [
  'reviews' => array_values($newReviews),
  'rating' => $rating,
  'update_time' => date('Y-m-d H:i:s')
];

file_put_contents('updatedReviews.json', json_encode($data));

echo json_encode([
  'message' => 'Reviews updated successfully',
  ]);
?>
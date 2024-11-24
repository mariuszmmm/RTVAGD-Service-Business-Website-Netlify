const getContentForReview = (text) => {

  if (typeof text !== 'string') {
    console.error('Expected a string but got:', typeof text);
    return;
  };

  const forWashtMachine = ['pralka', 'pralki', 'pralkę', 'pralką', 'pralkom', 'pralkach', 'pralkami'];
  const forDishwasher = ['zmywarka', 'zmywarki', 'zmywarkę', 'zmywarką', 'zmywarkom', 'zmywarkami', 'zmywarkach'];
  const forCoffeeMachine = ['ekspres', 'ekspresy', 'ekspresów', 'ekspresie', 'ekspresem', 'ekspresom', 'ekspresami', 'ekspresach'];
  const forTV = ['telewizor', 'telewizory', 'telewizorów', 'telewizorze', 'telewizorem', 'telewizorze', 'telewizorom', 'telewizorami', 'telewizorach'];

  if (forWashtMachine.some((keyword) => text.toLowerCase().includes(keyword))) {
    return "Naprawa pralek";
  } else if (forDishwasher.some((keyword) => text.toLowerCase().includes(keyword))) {
    return "Naprawa zmywarek";
  } else if (forCoffeeMachine.some((keyword) => text.toLowerCase().includes(keyword))) {
    return "Naprawa ekspresów do kawy";
  } else if (forTV.some((keyword) => text.toLowerCase().includes(keyword))) {
    return "Naprawa telewizorów";
  } else {
    return "Naprawa pralek, zmywarek, ekspresów do kawy oraz telewizorów";
  };
};

export default getContentForReview;
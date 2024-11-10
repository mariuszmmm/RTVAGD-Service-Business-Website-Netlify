export const getContentForReview = (text) => {
  const forWashtMachine = ['pralka', 'pralki', 'pralkę', 'pralką', 'pralkom', 'pralkach', 'pralkami'];
  const forDishwasher = ['zmywarka', 'zmywarki', 'zmywarkę', 'zmywarką', 'zmywarkom', 'zmywarkami', 'zmywarkach'];
  const forCoffeeMachine = ['ekspres', 'ekspresy', 'ekspresów', 'ekspresie', 'ekspresem', 'ekspresom', 'ekspresami', 'ekspresach'];
  const forTV = ['telewizor', 'telewizory', 'telewizorów', 'telewizorze', 'telewizorem', 'telewizorze', 'telewizorom', 'telewizorami', 'telewizorach'];

  if (forWashtMachine.some((keyword) => text.toLowerCase().includes(keyword))) {
    console.log(text, "naprawa pralek");
    return "Naprawa pralek";
  } else if (forDishwasher.some((keyword) => text.toLowerCase().includes(keyword))) {
    console.log(text, "naprawa zmywarek");

    return "Naprawa zmywarek";
  } else if (forCoffeeMachine.some((keyword) => text.toLowerCase().includes(keyword))) {
    console.log(text, "naprawa ekspresow do kawy");

    return "Naprawa ekspresów do kawy";
  } else if (forTV.some((keyword) => text.toLowerCase().includes(keyword))) {
    console.log(text, "naprawa telewizorów");
    return "Naprawa telewizorów";
  } else {
    console.log(text, "inne");

    return "Naprawa pralek, zmywarek, ekspresów do kawy oraz telewizorów";
  };
};
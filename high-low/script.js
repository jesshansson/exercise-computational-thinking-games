const secretNumber = Math.floor(Math.random() * 100) + 1;

console.log(`Secret number: ${secretNumber}`);
let guess = parseInt(prompt("Välj ett nummer mellan 1-100"));

if (isNaN(guess)) {
  console.log("Ogiltig gissning, försök igen genom att uppdatera sidan.");
} else {
  console.log(`Guess: ${guess}`);

  if (guess < secretNumber) {
    console.log("För lågt! Försök igen genom att uppdatera sidan.");
  } else if (guess > secretNumber) {
    console.log("För högt! Försök igen genom att uppdatera sidan.");
  } else {
    console.log("Yay! Rätt gissat!");
  }
}

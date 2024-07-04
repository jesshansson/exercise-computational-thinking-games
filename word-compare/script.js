// Fråga användaren om två ord
let word1 = prompt("Ange det första ordet:");
let word2 = prompt("Ange det andra ordet:");

console.log(`Första ordet: ${word1}`);
console.log(`Andra ordet: ${word2}`);

// Bestäm längden på det kortare ordet.
// Säkerställer att loopen bara körs upp till längden på det kortare ordet för att undvika att försöka jämföra utanför arrayens gränser.
let minLength = Math.min(word1.length, word2.length);

let matchCount = 0;

// Jämför bokstäverna på varje plats upp till längden på det kortare ordet. Om bokstäverna på samma plats i båda orden är lika, öka matchCount.
for (let i = 0; i < minLength; i++) {
  if (word1[i] === word2[i]) {
    matchCount++;
  }
}

// Visa resultatet
console.log(`Antal matchande bokstäver på samma plats: ${matchCount}`);

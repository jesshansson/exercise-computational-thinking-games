let knockOutNmbr = parseInt(prompt("Choose a knock out number, 6, 7, 8 or 9"));
let pointsToWin = parseInt(prompt("Please enter desired target points to win"));
let currentPoints = 0;
let totalThrows = 0;
let dice;

console.log(`Knock out number: ${knockOutNmbr}`);
console.log(`Points to win: ${pointsToWin}`);

while (currentPoints < pointsToWin) {
  let dice1 = Math.floor(Math.random() * 6 + 1);
  let dice2 = Math.floor(Math.random() * 6 + 1);
  let sum = dice1 + dice2;
  totalThrows++;

  console.log(`Throw ${totalThrows}: Dice 1 = ${dice1}, Dice 2 = ${dice2}, Sum = ${sum}`);

  if (sum === knockOutNmbr) {
    console.log(`Knock out! You rolled the knock out number ${knockOutNmbr}`);
    currentPoints -= 1;
  } else {
    currentPoints += sum;
  }

  console.log(`Current Points: ${currentPoints}`);
}

console.log(`Congratulations! You reached the target score of ${pointsToWin} in ${totalThrows} throws!`);

/* 
Låt KnockOutNumber = 6,7,8 eller 9
Låt PointsToWin = ?
Låt CurrentPoints = 0

Medan CurrentPoints < PointsToWin   
    Låt TärningsKast = Slumpat 1-6 + Slumpat 1-6
    Är TärningsKast = KnockOutNumber?
        CurrentPoints -= TärningsKast
    Annars
        CurrentPoints += TärningsKast

Fira Vinst!*/

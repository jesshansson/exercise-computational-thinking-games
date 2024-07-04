let player1Score = 0;
let player2Score = 0;
const winningScore = 3;

// Main game loop
while (player1Score < winningScore && player2Score < winningScore) {
  
  // Choosing gestures for both players
  const gestures = ["sten", "sax", "påse"];
  const player1Gesture = gestures[Math.floor(Math.random() * gestures.length)];
  const player2Gesture = gestures[Math.floor(Math.random() * gestures.length)];
  console.log(`Spelare 2 väljer ${player1Gesture}`);
  console.log(`Spelare 2 väljer ${player2Gesture}`);

  // Determining the winner of the round
  if (player1Gesture === player2Gesture) {
    console.log("Rundan blev oavgjord!");
  } else if (
    (player1Gesture === "sten" && player2Gesture === "sax") ||
    (player1Gesture === "sax" && player2Gesture === "påse") ||
    (player1Gesture === "påse" && player2Gesture === "sten")
  ) {
    player1Score++;
    console.log("Spelare 1 vinner denna runda!");
  } else {
    player2Score++;
    console.log("Spelare 2 vinner denna runda!");
  }

  console.log(`Current score - Player 1: ${player1Score}, Player 2: ${player2Score}`);
}

// Announcing the winner
if (player1Score === winningScore) {
  console.log("Spelare 1 vinner! Grattis!");
} else {
  console.log("Spelare 2 vinner! Grattis!");
}

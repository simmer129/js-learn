const choices = ["rock", "paper", "scissors"];

const playerChoice = prompt("Choose rock, paper, scissors");

if (playerChoice) {
  console.log(`You chooes: ${playerChoice}`);
} else {
  console.log("You cheated!");
}

const randomNumber = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNumber];
console.log(`Computer chooses: ${computerChoice}`);

if (playerChoice === computerChoice) {
  console.log("It's a tie.");
} else if (playerChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log("You win.");
  } else {
    console.log("You lose!");
  }
} else if (playerChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("You win.");
  } else {
    console.log("You lose!");
  }
} else {
  if (computerChoice === "paper") {
    console.log("You win.");
  } else {
    console.log("You lose");
  }
}

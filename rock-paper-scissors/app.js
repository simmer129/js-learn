const choices = ["rock", "paper", "scissors"];

const checkWinner = (player, computer) => {
  if (player === computer) {
    console.log("It's a tie.");
  } else if (player === "rock") {
    if (computer === "scissors") {
      console.log("You win.");
    } else {
      console.log("You lose!");
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      console.log("You win.");
    } else {
      console.log("You lose!");
    }
  } else {
    if (computer === "paper") {
      console.log("You win.");
    } else {
      console.log("You lose");
    }
  }
};

const playerChoice = prompt("Choose rock, paper, scissors");

if (playerChoice) {
  console.log(`You chooes: ${playerChoice}`);
} else {
  console.log("You cheated!");
}

const randomNumber = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNumber];
console.log(`Computer chooses: ${computerChoice}`);

checkWinner(playerChoice, computerChoice);
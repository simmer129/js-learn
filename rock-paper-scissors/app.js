const choices = ["rock", "paper", "scissors"];

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "It's a tie.";
  } else if (player === "rock") {
    if (computer === "scissors") {
      return "Player win.";
    } else {
      return "computer win!";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "Player win.";
    } else {
      return "computer win!";
    }
  } else {
    if (computer === "paper") {
      return "Player win.";
    } else {
      return "computer win!";
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

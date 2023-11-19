const choices = ["rock", "paper", "scissors"];

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "It's a tie.";
  } else if (player === "rock") {
    return computer === "scissors" ? "Player win" : "computer win";
  } else if (player === "paper") {
    return computer === "rock" ? "Player win" : "computer win";
  } else {
    return computer === "paper" ? "Player win" : "computer win";
  }
};

const play = () => {
  const playerChoice = prompt("Choose rock, paper, scissors");

  if (playerChoice) {
    console.log(`You chooes: ${playerChoice}`);
  } else {
    console.log("You cheated!");
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`Computer chooses: ${computerChoice}`);

  const result = checkWinner(playerChoice, computerChoice);
  console.log(result);
};
play();


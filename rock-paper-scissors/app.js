const choices = ["rock", "paper", "scissors"];

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "dorw";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You win.");
  } else if (result === "computer") {
    console.log("You lose!");
  } else {
    console.log("It's a tie.");
  }
};

const play = () => {
  const playerChoice = prompt("Choose rock, paper, scissors");

  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`You chooes: ${playerChoice}`);
  } else {
    console.log("You cheated!");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`Computer chooses: ${computerChoice}`);

  const res = checkWinner(playerChoice, computerChoice);
  showResult(res);
};
play();

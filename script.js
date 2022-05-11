const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

const userPlay = (playerChoice) => {
  //Check if player's choice is a numerical value within the required range.
  //If it is, return the corresponding string value.
  //If it is not, handle playerChoice as string.
  if (!isNaN(playerChoice)) return options.at(Math.trunc(+playerChoice));

  //Try to find index of playerChoice in options array.
  //If it is found, return the corresponding string value.
  //If it is not, return undefined.
  let optionIndex = options.indexOf(playerChoice.toLowerCase());
  optionIndex !== -1 ? options.at(optionIndex) : undefined;
};

const playRound = (playerChoice, computerChoice) => {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") return "It's a tie!";
      if (computerChoice === "paper") return "You lose this round.";
      return "You win this round!";
    case "paper":
      if (computerChoice === "rock") return "You win this round!";
      if (computerChoice === "paper") return "It's a tie!";
      return "You lose this round.";
    case "scissors":
      if (computerChoice === "rock") return "You lose this round.";
      if (computerChoice === "paper") return "You win this round!";
      return "It's a tie!";
    default:
      return "Invalid input, you lose this round.";
  }
};

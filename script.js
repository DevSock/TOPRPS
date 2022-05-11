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

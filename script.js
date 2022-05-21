const options = ["rock", "paper", "scissors"];
const outcomeText = document.querySelector(".outcome-text");
const weaponsList = document.querySelectorAll(".weapon");
const submitButton = document.querySelector(".submit");
let selection = null;

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
  return optionIndex !== -1 ? options.at(optionIndex) : undefined;
};

const playRound = (playerChoice, computerChoice) => {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") return "It's a tie! Rock ties rock.";
      if (computerChoice === "paper")
        return "You lose this round. Comp chose paper.";
      return "You win this round! Comp chose scissors.";
    case "paper":
      if (computerChoice === "rock")
        return "You win this round! Comp chose rock.";
      if (computerChoice === "paper") return "It's a tie! Paper ties paper.";
      return "You lose this round. Comp chose scissors.";
    case "scissors":
      if (computerChoice === "rock")
        return "You lose this round. Comp chose rock.";
      if (computerChoice === "paper")
        return "You win this round! Comp chose paper.";
      return "It's a tie! Comp chose scissors.";
    default:
      return "Invalid input, you lose this round. Comp chose rock.";
  }
};

const game = (rounds) => {
  while (rounds > 0) {
    const playerChoice = userPlay(
      prompt("Choose rock (0), paper (1) or scissors (2).")
    );
    const computerChoice = computerPlay();
    alert(playRound(playerChoice, computerChoice));
    rounds--;
  }
};

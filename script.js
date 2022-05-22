const options = ["rock", "paper", "scissors"];
const outcomeText = document.querySelector(".outcome-text");
const weaponsList = document.querySelectorAll(".weapon");
const submitButton = document.querySelector(".submit");
let selection = null;
let win = null;
let playerScore = 0;
let compScore = 0;

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
      if (computerChoice === "paper") {
        win = false;
        compScore++;
        return "You lose this round. Comp chose paper.";
      }
      win = true;
      playerScore++;
      return "You win this round! Comp chose scissors.";
    case "paper":
      if (computerChoice === "paper") return "It's a tie! Paper ties paper.";
      if (computerChoice === "scissors") {
        win = false;
        compScore++;
        return "You lose this round. Comp chose scissors.";
      }
      playerScore++;
      win = true;
      return "You win this round! Comp chose rock.";
    case "scissors":
      if (computerChoice === "scissors")
        return "It's a tie! Comp chose scissors.";
      if (computerChoice === "rock") {
        win = false;
        compScore++;
        return "You lose this round. Comp chose rock.";
      }
      playerScore++;
      win = true;
      return "You win this round! Comp chose paper.";
    default:
      compScore++;
      win = false;
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

const activate = (weapon) => {
  if (weapon.classList.contains("active")) return;
  if (!submitButton.classList.contains("active-submit"))
    submitButton.classList.add("active-submit");

  weaponsList.forEach((weapon) => weapon.classList.remove("active"));
  weapon.classList.add("active");

  if (weapon.classList.contains("rock")) {
    selection = "rock";
  } else if (weapon.classList.contains("paper")) {
    selection = "paper";
  } else {
    selection = "scissors";
  }
};

weaponsList.forEach((weapon) =>
  weapon.addEventListener("click", (e) => {
    activate(e.target);
  })
);

submitButton.addEventListener("click", () => {
  if (!selection) return;
  const result = playRound(selection, computerPlay());
  outcomeText.textContent = result;
  weaponsList.forEach((weapon) => weapon.classList.remove("active"));
  submitButton.classList.remove("active-submit");
  selection = null;
});

const options = ["rock", "paper", "scissors"];
const outcomeText = document.querySelector(".outcome-text");
const weaponsList = document.querySelectorAll(".weapon");
const submitButton = document.querySelector(".submit");
let selection = null;
let win = null;
let playerHealth = 5;
let compHealth = 5;

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

const playRound = (playerChoice, computerChoice) => {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") return "It's a tie! Rock ties rock.";
      if (computerChoice === "paper") {
        win = false;
        compHealth--;
        return "You lose this round. Comp chose paper.";
      }
      win = true;
      playerHealth--;
      return "You win this round! Comp chose scissors.";
    case "paper":
      if (computerChoice === "paper") return "It's a tie! Paper ties paper.";
      if (computerChoice === "scissors") {
        win = false;
        compHealth--;
        return "You lose this round. Comp chose scissors.";
      }
      playerHealth--;
      win = true;
      return "You win this round! Comp chose rock.";
    case "scissors":
      if (computerChoice === "scissors")
        return "It's a tie! Comp chose scissors.";
      if (computerChoice === "rock") {
        win = false;
        compHealth--;
        return "You lose this round. Comp chose rock.";
      }
      playerHealth--;
      win = true;
      return "You win this round! Comp chose paper.";
    default:
      compHealth--;
      win = false;
      return "Invalid input, you lose this round. Comp chose rock.";
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

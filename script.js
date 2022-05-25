const options = ["Rock", "Paper", "Scissors"];
const outcomeText = document.querySelector(".outcome-text strong");
const weaponsList = document.querySelectorAll(".weapon");
const selections = document.querySelector(".selection");
const submitButton = document.querySelector(".submit");
const restartButton = document.querySelector(".restart");
const playerHearts = document.querySelectorAll(".lives-player .lives-heart");
const compHearts = document.querySelectorAll(".lives-comp .lives-heart");
const lives = document.querySelector(".lives");
let selection = null;
let playerHealth = 5;
let compHealth = 5;

const computerPlay = () => options[Math.floor(Math.random() * options.length)];
const isEnd = () => (playerHealth <= 0 || compHealth <= 0 ? true : false);

function playRound(playerChoice, computerChoice) {
  function mod(a, b) {
    const c = a % b;
    return c < 0 ? c + b : c;
  }
  const a = options.indexOf(playerChoice);
  const b = options.indexOf(computerChoice);

  if (a == b) {
    handleOutcome(null, null, playerChoice, computerChoice);
    return;
  }
  if (mod(a - b, options.length) < options.length / 2) {
    handleOutcome(true, "comp", playerChoice, computerChoice);
    return;
  } else {
    handleOutcome(false, "player", playerChoice, computerChoice);
  }
}

function doEnd() {
  if (playerHealth <= 0) {
    outcomeText.textContent = "Game over man! You've lost all your lives!";
  } else {
    outcomeText.textContent = "You won! Big brain plays for days!";
  }

  lives.style.display = "none";
  submitButton.style.display = "none";
  selections.style.display = "none";
  restartButton.style.display = "block";
}

function doRestart() {
  playerHealth = 5;
  compHealth = 5;
  submitButton.classList.remove("active-submit");
  weaponsList.forEach((weapon) => weapon.classList.remove("active"));
  playerHearts.forEach((heart) => heart.classList.remove("dead"));
  compHearts.forEach((heart) => heart.classList.remove("dead"));
  lives.style.display = "flex";
  submitButton.style.display = "block";
  selections.style.display = "flex";
  restartButton.style.display = "none";
  outcomeText.textContent = "- Please Select Your Weapon -";
}

function handleOutcome(roundWin, player, playerChoice, computerChoice) {
  if (player) doDamage(player);
  assignOutcome(roundWin, playerChoice, computerChoice);
}

function doDamage(player) {
  if (player === "player") {
    playerHearts.item(playerHealth - 1).classList.add("dead");
    playerHealth--;
  } else {
    compHearts.item(compHealth - 1).classList.add("dead");
    compHealth--;
  }
}

function assignOutcome(roundWin, playerChoice, computerChoice) {
  if (isEnd()) {
    doEnd();
    return;
  }

  if (roundWin === null) {
    outcomeText.textContent = `Tie game! ${playerChoice} ties ${computerChoice}`;
  } else if (roundWin) {
    outcomeText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    outcomeText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

function activate(weapon) {
  if (weapon.classList.contains("active")) return;
  if (!submitButton.classList.contains("active-submit"))
    submitButton.classList.add("active-submit");

  weaponsList.forEach((weapon) => weapon.classList.remove("active"));
  weapon.classList.add("active");

  if (weapon.classList.contains("rock")) {
    selection = "Rock";
  } else if (weapon.classList.contains("paper")) {
    selection = "Paper";
  } else {
    selection = "Scissors";
  }
}

weaponsList.forEach((weapon) =>
  weapon.addEventListener("click", (e) => {
    activate(e.target);
  })
);

submitButton.addEventListener("click", () => {
  if (!selection) return;
  playRound(selection, computerPlay());
  weaponsList.forEach((weapon) => weapon.classList.remove("active"));
  submitButton.classList.remove("active-submit");
  selection = null;
});

restartButton.addEventListener("click", doRestart);

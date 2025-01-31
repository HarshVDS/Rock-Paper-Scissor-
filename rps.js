// rps.js

// Game variables
let userScore = 0;
let compScore = 0;

// DOM elements
const userScoreElement = document.getElementById("userscore");
const compScoreElement = document.getElementById("compscore");
const resultMessageElement = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");

// Choices array
const choicesArray = ["rock", "paper", "scissors"];

// Event listeners for choices
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const compChoice = getCompChoice();
    const result = getResult(userChoice, compChoice);
    updateScores(result);
    showResult(result, userChoice, compChoice);
  });
});

// Get computer's choice
function getCompChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choicesArray[randomIndex];
}

// Determine the winner
function getResult(userChoice, compChoice) {
  if (userChoice === compChoice) return "draw";
  if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
}

// Update scores
function updateScores(result) {
  if (result === "win") {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (result === "lose") {
    compScore++;
    compScoreElement.textContent = compScore;
  }
}

// Show result
function showResult(result, userChoice, compChoice) {
  if (result === "win") {
    resultMessageElement.textContent = `You win! ${capitalize(userChoice)} beats ${compChoice}.`;
  } else if (result === "lose") {
    resultMessageElement.textContent = `You lose! ${capitalize(compChoice)} beats ${userChoice}.`;
  } else {
    resultMessageElement.textContent = `It's a draw! You both chose ${userChoice}.`;
  }
}

// Capitalize first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let userValue = null,
  computerValue = null,
  result = null;
const rockPaperScissors = ["rock", "paper", "scissors"];
const colors = ["#0074B6", "#BD00FF", "#FFA943"];
const images = ["scissor.png", "paper.png", "rock.png"];
const rpsTriangle = document.querySelector(".rps-triangle");
const deciderDiv = document.querySelector(".decider");
const title = document.querySelector(".heading1");
const semiTitle = document.querySelector(".heading2");
const rulesBtn = document.querySelector(".rules-btn");
const rulesPopup = document.querySelector(".rules-popup");
const nextBtn = document.querySelector(".next-btn");
const scoreDiv = document.querySelector(".score");
const hurray = document.querySelector(".hurray-container");
const player1Normal = document.querySelector(".player1-normal");
const player1Winner = document.querySelector(".player1-winner");
const player1Winner1 = document.querySelector(".player1-winner-1");
const player2Normal = document.querySelector(".player2-normal");
const player2Winner = document.querySelector(".player2-winner");
const player2Winner1 = document.querySelector(".player2-winner-1");
const computerScore = document.querySelector(".computer-score");
const yourScore = document.querySelector(".your-score");

const scores = [0, 0];
function togglePopup(flag = true) {
  rulesPopup.style.display = flag ? "block" : "none";
}

function selectionHandler(key) {
  if (userValue !== null) {
    return;
  }
  userValue = key;
  computerValue = Math.floor(Math.random() * 3);
  if (userValue === computerValue) {
    result = 2;
    title.textContent = "TIE UP";
    semiTitle.textContent = "";
    
    player1Winner.style.display = "none";
    player2Winner.style.display = "none";
    player1Normal.style.display = "block";
    player2Normal.style.display = "block";
    player1Normal.style.border = `1rem solid ${colors[userValue]}`;
    player1Normal.style.backgroundImage = `url(${images[userValue]})`;
    player2Normal.style.border = `1rem solid ${colors[computerValue]}`;
    player2Normal.style.backgroundImage = `url(${images[computerValue]})`;
  } else {
    if (
      (userValue === 0 && computerValue === 2) ||
      (userValue === 1 && computerValue === 0) ||
      (userValue === 2 && computerValue === 1)
    ) {
      result = 0;
      player1Winner.style.display = "flex";
      player2Winner.style.display = "none";
      player1Normal.style.display = "none";
      player2Normal.style.display = "block";
      player2Normal.style.border = `1rem solid ${colors[computerValue]}`;
      player2Normal.style.backgroundImage = `url(${images[computerValue]})`;
      player1Winner1.style.border = `1rem solid ${colors[userValue]}`;
      player1Winner1.style.backgroundImage = `url(${images[userValue]})`;
      title.textContent = "YOU WIN";
      scores[0]++;
      localStorage.setItem("scores-rps", scores.toString());
      rulesBtn.style.right = "10%";
      nextBtn.style.display = "block";
      rulesPopup.style.right = "10%";
    } else {
      title.textContent = "YOU LOST";
      result = 1;
      scores[1]++;
      player1Winner.style.display = "none";
      player2Winner.style.display = "flex";
      player1Normal.style.display = "block";
      player2Normal.style.display = "none";
      player1Normal.style.border = `1rem solid ${colors[userValue]}`;
      player1Normal.style.backgroundImage = `url(${images[userValue]})`;
      player2Winner1.style.border = `1rem solid ${colors[computerValue]}`;
      player2Winner1.style.backgroundImage = `url(${images[computerValue]})`;
      
      localStorage.setItem("scores-rps", scores.toString());
    }
    semiTitle.textContent = "AGAINST PC";
  }
  yourScore.textContent = scores[0];
  computerScore.textContent = scores[1];
  rpsTriangle.style.display = "none";
  deciderDiv.style.display = "flex";
}
function reset() {
  rpsTriangle.style.display = "block";
  deciderDiv.style.display = "none";
  rulesBtn.style.right = "2%";
  nextBtn.style.display = "none";
  hurray.style.display = "none";
  scoreDiv.style.display = "flex";
  rulesPopup.style.right = "2%";
  userValue = null;
  computerValue = null;
  result = null;
}
function next() {
  scoreDiv.style.display = "none";
  deciderDiv.style.display = "none";
  rulesBtn.style.right = "2%";
  nextBtn.style.display = "none";
  rulesPopup.style.right = "2%";
  hurray.style.display = "flex";
}
document.addEventListener("DOMContentLoaded", function () {
  let localScores = localStorage.getItem("scores-rps");
  if (localScores) {
    let splitArray = localScores.split(",");
    scores[0] = splitArray[0];
    scores[1] = splitArray[1];
  }
  yourScore.textContent = scores[0];
  computerScore.textContent = scores[1];
});

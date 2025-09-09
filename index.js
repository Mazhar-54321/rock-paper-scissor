let userValue = null,
  computerValue = null,
  result = null;
const rockPaperScissors = ["rock", "paper", "scissors"];
const colors = ["#0074B6","#BD00FF","#FFA943"];
const images = ["scissor.png","paper.png","rock.png"]
const rpsTriangle = document.querySelector(".rps-triangle");
const decider = document.querySelector(".decider");
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const player1Normal = document.querySelector(".player1-normal");
const player1Winner = document.querySelector(".player1-winner");
const player1Winner1 = document.querySelector(".player1-winner-1");
const player2Normal = document.querySelector(".player2-normal");
const player2Winner = document.querySelector(".player2-winner");
const player2Winner1 = document.querySelector(".player2-winner-1");
const computerScore =document.querySelector(".computer-score");
const yourScore =document.querySelector(".your-score");

const scores = [0,0]

function showPopup() {
  const rulesPopup = document.getElementsByClassName("rules-popup")[0];
  console.log(rulesPopup.style);
  const display = rulesPopup.style.display;
  if (display === "" || display === "none") {
    rulesPopup.style.display = "block";
  }
}
function hidePopup() {
  const rulesPopup = document.getElementsByClassName("rules-popup")[0];
  const display = rulesPopup.style.display;
  if (display === "block") {
    rulesPopup.style.display = "none";
  }
}
function selectionHandler(key) {
  if (userValue !== null) {
    return;
  }
  userValue = key;
  computerValue = Math.floor(Math.random() * 3);
  if (userValue === computerValue) {
    result = 2;
    heading1.textContent = "TIE UP";
    heading2.textContent = "";
    player1Winner.style.display = "none";
    player2Winner.style.display = "none";
    player1Normal.style.display = "block";
    player2Normal.style.display = "block";
    /*border: 1rem solid #0074b6;
            background-image: url('scissor.png'); */
    player1Normal.style.border = `1rem solid ${colors[userValue]}`
    player1Normal.style.backgroundImage = `url(${images[userValue]})`
    player2Normal.style.border = `1rem solid ${colors[computerValue]}`
    player2Normal.style.backgroundImage = `url(${images[computerValue]})`
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
      player2Normal.style.border = `1rem solid ${colors[computerValue]}`
      player2Normal.style.backgroundImage = `url(${images[computerValue]})`
      player1Winner1.style.border = `1rem solid ${colors[userValue]}`
      player1Winner1.style.backgroundImage = `url(${images[userValue]})`
      heading1.textContent = "YOU WIN";
      scores[0]++;
      localStorage.setItem("scores-rps",scores.toString())
    } else {
      heading1.textContent = "YOU LOST";
      result = 1;
      player1Winner.style.display = "none";
      player2Winner.style.display = "flex";
      player1Normal.style.display = "block";
      player2Normal.style.display = "none";
       player1Normal.style.border = `1rem solid ${colors[userValue]}`
      player1Normal.style.backgroundImage = `url(${images[userValue]})`
      player2Winner1.style.border = `1rem solid ${colors[computerValue]}`
      player2Winner1.style.backgroundImage = `url(${images[computerValue]})`;
      scores[1]++;
     localStorage.setItem("scores-rps",scores.toString())

    }
    heading2.textContent = "AGAINST PC";
  }
  yourScore.textContent=scores[0];
  computerScore.textContent=scores[1];
  rpsTriangle.style.display = "none";
  decider.style.display = "flex";
}
function reset(){
    rpsTriangle.style.display = "block";
    decider.style.display = "none";
    userValue = null;
  computerValue = null;
  result = null;
}
document.addEventListener("DOMContentLoaded",function(){
    console.log(localStorage.getItem("scores-rps"));
    let localScores = localStorage.getItem("scores-rps");
    if(localScores){
        let splitArray = localScores.split(",");
        console.log(splitArray)
        scores[0]=(splitArray[0]);
        scores[1]=(splitArray[1]);
    }
    console.log(scores)
    yourScore.textContent=scores[0];
  computerScore.textContent=scores[1];

})

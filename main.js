const playerText = document.querySelector('.player-text');
const computerText = document.querySelector('.computer-text');
const resultText = document.querySelector('.result-text');

const buttons = document.querySelectorAll('.button-class');

const resultId = document.getElementById("result-id");

let player;
let computer;
let result;

buttons.forEach(button => button.addEventListener("click", () => {
       
    player  = button.textContent;
    computerFn(); 
    playerText.textContent = `Player : ${player}`;
    computerText.textContent = `Computer : ${computer}`; // Use ${} for interpolation
    resultText.textContent = `Result : ${winnerFuctionF()}`; 
}));


/*function changeHeadlineStyle() {
    resultId.style.color = "red";
    resultId.style.fontWeight = "bold";
}

if ( result == "You Lose!"){
     changeHeadlineStyle();
 } 
 */

function computerFn(){
     
    const randomNum = Math.floor((Math.random() * 3 ) + 1);
    switch(randomNum){
        case  1 :
           computer = 'Rock';
           break;
        case  2:
           computer  = 'Paper';
           break;
        case 3 :
           computer  = 'Scissor';
           break;
    }
}

function winnerFuctionF(){
     if (player == computer)
      return "Draw!";
     else if (computer == "Rock")
      return (player == "Paper" ) ? "You Win!"  : "You Lose! ";
     else if (computer == "Paper")
     return (player == "Scissor" ) ? "You Win!" : "You Lose!";
     else if (computer == "Scissor")
     return (player == "Rock" ) ? "You Win!" : "You Lose!";
}

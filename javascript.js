const choiceBtns = document.querySelectorAll(".choiceBtns");
const playerText = document.querySelector(".player");
const computerText = document.querySelector(".computer");
const resultText = document.querySelector(".results")
let player;
let computer;
let result;



choiceBtns.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent;
    computerChoice()
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText = playRound();
}))



function computerChoice(){

    let choices = ["ROCK", "PAPER", "SCISSORS"]
    const computerChoice = Math.floor(Math.random() * 3)

    return choices[computerChoice];
}

function playRound(){
    if(player === computer){
        return "Its a draw!"
    }
    else if (
        (player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")
    ){
        return "You Win!";
    }
    else{
        return "You Lose!"
    }
}
 
/*
function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock Paper or Scissors?");
        const computerSelection = computerChoice(); 
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
*/

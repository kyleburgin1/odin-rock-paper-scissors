const playerText = document.querySelectorAll(".player");
const computerText = document.querySelectorAll(".computer");
const resultText = document.querySelectorAll(".result");
const gameBtns = document.querySelectorAll(".button");
let player;
let computer;
let result;

gameBtns.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent
    computerChoice()
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`
    resultText.textContent = playRound();
    
}))



function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice){
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "SCISSORS"
            break;
        case 3:
            computer = "PAPER"
            break;           
    }
}

console.log(getComputerChoice())

function playRound(){
    if(player == computer){
        return "Draw!"
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if(computer == "paper"){
        return(player == "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ? "You Win!" : "You Lose!";
    }
}
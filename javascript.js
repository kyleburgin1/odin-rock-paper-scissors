const choiceBtns = document.querySelectorAll(".choiceBtns");
const playerText = document.querySelector(".player")
const computerText = document.querySelector(".computer")
const resultText = document.querySelector(".result")
let computer;
let player


choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerChoice();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}))

function computerChoice(){

    const computerIndex = Math.floor(Math.random() * 3)
    
    switch(computerIndex){
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
        computer = "SCISSORS" 
        break;

    }
}


function checkWinner(){
    if( player === computer){
        return "It's a draw!";
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ? "You Win!" : "You Lose!";
    }
}

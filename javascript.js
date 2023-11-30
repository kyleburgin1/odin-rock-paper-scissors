function computerChoice(){

    let choices = ["ROCK", "PAPER", "SCISSORS"]
    const computerChoice = Math.floor(Math.random() * 3)

    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if(!["ROCK", "PAPER", "SCISSORS"].includes(playerSelection)){
        return "Invalid choice";
    }

    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if(playerSelection === computerSelection){
        return "Its a draw!"
    }
    else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
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
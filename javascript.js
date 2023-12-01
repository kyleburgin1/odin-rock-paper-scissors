const choiceBtns = document.querySelectorAll(".choiceBtns");
const playerText = document.querySelector(".player")
const computerText = document.querySelector(".computer")
const resultText = document.querySelector(".results")
let result;
let computer;
let player


choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = playerText;
    computer = computerChoice();


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


function computerChoice(){

    let choices = ["ROCK", "PAPER", "SCISSORS"]
    const computerChoice = Math.floor(Math.random() * 3)

    return choices[computerChoice];
}

console.log(computerChoice())
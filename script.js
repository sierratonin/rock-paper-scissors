
playGame();




function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);

    if (random == 0){
        console.log("Computer picks rock.");
        return "rock";
    } else if (random == 1){
        console.log("Computer picks paper.");
        return "paper";
    } else {
        console.log("Computer picks scissors.");
        return "scissors";}
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie!";
    } else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock!";
        } else {
            return "You Win! Rock beats Scissors!";
        }
    } else if (playerSelection == "paper"){
            if (computerSelection == "rock"){
                return "You Win! Paper beats Rock!";
            } else {
                return "You Lose! Scissors beats Paper!";
            }
    }else {
        if (computerSelection == "paper"){
            return "You Win! Scissors beats Paper!";
        } else {
            return "You Lose! Rock beats Scissors!"
        }
    }
}

function playGame(){
    console.log((playRound((
        prompt("Pick Rock, Paper, or Scissors!")).toLowerCase(), 
        getComputerChoice())));
    console.log((playRound((
        prompt("Pick Rock, Paper, or Scissors!")).toLowerCase(), 
        getComputerChoice())));
    console.log((playRound((
        prompt("Pick Rock, Paper, or Scissors!")).toLowerCase(), 
        getComputerChoice())));
    console.log((playRound((
        prompt("Pick Rock, Paper, or Scissors!")).toLowerCase(), 
        getComputerChoice())));
    console.log((playRound((
        prompt("Pick Rock, Paper, or Scissors!")).toLowerCase(), 
        getComputerChoice())));
}
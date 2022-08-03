
// Creating a function that would generate random choice from the computer

function getComputerChoice(){
    const myComputerChoice= ["Rock","Paper","Scissors"];
    let randomElement = myComputerChoice[Math.floor(Math.random() * myComputerChoice.length)];
    return randomElement;
}

// Creating a function that would play a round of RPS
function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return null;
    } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase === "paper"){
        return false
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase === "scissors"){
        return true
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase === "rock"){
        return true
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase === "scissors"){
        return false
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase === "paper"){
        return "You win! Scissors win Paper!"
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase === "rock"){
        return true
    }else{
        return null
    }
} 

/*Pseudocode 
Player inputs choice of : Rock paper scissors
Call the function to get the computer's choice (done)
Call the function to compare Player's choice and Computer's choice (done)
Repeat 5 rounds
If draw , no score added to either party
If player wins , player score +1
If Computer wins , computer score + 1 
Compare results to see who is the winner */

function game(){
    let computerSelection, result;
    let playerScore = 0;
    let computerScore = 0;
    const playerSelection = ["rock","paper","scissors"];
    for (let i = 0; i<5; i++){
        playerSelection = prompt("Choose : Rock, Paper or Scissors!").toLowerCase();
        computerSelection = getComputerChoice();

        
        //Making sure player's input is valid
        while(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors"){
            playerSelection = prompt("Please make a valid choice!");
        }
        result = playRound(playerSelection, computerSelection);
        if(result === true){
            playerScore +=1
        }else if(result === false){
            computerScore +=1
        }
        if(playerScore > computerScore){
            console.log("Player wins!")
        }else if(computerScore > playerScore){
            console.log("Computer wins!")
        }else if(computerScore === playerScore){
            console.log("Its a tie!")
        }
        
    }
}
game()
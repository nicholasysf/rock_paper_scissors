let playerSelection;
let computerSelection;

//Getting the whole element
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//Adding addEventListener to the whole element, in this case upon clicking
rockButton.addEventListener("click",function(e){
    let result = playRound(e.target.id);
    console.log(result);
});
paperButton.addEventListener("click",function(e){
    let result = playRound(e.target.id);
    console.log(result);
});
scissorsButton.addEventListener("click",function(e){
    let result = playRound(e.target.id);
    console.log(result);
});
function getComputerChoice(){
    const myComputerChoice= ["rock","paper","scissors"];
    let randomElement = myComputerChoice[Math.floor(Math.random() * myComputerChoice.length)];
    return randomElement;
}

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    if(playerSelection == computerSelection){
        return null;
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        return false;
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return true;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return true;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return false;
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return true;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return true;
    }else{
        return null;
    }

} 
/*function game(){


    
    for (let i = 0; i<5; i++){
        playerSelection = prompt("Choose : Rock, Paper or Scissors!");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        

        //Print out player's choice and comp's choice 
        console.log(`Player's choice is ${playerSelection} and Computer's choice is ${computerSelection}.`);

       result = playRound(playerSelection, computerSelection);
       if(result === true){
            playerScore +=1;
        }else if(result === false){
            computerScore +=1;
        }
        console.log(`The current score is Player:${playerScore} Computer :${computerScore}`);
    }

    //Compare results 
    if(playerScore > computerScore){
        console.log("Player wins!");
    }else if(computerScore > playerScore){
        console.log("Computer wins!");
    }else{
        console.log("Its a draw!")
    }

}

game()*/

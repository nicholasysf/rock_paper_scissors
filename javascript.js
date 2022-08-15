let playerSelection;
let computerSelection;
let gameRound = 0;
let computerScore = 0;
let playerScore = 0;
let result;

//Getting the whole element
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//Adding addEventListener to the whole element, in this case upon clicking
rockButton.addEventListener("click",function(e){
    result = playRound(e.target.id);
    playerSelection = e.target.id;
    gameRound++;
    game();
});
paperButton.addEventListener("click",function(e){
    result = playRound(e.target.id);
    playerSelection = e.target.id;
    gameRound++;
    game();
});
scissorsButton.addEventListener("click",function(e){
    result = playRound(e.target.id);
    playerSelection = e.target.id;
    gameRound++;
    game();
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
function game(){
    if(gameRound <6){
        document.getElementById("sentence1").textContent =`Player selection is ${playerSelection}, and Computer selection is ${computerSelection}`
        if(result === true){
            playerScore +=1;
        }else if(result === false){
            computerScore +=1;
        }
        document.getElementById("sentence2").textContent = `The current score is Player : ${playerScore} Computer : ${computerScore}`; 
    }
    if(gameRound == 5){
        document.getElementById("sentence3").textContent = `Game over! Refresh browser to play again!`
    }

}




// Creating a function that would generate random choice from the computer

function getComputerChoice(){
    const myComputerChoice= ["Rock","Paper","Scissors"];
    let randomElement = myComputerChoice[Math.floor(Math.random() * myComputerChoice.length)];
    console.log(randomElement);
}

getComputerChoice();
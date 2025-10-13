let npcPick = "";
let playerPick;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    if (choice == 0){
        return npcPick = "Rock";   
    } else if ( choice == 1){
        return npcPick = "Paper";
    } else {
        return npcPick = "Scissors";
    }
};

function getPlayerChoice(){
    let playerChoice = prompt("Pick Rock, Paper or Scissors!").toLowerCase();
    //playerChoice = playerChoice.toLowerCase();
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("Thats not valid. Please enter Rock, Paper or Scissors!")
        getPlayerChoice();
    }
};
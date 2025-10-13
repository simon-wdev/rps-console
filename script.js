let npcPick = "";
let playerPick;

//Computer choice gets picked based on random picked numbers (0, 1, 2)
//0 == Rock, 1 == Paper, 2 == Scissors
// The choice will be stored global in "npcPick"
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

//Player can pick between Rock Paper, Scissors and has to type it into the prompt.
//If player choice is written wrong he will get an error alert to enter choice again
//Everything is transformed into lower case, so it is only important to write words correctly
function getPlayerChoice(){
    let playerChoice = prompt("Pick Rock, Paper or Scissors!").toLowerCase();
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("Thats not valid. Please enter Rock, Paper or Scissors!")
        getPlayerChoice();
    }
};
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
}
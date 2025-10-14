let npcPick = getComputerChoice();
let playerPick;
let playerScore = 0;
let npcScore = 0;

//Computer choice gets picked based on random picked numbers (0, 1, 2)
//0 == Rock, 1 == Paper, 2 == Scissors
// The choice will be stored global in "npcPick"
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    if (choice == 0){
        return "rock";   
    } else if ( choice == 1){
        return "paper";
    } else {
        return "scissors";
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
    return playerPick = playerChoice;
};
//Logic for a single round, two equals are a tie, rock beats scissors etc. and vice versa
//Function returns the winner score at the end of each statement
//If the round is a tie, no score will be returned
function playRound(npcPick, playerPick){
    if(playerPick === npcPick){
        console.log(`NPC picked ${npcPick}.`);
        console.log("Tie! Nobody wins!");
        return;
    }

    if(playerPick === "rock"){
        if(npcPick === "paper"){
            console.log(`NPC picked ${npcPick}.`);
            console.log("You lose! Paper beats rock.");
            return npcScore += 1;
         }else{
            console.log(`NPC picked ${npcPick}.`)
            console.log("You win! Rock beats scissors.");
            return playerScore += 1;
        } 
    }else if(playerPick === "paper"){
        if(npcPick === "scissors"){
            console.log(`NPC picked ${npcPick}.`)
            console.log("You lose! Scissors beat paper.");
            return npcScore += 1;
        }else{
            console.log(`NPC picked ${npcPick}.`)
            console.log("You win! Paper beats rock.");
            return playerScore += 1;
        }
    }else if(playerPick === "scissors"){
        if(npcPick == "rock"){
            console.log(`NPC picked ${npcPick}.`)
            console.log("You lose! Rock beats scissors");
            return npcScore += 1;
        }else{
            console.log(`NPC picked ${npcPick}.`)
            console.log("You win! Scissors beat paper!");
            return playerScore += 1;
        }
    }
}

getPlayerChoice();
console.log(playerPick)
playRound(npcPick, playerPick);
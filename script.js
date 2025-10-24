
let playerScore = 0;
let npcScore = 0;
let result = document.createElement("p");
let scoreRound = document.querySelector(".scoreRound");
let winnerDec = document.querySelector(".winnerDec");

const playerRock = document.querySelector(".btnRock");
const playerPaper = document.querySelector(".btnPaper");
const playerScissors = document.querySelector(".btnScissors");
const resBox = document.querySelector(".res");

playerRock.addEventListener("click", function(){
    playRound(getComputerChoice(), "rock");
    getScore();
    getWinner();
});

playerPaper.addEventListener("click", function(){
    playRound(getComputerChoice(), "paper");
    getScore();
    getWinner();
});

playerScissors.addEventListener("click", function(){
    playRound(getComputerChoice(), "scissors");
    getScore();
    getWinner();
});


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

//Logic for a single round, two equals are a tie, rock beats scissors etc. and vice versa
//Function returns the winner score at the end of each statement
//If the round is a tie, no score will be returned
    function playRound(npcPick, playerPick){
        if(playerPick === npcPick){
            resBox.appendChild(result);
            result.textContent = `NPC picked ${npcPick}.\nTie! Nobody wins!`;
            winnerDec.textContent = "Tie. Try harder!";
            return;
        }

        if(playerPick === "rock"){
            if(npcPick === "paper"){
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou lose! Paper beats rock.`;
                winnerDec.textContent = "Ouch!"
                npcScore += 1;
            }else{
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou win! Rock beats scissors.`;
                winnerDec.textContent = "Yes, Baby!"
                playerScore += 1;
            } 
        }else if(playerPick === "paper"){
            if(npcPick === "scissors"){
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou lose! Scissors beats paper.`;
                winnerDec.textContent = "Damn!"
                npcScore += 1;
            }else{
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou win! Paper beats rock.`;
                winnerDec.textContent = "Not bad!";
                playerScore += 1;
            }
        }else if(playerPick === "scissors"){
            if(npcPick == "rock"){
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou lose! Rock beats scissors.`;
                winnerDec.textContent = "You suck!"
                npcScore += 1;
            }else{
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou win! Scissors beat paper.`;
                winnerDec.textContent = "Woohoo! You got this."
                playerScore += 1;
            }
        }
    }

    function getScore(){
        scoreRound.textContent = `Player ${playerScore} : ${npcScore} NPC`;
        }

    function getWinner(){
        if (playerScore == 5){
            winnerDec.textContent = "Player won the game!";
            playerScore = 0;
            npcScore = 0;
        }else if(npcScore == 5){
            winnerDec.textContent = "NPC wins! Git gud.";
            playerScore = 0;
            npcScore = 0;
        }else{
            return;
        }
    }




let playerScore = 0;
let npcScore = 0;
let result = document.createElement("p");
let scoreRound = document.querySelector(".scoreRound")

const playerRock = document.querySelector(".btnRock");
const playerPaper = document.querySelector(".btnPaper");
const playerScissors = document.querySelector(".btnScissors");
const resBox = document.querySelector(".res");

playerRock.addEventListener("click", function(){
    playRound(getComputerChoice(), "rock");
    getScore(playerScore, npcScore)
    getWinner(playerScore, npcScore)
});

playerPaper.addEventListener("click", function(){
    playRound(getComputerChoice(), "paper");
    getScore(playerScore, npcScore)
    getWinner(playerScore, npcScore)
});

playerScissors.addEventListener("click", function(){
    playRound(getComputerChoice(), "scissors");
    getScore(playerScore, npcScore)
    getWinner(playerScore, npcScore)
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
            return;
        }

        if(playerPick === "rock"){
            if(npcPick === "paper"){
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou lose! Paper beats rock.`;
                npcScore += 1;
            }else{
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou win! Rock beats scissors.`;
                playerScore += 1;
            } 
        }else if(playerPick === "paper"){
            if(npcPick === "scissors"){
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou lose! Scissors beats paper.`;
                npcScore += 1;
            }else{
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou win! Paper beats rock.`;
                playerScore += 1;
            }
        }else if(playerPick === "scissors"){
            if(npcPick == "rock"){
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou lose! Rock beats scissors.`;
                npcScore += 1;
            }else{
                resBox.appendChild(result);
                result.textContent = `NPC picked ${npcPick}.\nYou win! Scissors beat paper.`;
                playerScore += 1;
            }
        }
    }

    function getScore(playerScore, npcScore){
        scoreRound.textContent = `Player ${playerScore} : ${npcScore} NPC`;
        }

    function getWinner(playerScore, npcScore){
        if (playerScore == 3){
            scoreRound.textContent = "Player won the game!";
        }else if(npcScore == 3){
            scoreRound.textContent = "NPC wins! Git gud.";
        }else{
            return;
        }
    }

   //Score has to be reset after getWinner();
   //remove buttons => play again button, reset score
   //remove Child btn in get winner, append play again button
   //play again btn, reset all




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
});

playerPaper.addEventListener("click", function(){
    playRound(getComputerChoice(), "paper");
});

playerScissors.addEventListener("click", function(){
    playRound(getComputerChoice(), "scissors");
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


function playGame(){

for (let i = 1; i <= 5; i++){
    let round = i;
    let npcPick = getComputerChoice();
    let playerPick = getPlayerChoice();
    //Variables will be declared every loop, so choices will be called every iteration
    //let round is the current iteration, round gets logged every loop
    console.log(`We are now in Round: ${round}`);

    playRound(npcPick, playerPick);


   
    //Logs the current score at the end of every round
    console.log(`Current Score\nNPC ${npcScore} : ${playerScore} Player`)
    }

    //Declare a winner
    (playerScore < npcScore) ? `You lose! NPC ${npcScore} : ${playerScore} Player` : `You win! Player wins ${playerScore} : ${npcScore} `
}




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
                npcScore += 1;
            }else{
                console.log(`NPC picked ${npcPick}.`)
                console.log("You win! Rock beats scissors.");
                playerScore += 1;
            } 
        }else if(playerPick === "paper"){
            if(npcPick === "scissors"){
                console.log(`NPC picked ${npcPick}.`)
                console.log("You lose! Scissors beat paper.");
                npcScore += 1;
            }else{
                console.log(`NPC picked ${npcPick}.`)
                console.log("You win! Paper beats rock.");
                playerScore += 1;
            }
        }else if(playerPick === "scissors"){
            if(npcPick == "rock"){
                console.log(`NPC picked ${npcPick}.`)
                console.log("You lose! Rock beats scissors");
                npcScore += 1;
            }else{
                console.log(`NPC picked ${npcPick}.`)
                console.log("You win! Scissors beat paper!");
                playerScore += 1;
            }
        }
    }

//The playGame Function calls playRound for five times to play a whole game
//for loop i <=5 to play 5 rounds
function playGame(){
    let playerScore = 0;
    let npcScore = 0;
    

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

playGame();




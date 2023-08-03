// Function generates 3 random numbers and binds each to a variable so rock, paper and scissors can be played
function getComputerChoice() {
    let computerDraw = Math.floor(Math.random( )* 3) + 1;

    let computerChoice;

    if(computerDraw === 1){
        computerChoice = "rock";
    }
    else if(computerDraw === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

/* Function gets only rock, paper and scissors from user
and converts it to lowercase for easy comparison with the computer's choice
*/
let playerSelection = () => {
    let request;
    let lowerCaseRequest;
    do{
        request = prompt("What is your choice?");
        
        lowerCaseRequest = request.toLowerCase();
    }
    while(!(lowerCaseRequest === "rock" || lowerCaseRequest === "paper" || lowerCaseRequest === "scissors"));

    return lowerCaseRequest;
};

let playerScore = 0;
let computerScore = 0;

let playerGame;
let computerGame;

function game(){

    /* looping as long as there are rounds to play.
    so that after any player reaches 5points, the game ends
    */
   let rounds = true;
    while (rounds){

        let tieChecker = true;

        // To loop as long as there is a tie
        while(tieChecker){

            playerGame = playerSelection();
            computerGame = getComputerChoice();

            if(playerGame === computerGame){
                console.log("You tie, play again");
            }
            else {
                //beaking out of the loop if there's no tie
                tieChecker = false;
            }
    }
            if(playerGame === "rock" && computerGame === "scissors" || playerGame === "scissors" && computerGame == "paper" || playerGame == "paper" && computerGame === "rock"){

                playerScore++;
                console.log("You win")
                console.log(`Your score ${playerScore} and computer scores ${computerScore}`);
            }
            else {
                computerScore++;
                console.log("You lose");
                console.log(`Your score ${playerScore} and computer scores ${computerScore}`);
            }
            /*When no more rounds to play.
            */
            if(playerScore === 5 || computerScore === 5)
                rounds = false;
    }


if(playerScore > computerScore){
    console.log(`Final scores`);
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    console.log("You win")
}
else{
    console.log(`Final scores`);
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    console.log("Computer wins")
}
}
game();
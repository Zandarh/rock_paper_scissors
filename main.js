let playerScore = 0;
let computerScore = 0;

// Function generates 3 random numbers and binds each to a variable so rock, paper and scissors can be played
function getComputerChoice() {
    let computerDraw = Math.floor(Math.random( )* 3) + 1;

    let computerChoice;

    if(computerDraw === 1){
        computerChoice = "Rock";
    }
    else if(computerDraw === 2){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }
    return computerChoice;
}


/**let playerSelection = (choice) => {
    let playerChoice = choice.toLowerCase();
    return playerChoice;
};**/

const btn = document.querySelectorAll("button");
const container = document.querySelector(".container");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        let choice = button.value
       game(choice);
    });
});

function createDiv(playerGame, computerGame){


    if(playerGame === computerGame){
        const div = document.createElement('div');
        const content = document.createElement('h3');
        content.textContent = "You Tie!"
        const para = document.createElement("p");
        para.textContent = `${playerGame} ties with ${computerGame}`;
        div.appendChild(content);
        const scores = document.createElement('p');
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(para);
        div.appendChild(scores);
        container.replaceChild(div, container.firstElementChild);

    }
    else if(playerGame === "Rock" && computerGame === "Scissors" || playerGame === "Scissors" && computerGame == "Paper" || playerGame == "Paper" && computerGame === "Rock") {

        playerScore++;
        const div = document.createElement('div');
        div.setAttribute = ("id", "theresult");
        const content = document.createElement('h3');
        content.textContent = "You won!"
        div.appendChild(content);
        const para = document.createElement("p");
        para.textContent = `${playerGame} beats ${computerGame}`;
        const scores = document.createElement('p');
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(content);
        div.appendChild(para);
        div.appendChild(scores);
        container.replaceChild(div, container.firstElementChild);

    }
    else {
        computerScore++;
        const div = document.createElement('div');
        div.setAttribute = ("id", "theresult");
        const content = document.createElement('h3');
        content.textContent = "You Lost!"
        div.appendChild(content);
        const para = document.createElement("p");
        para.textContent = `${computerGame} beats ${playerGame}`;
        const scores = document.createElement('p');
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(content);
        div.appendChild(para);
        div.appendChild(scores);
        container.replaceChild(div, container.firstElementChild);

    }
}
function giveResult(playerScore, computerScore){

    if(playerScore > computerScore){
        const div = document.createElement("div");
        const content = document.createElement('h3');
        content.textContent = "You Won!";
        div.appendChild(content);
        const h3 = document.createElement('h4');
        h3.textContent = "Final Scores";
        div.appendChild(h3);
        const scores = document.createElement('p');
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(scores);
        const anchor = document.createElement("a");
        anchor.textContent = "Play Again";
        anchor.href = "index.html";
        anchor.setAttribute('class', "anchor");
        div.appendChild(anchor);
        document.body.appendChild(div);

    }
    else{
        const div = document.createElement("div");
        const content = document.createElement('h3');
        content.textContent = "You Lost!";
        div.appendChild(content);
        const h3 = document.createElement('h4');
        h3.textContent = "Final Scores";
        div.appendChild(h3);
        const scores = document.createElement('p');
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(scores);
        const anchor = document.createElement("a");
        anchor.textContent = "Play Again";
        anchor.href = "index.html";
        anchor.setAttribute('class', "anchor");
        div.appendChild(anchor);
        document.body.appendChild(div);
    }
}
function game(playerGame){
    /* looping as long as there are rounds to play.
    so that after any player reaches 5points, the game ends
    */
    
        computerGame = getComputerChoice();
        createDiv(playerGame, computerGame);
        
        if(playerScore == 5 || computerScore == 5){
            giveResult(playerScore, computerScore);
        }

    
}
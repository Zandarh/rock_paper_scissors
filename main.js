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

const btn = document.querySelectorAll("button");
const container = document.querySelector(".container");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        let choice = button.value
       game(choice);
    });
});

function createDiv(playerGame, computerGame){
    const scoreSheet = document.querySelector(".theScore");


    if(playerGame === computerGame){
        const div = document.createElement('div');
        div.setAttribute("id", "theresult");
        const content = document.createElement('h3');
        content.textContent = "You Tie!"
        const para = document.createElement("p");
        para.textContent = `${playerGame} ties with ${computerGame}`;
        div.appendChild(content);
        div.appendChild(para);

        const thePlayerScore = document.createElement('h3');
        thePlayerScore.textContent = `Player: ${playerScore}`;
        thePlayerScore.setAttribute("class", "playerScore")

        const theComputerScore = document.createElement('h3');
        theComputerScore.textContent = `Computer: ${computerScore}`;
        theComputerScore.setAttribute("class", "computerScore")
        
        scoreSheet.replaceChild(thePlayerScore, scoreSheet.firstElementChild);
        scoreSheet.replaceChild(theComputerScore, scoreSheet.lastElementChild);

        container.replaceChild(div, container.firstElementChild);

    }
    else if(playerGame === "Rock" && computerGame === "Scissors" || playerGame === "Scissors" && computerGame == "Paper" || playerGame == "Paper" && computerGame === "Rock") {

        playerScore++;
        const div = document.createElement('div');
        div.setAttribute("id", "theresult");
        const content = document.createElement('h3');
        content.textContent = "You won!"
        div.appendChild(content);
        const para = document.createElement("p");
        para.textContent = `${playerGame} beats ${computerGame}`;
        div.appendChild(content);
        div.appendChild(para);

        const thePlayerScore = document.createElement('h3');
        thePlayerScore.textContent = `Player: ${playerScore}`;
        thePlayerScore.setAttribute("class", "playerScore")

        const theComputerScore = document.createElement('h3');
        theComputerScore.textContent = `Computer: ${computerScore}`;
        theComputerScore.setAttribute("class", "computerScore")
        
        scoreSheet.replaceChild(thePlayerScore, scoreSheet.firstElementChild);
        scoreSheet.replaceChild(theComputerScore, scoreSheet.lastElementChild);

        container.replaceChild(div, container.firstElementChild);

    }
    else {
        computerScore++;
        const div = document.createElement('div');
        div.setAttribute("id", "theresult");
        const content = document.createElement('h3');
        content.textContent = "You Lost!"
        div.appendChild(content);
        const para = document.createElement("p");
        para.textContent = `${computerGame} beats ${playerGame}`;
        div.appendChild(content);
        div.appendChild(para);

        const thePlayerScore = document.createElement('h3');
        thePlayerScore.textContent = `Player: ${playerScore}`;
        thePlayerScore.setAttribute("class", "playerScore")

        const theComputerScore = document.createElement('h3');
        theComputerScore.textContent = `Computer: ${computerScore}`;
        theComputerScore.setAttribute("class", "computerScore")
        
        scoreSheet.replaceChild(thePlayerScore, scoreSheet.firstElementChild);
        scoreSheet.replaceChild(theComputerScore, scoreSheet.lastElementChild);

        container.replaceChild(div, container.firstElementChild);

    }
}
function createImage(playerGame, computerGame){
    if(playerGame == "Rock"){
        const image = document.createElement('img');
        const thePlay = document.querySelector(".start");

        image.setAttribute("class", "theImage");
        image.setAttribute("src", "img/rock.jpeg");

        thePlay.replaceChild(image, thePlay.firstElementChild);


    }
    if(playerGame == "Paper"){
        const image = document.createElement('img');
        const thePlay = document.querySelector(".start");

        image.setAttribute("class", "theImage");
        image.setAttribute("src", "img/paper.jpeg");

        thePlay.replaceChild(image, thePlay.firstElementChild);


    }
    if(playerGame == "Scissors"){
        const image = document.createElement('img');
        const thePlay = document.querySelector(".start");

        image.setAttribute("class", "theImage");
        image.setAttribute("src", "img/scissor.jpeg");

        thePlay.replaceChild(image, thePlay.firstElementChild);


    }
    if(computerGame == "Rock"){
        const image = document.createElement('img');
        const thePlay = document.querySelector(".start");

        image.setAttribute("class", "theImage");
        image.setAttribute("src", "img/rock.jpeg");

        thePlay.replaceChild(image, thePlay.lastElementChild);


    }
    if(computerGame == "Paper"){
        const image = document.createElement('img');
        const thePlay = document.querySelector(".start");

        image.setAttribute("class", "theImage");
        image.setAttribute("src", "img/paper.jpeg");

        thePlay.replaceChild(image, thePlay.lastElementChild);


    }
    if(computerGame == "Scissors"){
        const image = document.createElement('img');
        const thePlay = document.querySelector(".start");

        image.setAttribute("class", "theImage");
        image.setAttribute("src", "img/scissor.jpeg");

        thePlay.replaceChild(image, thePlay.lastElementChild);


    }
}
function giveResult(playerScore, computerScore){
    const modal = document.querySelector("#modal");
    const modalContent = document.querySelector(".modalContent");


    if(playerScore > computerScore){
        modal.style.display = "flex";
        const div = document.createElement("div");
        div.setAttribute("class", "theModal");
        const content = document.createElement('h3');
        content.textContent = "You Won!";
        div.appendChild(content);
        const h3 = document.createElement('h4');
        h3.textContent = "Final Scores";
        h3.style.color = "white";
        div.appendChild(h3);
        
        const scoreDiv = document.createElement("div");
        scoreDiv.setAttribute("class", "releasedScore");

        const thePlayerScore = document.createElement('h3');
        thePlayerScore.textContent = `Player: ${playerScore}`;
        thePlayerScore.setAttribute("class", "playerScore")

        const theComputerScore = document.createElement('h3');
        theComputerScore.textContent = `Computer: ${computerScore}`;
        theComputerScore.setAttribute("class", "computerScore")
        
        scoreDiv.appendChild(thePlayerScore);
        scoreDiv.appendChild(theComputerScore);
        div.appendChild(scoreDiv);

        const anchor = document.createElement("a");
        anchor.textContent = "Play Again";
        anchor.href = "index.html";
        div.appendChild(anchor);
        modalContent.appendChild(div);

    }
    else{
        modal.style.display = "flex";
        const div = document.createElement("div");
        div.setAttribute("class", "theModal");

        const content = document.createElement('h3');
        content.textContent = "You Lost!";
        div.appendChild(content);
        const h3 = document.createElement('h4');
        h3.textContent = "Final Scores";
        h3.style.color = "white";
        div.appendChild(h3);

        const scoreDiv = document.createElement("div");
        scoreDiv.setAttribute("class", "releasedScore");

        const thePlayerScore = document.createElement('h3');
        thePlayerScore.textContent = `Player: ${playerScore}`;
        thePlayerScore.setAttribute("class", "playerScore")

        const theComputerScore = document.createElement('h3');
        theComputerScore.textContent = `Computer: ${computerScore}`;
        theComputerScore.setAttribute("class", "computerScore")
        
        scoreDiv.appendChild(thePlayerScore);
        scoreDiv.appendChild(theComputerScore);
        div.appendChild(scoreDiv);

        const anchor = document.createElement("a");
        anchor.textContent = "Play Again";
        anchor.href = "index.html";
        div.appendChild(anchor);
        modalContent.appendChild(div);
    }
}
function game(playerGame){
    /* looping as long as there are rounds to play.
    so that after any player reaches 5points, the game ends
    */
    
        computerGame = getComputerChoice();
        createImage(playerGame, computerGame);
        createDiv(playerGame, computerGame);
        
        if(playerScore == 5 || computerScore == 5){
            giveResult(playerScore, computerScore);
        }

    
}
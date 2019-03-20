// console.log('connected');

// roll dice 1-6 function



function rollDicePlayer1() {
    const playerOneImg = document.querySelector('img.img1');
    const playerOneDice = Math.floor(Math.random() * 6) + 1;
   
    if (playerOneDice === 1) {
        playerOneImg.setAttribute("src", "images/dice1.png");
    } else if (playerOneDice === 2) {
        playerOneImg.setAttribute("src", "images/dice2.png");
    } else if (playerOneDice === 3) {
        playerOneImg.setAttribute("src", "images/dice3.png");
    } else if (playerOneDice === 4) {
        playerOneImg.setAttribute("src", "images/dice4.png");
    } else if (playerOneDice === 5) {
        playerOneImg.setAttribute("src", "images/dice5.png");
    } else if (playerOneDice === 6) {
        playerOneImg.setAttribute("src", "images/dice6.png");
    } return playerOneDice;
}

function rollDicePlayer2() {
    const playerTwoImg = document.querySelector('img.img2');
    const playerTwoDice = Math.floor(Math.random() * 6) + 1;
    if (playerTwoDice === 1) {
        playerTwoImg.setAttribute("src", "images/dice1.png");
    } else if (playerTwoDice === 2) {
        playerTwoImg.setAttribute("src", "images/dice2.png");
    } else if (playerTwoDice === 3) {
        playerTwoImg.setAttribute("src", "images/dice3.png");
    } else if (playerTwoDice === 4) {
        playerTwoImg.setAttribute("src", "images/dice4.png");
    } else if (playerTwoDice === 5) {
        playerTwoImg.setAttribute("src", "images/dice5.png");
    } else if (playerTwoDice === 6) {
        playerTwoImg.setAttribute("src", "images/dice6.png");
    } return playerTwoDice;
}


function whoWins(){
    const playerOne = rollDicePlayer1();
    const playerTwo = rollDicePlayer2();
    const header = document.querySelector('h1');
    if(playerOne < playerTwo){
        header.className = "smaller";
        header.textContent = "Player Two WINS";
    }else if (playerTwo < playerOne){
        header.className = "smaller";
        header.textContent = "Player One WINS";
    } else {
        header.textContent = "Tie Game";
    }
}
whoWins();
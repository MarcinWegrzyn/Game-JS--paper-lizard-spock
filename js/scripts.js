// scripts.js

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    pickLizard = document.getElementById('js-playerPick_lizard'),
    pickSpock = document.getElementById('js-playerPick_spock');

pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });
pickLizard.addEventListener('click', function() { playerPick('lizard'); });
pickSpock.addEventListener('click', function() { playerPick('spock'); });

var gameState = 'notStarted', 
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        winnerLog.style.display = 'none';
      break;
    case 'ended':
        newGameElem.style.display = 'block';
        newGameBtn.innerText = 'Once again';
        pickElem.style.display = 'none';
      break;
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

player.name = prompt('Please enter your name', 'player name');

function newGame() {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }

function playerPick(playerPick) {
    console.log(playerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return possiblePicks[Math.floor(Math.random()*5)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  (playerPick == 'scissors' || playerPick == 'lizard')) ||
        (computerPick == 'scissors' && ( playerPick == 'paper' || playerPick == 'lizard')) ||
        (computerPick == 'paper' &&  (playerPick == 'rock' || playerPick == 'spock'))  ||
        (computerPick == 'lizard' &&  (playerPick == 'spock' || playerPick == 'paper')) ||
        (computerPick == 'spock' &&  (playerPick == 'scissors' || playerPick == 'rock'))) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
  
    setGamePoints();
        if (player.score == 5 || computer.score == 5) {
            endGame();
        }
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

var winnerLog = document.getElementById('winner');

function endGame() {
    gameState = 'ended';
    setGameElements();
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
    playerPickElem.innerHTML = computerPickElem.innerHTML = '';
    if (player.score == 5) {
      winnerLog.style.display = 'block';
      winnerLog.style.color = 'blue';
      winnerLog.innerHTML = player.name + ' wins. Congrats!!!';
    } else if (computer.score ==5) {
      winnerLog.style.display = 'block';
      winnerLog.style.color = 'red';
      winnerLog.innerHTML = 'You lost, try once again!';
    }
}









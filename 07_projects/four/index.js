let randomNum = parseInt(Math.random() * 100 + 1);
console.log("num:",randomNum)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const prevGuess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  if(isNaN(guess) || guess < 1 || guess > 100){
    alert('PLease enter a valid number');
  } else {
    prevGuesses.push(guess);
    if(numGuess === 11) {
      displayGuess(guess)
      dispalyMessage(`Game Over. Random number was ${randomNum}`);
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    dispalyMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    dispalyMessage(`Number is TOOO low`);
  } else if (guess > randomNum) {
    dispalyMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  prevGuess.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function dispalyMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  console.log(newGameBtn)
  newGameBtn.addEventListener('click', function(e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuess = 1;
    prevGuess.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true
  })
}
let randomNumber = parseInt(Math.random() * 100 + 1); 

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField'); 
const guessSlot = document.querySelector('.guesses'); 
const remaining = document.querySelector('.lastResult'); 
const lowOrHi = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas'); 

const p = document.createElement('p'); 

let prevGuess = []
let numGuess = 1

let playGame = true; 

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault(); 
        const guess = parseInt(userInput.value); 
        // console.log(guess); 
        validateGuess(guess); 
    });
}

// it will validate the guess number is within the range and it should be a valid Number
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number'); 
    }else if(guess<1){
        alert('Please enter a number greater than 1'); 
    }else if(guess>100){
        alert('Please enter a valid number less than 100'); 
    }else{
        prevGuess.push(guess);
        if(numGuess === 11 ){
            displayGuess(guess); 
            displayMessage(`Game Over. Random Number was ${randomNumber}`); 
            endGame(); 
        }
        else{
            displayGuess(guess); 
            checkGuess(guess); 
        }
    }
}


// to check enter UserInput is right or not 
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`); 
        endGame(); 
    }
    else if(guess<randomNumber){
        displayMessage(`Number is TOO low`);
    }
    else if(guess>randomNumber){
        displayMessage(`Number is TOO High`);
    }
}

function displayGuess(guess){
    userInput.value = ''; 
    guessSlot.innerHTML += `${guess} ,`; 
    numGuess++; 
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''; 
    userInput.setAttribute('disabled', ''); //it should be in key-value pair
    p.classList.add('button'); 
    p.innerHTML = `<h2 id="newGame">Start new Game Click here</h2>`;
    startOver.appendChild(p); 
    playGame = false; 
    newGame();  
}

function newGame(){
    const newGameButton = document.querySelector('#newGame'); 
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1); 
        prevGuess = []; //reset all previous user Guesses
        newGuess = 1;
        guessSlot.innerHTML = ''; 
        remaining.innerHTML = `${11-numGuess}`; 
        userInput.removeAttribute('disabled'); 
        startOver.removeChild('p'); 
        playGame = true; 
    })

}


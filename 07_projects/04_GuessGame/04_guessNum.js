const randomNumber=(parseInt(Math.random()*100) +1);

let submit =document.querySelector('#submit');
let userInput = document.querySelector('#enterNum')
let guessesCollection =document.querySelector('.guesses')
let remainingGuesses =document.querySelector('.remainingGuesses')
let lowOrHigh =document.querySelector('.lowOrHigh')
let resultSection =document.querySelector('.resultSection')

const p =document.createElement('p')

let prevGuesses = []
let numOFGuess =1;
let playGame =true;

if(playGame){
    submit.addEventListener('click',function(ev){
        ev.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
if(isNaN(guess)){
    alert('Enter a valid number')
}else if(guess<1 || guess>100){
    alert('Enter a number greater than 1 and less than 100')
}else{
    prevGuesses.push(guess)
    if(numOFGuess===11){
    displayGuesses(guess);
    sentMessage(`Game over::Random number was ${randomNumber}`)
    finishGame();
    }else{
        displayGuesses(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
    if(guess===randomNumber){
        sentMessage(' yehh You did it,random number was '+randomNumber)

    }else if(guess<randomNumber){
     sentMessage('go little high')
    }
    else if(guess>randomNumber){
     sentMessage('go little low')
    }
}
function displayGuesses(guess){
userInput.value =''
guessesCollection.innerHTML += `${guess},`
numOFGuess++;
remainingGuesses.innerHTML = `${11-numOFGuess}`
}
function sentMessage(message){
lowOrHigh.innerHTML =`<h3> ${message} </h3>`
}
function finishGame(){
 userInput.value =''
 userInput.setAttribute('disabled','')
 p.classList.add('button');
 p.innerHTML =`<h3 id ='newGame'> Start new Game</h3>`;
 resultSection.appendChild(p);
 playGame =false;
 staryNewGame();
}
function staryNewGame(){
    const newGameButton = document.getElementById('newGame')
    newGameButton.addEventListener('click',function(e){
        prevGuesses =[];
        numOFGuess =1
        guessesCollection.innerHTML =''
        remainingGuesses.innerHTML =`${11-numOFGuess}`
        userInput.removeAttribute('disabled')
        resultSection.removeChild(p)
        playGame =true;
    })

}


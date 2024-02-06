let userTxt = document.querySelector('#userText')
let computerTxt = document.querySelector('#computerText')
let resultTxt = document.querySelector('#resultText')

let options = document.querySelectorAll('.allButtons')
console.log(options);

let player;
let computer;
let result;

options.forEach((option)=>{
    option.addEventListener('click',(e)=>{
    player=option.textContent
    computerTurn();
    userTxt.textContent =`Your choice:${player}`
    computerTxt.textContent =`Computer choice:${computer}`
    resultTxt.textContent = "wait...."
    setTimeout(()=>{
        resultTxt.textContent =checkWinner();
    },2000)
    })
})
function computerTurn(){
    let randNum= Math.floor(Math.random()*3)+1;
    switch (randNum) {
        case 1:
            computer="Rock"
            break;
        case 2:
            computer="Paper"
            break;
    
        case 3:
            computer="Scissors"
                break;
    }
}
function checkWinner(){
    if (player==computer) {
        return "Draw!"
    }
    else if(computer =="Rock"){
        return(player =="Paper") ? "You win!!" :"You Lose"
    }
    else if(computer =="Paper"){
        return(player =="Scissors") ? "You win!!" :"You Lose"
    }
    else if(computer =="Scissors"){
        return(player =="Rock") ? "You win!!" :"You Lose"
    }
}
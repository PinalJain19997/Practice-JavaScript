let randomNumber = parseInt((Math.random()*100+1))
const submit = document.querySelector('#sbt');
const userinp = document.querySelector('#guess');
const prevguesses=document.querySelector('.prevguesses');
const guessrem=document.querySelector('.guessrem');
const loworhi=document.querySelector('.lowOrhi');
const startOver=document.querySelector('.resultParams');

const p = document.createElement('p');


let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userinp.value);
        console.log(guess)
        validate(guess);

    })
}

function validate(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess<1){
        alert("Please enter a number greater than 100")
    } else if(guess>100){
        alert("Please enter a number less than 100")
    } else{
        prevGuess.push(guess);
        if(numGuess >10){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        } else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Your guested right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is TOO low`);
    }  else if(guess > randomNumber){
        displayMessage(`Number is TOO high`);
    }
}

function displayGuess(guess){
    userinp.value='';
    prevguesses.innerHTML+=`${guess} `
    numGuess++;
    guessrem.innerHTML= `${11-numGuess}`
    
}

function displayMessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userinp.innerHTML=''
    userinp.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();

}

function newGame(){
    const newGame= document.querySelector('#newGame');
    newGame.addEventListener('click',(e)=>{
        e.preventDefault();
        randomNumber= parseInt((Math.random()*100+1));
        prevGuess=[];
        numGuess=1;
        prevguesses.innerHTML='';
        guessrem.innerHTML=`${11-numGuess}`;
        userinp.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame=true;
    })

}


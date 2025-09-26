# Project related DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 01
[index.html project1](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html) 

```javascript
const buttons = document.querySelectorAll('.button');

//console.log(buttons)

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    // switch(e.target.id){
    //   case "grey":
    //     body.style.backgroundColor = e.target.id
      
    //   case "white":
    //     body.style.backgroundColor = e.target.id

    //   case "yellow":
    //     body.style.backgroundColor = e.target.id


    // }

    body.style.backgroundColor = e.target.id

  })
  
});


```

## project 02
[index.html project2](https://stackblitz.com/edit/dom-project-chaiaurcode?file=2-BMICalculator%2Findex.html) 

```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  // console.log(height)
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

})

```

## project 03
[html code project3](https://stackblitz.com/edit/dom-project-chaiaurcode?file=3-DigitalClock%2Findex.html) 

```javascript

const clock = document.getElementById('clock')

// const clock = document.querySelector('#clock')

let date = new Date();
console.log(date.toLocaleTimeString());


setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  

},1000)

```

## project 04
[html code project4](https://stackblitz.com/edit/dom-project-chaiaurcode?file=4-GuessTheNumber%2Findex.html) 

```javascript
//console.log(parseInt(Math.random()*100+1));

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess < 1){
    alert('Please enter more than 1');
  }
  else if(guess>100){
    alert('Please enter a number less than 100');
  }
  else{
    prevGuess.push(guess);
    if(numGuess===11){
      displayGuess(guess)
      displayMsg(`Game Over. Random number was ${randomNum}`)
      endGame();
    } else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNum){
    displayMsg(`You guessed it right`)
    endGame()
  }
  else if(guess<randomNum){
    displayMsg(`Number is too low`)
  }
  else if(guess>randomNum){
    displayMsg(`Number is too high`)
  }
}
function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML+=`${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(guess) {
  userInput.value = ''
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(guess) {
  const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);

    playGame = true;
  });
}

```
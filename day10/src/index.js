const randomAlert = document.getElementById('randomAlert');
const randomSlider = document.getElementById('randomSlider');
const userInput = document.getElementById('userInput');
const userInputBtn = document.querySelector('button');
const matchContent = document.querySelector('.result');
const clearBtn = document.querySelector('#clearBtn');

let numScope;
let randomNum;
let resString;


function clearEvent () {
  matchContent.childNodes.forEach(elm => {
    console.log(elm);
    matchContent.removeChild(elm);
  });
}


function createRandom () {
  randomNum = Math.floor(Math.random() * numScope + 1);
}


function matchGame (value) {
  if (value == randomNum) {
    resString = 'You Win!!';
  } else {
    resString = 'You Lost...';
  }
}


function matchDraw (userVal, comVal) {


  const p = document.createElement('p');
  const p2 = document.createElement('p');

  if (userVal > numScope) {
    p.innerHTML = 'your input value too much large..';
    p2.innerHTML = '';
  } else if (randomNum === NaN) {
    p.innerHTML = 'Cannot Found random value...';
    p2.innerHTML = '';
  } else if (userVal == 0 && comVal == 0) {
    p.innerHTML = 'please input value slider and your inputBox';
    p2.innerHTML = '';
  } else if (isNaN(userVal)) {
    console.log(typeof userVal);
    p.innerHTML = 'please input Number Value..';
    p2.innerHTML = '';
  } else if (isNaN(comVal)) {
    p.innerHTML = 'Set a Value please';
    p2.innerHTML = '';
  } else {
    p.innerHTML = `You chose ${userVal}, the machine chose ${comVal}.`;
    p2.innerHTML = resString;
  }

  matchContent.appendChild(p);
  matchContent.appendChild(p2);
}


function userEvent () {
  const value = parseInt(userInput.value);
  createRandom();
  matchGame(value);
  matchDraw(value, randomNum);
}


function drawAlert (e) {
  const value = e.target.value;
  if (value == 0) {
    randomAlert.innerHTML = 'Please set a correct Number';
  } else {
    randomAlert.innerHTML = `Generate a number between 0 and ${value}`;
  }

  numScope = value;
}


function init () {
  randomSlider.addEventListener('input', drawAlert);
  userInputBtn.addEventListener('click', userEvent);
  clearBtn.addEventListener('click', clearEvent);
}

init ();
const inputBox = document.getElementById('resultBox');
const resultBtn = document.getElementById('resultBtn');
const clearBtn = document.querySelector('.clearBtn');
const processBox = document.querySelector('.hiddenCal');


let isBuffer = 0;
let verifyMul = 0;


function verifyOverLap(char) {
  const value = processBox.value;
  
  if (!(char == value[value.length - 1])) {
    add(1, char);
    if (char == '*')
      verifyMul = 1;
  } else console.log('ovelaped!');
}


function add(isBuf, char) {
  if (isBuffer == 1) {
    inputBox.value = '';
    isBuffer = 0;
  } 

  if (isBuf == 1)
  isBuffer = 1;

  
  if (!isNaN(char))
  inputBox.value += char;
  processBox.value += char;

  
  if (verifyMul == 1) {
    verifyMul = 0;
    calculate();
  }
}


function clear() {
  inputBox.value = '';
  processBox.value = '';
}


function calculate() {
  console.log(`processBox.value: ${processBox.value}`);
  const result = eval(processBox.value);
  inputBox.value = result;
  processBox.value = result;  
  if (result === undefined) clear(); 
}


clearBtn.addEventListener('click', clear);
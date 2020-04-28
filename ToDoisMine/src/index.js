// toDo Component
const toDoBox = document.querySelector('.toDoBox');
const toDoInput = document.querySelector('.toDoInput');
const pendingList = document.querySelector('.pendingContent');
const finishedList = document.querySelector('.finishedContent');

// toDo values
let toDos = []; 
let doneDos = []; // finished job..

// User Component
const inputBox = document.querySelector('#helloUserInput');
const userNameDiv = document.querySelector('.helloUser');
const helloTitle = document.querySelector('#helloTitle');
const logoutBtn = document.querySelector('#logoutBtn');



// User Event Processing
const printName = e => {
  localStorage.setItem('userName', e.target.value);
  unHideContent();

  inputBox.style.display = 'none';
  helloTitle.style.display = 'none';
  const h3 = document.createElement('h3');
  h3.innerHTML =`Welcome ${e.target.value}`;
  userNameDiv.appendChild(h3);
};

const loadUser = () => {
  const username = localStorage.getItem('userName');
  if (username !== null) {
    printName(username);
  }
}

const hideLogout = () => {
  logoutBtn.style.display = 'none';
};


// toDo Box Hide Function 
const hideContent = () => {
  hideLogout();
  toDoBox.style.display = 'none';
};

const unHideContent = () => {
  toDoBox.style.display = 'block';
  loadPending();
  loadFinished();
};

//toDo Box mainly Function..
const pendingDelFunc = e => { 
  const li = e.target.parentNode;
  pendingList.removeChild(li);
  const cleanToDos = toDos.filter(elm => {
    console.log(elm);
    console.log(elm.id, li.id); 
    return elm.id !== parseInt(li.id);
  }); 
  console.log('toDos');
  console.log(toDos);
  console.log('cleanToDos');
  console.log(cleanToDos);
  toDos = cleanToDos;
  savePending();
};

const finishedDelFunc = e => {
  const li = e.target.parentNode;
  finishedList.removeChild(li);
  const cleanDoneDos = doneDos.filter(elm => {
    return elm.id !== parseInt(li.id);
  });
  doneDos = cleanDoneDos;
  saveFinished();
};


const savePending = () => {
  localStorage.setItem('PENDING', JSON.stringify(toDos));
}

const saveFinished = () => {
  localStorage.setItem('FINISHED', JSON.stringify(doneDos));
}

const loadPending = () => {
  let getPendingList = JSON.parse(localStorage.getItem('PENDING'));
  if (getPendingList !== null) {
    getPendingList.forEach(elm => {
      printPending(elm.text);
    });
  }
};

const loadFinished = () => {
  let getFinshedList = JSON.parse(localStorage.getItem('FINISHED'));
  if (getFinshedList !== null) {
    getFinshedList.forEach(elm => {
      printFinished(elm.text);
    });
  }
};

const goingToFinished = e => {
  const li = e.target.parentNode;
  const divideValue = li.innerText.split('X')[0];
  printFinished(divideValue);
  pendingDelFunc(e);
};

const goingToPending = e => {
  const li = e.target.parentNode;
  const divideValue = li.innerText.split('X')[0];
  printPending(divideValue);
  finishedDelFunc(e);
};


const printPending = e => {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerHTML = 'X';
  delBtn.addEventListener('click', pendingDelFunc);

  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = 'V';
  doneBtn.addEventListener('click', goingToFinished);

  const span = document.createElement('span');
  span.innerHTML = e;
  
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  pendingList.appendChild(li);

  const newId = toDos.length + 1;
  li.id = newId;
  
  const pendingObj = {
    text: e,
    id: newId,
  };

  toDos.push(pendingObj);
  savePending();
};

const printFinished = e => {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerHTML = 'X';
  delBtn.addEventListener('click', finishedDelFunc);

  const returnBtn = document.createElement('button');
  returnBtn.innerHTML = 'return';
  returnBtn.addEventListener('click', goingToPending);

  const span = document.createElement('span');
  span.innerHTML = e;
  
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(returnBtn);
  finishedList.appendChild(li);

  const newId = doneDos.length + 1;
  li.id = newId;
  
  const pendingObj = {
    text: e,
    id: newId,
  };

  doneDos.push(pendingObj);
  saveFinished();
}

const handleInput = e => {
  e.preventDefault();
  const value = e.target.value;
  printPending(value);
  toDoInput.value = ''; // trash buffer on toDoInput
  
};


// Initial Function.. 
const toDoInit = () => {
  hideContent();
  inputBox.addEventListener('change', printName);
  toDoInput.addEventListener('change', handleInput);
};

toDoInit();
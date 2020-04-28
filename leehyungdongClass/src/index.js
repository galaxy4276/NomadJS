const timeBlock = document.querySelector('h2');


function getClock() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  timeBlock.innerHTML = `${hour}:${minutes}:${seconds}`; 
};

function init() {
  console.log('init called!');
  setInterval(getClock, 1000);
};

init();



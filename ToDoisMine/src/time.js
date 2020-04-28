const timeBoxContent = document.querySelector('#timeBoxContent');

const timeFunc = () => {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds  = currentTime.getSeconds();

  timeBoxContent.innerHTML = `${hours}:${minutes}:${seconds}`;
};

const init = () => {
  setInterval(timeFunc, 1000);
};

init ();

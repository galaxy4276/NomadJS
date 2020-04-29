const timeBoxContent = document.querySelector('#timeBoxContent');

const timeFunc = () => {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds  = currentTime.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  timeBoxContent.innerHTML = `${hours}:${minutes}:${seconds}`;
};

const init = () => {
  setInterval(timeFunc, 1000);
};

init ();

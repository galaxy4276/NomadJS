
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const h2 = document.querySelector('h2');

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const currentDay = Date.now();
  
  let resultDay = xmasDay - currentDay - NINE_HOURS_MILLISECONDS;

  console.log(resultDay);

  const DAY = 60 * 60 * 24 * 1000;
  const HOUR = 60 * 60 * 1000;
  const MINUTE = 60 * 1000;
  const SECOND = 1000;

  const day = Math.floor(resultDay / DAY);
  resultDay %= DAY;

  const hour = Math.floor(resultDay / HOUR);
  resultDay %= HOUR;

  const minute = Math.floor(resultDay / MINUTE);
  resultDay %= MINUTE;

  const second = Math.floor(resultDay / SECOND);
  
  h2.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;
  console.log(`day = ${day} hour = ${hour} minute = ${minute} second = ${second}`);
}  

window.onload = () => {
  setInterval(getTime, 1000);
};



// function init() {}
// init();
/*
import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const h2 = document.querySelector("h2");

const getTime = () => {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const currentDay = Date.now();
  let resultDay = xmasDay - currentDay - NINE_HOURS_MILLISECONDS;

  const DAY = 60 * 60 * 24 * 1000;
  const HOUR = 60 * 60 * 1000;
  const MINUTE = 60 * 1000;
  const SECOND = 1000;

  const day = Math.floor(resultDay / DAY);
  resultDay %= DAY;
  const hour = Math.floor(resultDay / HOUR);
  resultDay %= HOUR;
  const minutes = Math.floor(resultDay / MINUTE);
  resultDay %= MINUTE;
  const seconds = Math.floor(resultDay / SECOND);

  h2.innerHTMl = `${day}d ${hour}h ${minutes}m ${seconds}s`;
};

window.onload = () => {
  setInterval(getTime, 1000);
};

*/

const title = document.querySelector('h2');
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const totalEventHandler = {
  default () {
    title.style.color = '#9999';
    title.innerHTML = 'Hello';
  },

  mouseUp () {
    title.style.color = colors[0];
    title.innerHTML = 'mouse is on here!';
  },
  mouseDown () {
    title.style.color = colors[1];
    title.innerHTML = 'mouse is gone..';
  },
  rightContextCheck () {
    title.style.color = colors[2];
    title.innerHTML = 'right click is detected!';
  },
  checkResize () {
    title.style.color = colors[4];
    title.innerHTML = 'window resize is detected!';
  },
  setDefault () {
    setTimeout(this.setTimeout, 3000);
  },
};

window.addEventListener('resize', totalEventHandler.checkResize, totalEventHandler.setDefault);
window.addEventListener('contextmenu', totalEventHandler.rightContextCheck, totalEventHandler.setDefault);
title.addEventListener('mouseover', totalEventHandler.mouseUp, totalEventHandler.setDefault);
title.addEventListener('mouseout', totalEventHandler.mouseDown, totalEventHandler.setDefault);




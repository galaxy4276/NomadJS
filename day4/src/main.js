const colors = ['orange', 'purple', 'deepskyblue'];

const h2 = document.querySelector('h2');
const body = document.querySelector('body');

h2.style.color = 'white';

const resizeColorEvt = () => {
  if (window.innerWidth > 300 && window.innerWidth < 600) {
    body.style.backgroundColor = colors[2];
  }
  else if (window.innerWidth > 600 && window.innerWidth < 1100) {
    body.style.backgroundColor = colors[1];
  }
  else if (window.innerWidth > 1100) {
    body.style.backgroundColor = colors[0];
  }
};

window.addEventListener('resize', () => {
  console.log(window.innerWidth);
});

window.addEventListener('resize', resizeColorEvt);

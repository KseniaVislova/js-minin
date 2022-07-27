const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let score = 0;
const gradients = [
  'linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)',
  'linear-gradient(45deg, #cd5c5c 0%, #fa8072 47%, #f08080 100%)',
  'linear-gradient(180deg, #ff69b4 0%, #ff1493 47%, #c71585 100%)',
  'linear-gradient(270deg, #ffff00 0%, #ffd700 47%, #ffa500 100%)',
  'linear-gradient(50deg, #d8bfd8 0%, #dda0dd 47%, #ee82ee 100%)',
  'linear-gradient(130deg, #9370db 0%, #8a2be2 47%, #9400d3 100%)',
  'linear-gradient(210deg, #e0ffff 0%, #afeeee 47%, #40e0d0 100%)',
  'linear-gradient(300deg, #adff2f 0%, #7fff00 47%, #7cfc00 100%)',
];

start.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  setTime(time);
  createRandomCircle();
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }

    setTime(current);
  }
}

function setTime(element) {
  timeEl.innerHTML = `00:${element}`;
}

function finishGame() {
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
  timeEl.parentNode.classList.add('hide');
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 100);
  const index = getRandomNumber(0, gradients.length - 1);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = gradients[index];

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `${color}`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const board = document.getElementById('board');
const SQUARES_NUMBER = 700;
const colors = [
  '#CD5C5C',
  '#F08080',
  '#FA8072',
  '#FFA07A',
  '#DC143C',
  '#B22222',
  '#FFB6C1',
  '#FF69B4',
  '#FF1493',
  '#C71585',
  '#DB7093',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = 'rgb(36, 36, 36)';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

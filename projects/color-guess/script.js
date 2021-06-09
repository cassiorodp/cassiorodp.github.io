const balls = document.querySelector('#balls');
const ballsChildren = balls.children;

// Deixa as cores das div's aleatorias
for (let index = 0; index < ballsChildren.length; index += 1) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = `#${randomColor}`;
  ballsChildren[index].style.backgroundColor = color;
};

// Deixa o texto da cor aleatório
const colorText = document.querySelector('#rgb-color');
const randomArray = Math.floor(Math.random()*ballsChildren.length);
colorText.innerHTML = window.getComputedStyle(ballsChildren[randomArray]).getPropertyValue('background-color');

// Seleciona a div
balls.addEventListener('click', (event) => {
  for (let index = 0; index < ballsChildren.length; index += 1) {
    ballsChildren[index].id = '';
  }
  const alvo = event.target;
  alvo.id = 'answer';
  hitVerifier();
});

// Verifica se acertou a cor
function hitVerifier() {
  const response = document.querySelector('#response-text');
  const answer = document.querySelector('#answer');
  if (window.getComputedStyle(answer).getPropertyValue('background-color') === colorText.innerHTML) {
    response.innerHTML = `Acertou!`
  } else {
    response.innerHTML = `Errou.`
  }
};

Math.random() * 5;
// Criar codigo para selecionar o numero aleatorio
// Math.floor(Math.random() * array.length))

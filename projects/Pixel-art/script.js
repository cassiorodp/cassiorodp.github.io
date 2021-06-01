window.onload = function () {
  // Define a cor preta como a selecionada primeiramente
  const paletteBlack = document.querySelector('div .black');
  paletteBlack.classList.add('selected');

  // Adiciona função de selecionar a cor da paleta
  const palleteColor = document.querySelectorAll('.color');
  for (let index = 0; index < palleteColor.length; index += 1) {
    palleteColor[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < palleteColor.length; index2 += 1) {
        palleteColor[index2].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
};

// Adiciona função de pintar o pixel
let pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    let backgroundColor = window.getComputedStyle(selected).getPropertyValue('background-color');
    event.target.style.backgroundColor = backgroundColor;
  })
}

// Adiciona botão de limpar
const button = document.querySelector('#clear-board');
button.addEventListener('click', function() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
})

// Adiciona botão que redimensiona o quadro de pixels
const buttonBoard = document.querySelector('#generate-board');
const input = document.querySelector('#board-size');
const board = document.querySelector('#pixel-board')
buttonBoard.addEventListener('click', function() {
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    board.innerHTML = '';
    for (let index = 1 ; index <= input.value; index += 1) {
      let divTr = document.createElement('div');
      divTr.classList.add('tr');
      for (let index2 = 1; index2 <= input.value; index2 += 1) {
        let divPixelTd = document.createElement('div');
        divPixelTd.classList.add('pixel', 'td');
        divTr.appendChild(divPixelTd);
      }
      board.appendChild(divTr);
    }
  }
  pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      let selected = document.querySelector('.selected');
      let backgroundColor = window.getComputedStyle(selected).getPropertyValue('background-color');
      event.target.style.backgroundColor = backgroundColor;
    })
  }
})

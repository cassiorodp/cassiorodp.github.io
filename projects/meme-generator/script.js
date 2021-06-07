const memeInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const memeThumbs = document.querySelector('#image-thumbs');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');

// Insere input para legenda
memeInput.addEventListener('keyup', function () {
  memeText.innerHTML = memeInput.value;
})

// Insere imagem do meme
memeInsert.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
})

// Insere botões de estilo de bordas
fireButton.addEventListener('click', function () {
  if (memeContainer.style.border === '3px dashed red') {
    memeContainer.style.border = ''
  } else {
    memeContainer.style.border = '3px dashed red'
  }
})

waterButton.addEventListener('click', function () {
  if (memeContainer.style.border === '5px double blue') {
    memeContainer.style.border = ''
  } else {
    memeContainer.style.border = '5px double blue'
  }
})

earthButton.addEventListener('click', function () {
  if (memeContainer.style.border === '6px groove green') {
    memeContainer.style.border = ''
  } else {
    memeContainer.style.border = '6px groove green'
  }
})

// Insere memes prontos em thumbnail
memeThumbs.addEventListener('click', function (event) {
  memeImage.src = event.target.src;
});

// Requisito 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.

function getInputText() {
  const textInput = document.getElementById('text-input').value;
  let memeText = document.getElementById('meme-text');

  memeText.innerText = textInput;
}

document.addEventListener('keyup', getInputText);

// Requisito 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
//* Inspirado por https://stackoverflow.com/a/45931408
window.addEventListener('load', function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        let img = document.querySelector('#meme-image');
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });
});

// Requisito 3 - Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.
let memeContainer = document.getElementById('meme-image-container');

memeContainer.style.border = '1px solid rgb(0, 0, 0)';

// Requisito 6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.

//FIRE BUTTON
let fireButton = document.querySelector('#fire');
function addFireBorder() {
  if (
    memeContainer.style.getPropertyValue('border') !==
    '3px dashed rgb(255, 0, 0)'
  ) {
    memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
  } else {
    memeContainer.style.border = '1px solid rgb(0, 0, 0)';
  }
}
fireButton.addEventListener('click', addFireBorder);

//WATER BUTTON
let waterButton = document.querySelector('#water');
function addWaterBorder() {
  if (
    memeContainer.style.getPropertyValue('border') !==
    '5px double rgb(0, 0, 255)'
  ) {
    memeContainer.style.border = '5px double rgb(0, 0, 255)';
  } else {
    memeContainer.style.border = '1px solid rgb(0, 0, 0)';
  }
}
waterButton.addEventListener('click', addWaterBorder);

//EARTH BUTTON
let earthButton = document.querySelector('#earth');
function addEarthBorder() {
  if (
    memeContainer.style.getPropertyValue('border') !==
    '6px groove rgb(0, 128, 0)'
  ) {
    memeContainer.style.border = '6px groove rgb(0, 128, 0)';
  } else {
    memeContainer.style.border = '1px solid rgb(0, 0, 0)';
  }
}
earthButton.addEventListener('click', addEarthBorder);

// Reqsuito 7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
const memeImage = document.getElementById('meme-image');
const readyMemes = document.getElementById('memes-prontos');

function readyMemeImage(event) {
  let readyImage = event.target.getAttribute('src');

  memeImage.src = readyImage;
}
readyMemes.addEventListener('click', readyMemeImage);

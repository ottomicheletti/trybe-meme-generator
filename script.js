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

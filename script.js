// Requisito 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.

function getInputText() {
  const textInput = document.getElementById('text-input').value;
  let memeText = document.getElementById('meme-text');

  memeText.innerText = textInput;
}

document.addEventListener('keyup', getInputText);

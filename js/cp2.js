
function changeImageRandomly() {
    var imageDivs = document.querySelectorAll('.container'); // Seleciona todas as divs com a classe 'myDiv'
    var imageUrl = '/img/brinquedo.png'; // Caminho relativo para a imagem
  
    // Exibir a imagem em todas as divs inicialmente
    imageDivs.forEach(function(div) {
      div.style.backgroundImage = `url(${imageUrl})`;
    });
  
    setInterval(function() { // Inicia um intervalo que será executado a cada 4 segundos
      imageDivs.forEach(function(div) {
        if (Math.random() < 0.5) {
          // Remove a imagem da div com 50% de probabilidade
          div.style.backgroundImage = 'none';
        } else {
          // Reaparece a imagem na div com 50% de probabilidade
          div.style.backgroundImage = `url(${imageUrl})`;
        }
      });
    }, 1000); // Intervalo de 4 segundos
  }
  
  changeImageRandomly(); // Chama a função para iniciar a alteração aleatória da imagem nas divs

  
function inverter() {
    var divs = document.querySelectorAll('.container'); // Seleciona todas as divs com a classe 'myDiv'

  var totalDivs = divs.length;
  divs.forEach((div, index) => {
    var reversedText = totalDivs - index; // Calcula o texto reverso para cada div
    div.textContent = reversedText; // Atualiza o texto da div
  });
}

function resetar() {
    var divs = document.querySelectorAll('.container'); // Seleciona todas as divs com a classe 'myDiv'

  divs.forEach((div, index) => {
    var originalText = "Div-" + (index + 1); // Calcula o texto original para cada div
    div.textContent = originalText; // Atualiza o texto da div
  });
}



document.addEventListener('DOMContentLoaded', function() {
  var darkModeButton = document.getElementById('darkModeButton');
  var container = document.getElementById('box');

  darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    })
  }
);

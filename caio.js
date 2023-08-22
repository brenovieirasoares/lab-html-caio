window.onload = function () {
  var btnVermelho = document.getElementById('btn-vermelho');
  var btnAzul = document.getElementById('btn-azul');
  var divCard = document.getElementById('card-principal');
  var divConteudo = document.getElementById('conteudo');

  btnVermelho.onclick = function () {
    divCard.style.backgroundColor = 'red';
    divConteudo.innerHTML = '<p>O card é vermelho!</p>';
  }

  btnAzul.onclick = function () {
    divCard.style.backgroundColor = 'blue';
    divConteudo.innerHTML = '<p>O card é azul!</p>';
  }
}
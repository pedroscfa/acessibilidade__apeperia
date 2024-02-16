// Variáveis
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');
var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = 'Slide Atual';

document.querySelector('#new0').style.display = 'block';


// Adiciona evento de clique para cada botão
btns.forEach(function(btn, index) {
  btn.addEventListener('click', function() {
    // Remove a classe ativa de todos os botões
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    });


    this.classList.add('listaDeArtigos-slider-item--ativo');

    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';
    });

    noticias[index].style.display = 'block';

    if (this.querySelector('.escondeVisualmente')) {
      this.querySelector('.escondeVisualmente').remove();
    }
    this.appendChild(indicadorSlideAtual);
  });
});

//Variáveis
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');
var indicadorSlideAtual = document.createElement('span');
var noticias = document.querySelectorAll('.listaDeArtigos-item');
new0.style.display = 'block';

//Criando Indicador do Slide Atual
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'escondeVisualmente';
indicadorSlideAtual.textContent = 'Slide Atual'


// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    })


    this.classList.add('listaDeArtigos-slider-item--ativo');


    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';
    });


    noticias.forEach(function(noticia) {
      if (this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')) {
        noticia.style.display = 'block';
      }
    }.bind(this)); 
});

    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual);
    
    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })


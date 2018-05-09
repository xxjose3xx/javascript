//Detiene la carga de la página cuando el DOM está preparado
if(document.readyState != "loading") {
  window.stop();
} else {
  document.addEventListener("DOMContentLoaded", function(event) {
    window.stop();
  });
}

//Recupera las elementos "a" que contienen las URLs de las imágenes
var lista = document.querySelectorAll('a[data-fancybox]');

//Crea el contenedor donde se mostrarán las imágenes
//TODO.

//Carga TODAS las imágenes sin mostrarlas para evitar verlas a medias
//TODO. https://stackoverflow.com/questions/21736566/hide-images-until-theyre-loaded

//Empieza el slider
//TODO.

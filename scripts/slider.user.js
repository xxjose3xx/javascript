// ==UserScript==
// @name        slider
// @namespace   fuskator.slider
// @include     https://fuskator.com/thumbs/*
// @version     1
// @grant       none
// ==/UserScript==

var lista = document.getElementsByClassName("wrapper")[0].getElementsByClassName("pic");
var bucle;
var bucleIniciado = false;
var expositor = document.createElement('img');
var estilos = 'display: block; text-align: center; position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0; image-orientation: from-image;';
var i = -1;
var total = lista.length;

document.body.append(expositor);
expositor.setAttribute('style', estilos);

function flechaIzq() {
  
  if(i-1 >= 0) {
    document.title=i+"/"+total;
    expositor.setAttribute('src', lista[--i].children[0].getAttribute('href'));
    expositor.setAttribute('height', window.innerHeight);
    document.title=(i+1)+"/"+total;
  } else {
    expositor.setAttribute('src', '');
    i = -1;
  }
}

function flechaDer() {
  
  if(i+1 < total) {
    expositor.setAttribute('src', lista[++i].children[0].getAttribute('href'));
    expositor.setAttribute('height', window.innerHeight);
    document.title=(i+1)+"/"+total;
  } else {
    expositor.setAttribute('src', '');
    i = -1;
  }
}

function play() {

  bucleIniciado = true;
  flechaDer();
	bucle = setInterval(function() { if(i+1<total) flechaDer(); else clearInterval(bucle), bucleIniciado = false;}, 5000);
}

window.onkeyup = function (e) {
  
  var tecla = e.keyCode ? e.keyCode : e.which;
  
  if(bucleIniciado) {
    bucleIniciado = false;
    clearInterval(bucle);
  }
  
  switch(tecla) {
      
      case 37: flechaIzq();
          break;
      
      case 39: flechaDer();
          break;
      
      case 80: play();
      		break;
           
    default: expositor.setAttribute('src', '');
  }
}

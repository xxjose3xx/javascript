// ==UserScript==
// @name        Filtro 2010
// @namespace   pordescargadirecta
// @description Añade un filtro para películas a partir del 2010.
// @include     *pordescargadirecta.com/forumdisplay.php?*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

var lista = document.getElementsByClassName("title");

for(var i=lista.length-1; i>=0; i--)
  if(lista[i].innerHTML.search("201") == -1)
    lista[i].parentNode.parentNode.parentNode.parentNode.remove();

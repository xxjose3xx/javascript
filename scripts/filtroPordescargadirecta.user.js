// ==UserScript==
// @name        tmp
// @namespace   tmp.es
// @description temporal
// @include     *pordescargadirecta.com/forumdisplay.php?*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

var lista = document.getElementsByClassName("title");

for(var i=lista.length-1; i>=0; i--)
  if(lista[i].innerHTML.search("201") == -1)
    lista[i].parentNode.parentNode.parentNode.parentNode.remove();

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 37) {
       document.getElementsByClassName("prev_next")[0].children[0].click(); // Anterior
   } else if (key == 39) {
       document.getElementsByClassName("prev_next")[1].children[0].click(); // Siguiente
   }
}
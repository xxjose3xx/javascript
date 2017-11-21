// ==UserScript==
// @name        Botones navegabilidad
// @namespace   pordescargadirecta
// @description Utiliza las flechas izquierda y derecha para pasar a la página anterior y siguiente.
// @include     *pordescargadirecta.com/forumdisplay.php?*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 37) {
       document.getElementsByClassName("prev_next")[0].children[0].click(); // Anterior
   } else if (key == 39) {
       document.getElementsByClassName("prev_next")[1].children[0].click(); // Siguiente
   }
}

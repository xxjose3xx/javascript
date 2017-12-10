// ==UserScript==
// @name        farmAssist
// @namespace   guerrastribales
// @description Automatiza el envío de la página del asistente de granja.
// @include     https://*.guerrastribales.es/game.php?village*screen=am_farm*
// @icon        https://dses.innogamescdn.com/8.105/35420/graphic/icons/farm_assistent.png
// @version     2.2
// @grant       none
// ==/UserScript==

var primerUso = true;
var scriptRaw = "https://raw.githubusercontent.com/xxjose3xx/javascript/master/scripts/commandPlace.user.js";

$(document).keydown(function(e){
  	//Tecla 'p'
    if (e.keyCode == 80 && window.wrappedJSObject.document.URL.indexOf("screen=am_farm") != -1) { 
        if(primerUso) {
            $.ajax({
                url: scriptRaw,
                dataType: "text",
                success: function(data, status) {
                    var s = document.createElement("script");
                    s.setAttribute("type","text/javascript");
                    s.innerHTML = data;
                    window.wrappedJSObject.document.body.appendChild(s);
                },
                error: function(data, status) {
                    alert("No se pudo cargar el script\nError: " + status);
                }
            });
            primerUso = false;
        } else {
          	//Nombre del main para la ejecución del script
            window.wrappedJSObject.farmAssist();
        }
    }
});

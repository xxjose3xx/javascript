// ==UserScript==
// @name        commandPlace
// @namespace   guerrastribales
// @description Permite enviar apoyos y ataques desde cualquier página. Puede calcularse el tiempo para un snipeo y programarse para ser enviado automáticamente.
// @include     *.guerrastribales.es/game.php?village=*
// @icon        https://dses.innogamescdn.com/8.105/35420/graphic/icons/farm_assistent.png
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @version     1.2
// ==/UserScript==

var primerUso = true;
var scriptRaw = "https://raw.githubusercontent.com/xxjose3xx/javascript/master/source%20code/commandPlace.js";

$(document).keydown(function(e){
  	//Tecla 'p'
    if (e.keyCode == 80) { 
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
            window.wrappedJSObject.showTable();
        }
    }
});

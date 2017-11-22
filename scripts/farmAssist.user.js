// ==UserScript==
// @name        farmAssist
// @namespace   guerrastribales
// @description Automatiza el envío de la página del asistente de granja.
// @include     https://*.guerrastribales.es/game.php?village*screen=am_farm*
// @icon        https://dses.innogamescdn.com/8.105/35420/graphic/icons/farm_assistent.png
// @version     2.1
// @grant       none
// ==/UserScript==

function iniciarCadenaDeAtaques() {

    var lista = $('[class^="report_"]').each(function(index, element){
        element = element.id.slice(8); //TODO. test
    });
    var plantilla = $('a[class^="farm_village"]:first').attr('onclick').match(/\d+/g)[1];
    var indice = 0;
    var longitud = lista.length;
    var e = TribalWars.buildURL("POST", Accountmanager.send_units_link, null);
    var t = {
        target: 0,
        template_id: plantilla,
        source: game_data.village.id
    };

    function enviarAtaque(objetivo, plantilla) {

        console.log("Enviando ataque... (" + (indice+1) + "/" + longitud + ")");

        t.target = objetivo;

        var r = function(e) {
            $(".farm_village_" + objetivo).addClass("farm_icon_disabled").addClass("done");
            Accountmanager.farm.updateOwnUnitsAvailable(e.current_units);
        };

        var i = function() {
            var aux = $(".report_" + objetivo);
            aux.find("*").stop().css({height: "","font-size": ""});
            aux.show();
            Accountmanager.farm.no_remove.hasOwnProperty(objetivo) && delete Accountmanager.farm.no_remove[objetivo];
        };

        if(!Accountmanager.farm.unitsAppearAvailableAB(plantilla))
            UI.ErrorMessage(_("8c51142762038a5b8e6c677aabcbedff"));
        else
            $.ajax({
                url: e + "&client_time=" + Math.round(Timing.getCurrentServerTime() / 1e3),
                data: t,
                type: "POST",
                dataType: "json",
                headers: {"TribalWars-Ajax": 1},
                success: function(a) {
                    TribalWars.handleResponse(a, r, i);
                    console.log("Ataque enviado con éxito! (" + (indice+1) + "/" + longitud + ")");
                    if(++indice < longitud)
                        enviarAtaque(lista[indice].id.slice(8), plantilla);
                },
                error: function(a, e) {
                    console.log("Se ha producido un error. (" + (indice+1) + "/" + longitud + ")");
                    if(0 !== a.readyState) {
                        if(429 === a.status)
                            UI.ErrorMessage(_("f1ac6646f49d65cbe50901b805abfbf8"), 3e3);
                        else
                            UI.ErrorMessage(_("ba628a2fb8acbf8ab7c4c24c9714d893")), "function" == typeof i && i();
                    }
                }
            });  
           
        Accountmanager.farm.updateNonAttacked(objetivo);
    }

    TribalWars.showLoadingIndicator();
    enviarAtaque(lista[indice], plantilla);
    TribalWars.hideLoadingIndicator();
}

if(document.URL.indexOf("screen=am_farm") != -1)
    console.clear(), console.log("Iniciando cadena de ataques..."), iniciarCadenaDeAtaques();
else
  alert("Este script se ejecuta desde el asistente de granaja!");

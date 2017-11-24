// ==UserScript==
// @name        farmAssist
// @namespace   guerrastribales
// @description Automatiza el envío de la página del asistente de granja.
// @include     https://*.guerrastribales.es/game.php?village*screen=am_farm*
// @icon        https://dses.innogamescdn.com/8.105/35420/graphic/icons/farm_assistent.png
// @version     2.1
// @grant       none
// ==/UserScript==

function initAttackChain() {

    var target_list = $('[class^="report_"]');
    var template = $('a[class^="farm_village"]:first').attr('onclick').match(/\d+/g)[1];
    var longitud = target_list.length;
    var indice = 0;   

    function sendAttack(objetivo) {

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

        if(!Accountmanager.farm.unitsAppearAvailableAB(template))
            UI.ErrorMessage(_("8c51142762038a5b8e6c677aabcbedff"));
        else
            $.ajax({
                url: TribalWars.buildURL("POST", Accountmanager.send_units_link, null) + "&client_time=" + Math.round(Timing.getCurrentServerTime() / 1e3),
                data: {
                    target: objetivo,
                    template_id: template,
                    source: game_data.village.id
                },
                type: "POST",
                dataType: "json",
                headers: {"TribalWars-Ajax": 1},
                success: function(a) {
                    TribalWars.handleResponse(a, r, i);
                    Accountmanager.farm.updateNonAttacked(objetivo);
                    if(++indice < longitud)
                        sendAttack(target_list[indice].id.slice(8));
                    else
                        TribalWars.hideLoadingIndicator();
                },
                error: function(a, e) {
                    if(0 !== a.readyState) {
                        if(429 === a.status)
                            UI.ErrorMessage(_("f1ac6646f49d65cbe50901b805abfbf8"), 3e3);
                        else
                            UI.ErrorMessage(_("ba628a2fb8acbf8ab7c4c24c9714d893")), "function" == typeof i && i();
                    }
                }
            });  
           
        //Accountmanager.farm.updateNonAttacked(objetivo);
    }

    TribalWars.showLoadingIndicator();
    sendAttack(target_list[indice].id.slice(8));   
}

if(document.URL.indexOf("screen=am_farm") != -1)
    initAttackChain();
else
    alert("Este script se ejecuta desde el asistente de granaja!");

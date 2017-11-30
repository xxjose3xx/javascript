//########################################################
//# OPCIÓN 1:
//# 
//# Pros:
//#     -Si funciona, esta es sin duda la mejora opción.
//#     -Todos los ataques se mandan "a la vez".
//# Contras:
//#     -Puede haber sobreescritura de variables.
//#     -Puede saltar fallo por desbordamiento del server.
//########################################################

javascript:
function farmAssist() {

    var template = $('a[class^="farm_village"]:first').attr('onclick').match(/\d+/g)[1];

    $('[class^="report_"]').each(function(index, element) {
        var r = $(".farm_village_" + a);
        if (r.hasClass("farm_icon_disabled")) return false;
        if (!Accountmanager.farm.unitsAppearAvailableAB(t)) return UI.ErrorMessage(_("8c51142762038a5b8e6c677aabcbedff")), false;
        var i = {
            target: element.id.slice(8),
            template_id: template,
            source: game_data.village.id
        };
        return $.post(Accountmanager.send_units_link, i, function(e) {
            $(".farm_village_" + a).addClass("farm_icon_disabled").addClass("done"), Accountmanager.farm.updateOwnUnitsAvailable(e.current_units)
        }), Accountmanager.farm.hide_attacked && Accountmanager.farm.updateNonAttacked(a), false;
    });
}

if(document.URL.indexOf("screen=am_farm") != -1) farmAssist();



//########################################################
//# OPCIÓN 2:
//# 
//# Pros:
//#     -Todos los ataques se mandan "a la vez".
//# Contras:
//#     -Puede saltar fallo por desbordamiento del server.
//########################################################

javascript:
function sendUnits(a, t) {
    var r = $(".farm_village_" + a);
    if (r.hasClass("farm_icon_disabled")) return false;
    if (!Accountmanager.farm.unitsAppearAvailableAB(t)) return UI.ErrorMessage(_("8c51142762038a5b8e6c677aabcbedff")), false;
    var i = {
        target: a,
        template_id: t,
        source: game_data.village.id
    };
    return $.post(Accountmanager.send_units_link, i, function(e) {
        $(".farm_village_" + a).addClass("farm_icon_disabled").addClass("done"), Accountmanager.farm.updateOwnUnitsAvailable(e.current_units)
    }), Accountmanager.farm.hide_attacked && Accountmanager.farm.updateNonAttacked(a), false;
}

function farmAssist() {

    var template = $('a[class^="farm_village"]:first').attr('onclick').match(/\d+/g)[1];

    $('[class^="report_"]').each(function(index, element) {
        sendUnits(element.id.slice(8), template);
    });
}

if(document.URL.indexOf("screen=am_farm") != -1) farmAssist();



//########################################################
//# OPCIÓN 3:
//# 
//# Pros:
//#     -Solicitudes en cadena evitan desbordamiento.
//#     -Posiblemente el único que funcione.
//# Contras:
//#     -Mayor coste temporal.
//########################################################

javascript:
function farmAssist() {

    var template = $('a[class^="farm_village"]:first').attr('onclick').match(/\d+/g)[1];
    var target_list = $('[class^="report_"]');
    var size = target_list.length;
    var index = 0;

    function sendUnits() {
        var r = $(".farm_village_" + a);
        if (r.hasClass("farm_icon_disabled")) return false;
        if (!Accountmanager.farm.unitsAppearAvailableAB(t)) return UI.ErrorMessage(_("8c51142762038a5b8e6c677aabcbedff")), false;
        var i = {
            target: target_list[index].id.slice(8),
            template_id: t,
            source: game_data.village.id
        };
        return $.post(Accountmanager.send_units_link, i, function(e) {
            $(".farm_village_" + a).addClass("farm_icon_disabled").addClass("done"), Accountmanager.farm.updateOwnUnitsAvailable(e.current_units);
            if(++index < size) sendUnits()
        }), Accountmanager.farm.hide_attacked && Accountmanager.farm.updateNonAttacked(a), false;
    }
}

if(document.URL.indexOf("screen=am_farm") != -1) farmAssist();

function farmAssist() {

    var template = $('a[class^="farm_village"]:first').attr('onclick').match(/\d+/g)[1];
    var target_list = $('[class^="report_"]');
    var size = target_list.length;
    var index = 0;

    TribalWars.showLoadingIndicator()

    function sendUnits() {
        var target = target_list[index].id.slice(8);
        var r = $(".farm_village_" + target);
        //if (r.hasClass("farm_icon_disabled")) return TribalWars.hideLoadingIndicator(), UI.ErrorMessage("Error: Intentando atacar un objetivo ya atacado.", 3000);
        if (!Accountmanager.farm.unitsAppearAvailableAB(template)) return UI.ErrorMessage(_("8c51142762038a5b8e6c677aabcbedff")), TribalWars.hideLoadingIndicator();
        var i = {
            target: target,
            template_id: template,
            source: game_data.village.id
        };
        return $.post(Accountmanager.send_units_link, i, function(e) {
            if(e.hasOwnProperty("success")) {
                $(".farm_village_" + target).addClass("farm_icon_disabled").addClass("done"), Accountmanager.farm.updateOwnUnitsAvailable(e.current_units);
                (++index < size) ? sendUnits() : (TribalWars.hideLoadingIndicator(), UI.SuccessMessage("Todos los ataques fueron enviados con <b>éxito</b>."));
            } else sendUnits();
        }, "json"), Accountmanager.farm.hide_attacked && Accountmanager.farm.updateNonAttacked(target), false;
    }
  
    sendUnits();
}

farmAssist();

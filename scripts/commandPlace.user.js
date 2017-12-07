// ==UserScript==
// @name        commandPlace
// @namespace   guerrastribales
// @description Permite enviar apoyos y ataques desde cualquier página. Puede calcularse el tiempo para un snipeo y programarse para ser enviado automáticamente.
// @include     https://*.guerrastribales.es/game.php?village*
// @icon        https://dses.innogamescdn.com/8.105/35420/graphic/icons/farm_assistent.png
// @version     1.0
// @grant       none
// ==/UserScript==

//javascript:

function showTable() {

    $.get("/game.php?village=" + game_data.village.id + "&screen=place", function(html) {

        //Extraer las tropas del pueblo utilizando la página de la plaza de reuniones
        var units = {
            spear: $(html).find('input[id=unit_input_spear]')[0].getAttribute("data-all-count"),
            sword: $(html).find('input[id=unit_input_sword]')[0].getAttribute("data-all-count"),
            axe: $(html).find('input[id=unit_input_axe]')[0].getAttribute("data-all-count"),
            spy: $(html).find('input[id=unit_input_spy]')[0].getAttribute("data-all-count"),
            light: $(html).find('input[id=unit_input_light]')[0].getAttribute("data-all-count"),
            heavy: $(html).find('input[id=unit_input_heavy]')[0].getAttribute("data-all-count"),
            ram: $(html).find('input[id=unit_input_ram]')[0].getAttribute("data-all-count"),
            catapult: $(html).find('input[id=unit_input_catapult]')[0].getAttribute("data-all-count"),
            knight: $(html).find('input[id=unit_input_knight]')[0].getAttribute("data-all-count"),
            snob: $(html).find('input[id=unit_input_snob]')[0].getAttribute("data-all-count")
        };

        //Crear la ventana de PlazaDeReunionesV2
        var div = $('<div class="popup_box_container"><div class="popup_box show" id="popup_box_popup_command" style="width: 700px;"><div class="popup_box_content"><a class="popup_box_close tooltip-delayed" onclick="this.parentNode.parentNode.parentNode.remove();" href="#">&nbsp;</a><h3>Dar órdenes</h3><div id="command-form-warning"></div><table class="float_left"><tbody><tr><td valign="top"><table class="vis" width="100%"><tbody><tr><th>Infantería</th></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_spear.png"><input id="unit_input_spear" tabindex="1" value="" data-all-count="' + units["spear"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_spear" data-unit="spear">(' + units["spear"] + ')</a></td></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_sword.png"><input id="unit_input_sword" tabindex="2" value="" data-all-count="' + units["sword"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_sword" data-unit="sword">(' + units["sword"] + ')</a></td></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_axe.png"><input id="unit_input_axe" tabindex="3" value="" data-all-count="' + units["axe"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_axe" data-unit="axe">(' + units["axe"] + ')</a></td></tr></tbody></table></td><td valign="top"><table class="vis" width="100%"><tbody><tr><th>La caballería al poder</th></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_spy.png"><input id="unit_input_spy" tabindex="4" value="" data-all-count="' + units["spy"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_spy" data-unit="spy">(' + units["spy"] + ')</a></td></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_light.png"><input id="unit_input_light" tabindex="5" value="" data-all-count="' + units["light"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_light" data-unit="light">(' + units["light"] + ')</a></td></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_heavy.png"><input id="unit_input_heavy" tabindex="6" value="" data-all-count="' + units["heavy"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_heavy" data-unit="heavy">(' + units["heavy"] + ')</a></td></tr></tbody></table></td><td valign="top"><table class="vis" width="100%"><tbody><tr><th>Armas de asedio</th></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_ram.png"><input id="unit_input_ram" tabindex="7" value="" data-all-count="' + units["ram"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_ram" data-unit="ram">(' + units["ram"] + ')</a></td></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_catapult.png"><input id="unit_input_catapult" tabindex="8" value="" data-all-count="' + units["catapult"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_catapult" data-unit="catapult">(' + units["catapult"] + ')</a></td></tr></tbody></table></td><td valign="top"><table class="vis" width="100%"><tbody><tr><th>Otros</th></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_knight.png"><input id="unit_input_knight" tabindex="9" value="" data-all-count="' + units["knight"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_knight" data-unit="knight">(' + units["knight"] + ')</a></td></tr><tr><td class="nowrap"><img src="https://dses.innogamescdn.com/8.106/35442/graphic/unit/unit_snob.png"><input id="unit_input_snob" tabindex="10" value="" data-all-count="' + units["snob"] + '" class="unitsInput" type="text"><a class="units-entry-all" id="units_entry_all_snob" data-unit="snob">(' + units["snob"] + ')</a></td></tr></tbody></table></td></tr></tbody></table><div class="vis float_left" style="margin: 4px 0 0 10px; min-width: 125px;"><h4><span id="op1" style="font-weight: bold">Calcular</span><input id="switch" min="0" max="1" style="width:30px;" type="range" value="0" tabindex="11"><span id="op2" style="font-weight: normal">Programar</span></h4><table class="vis" style="width: 100%"><tbody><tr><td id="opt1" class="nowrap">Llegada: <input tabindex="12" size="3" id="arrival" maxlength="8" placeholder="hh:mm:ss" type="text"></td></tr><tr><td id="opt2" class="nowrap" style="display: none;">Lanzamiento: <input tabindex="12" size="5" id="launch" maxlength="12" placeholder="hh:mm:ss:nnn" type="text"></td></tr><tr><td id="opt3" class="nowrap">Día:  <input tabindex="13" size="3" id="day" maxlength="10" placeholder="dd/mm/aaaa" type="text"></td></tr><tr><td><input tabindex="14" id="calc" class="btn btn-target-action" value="Calcular" type="submit" onclick="calcular()"><input tabindex="14" id="prog" class="btn btn-target-action" value="Programar" type="submit" style="display: none;" onclick="programar()"></td></tr></tbody></table></div><div id="target_selection" class="target-select clearfix vis float_left"><h4>Objetivos:</h4><table class="vis" style="width: 100%"><span id="coordX" value=""></span><span id="coordY" value=""></span><tbody><tr><td><div id="place_target" class="target-input float_left" style="background-color: #fff; border: 1px solid #91775e; overflow: hidden; width: 310px; box-sizing: border-box; margin-bottom: 5px;"><input id="input_target" maxlength="7" value="" autocomplete="off" tabindex="15" placeholder="123|456" type="text" style="height: 20px; width: 310px; resize: none; padding: 2px; border: none; box-sizing: border-box; outline: none; display: inline;"></div><a class="target-quickbutton target-last-attacked" style="float: left; height: 22px; width: 22px; display: inline; border: 1px solid #91775e; border-left: none; box-sizing: border-box; background: #fff5da url(\'https://dses.innogamescdn.com/8.106/35442/graphic/target_icons.png\'); background-position: 0 0;"></a></td></tr></tbody></table></div><div id="command_actions" class="target-select clearfix vis float_left"><h4>Orden:</h4><table class="vis" style="width: 100%"><tbody><tr><td><input id="target_attack" tabindex="16" class="attack btn btn-attack btn-target-action" value="Ataque" type="submit" onclick="sendCommand(1)"><input id="target_support" tabindex="17" class="support btn btn-support btn-target-action" value="Apoyo" type="submit" onclick="sendCommand(0)"><input id="target_snipe" tabindex="18" class="btr btn btn-btr btn-target-action" value="Snipeo" type="submit" style="display: none;padding: 3px 9px 3px 25px"></td></tr></tbody></table></div></div></div><div class="fader" onclick="this.parentNode.remove();"></div></div>');
        $("body").append(div);

        //Añadir eventos para rellenar con las máximas unidades del tipo de tropa.
        $(".units-entry-all").each(function(index, element) {
            element.addEventListener("click", function() {
                var t = $(this).data("unit"), n = $("#unit_input_" + t), e = parseInt(n.data("all-count"));
                return !(!e) && (e !== parseInt(n.val()) ? n.val(e) : n.val(""), !1)
            });
        });

        //Añade el controlador para el switch entre Calcular y Programar.
        $("#switch")[0].addEventListener("change", function(e) {
            if(this.value==0) {
                $("#op1")[0].style.fontWeight="bold";
                $("#op2")[0].style.fontWeight="normal";
                $("#opt1")[0].style.display="";
                $("#opt2")[0].style.display="none";
                $("#calc")[0].style.display="";
                $("#prog")[0].style.display="none";
            } else {
                $("#op1")[0].style.fontWeight="normal";
                $("#op2")[0].style.fontWeight="bold";
                $("#opt1")[0].style.display="none";
                $("#opt2")[0].style.display="";
                $("#calc")[0].style.display="none";
                $("#prog")[0].style.display="";
            }
        });

        //Añadir filtro al input para la hora de llegada.
        $("#arrival")[0].addEventListener("keypress", function(e) {
            var a = this.value;
            a = a.replace(/[^[0-9\:]+/, "");
            if(a.indexOf("::") !== -1)
                a = a.replace(/(\:{2,})/, ":");
            if((2 === a.length || 5 === a.length) && 8 !== e.keyCode && 46 !== e.keyCode)
                a += ":";
            this.value = a;
        });

        //Añadir filtro al input para la hora de lanzmiento.
        $("#launch")[0].addEventListener("keypress", function(e) {
            var a = this.value;
            a = a.replace(/[^[0-9\:]+/, "");
            if(a.indexOf("::") !== -1)
                a = a.replace(/(\:{2,})/, ":");
            if((2 === a.length || 5 === a.length || 8 === a.length) && 8 !== e.keyCode && 46 !== e.keyCode)
                a += ":";
            this.value = a;
        });

        //Añadir filtro al input para la fecha.
        $("#day")[0].addEventListener("keypress", function(e) {
            var a = this.value;
            a = a.replace(/[^[0-9\/]+/, "");
            if(a.indexOf("//") !== -1)
                a = a.replace(/(\/{2,})/, "/");
            if((2 === a.length || 5 === a.length) && 8 !== e.keyCode && 46 !== e.keyCode)
                a += "/";
            this.value = a;
        });

        //Añadir filtro al input para coordenadas.
        $("#input_target")[0].addEventListener("keypress", function(e) {
            var a = this.value;
            a = a.replace(/[^[0-9\|]+/, "");
            if(a.indexOf("||") !== -1)
                a = a.replace(/(\|{2,})/, "|");
            if(3 === a.length && 8 !== e.keyCode && 46 !== e.keyCode)
                a += "|";
            this.value = a;
        });

        //Añadir cancelación para el snipeo.
        $("#target_snipe")[0].addEventListener("click", function() {
            $("#target_snipe")[0].style.display="none";
            $("#target_attack")[0].setAttribute("onclick", "sendCommand(1)");
            $("#target_support")[0].setAttribute("onclick", "sendCommand(0)");
        });

        //Sustituir las coordenadas en texto por los datos gráficos del pueblo objetivo.
        $("#input_target")[0].addEventListener("blur", function() {
            if(this.value.length == 7) {
                var t = this;
                $.getJSON("/game.php?village=" + game_data.village.id + "&screen=api&ajax=target_selection&input=" + t.value.substr(0,3) + "%7C" + t.value.substr(4,6), function(response){
                    if(response.villages.length != 0) {
                        $("#coordX")[0].value=t.value.substr(0,3);
                        $("#coordY")[0].value=t.value.substr(4,6);
                        var e = response.villages[0];
                        var i = $('<div id="' + e.id + '" class="village-item" style="border: none;background-color: #fff5da;cursor: pointer;overflow: hidden;"><img class="village-delete" style="display: block;float: right;cursor: pointer;" alt="" /><img class="village-picture" style="float: left;margin-right: 5px;cursor: pointer;" alt="" /><span class="village-name" style="font-weight: bold;font-size: 12px;margin-top: 0px;cursor: pointer;"></span><span class="village-info" style="display: block;margin-top: 0px;font-size: 87%;line-height: 11px;cursor: pointer;"></span><span class="village-distance" style="display: block;margin-top: 0px;font-size: 87%;line-height: 11px;cursor: pointer;"></span></div>').data("village_data", e);
                        var a = e.name;
                        var l = s("%1 (%2|%3)", a, e.x, e.y),
                        n = e.player_name ? e.player_name : _("0a697cba19cd4c1974e2ee11a3c0b9c7"),
                        o = "<strong>" + _("13c5c6614ffee1464fd8f257d23151a4") + "</strong> " + n + " <strong>" + _("bde4bea69ecac47075ec76f575513829") + "</strong> " + e.points,
                        c = Math.round(Math.sqrt(e.distance)),
                        r = 1 === c ? s(_("ba2b365358d84111ebec5eab11ed9676"), c) : s(_("b7e6ef7cb6adca76ea4a73f1b0e4c3b7"), c),
                        d = "<strong>" + _("d7ecc20be02635c8fd9ba717df02a66b") + "</strong> " + r;
                        i.find(".village-picture").attr("src", e.image);
                        i.find(".village-delete").attr("src", image_base + "/delete.png");
                        i.find(".village-name").html(l);
                        i.find(".village-info").html(o);
                        i.find(".village-distance").html(d);
                        $("#input_target")[0].style.display="none";
                        $("#place_target").append(i[0]);
                        $("#" + e.id)[0].addEventListener("click", function() {
                            t.value = "";
                            $("#input_target")[0].style.display="inline";
                            this.remove();
                        });
                    } else {
                        t.value = "";
                    }
                });
            }
        });
    });
};

function calcular() {

    var tiempoDeViaje, ritmo, lanzamiento, a, b, c;
    var objetivo = $("#input_target")[0].value;

    if($("#unit_input_snob")[0].value != "") ritmo = 2100;
    else if($("#unit_input_ram")[0].value != "" || $("#unit_input_catapult")[0].value != "") ritmo = 1800;
    else if($("#unit_input_sword")[0].value != "") ritmo = 1320;
    else if($("#unit_input_spear")[0].value != "" || $("#unit_input_axe")[0].value != "") ritmo = 1080;
    else if($("#unit_input_heavy")[0].value != "") ritmo = 660;
    else if($("#unit_input_light")[0].value != "" || $("#unit_input_knight")[0].value != "") ritmo = 600;
    else if($("#unit_input_spy")[0].value != "") ritmo = 540;
    else return UI.ErrorMessage("No se ha seleccionano ninguna unidad"), -1;

    if(ritmo == -1) return -1;
    if(objetivo == "") return void UI.ErrorMessage("No se ha seleccionado un pueblo objetivo");

    tiempoDeViaje = Math.round(Math.sqrt(Math.pow(game_data.village.coord.substr(0,3) - objetivo.substr(0,3), 2) + Math.pow(game_data.village.coord.substr(4,6) - objetivo.substr(4,6), 2)) * ritmo);
    lanzamiento = buildTime($("#arrival")[0].value, $("#day")[0].value, false, tiempoDeViaje);

    if(lanzamiento == -1) return -1;

    a = parseInt(tiempoDeViaje/3600);
    b = parseInt((tiempoDeViaje%3600)/60);
    c = tiempoDeViaje%60;

    alert("Duración: " + ((a<10)?"0"+a:a) + ":" + ((b<10)?"0"+b:b) + ":" + ((c<10)?"0"+c:c) + "\nLanzamiento: " + (lanzamiento.getDate()<10?"0"+lanzamiento.getDate():lanzamiento.getDate()) + "/" + (lanzamiento.getMonth()<9?"0"+(lanzamiento.getMonth()+1):(lanzamiento.getMonth()+1)) + "/" + (lanzamiento.getFullYear()<10?"0"+lanzamiento.getFullYear():lanzamiento.getFullYear()) + " - " + (lanzamiento.getUTCHours()<10?"0"+lanzamiento.getUTCHours():lanzamiento.getUTCHours()) + ":" + (lanzamiento.getUTCMinutes()<10?"0"+lanzamiento.getUTCMinutes():lanzamiento.getUTCMinutes()) + ":" + (lanzamiento.getUTCSeconds()<10?"0"+lanzamiento.getUTCSeconds():lanzamiento.getUTCSeconds()));
};

function programar() {

    var lanzamiento;
    var objetivo = $("#input_target")[0].value;

    if(objetivo == "") return void UI.ErrorMessage("No se ha seleccionado un pueblo objetivo");

    lanzamiento = buildTime($("#launch")[0].value, $("#day")[0].value, true, 0);

    if(lanzamiento == -1) return -1;

    lanzamiento.setUTCMinutes(lanzamiento.getUTCMinutes() + new Date().getTimezoneOffset())
    launch = lanzamiento;
    $("#target_attack")[0].setAttribute("onclick", "sendCommand(3)");
    $("#target_support")[0].setAttribute("onclick", "sendCommand(2)");
    $("#target_snipe")[0].style.display="";
};

function buildTime(hour, day, milliseconds, travelTime) {

    if(milliseconds && hour.length != 12) return UI.ErrorMessage("Hora de llegada incompleta"), -1;
    if(!milliseconds && hour.length != 8) return UI.ErrorMessage("Hora de llegada incompleta"), -1;
    if(day.length != 10) return UI.ErrorMessage("Día de llegada incompleto"), -1;

    hour = hour.split(":");
    day = day.split("/");

    if(hour[0]>23||hour[1]>59||hour[2]>59) return UI.ErrorMessage("Hora de llegada incorrecta"), -1;
    if(day[0]>31||day[1]>12||day[2]<new Date().getFullYear()) return UI.ErrorMessage("Día de llegada incorrecto"), -1;

    day = new Date(Date.UTC(day[2],day[1]-1,day[0],hour[0],hour[1],hour[2],(milliseconds)?hour[3]:0));
    day.setSeconds(day.getSeconds()-travelTime);

    if(day == "Invalid Date") return UI.ErrorMessage("Día y/o hora de lanzamiento incorrectos"), -1;

    return day;
};

var launch;

function sendCommand(command) {
    var data = {
        o: "",
        template_id: "",
        source_village: game_data.village.id,
        spear: $("#unit_input_spear")[0].value,
        sword: $("#unit_input_sword")[0].value,
        axe: $("#unit_input_axe")[0].value,
        spy: $("#unit_input_spy")[0].value,
        light: $("#unit_input_light")[0].value,
        heavy: $("#unit_input_heavy")[0].value,
        ram: $("#unit_input_ram")[0].value,
        catapult: $("#unit_input_catapult")[0].value,
        knight: $("#unit_input_knight")[0].value,
        snob: $("#unit_input_snob")[0].value,
        x: $("#coordX")[0].value,
        y: $("#coordY")[0].value,
        target_type: "coord",
        input: "",
        attack: ((command == 0) ? "Apoyo" : "Ataque")
    };

    //Enviar apoyo normal
    if(command == 0) {
        $.post("/game.php?village=" + game_data.village.id + "&screen=place&try=confirm", data, function(html) {
            $.post("/game.php?village=" + game_data.village.id + "&screen=place&action=command&h=" + game_data.csrf, {support:true,ch:$(html).find('input[name=ch]')[0].value,x:data.x,y:data.y,source_village:data.source_village,spear:data.spear,sword:data.sword,axe:data.axe,spy:data.spy,light:data.light,heavy:data.heavy,ram:data.ram,catapult:data.catapult,knight:data.knight,snob:data.snob}, function() {UI.SuccessMessage("Apoyo enviado");});
        });
    //Enviar ataque normal
    } else if(command == 1) {
        $.post("/game.php?village=" + game_data.village.id + "&screen=place&try=confirm", data, function(html) {
            $.post("/game.php?village=" + game_data.village.id + "&screen=place&action=command&h=" + game_data.csrf, {attack:true,ch:$(html).find('input[name=ch]')[0].value,x:data.x,y:data.y,source_village:data.source_village,spear:data.spear,sword:data.sword,axe:data.axe,spy:data.spy,light:data.light,heavy:data.heavy,ram:data.ram,catapult:data.catapult,knight:data.knight,snob:data.snob,building:"main"}, function() {UI.SuccessMessage("Ataque enviado");});
        });
    //Enviar apoyo programado
    } else if(command == 2) {
        $.post("/game.php?village=" + game_data.village.id + "&screen=place&try=confirm", data, function(html) {
            setTimeout(function(){ $.post("/game.php?village=" + game_data.village.id + "&screen=place&action=command&h=" + game_data.csrf, {support:true,ch:$(html).find('input[name=ch]')[0].value,x:data.x,y:data.y,source_village:data.source_village,spear:data.spear,sword:data.sword,axe:data.axe,spy:data.spy,light:data.light,heavy:data.heavy,ram:data.ram,catapult:data.catapult,knight:data.knight,snob:data.snob}, function() {UI.SuccessMessage("Apoyo programado enviado");}); }, (launch - new Date().getTime()) - (Timing.getCurrentServerTime() - new Date().getTime()));
        });
    //Enviar ataque programado
    } else if(command == 3) {
        $.post("/game.php?village=" + game_data.village.id + "&screen=place&try=confirm", data, function(html) {
            setTimeout(function(){ $.post("/game.php?village=" + game_data.village.id + "&screen=place&action=command&h=" + game_data.csrf, {attack:true,ch:$(html).find('input[name=ch]')[0].value,x:data.x,y:data.y,source_village:data.source_village,spear:data.spear,sword:data.sword,axe:data.axe,spy:data.spy,light:data.light,heavy:data.heavy,ram:data.ram,catapult:data.catapult,knight:data.knight,snob:data.snob,building:"main"}, function() {UI.SuccessMessage("Ataque programado enviado");});}, (launch - new Date().getTime()) - (Timing.getCurrentServerTime() - new Date().getTime()));
        });
    }
};

showTable();

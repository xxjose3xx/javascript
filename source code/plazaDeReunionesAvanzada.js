var pueblos = "488|419 489|418 489|421 488|419 489|418 489|421 488|419 489|418 489|421 488|419 489|418 489|421 488|419 489|418 489|421 488|419 489|418 489|421 488|419 489|418 489|421";
var tabla = '<div class="popup_box show" id="solicitudDeOrden"><div class="popup_box_content"><a class="popup_box_close tooltip-delayed" onclick="document.getElementById(\'solicitudDeOrden\').remove()">&nbsp;</a><h3 id="titulo">Dar órdenes</h3><table><tbody><tr><td rowspan="3" valign="top"><table class="vis" width="100%"><tbody><tr><th>Infantería</th></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_spear.png"></a><input id="spear" style="width: 40px" tabindex="1" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_sword.png"></a><input id="sword" style="width: 40px" tabindex="2" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_axe.png"></a><input id="axe" style="width: 40px" tabindex="3" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap "><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_archer.png"></a><input id="archer" style="width: 40px" tabindex="4" value="" class="unitsInput" type="text"></td></tr></tbody></table></td><td rowspan="3" valign="top"><table class="vis" width="100%"><tbody><tr><th>Caballería</th></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_spy.png"></a><input id="spy" style="width: 40px" tabindex="5" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_light.png"></a><input id="light" style="width: 40px" tabindex="6" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_marcher.png"></a><input id="marcher" style="width: 40px" tabindex="7" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_heavy.png"></a><input id="heavy" style="width: 40px" tabindex="8" value="" class="unitsInput" type="text"></td></tr></tbody></table></td><td valign="top"><table class="vis" width="100%"><tbody><tr><th>Armas de asedio</th></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_ram.png"></a><input id="ram" style="width: 40px" tabindex="9" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_catapult.png"></a><input id="catapult" style="width: 40px" tabindex="10" value="" class="unitsInput" type="text"></td></tr></tbody></table></td><td valign="top"><table class="vis" width="100%"><tbody><tr><th>Otros</th></tr><tr><td class="nowrap "><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_knight.png"></a><input id="knight" style="width: 40px" tabindex="11" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><img src="https://dses.innogamescdn.com/8.71/32187/graphic/unit/unit_snob.png"></a><input id="snob" style="width: 40px" tabindex="12" value="" class="unitsInput" type="text"></td></tr></tbody></table></td><td valign="top"><table class="vis" width="100%"><tbody><tr><th>Coordenadas</th></tr><tr><td class="nowrap unit-input"><a class="unit_link"><b>X </b></a><input id="x" style="width: 40px" tabindex="13" value="" class="unitsInput" type="text"></td></tr><tr><td class="nowrap unit-input"><a class="unit_link"><b>Y </b></a><input id="y" style="width: 40px" tabindex="14" value="" class="unitsInput" type="text"></td></tr></tbody></table></td><td valign="top" style="width: 160px"></td></tr><tr><td colspan="4" valign="top"><input name="opcion" type="radio"><b>Programar Lanzamiento -> </b><span onclick="hoy()">Fecha: </span><input id="fecha" maxlength="10" style="width: 65px" type="text" placeholder="dd/mm/aaaa"> Hora: <input id="hora" maxlength="12" style="width: 70px" type="text" placeholder="hh:mm:ss:mss"></td></tr><tr><td colspan="4" valign="top"><input name="opcion" type="radio"><b>Enviar a lista de pueblos preestablecida   </b><input name="opcion" type="radio" checked="checked"><b>Normal</b></td></tr></tbody></table><br><div id="command_target" class="target-select clearfix float_left"><div style="clear: both; margin-bottom: 5px"><input id="attack" onclick="opciones(this)" tabindex="15" class="attack btn btn-attack btn-target-action" value="Ataque" type="submit"><input id="support" onclick="opciones(this)" tabindex="16" class="support btn btn-support btn-target-action" value="Apoyo" type="submit"></div></div></div></div>';
var ordenesMandadas = "Todos las órdenes fueron mandadas";
var ataqueEnviado = "<b style='color: green'>Ataque envidado</b>";
var ataquePreparado = "<b style='color: red'>Ataque Preparado!!</b>";
var progresoAtaques = "Pueblos atacados: <span id='indice'>0</span>/<span id='total'></span>";
var indice = 0;
var sitter = "";

if (window.game_data.player.sitter != "0") sitter = "t=" + window.game_data.player.id + "&";
pueblos = pueblos.split(" ");
var pueblosLength = pueblos.length;
var datos;

function mostrarTabla() {
	var div = document.createElement(div);
	div.innerHTML = tabla;
	document.body.append(div);
}

function hoy() {
	var aux = new Date();
	document.getElementById("fecha").value = aux.getDate() + "/" + (aux.getMonth()+1) + "/" + aux.getFullYear();
}

function prepararLanzamiento(XHR, datosPost) {
	var hora = document.getElementById("hora").value.split(":");
	var fecha = document.getElementById("fecha").value.split("/");
	var lanzamiento = new Date(fecha[2], fecha[1]-1, fecha[0], hora[0], hora[1], hora[2], hora[3]);
	var lanzamientoAt = lanzamiento.valueOf();

	document.getElementById("titulo").innerHTML = ataquePreparado;
	window.setTimeout(function(){ XHR.send(datosPost);}, parseInt(lanzamientoAt - Timing.getCurrentServerTime())); // Investigar como hacer que no se adelante
}

function solicitarOrden(action, confirmation, opcion) {

	if (datos == undefined) {
		datos = {
			spear: ((document.getElementById("spear").value > 0) ? document.getElementById("spear").value : 0),
			sword: ((document.getElementById("sword").value > 0) ? document.getElementById("sword").value : 0),
			axe: ((document.getElementById("axe").value > 0) ? document.getElementById("axe").value : 0),
			archer: ((document.getElementById("archer").value > 0) ? document.getElementById("archer").value : 0),
			spy: ((document.getElementById("spy").value > 0) ? document.getElementById("spy").value : 0),
			light: ((document.getElementById("light").value > 0) ? document.getElementById("light").value : 0),
			marcher: ((document.getElementById("marcher").value > 0) ? document.getElementById("marcher").value : 0),
			heavy: ((document.getElementById("heavy").value > 0) ? document.getElementById("heavy").value : 0),
			ram: ((document.getElementById("ram").value > 0) ? document.getElementById("ram").value : 0),
			catapult: ((document.getElementById("catapult").value > 0) ? document.getElementById("catapult").value : 0),
			knight: ((document.getElementById("knight").value > 0) ? document.getElementById("knight").value : 0),
			snob: ((document.getElementById("snob").value > 0) ? document.getElementById("snob").value : 0),
			x: document.getElementById("x").value,
			y: document.getElementById("y").value
		};
	}
	if(opcion == 2) {
		var coordenada = pueblos[indice].split("|");
	} else {
		var coordenada = [datos.x, datos.y];			
	}
	
	var datosPost = "e467030c46cd4e27cfb9ca=12250664e46703&template_id=&source_village=" + window.game_data.village.id + "&spear=" + datos.spear + "&sword=" + datos.sword + "&axe=" + datos.axe + "&archer=" + datos.archer + "&spy=" + datos.spy + "&light=" + datos.light + "&marcher=" + datos.marcher + "&heavy=" + datos.heavy + "&ram=" + datos.ram + "&catapult=" + datos.catapult + "&knight=" + datos.knight + "&snob=" + datos.snob + "&x=" + coordenada[0] + "&y=" + coordenada[1] + "&target_type=coord&input=&" + action + "=" + confirmation;
	var XHR = new XMLHttpRequest();

	XHR.open('POST', 'https://' + window.location.host + '/game.php?' + sitter + 'village=' + window.game_data.village.id + '&screen=place&try=confirm');
	XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	XHR.setRequestHeader("Content-length", datosPost.length);


	XHR.addEventListener('load', function(event) {
		var ch = new RegExp(/name="ch" value=\"([\w]+:[\w]+)\"/i).exec(XHR.response);
		confirmarOrden(ch[1], action, confirmation, opcion);
	});

	XHR.addEventListener('error', function(event) {
	  alert('Error al enviar solicitud de ataque/apoyo.');
	});

	XHR.send(datosPost);
}

function confirmarOrden(ch, action, confirmation, opcion) {

	if(opcion == 2) {
		var coordenada = pueblos[indice].split("|");
	} else {
		var coordenada = [datos.x, datos.y];			
	}

	var datosPost = action + "=true&ch=" + ch + "&x=" + coordenada[0] + "&y=" + coordenada[1] + "&source_village=" + window.game_data.village.id + "&attack_name=&spear=" + datos.spear + "&sword=" + datos.sword + "&axe= " + datos.axe + "&archer=" + datos.archer + "&spy=" + datos.spy + "&light=" + datos.light + "&marcher=" + datos.marcher + "&heavy=" + datos.heavy + "&ram=" + datos.ram + "&catapult=" + datos.catapult + "&knight=" + datos.knight + "&snob=" + datos.snob + "&building=main";
	var XHR = new XMLHttpRequest();

	XHR.open('POST', 'https://' + window.location.host + '/game.php?' + sitter + 'village=' + window.game_data.village.id + '&screen=place&action=command&h=' + window.game_data.csrf);
	XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	XHR.setRequestHeader("Content-length", datosPost.length);

	// En caso de éxito
	XHR.addEventListener('load', function(event) {

		if(opcion == 2) {
			document.getElementById("indice").innerHTML = indice + 1;
			indice++;
			if(indice == pueblosLength) {
				document.getElementById("titulo").innerHTML = ordenesMandadas;
				indice = 0;
			} else {
				solicitarOrden(action, confirmation, 2);
			}
		} else {
			document.getElementById("titulo").innerHTML = ataqueEnviado;
		}
	});

	// En caso de error
	XHR.addEventListener('error', function(event) {
	  alert('confirmarOrden(ch, action, opcion): Error al confirmar ataque/apoyo.');
	});

	// Enviar petición
	if(opcion == 1) {
		prepararLanzamiento(XHR, datosPost);
	} else {
		XHR.send(datosPost);
	}
}

function opciones(data) {
	var radios = document.getElementsByName("opcion");

	if(radios[0].checked) {
		solicitarOrden(data.id, data.value, 1);
	} else if (radios[1].checked) {
		document.getElementById("titulo").innerHTML = progresoAtaques;
		document.getElementById("total").innerHTML = pueblos.length;
		solicitarOrden(data.id, data.value, 2);
	} else {
		solicitarOrden(data.id, data.value, 3);
	}
}

mostrarTabla();
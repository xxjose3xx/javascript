
/*
Creador: Deagle aka JABERU.
Función: Abrir, enviar y cerrar ventanas con las tropas indicadas a los pueblos de la lista.
Modo de uso: Ejecutar manualmente el script cada vez que este abra o cierre una ventan
             El script detecta si debe abrir una nueva ventana con para atacar a otro
             pueblo, o si debe confirmar el ataque o cerrar la ventana.
             IMPORTANTE: Para su correcto funcionamiento se debe permitir la apertura
             de ventanas emergentes desde el navegador.
             IMPORTANTE: La lista de pueblos así como las unidades de los ataques se debe
             especificar dentro del código en la sección dedicado a ello.
Anotación: La última vez se modificó el script para que bastara con introducir las coordenadas
           de los pueblos objetivo. Esta modificación provoca que haya pueblos alejados
           a los que no se le reconozca la id. Para solucionarlo basta con mover el "minimapa"
           para que cargue en memoria esos pueblos alejados.
*/

javascript: 

var indice = 0;

function autocompletarAtaque() {

	// Tropas que se incluiran en el atque.
	var espadas = 0;
	var hachas = 0;
	var espias = 0;
	var arietes = 1;
	var catapultas = 0;

	document.getElementById("unit_input_sword").value=espadas;
	document.getElementById("unit_input_spy").value=espias;
	document.getElementById("unit_input_ram").value=arietes;
	document.getElementById("unit_input_catapult").value=catapultas;
	document.getElementById("unit_input_axe").value=hachas;
	document.getElementById("target_attack").click();
}

function abrirPueblo() {

	if(typeof pueblos == 'undefined') { // Declarar variables si es la primera ejecución.
		var pueblos = ["478|424", "476|424", "479|422"]; // Coordenadas de los pueblos objetivo.
		var idMiPueblo = game_data.village.id;
		var idPuebloObjetivo;
		var urrl;
	} 

	if(indice<pueblos.length) { // Abrir nueva ventana con "pueblo objetivo" preparado.
		idPuebloObjetivo = TWMap.villages[parseInt(pueblos[indice].substr(0, 3) + pueblos[indice].substr(4, 3))].id; //Este método de extracción de la id de los pueblos puede causar problemas.
		urrl = "game.php?village=" + idMiPueblo + "&screen=place&target=" + idPuebloObjetivo;
		window.open(urrl);
		indice++;
	}
}

function confirmarAtaque() {

	document.getElementById("troop_confirm_go").click();

	window.opener.abrirPueblo(); // Abrir siguiente pueblo y cerrar ventana actual.
	setTimeout( function(){window.close();}, 200); 
}

function main() {

	if (document.URL.lastIndexOf("screen=map") != -1) {
		abrirPueblo();
	} else if (document.URL.lastIndexOf("try=confirm") != -1) {
		confirmarAtaque(); 
	} else if (document.URL.lastIndexOf("screen=place") != -1) {  
		autocompletarAtaque();
	} else {
		alert("Este script debe usarse desde el mapa!");
	}
}

main();

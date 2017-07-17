/*
Creador: Deagle aka JABERU.
Función: Programar el lanzamiento de un ataque para una hora exacta (snipeos).
Modo de uso: Una vez cargado el script estando en la ventana de confirmación
			 del ataque, rellenar todos los campos de fecha y hora. Pulsar el
			 botón "Preparar ataque" y dejar trabajar al script.

			 IMPORTANTE: NO refrescar la página (NO F5) en ningún momento
			 mientras no se haya lanzado el ataque. Esto resetearía el script.

			 IMPORTANTE: Para mayor precisión es recomendable probar el retardo
			 de la página. Para ello, lanza varios ataques de prueba y ajusta el
			 campo "milisec." hasta que se aproxime al tiempo esperado.
Anotación: Puedes seguir trabajando en otra pestaña mientras el script está en
		   ejecución. No hay riesgo de fallo.
*/


javascript:

if(document.URL.indexOf("try=confirm") != -1) {
	var texto = '<p>Fecha' +
	'<input id="n3" maxlength="2" size="2" type="text" placeholder="dia" />' +
	'<input id="n2" maxlength="2" size="2" type="text" placeholder="mes" />' +
	'<input id="n1" maxlength="4" size="4" type="text" placeholder="Año" />' +
	'<input type="button" onclick="hoy()" value="Hoy">' +
	'</p>' +
	'<p>Hora' +
	'<input id="n4" maxlength="2" size="2" type="text" placeholder="hora" />' +
	'<input id="n5" maxlength="2" size="2" type="text" placeholder="minuto" />' +
	'<input id="n6" maxlength="2" size="2" type="text" placeholder="sec." />' +
	'<input id="n7" maxlength="3" size="3" type="text" placeholder="milisec." /></p>' +
	'<p><input type="button" onclick="prepararLanzamiento()" value="Preparar ataque">' +
	'<span id="texto" style="color:red;font-weight: bold"></span></p>';
	$('TD#content_value').append(texto);

	function prepararLanzamiento() {
		var anyo = parseInt(document.getElementById("n1").value);
		var mes = parseInt(document.getElementById("n2").value - 1);
		var dia = parseInt(document.getElementById("n3").value);
		var hora = parseInt(document.getElementById("n4").value);
		var minuto = parseInt(document.getElementById("n5").value);
		var segundo = parseInt(document.getElementById("n6").value);
		var milisegundo = parseInt(document.getElementById("n7").value);

		var lanzamiento = new Date(anyo, mes, dia, hora, minuto, segundo, milisegundo);
		var lanzamientoAt = lanzamiento.valueOf();

		document.getElementById("texto").innerHTML = "Ataque Preparado!!";
		setTimeout(function(){ document.getElementById("troop_confirm_go").click(); }, parseInt(lanzamientoAt - Timing.getCurrentServerTime()));
	}

	function hoy() {

		var aux = new Date();

		document.getElementById("n3").value = aux.getDate();
		document.getElementById("n2").value = aux.getMonth()+1;
		document.getElementById("n1").value = aux.getFullYear();
	}
} else {
	alert("Este script debe usarse desde la ventana de confirmación del ataque/apoyo");
}


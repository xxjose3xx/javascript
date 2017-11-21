/*
Creador: Deagle aka JABERU.
Función: Automatiza el envío de la página del asistente de granja.
Modo de uso: Cargar el script en la ventana del asistente de granja y esperar.
             Una vez que el script termine, lanzará una alerta indicándolo.
             Es posible que el script omita algún pueblo objetivo. Para evitarlo
             basta con ajustar el tiempo de repeticin del bucle (por defecto 500ms).
Anotación: Este script funciona también en la versión para navegador móvil.
*/

javascript:

//Constantes
var ventana = "screen=am_farm";
var listaPueblos = "plunder_list";
var botonGo = "troop_confirm_go";
var msg1 = "Fin de la página!";
var msg2 = "Este script se ejecuta desde el asistente de granaja!";

if(document.URL.indexOf(ventana) != -1) {
  
  var listaTr = document.getElementById(listaPueblos).getElementsByTagName("tr");
  var tamanyo = listaTr.length;
  var i = 1;
  var opcionA = parseInt(document.getElementById(listaPueblos).getElementsByTagName("tr")[1].getElementsByTagName("td")[8].getElementsByTagName("a")[0].attributes[1].value.split(" ")[3]);
  var opcionB = parseInt(document.getElementById(listaPueblos).getElementsByTagName("tr")[1].getElementsByTagName("td")[9].getElementsByTagName("a")[0].attributes[1].value.split(" ")[3]);
  
  var bucle = setInterval(enviarAtaque, 500);
  
  function enviarAtaque() {
    
    if(i<tamanyo) {
      Accountmanager.farm.sendUnits(this, parseInt(listaTr[i].id.slice(8)), opcionA); // Editar 'opcionA' o 'opcionB' dependiendo de la plantilla del asistente deseada.
      i++;
    } else {
      alert(msg1);
      clearInterval(bucle);
    }
  }
  
} else {
  alert(msg2);
}

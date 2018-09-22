var hilos = document.getElementById("threadbits_forum_477").children;
var length = hilos.length;
var año = 2018;
var url = new URL(document.URL);
var pagina = parseInt(url.searchParams.get("page"));

for(var i=length-1; i>2; i--) 
  if(hilos[i].children[2].children[0].getElementsByTagName("a")[0].innerText.indexOf(año) == -1)
    hilos[i].remove();

window.onkeyup = function (e) {
  
  var tecla = e.keyCode ? e.keyCode : e.which;

  switch(tecla) {
      
      case 37:
      	pagina > 1 ? url.searchParams.set("page", pagina-1) : url.searchParams.set("page", 1);
      	window.location.href=url;
        break;
      
      case 39:
      	isNaN(pagina)? url.searchParams.set("page", 2) : url.searchParams.set("page", pagina+1);
      	window.location.href=url;
        break;
  }
}

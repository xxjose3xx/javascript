/*
Este código puede haber dejado de funcionar con alguna de las actualizaciones recientes.
Debe ejecutarse desde proxies como greasemonkey, ya que su función es emular la barra de velocidad
propia de la cuenta premium.

Existe una herrmienta para facilitar la tarea de crear la lisa de pueblos para farmear.

DESTACABLE DEL CÓDIGO: - Uso por primera vez de variables como almacén de código HTML.
                       - Inserción de código HTML con '.prepend' y '.append'.
                       - Utilizacin de JQuery ('$()') en sustitución de 'getElementById()'.
*/

var quickbar= 
			'<br class="newStyleOnly">' +
   '<table id="quickbar_outer" align="center" cellspacing="0" width="100%">' +
	            '<tbody><tr>' +
	               '<td>' +
						'<table id="quickbar_inner" style="border-collapse: collapse;" width="100%">' +
							'<tbody><tr class="topborder"> '+
								'<td class="left"> </td>' +
								'<td class="main"> </td>' +
								'<td class="right"> </td>' +
							'</tr>' +
	                        '<tr>' +
								'<td class="left"> </td>' +
								'<td class="main">' +
									'<ul class="menu quickbar">' +	
				                  			'<li><span><a onclick="principal()"><img src="http://cdn.tribalwars.net/graphic//buildings/main.png" alt="Edificio Principal">Edificio Principal</a></span></li>' +																																										 
											'<li><span><a onclick="reclutar()"><img src="http://cdn.tribalwars.net/graphic//buildings/barracks.png" alt="Reclutar">Reclutar</a></span></li>' +																																											 
											'<li><span><a onclick="corte()"><img src="http://cdn.tribalwars.net/graphic//buildings/snob.png" alt="Corte ">Corte </a></span></li>' +																																											 
											'<li><span><a onclick="herrería()"><img src="http://cdn.tribalwars.net/graphic//buildings/smith.png" alt="Herrería">Herrería</a></span></li>' +																																											 
											'<li><span><a onclick="plaza()"><img src="http://cdn.tribalwars.net/graphic//buildings/place.png" alt="Plaza de reuniones">Plaza de reuniones</a></span></li>' +	
											'<li><span><a onclick="mercado()"><img src="http://cdn.tribalwars.net/graphic//buildings/market.png" alt="Mercado">Mercado</a></span></li>' +	
											'<li><span><a onclick="farm()"><img src="http://cdn.guerrastribales.es/8.20/20017/graphic/unit/unit_militia.png?ff93f" id="Granjas" alt="Granjas">Granjas</a></span></li>' +	   

'<script>' +
  'function principal()' +
    '{' + 
    'id = document.getElementById("menu_row2_village").getElementsByClassName("nowrap")[0].attributes[0].value.substring(18,23);' +
	'principal = "game.php?village=" + id + "&screen=main";' +
    'window.open(principal,"_self");' +    
    '}' +
'</script>' +

'<script>' +
  'function reclutar()' +
    '{' + 
    'id = document.getElementById("menu_row2_village").getElementsByClassName("nowrap")[0].attributes[0].value.substring(18,23);' +
	'reclutar = "game.php?village=" + id + "&screen=train";' +
    'window.open(reclutar,"_self");' +  
    '}' +
'</script>' +
    
'<script>' +
  'function corte()' +
    '{' + 
    'id = document.getElementById("menu_row2_village").getElementsByClassName("nowrap")[0].attributes[0].value.substring(18,23);' +
	'corte = "game.php?village=" + id + "&screen=snob";' +
    'window.open(corte,"_self");' +  
    '}' +
'</script>' +
    
'<script>' +
  'function herrería()' +
    '{' + 
    'id = document.getElementById("menu_row2_village").getElementsByClassName("nowrap")[0].attributes[0].value.substring(18,23);' +
	'herrería = "game.php?village=" + id + "&screen=smith";' +
    'window.open(herrería,"_self");' +  
    '}' +
'</script>' +    
    
'<script>' +
  'function plaza()' +
    '{' + 
    'id = document.getElementById("menu_row2_village").getElementsByClassName("nowrap")[0].attributes[0].value.substring(18,23);' +
	'plaza = "game.php?village=" + id + "&screen=place";' +
    'window.open(plaza,"_self");' + 
    '}' +
'</script>' +   
        
'<script>' +
  'function mercado()' +
    '{' + 
       'window.open("game.php?village=18367&screen=market","_self");' +
    '}' +
'</script>' +  
    
'<script>' +
  'function farm()' +
     '{' +
	    'setTimeout(function(){window.open("game.php?village=686&target=2052&screen=place")},0);' +
'setTimeout(function(){window.open("game.php?village=686&target=4476&screen=place")},2000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5777&screen=place")},4000);' +
'setTimeout(function(){window.open("game.php?village=686&target=62&screen=place")},6000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1751&screen=place")},8000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5204&screen=place")},10000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4082&screen=place")},12000);' +
'setTimeout(function(){window.open("game.php?village=686&target=511&screen=place")},14000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1013&screen=place")},16000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1146&screen=place")},18000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5224&screen=place")},20000);' +
'setTimeout(function(){window.open("game.php?village=686&target=659&screen=place")},22000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2222&screen=place")},24000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2571&screen=place")},26000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4955&screen=place")},28000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2224&screen=place")},30000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2314&screen=place")},32000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4915&screen=place")},34000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5393&screen=place")},36000);' +
'setTimeout(function(){window.open("game.php?village=686&target=729&screen=place")},38000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5335&screen=place")},40000);' +
'setTimeout(function(){window.open("game.php?village=686&target=721&screen=place")},42000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5939&screen=place")},44000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4469&screen=place")},46000);' +
'setTimeout(function(){window.open("game.php?village=686&target=3570&screen=place")},48000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5101&screen=place")},50000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2027&screen=place")},52000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2647&screen=place")},54000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2045&screen=place")},56000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5013&screen=place")},58000);' +
'setTimeout(function(){window.open("game.php?village=686&target=680&screen=place")},60000);' +
'setTimeout(function(){window.open("game.php?village=686&target=693&screen=place")},62000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1976&screen=place")},64000);' +
'setTimeout(function(){window.open("game.php?village=686&target=301&screen=place")},66000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5347&screen=place")},68000);' +
'setTimeout(function(){window.open("game.php?village=686&target=17297&screen=place")},70000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4900&screen=place")},72000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1797&screen=place")},74000);' +
'setTimeout(function(){window.open("game.php?village=686&target=195&screen=place")},76000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5542&screen=place")},78000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1742&screen=place")},80000);' +
'setTimeout(function(){window.open("game.php?village=686&target=3949&screen=place")},82000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4603&screen=place")},84000);' +
'setTimeout(function(){window.open("game.php?village=686&target=3683&screen=place")},86000);' +
'setTimeout(function(){window.open("game.php?village=686&target=3684&screen=place")},88000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2389&screen=place")},90000);' +
'setTimeout(function(){window.open("game.php?village=686&target=323&screen=place")},92000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2568&screen=place")},94000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5727&screen=place")},96000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4542&screen=place")},98000);' +
'setTimeout(function(){window.open("game.php?village=686&target=960&screen=place")},100000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4970&screen=place")},102000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2583&screen=place")},104000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1147&screen=place")},106000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2905&screen=place")},108000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2735&screen=place")},110000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2820&screen=place")},112000);' +
'setTimeout(function(){window.open("game.php?village=686&target=6180&screen=place")},114000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1595&screen=place")},116000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2840&screen=place")},118000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2964&screen=place")},120000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4660&screen=place")},122000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2110&screen=place")},124000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2208&screen=place")},126000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1371&screen=place")},128000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1798&screen=place")},130000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4043&screen=place")},132000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5694&screen=place")},134000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2876&screen=place")},136000);' +
'setTimeout(function(){window.open("game.php?village=686&target=1281&screen=place")},138000);' +
'setTimeout(function(){window.open("game.php?village=686&target=4676&screen=place")},140000);' +
'setTimeout(function(){window.open("game.php?village=686&target=3068&screen=place")},142000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5447&screen=place")},144000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2654&screen=place")},146000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2656&screen=place")},148000);' +
'setTimeout(function(){window.open("game.php?village=686&target=5857&screen=place")},150000);' +
'setTimeout(function(){window.open("game.php?village=686&target=2046&screen=place")},152000);' +
'setTimeout(function(){window.open("game.php?village=686&target=6084&screen=place")},154000);' +

    '}' +    
'</script>' +  
                                     '</ul>' +
                                '</td>' +
								'<td class="right"></td>' +
							'</tr>' +
							'<tr class="bottomborder">' +
								'<td class="left"> </td>' +
								'<td class="main"> </td>' +
								'<td class="right"> </td>' +
							'</tr>' +
							'<tr>' +
								'<td class="shadow" colspan="3">' +
									'<div class="leftshadow"> </div>' +
									'<div class="rightshadow"> </div>' +
								'</td>' +
							'</tr>' +
						'</tbody></table>' +
					'</td>' +
				'</tr>' +
			'</tbody></table>';

var desplegable = //A continuación se definen como variable lo que biene siendo el botón desplegable con la lista de todos los pueblos
												                                        '<td class="box-item">' +
    '<script type="text/javascript">' +
												//<![CDATA[
	                                        		'villageDock.saveLink = "/game.php?village=42890&ajaxaction=dockVillagelist&h=7d60&screen=overview";		                                        	villageDock.loadLink = "/game.php?village=42890&mode=overview&ajax=load_groups&screen=groups";' +
		                                        	'villageDock.docked = 0;' +

													'$(function() {' +
				                                        'if(villageDock.docked) {' +
					                                        'villageDock.open();' +
				                                        '}' +
													'});' +
		                                        //]]>
   
		                                        '</script>' +
	                                        	'<a href="#" id="open_groups" onclick="return villageDock.open(event);"><span class="icon header arr_down"></span></a>' +
												'<a href="#" id="close_groups" onclick="return villageDock.close(event);" style="display: none;"><span class="icon header arr_up"></span></a>' +
	                                            '<input id="popup_close" value="cerrar" type="hidden">' +
	                                            '<input value="/game.php?village=42890&amp;ajax=load_villages_from_group&amp;mode=overview&amp;screen=groups" id="show_groups_villages_link" type="hidden">' +
	                                            '<input value="/game.php?screen=overview" id="village_link" type="hidden">' +
	                                            '<input value="overview" id="group_popup_mode" type="hidden">' +
	                                            '<input value="Grupo:" id="group_popup_select_title" type="hidden">' +
	                                            '<input value="Pueblo" id="group_popup_villages_select" type="hidden">' +
	                                        '</td>';

$('.maincell').prepend(quickbar);
$('TR#menu_row2').append(desplegable);

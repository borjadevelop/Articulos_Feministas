
$( document ).ready(function(){

  $.getJSON( "https://rawgit.com/borjadevelop/Articulos_Feministas/Pruebas/json/json1.json", function( jsonObject  ) {
    pintar(jsonObject);
  });

});



function pintar(json){

  $.each( json, function( i, noticia ) {
    $("#container text-center").append($('<div >',{id:"row"+(i+1)}));
    	$("#"+"row"+(i+1)).append($('<div>',{class:"col-sm-5" ,id :"imgdiv"+(i+1)}));
    		$("#"+"imgdiv"+(i+1)).append($('<img>',{url:"img/noticias/noticia1/imgM1.png", class:"img-responsive", style:"width:100%", alt:"Image"}));
    		$("#"+"imgdiv"+(i+1)).append($('<p>',{text:noticia.foto}));
    		$("#"+"row"+(i+1)).append($('<div>',{class:"col-sm-5", id:"divtot"+(i+1)}));
    			$("#"+"divtot"+(i+1)).append($('<h3>',{text:noticia.tittle}));
    			$("#"+"divtot"+(i+1)).append($('<hr />',{}));
    			$("#"+"divtot"+(i+1)).append($('<p>',{text:noticia.descripcion}));
    			$("#"+"divtot"+(i+1)).append($('<hr />',{}));
    			$("#"+"divtot"+(i+1)).append($('<small>', {text: noticia.autorYNoticia}));
    		$("#"+"separator"+(i+1)).append($('<div>',{class:"col-sm-12", id:"separator"+(i+1)}));
    		$("#"+"separator"+(i+1)).append($('<hr />',{}));




  });






  /*
Activar el scroll down
$(window).scroll(function(){
	if ($(window).scrollTop()+ $(window).height() == $(document).height()- 100) { alert("bottom!000");}

})

Subir el scroll al top de la pagina
$(window).scrollTop(0);

*/

}
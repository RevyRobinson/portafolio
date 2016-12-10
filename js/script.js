/*elevator speech*/

/*$('elev-speech-bloque-1').on('click', function(){
	$('#elev-speech-bloque-1').addClass('show-speech animated fadeInLeft');
	$('#elev-speech-bloque-1').removeClass('hidden-speech-1');
});*/

$('.proyects a').on('click',function(ev){
	// aca coloco la reaccion de hacer click en un a
	ev.preventDefault();

	// selecciono el li padre del "a" pulsado, y le pongo clase "active"
	$(this).parent().addClass('active');
	// selecciono todos los hermanos del li anterior, y les saco la clase "active"
	$(this).parent().siblings().removeClass('active');

	var href_pulsada = $(this).attr('href');

	$('.tab-content > div').not(href_pulsada).hide();
	$(href_pulsada).fadeIn('slow');
});

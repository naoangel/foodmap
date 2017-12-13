$(document).ready(function(){
  setInterval(function() {
    $('.uno').hide();
    $('.dos').show();
  }, 2000);

var cont = $('#container');
    
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "china") {
      cont.html('<p>Hola esto es un append Chino</p><img src="http://www.moonkitty.net/avatars/new-sailor-moon-images/new-sailor-moon-image-icon36.jpg"/><img src="http://www.moonkitty.net/avatars/new-sailor-moon-images/new-sailor-moon-image-icon36.jpg"/>');
      }
      if( selection === "venezolana") {
      cont.html('<p>Hola esto es un append Venezolano</p> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/>');
      }
      if( selection === "arabe") {
      cont.html('<p>Hola esto es un append Árabe</p> <img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/><img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/>');
      }
      if( selection === "peruana") {
      cont.html('<p>Hola esto es un append Peruano</p> <img src="https://v.dreamwidth.org/303319/106183"/><img src="https://v.dreamwidth.org/303319/106183"/>');
      }
})


	$('.contenedor').mouseover(function () {
	    $('.itfood-over').show();
	}).mouseout(function () {
	    $('.itfood-over').hide();
	});




});
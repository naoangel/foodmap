$(document).ready(function(){
  setInterval(function() {
    $('.uno').hide();
    $('.dos').show();
  }, 2000);

var cont = $('#food-box');
    
    $('#selector').on('change', function() {
    	var selection = $('#selector').val();
      //cont.text(selection);
      if( selection === "1") {
	      $('.food').hide();
	      cont.html('<div class="col-xs-12 col-md-12"><p class="text-food">¡Hola¡ Estas son tus opciones más cercanas de comida mexicana:</p></div><img class="img-shape mxfood" src="assets/images/mex1.jpg" alt="Híjole" data-toggle="modal" data-target="#myModalMex" ><img class="img-shape mxfood" src="assets/images/mex2.jpg" alt="Andale Andale" data-toggle="modal" data-target="#myModalMex"><img class="img-shape" src="assets/images/Tacos 700x420.jpg" data-toggle="modal" data-target="#myModalMex">');
      }

      if( selection === "2") {
      	$('.food').hide();
      	cont.html('<div class="col-xs-12 col-md-12"><p>¡Hola¡ Estas son tus opciones más cercanas de comida italiana:</p></div> <img class="img-shape itfood" src="assets/images/pizza.jpg" alt="Luigi" data-toggle="modal" data-target="#myModal"><img class="img-shape itfood" src="assets/images/lasagna.jpg" alt="Mario" data-toggle="modal" data-target="#myModal"><img class="img-shape itfood" src="assets/images/italia.jpg" alt="Mamma mía" data-toggle="modal" data-target="#myModal"></div>');
      }
      if( selection === "3") {
      	$('.food').hide();
      	cont.html('<div class="col-xs-12 col-md-12"><p>¡Hola¡ Estas son tus opciones más cercanas de comida japonesa:</p></div><img class="img-shape jpfood" src="assets/images/RAMEN.jpg" alt="aki" data-toggle="modal" data-target="#myModalJpn"><img class="img-shape jpfood" src="assets/images/ROLLS.jpg" alt="hana" data-toggle="modal" data-target="myModalJpn"><img class="img-shape jpfood" src="assets/images/moar nigiris.jpg" alt="kakikukeko" data-toggle="modal" data-target="#myModalJpn">');
      }
      if( selection === "4") {
      	$('.food').hide();
      	cont.html('<div class="col-xs-12 col-md-12"><p>¡Hola¡ Estas son tus opciones más cercanas de comida thai:</p></div><img class="img-shape tifood" src="assets/images/tai dos.jpg" data-toggle="modal" data-target="#myModalThai"><img class="img-shape tifood" src="assets/images/tai 4.jpg" data-toggle="modal" data-target="#myModalThai">');
      }
});

/*
*   $('.close-btn').click(function(){
*			$('.dos').show();    	
*    }
*
*});
*/

	$('.contenedor').mouseover(function () {
	    $('.itfood-over').show();
	}).mouseout(function () {
	    $('.itfood-over').hide();
	});




});
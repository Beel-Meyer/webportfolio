$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
  });
  

  /* En el onLoad, pongo checked el primer radio */

  $(function() {
    var $radios = $('input:radio[name=selector]');
    if($radios.is(':checked') === false) {
        $radios.filter('[id=rad1]').prop('checked', true);
    }
  });
  

  /* Logica para ocultar imagen segun Radio checked */

  $("#rad1").click (function(){
    $("#selecUno").show();
    $("#selecDos").hide();
    $("#selecTres").hide();
    $("#selecCuatro").hide();
 });

  $("#rad2").click (function(){
    $("#selecDos").show();
    $("#selecUno").hide();
    $("#selecTres").hide();
    $("#selecCuatro").hide(); 
  });

  $("#rad3").click (function(){
    $("#selecTres").show();
    $("#selecDos").hide();
    $("#selecUno").hide(); 
    $("#selecCuatro").hide();
  });

  $("#rad4").click (function(){
    $("#selecCuatro").show();
    $("#selecTres").hide();
    $("#selecDos").hide();
    $("#selecUno").hide(); 
  });



  /* botones + y - cantidad */
  
  // This button will increment the value
  $('.qtyplus').click(function(e){
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
        // Increment
        $('input[name='+fieldName+']').val(currentVal + 1);
    } else {
        // Otherwise put a 0 there
        $('input[name='+fieldName+']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
          // Decrement one
          $('input[name='+fieldName+']').val(currentVal - 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });


  // botón de subir imágenes 
  $(".subirBoton").click (function(){
    $("#fileInput").click();
  });

  
});
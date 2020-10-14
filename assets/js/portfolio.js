$(document).ready(function(){
    $("#cerrarMsj").click(function(){
      $(".mensaje").slideUp();
    });
  });

/* $(document).ready(function(){
  $("#filtroTec").click(function(){
    $("#ListaTec").slideDown();
  });
}); */

/* MANEJO DEL DISPLAY DEL MENU */

$('#filtroTec').click(function(e){    
  if($('#ListaTec').is(':visible')) {
      $('#ListaTec').slideUp('fast');
      $('#filtroTec').removeClass("buttonFActive");
  }
  else{
    $('#ListaCon').slideUp('fast');
    $('#ListaTec').slideDown('fast');
    $('#filtroTec').addClass("buttonFActive");
    $('#filtroCon').removeClass("buttonFActive");
  }
});

$('#filtroCon').click(function(e){    
  if($('#ListaCon').is(':visible')) {
      $('#ListaCon').slideUp('fast');
      $('#filtroCon').removeClass("buttonFActive");
  }
  else{
    $('#ListaTec').slideUp('fast');
    $('#ListaCon').slideDown('fast');
    $('#filtroCon').addClass("buttonFActive");
    $('#filtroTec').removeClass("buttonFActive");
  }
});
$('#btnForm').click(function(e){    
  $('#btnForm').addClass("buttonAActive");
  $('#btnTec').removeClass("buttonAActive");
  $('#btnExp').removeClass("buttonAActive");
  $('#btnPers').removeClass("buttonAActive");
  window.location.href='#FORM'
});

$('#btnTec').click(function(e){    
    $('#btnTec').addClass("buttonAActive");
    $('#btnForm').removeClass("buttonAActive");
    $('#btnExp').removeClass("buttonAActive");
    $('#btnPers').removeClass("buttonAActive");
    window.location.href='#CONO'
});

$('#btnExp').click(function(e){    
    $('#btnExp').addClass("buttonAActive");
    $('#btnForm').removeClass("buttonAActive");
    $('#btnTec').removeClass("buttonAActive");
    $('#btnPers').removeClass("buttonAActive");
    window.location.href='#EXPE'
});

$('#btnPers').click(function(e){    
  $('#btnPers').addClass("buttonAActive");
  $('#btnForm').removeClass("buttonAActive");
  $('#btnTec').removeClass("buttonAActive");
  $('#btnExp').removeClass("buttonAActive");
  window.location.href='#PERS'
});



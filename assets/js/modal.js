
$(document).ready(function(){

  /* Apertura de Modal por JQuery */
  $('.imagenPortfolio').click(function(e){
    $('#myModal').fadeIn('fast');
  });

    /* Cierre de modal por boton con JQuery */
    $('#closeBtn').click(function(e){ 
      $('#myModal').fadeOut('fast');
    });

  // Get the modal
  var modal = document.getElementById('myModal');

  // When the user clicks anywhere outside of the modal, close it

    /* Cierre de modal con JQuery */
  window.onclick = function(event) {
    if (event.target == modal) {
      $('#myModal').fadeOut('fast');
    }
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

});
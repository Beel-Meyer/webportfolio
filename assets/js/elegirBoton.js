/* Control de boton elegido en NAV */

function selectContent(id){
    var botonPort= document.getElementById('btnPort');
    var botonInfo= document.getElementById('btnInfo');
    /*var botonComi= document.getElementById('btnCom');*/
    if (id === "btnPort") {
        botonPort.classList.add("buttonActive");
        botonInfo.classList.remove("buttonActive");
        /*botonComi.classList.remove("buttonActive");*/
        window.location.href='#PRF';
    }
    else if (id === "btnInfo") {
        botonPort.classList.remove("buttonActive");
        botonInfo.classList.add("buttonActive");
        /*botonComi.classList.remove("buttonActive");*/
        window.location.href='#INF';
    }
    /*else if (id === "btnCom"){
        botonPort.classList.remove("buttonActive");
        botonInfo.classList.remove("buttonActive");
        botonComi.classList.add("buttonActive");
        window.location.href='#CMS';
    }*/
}

/* Control de boton elegido al scrollear */

/* $(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidenav li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
} */


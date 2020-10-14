

/* Control de boton elegido en NAV */

    function selectContent(id){
        var botonPort= document.getElementById('btnPort');
        var botonInfo= document.getElementById('btnInfo');
        var botonComi= document.getElementById('btnCom');
        if (id === "btnPort") {
            botonPort.classList.add("buttonActive");
            botonInfo.classList.remove("buttonActive");
            botonComi.classList.remove("buttonActive");
            window.location.href='#PRF';
        }
        else if (id === "btnInfo") {
            botonPort.classList.remove("buttonActive");
            botonInfo.classList.add("buttonActive");
            botonComi.classList.remove("buttonActive");
            window.location.href='#INF';
        }
        else if (id === "btnCom"){
            botonPort.classList.remove("buttonActive");
            botonInfo.classList.remove("buttonActive");
            botonComi.classList.add("buttonActive");
            window.location.href='#CMS';
        }
    }



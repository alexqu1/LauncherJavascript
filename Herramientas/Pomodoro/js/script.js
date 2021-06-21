var inter, t = 99;

var m;

var inter2, t2 = 99;

var m2;


var inter3, t3 = 99;

var m3;


function interval() {
    document.getElementById("parar").style.fontSize = "15px";
    document.getElementById("parar2").style.fontSize = "0px";
    document.getElementById("parar3").style.fontSize = "0px";
    document.getElementById("preloader").style.animationPlayState = "running";
    document.getElementById("start").style.fontSize = "0px";
    document.getElementById("reiniciar").style.fontSize = "0px";

    document.getElementById("menu1").style.background = "#f87072";
    document.getElementById("menu2").style.background = "transparent";
    document.getElementById("menu3").style.background = "transparent";


    m = document.getElementById("mim").value;

    inter = setInterval(function() {

        if (t === 0) {
            t = 99;
            m -= 1

        }

        if (m === -1) {
            clearInterval(inter);
            descansoCorto();

            m = document.getElementById("mim").value;
            inter, t = 0;


        }

        document.getElementById("minutes").innerHTML = m

        document.getElementById("seconds").innerHTML = t--;



    }, 1000, "JavaScript");
    t = 5;
}


// Descanso Corto




var contador = 0;

function descansoCorto() {
    document.getElementById("parar").style.fontSize = "0px";
    document.getElementById("parar2").style.fontSize = "15px";
    document.getElementById("parar3").style.fontSize = "0px";
    document.getElementById("preloader").style.animationPlayState = "running";
    document.getElementById("start").style.fontSize = "0px";
    document.getElementById("reiniciar").style.fontSize = "0px";

    document.getElementById("menu1").style.background = "transparent";
    document.getElementById("menu2").style.background = "#f87072";
    document.getElementById("menu3").style.background = "transparent";

    var IntervaloDescansolargo = document.getElementById("LInterval").value;

    m2 = document.getElementById("sBreak").value;

    inter2 = setInterval(function() {

        if (t2 === 0) {
            t2 = 99;
            m2 -= 1

        }

        document.getElementById("minutes").innerHTML = m2
        document.getElementById("seconds").innerHTML = t2--;

        if (contador == IntervaloDescansolargo) {
            clearInterval(inter2);

            descansolargo();
            contador = 0;

        } else if (m2 === -1) {
            clearInterval(inter2);
            contador += 1;
            interval();
            m2 = document.getElementById("sBreak").value;
            inter2, t2 = 0;

        }

    }, 1000, "JavaScript");
    t2 = 10;
}

// Descanso Largo



function descansolargo() {
    document.getElementById("parar").style.fontSize = "0px";
    document.getElementById("parar2").style.fontSize = "0px";
    document.getElementById("parar3").style.fontSize = "15px";
    document.getElementById("preloader").style.animationPlayState = "running";
    document.getElementById("start").style.fontSize = "0px";
    document.getElementById("reiniciar").style.fontSize = "0px";

    document.getElementById("menu1").style.background = "transparent";
    document.getElementById("menu2").style.background = "transparent";
    document.getElementById("menu3").style.background = "#f87072";


    m3 = document.getElementById("lBreak").value;

    inter3 = setInterval(function() {

        if (t3 === 0) {
            t3 = 99;
            m3 -= 1

        }

        if (m3 === -1) {
            clearInterval(inter3);
            interval()

            m3 = document.getElementById("lBreak").value;
            inter3, t3 = 0;
        }

        document.getElementById("minutes").innerHTML = m3
        document.getElementById("seconds").innerHTML = t3--;



    }, 1000, "JavaScript");
    t3 = 15;
}





function pause(num) {

    document.getElementById("preloader").style.animationPlayState = "paused";
    document.getElementById("start").style.fontSize = "15px";
    document.getElementById("parar").style.fontSize = "0px";
    document.getElementById("parar2").style.fontSize = "0px";
    document.getElementById("parar3").style.fontSize = "0px";

    if (num === 1) {
        document.getElementById("reiniciar").style.fontSize = "15px";
        clearInterval(inter);
        m = document.getElementById("minutes").innerHTML = m
        t = document.getElementById("seconds").innerHTML = t;
    }

    if (num === 2) {

        document.getElementById("reiniciar2").style.fontSize = "15px";
        clearInterval(inter2);
        m2 = document.getElementById("minutes").innerHTML = m2
        t2 = document.getElementById("seconds").innerHTML = t2;
    }

    if (num === 3) {

        document.getElementById("reiniciar3").style.fontSize = "15px";
        clearInterval(inter3);
        m3 = document.getElementById("minutes").innerHTML = m3
        t3 = document.getElementById("seconds").innerHTML = t3;
    }
}




function continuar(num) {

    document.getElementById("start").style.fontSize = "0px";
    document.getElementById("reiniciar").style.fontSize = "0px";
    document.getElementById("reiniciar2").style.fontSize = "0px";
    document.getElementById("reiniciar3").style.fontSize = "0px";
    document.getElementById("parar").style.fontSize = "15px";



    if (num === 1) {

        inter = setInterval(function() {
            if (t === 0) {
                t = 99;
                m -= 1
            }
            if (m === -1) {
                clearInterval(inter);

                descansoCorto()
            }
            document.getElementById("minutes").innerHTML = m
            document.getElementById("seconds").innerHTML = t--;
        }, 1000, "JavaScript");
    }

    if (num === 2) {

        inter2 = setInterval(function() {
            if (t2 === 0) {
                t2 = 99;
                m2 -= 1
            }
            if (m2 === -1) {
                clearInterval(inter2);
                interval()

            }
            document.getElementById("minutes").innerHTML = m2
            document.getElementById("seconds").innerHTML = t2--;
        }, 1000, "JavaScript");
    }



    if (num === 3) {

        inter3 = setInterval(function() {
            if (t3 === 0) {
                t3 = 99;
                m3 -= 1
            }
            if (m3 === -1) {
                clearInterval(inter3);
                interval()
            }
            document.getElementById("minutes").innerHTML = m3
            document.getElementById("seconds").innerHTML = t3--;
        }, 1000, "JavaScript");


    }


}

function cambiarcolor(num) {


    if (num === 1) {
        document.getElementById("preloader").style.borderTopColor = "#f87072";
    } else if (num === 2) {
        document.getElementById("preloader").style.borderTopColor = " deepskyblue";
    } else if (num === 3) {
        document.getElementById("preloader").style.borderTopColor = "blueviolet";
    }

}




function pintarmodal() {

    document.getElementById('myModal').innerHTML += ` 
         `;

}

function abrirModal() {
    pintarmodal();
    document.getElementById('myModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('myModal').style.display = 'none';
}
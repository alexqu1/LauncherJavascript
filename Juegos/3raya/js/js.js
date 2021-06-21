//iniciar la libreria de animacion
   AOS.init();
//fin



var jugador = 1;

var cuadro1J1 = 0;
var cuadro2J1 = 0;
var cuadro3J1 = 0;
var cuadro4J1 = 0;
var cuadro5J1 = 0;
var cuadro6J1 = 0;
var cuadro7J1 = 0;
var cuadro8J1 = 0;
var cuadro9J1 = 0;


var cuadro1J2 = 0;
var cuadro2J2 = 0;
var cuadro3J2 = 0;
var cuadro4J2 = 0;
var cuadro5J2 = 0;
var cuadro6J2 = 0;
var cuadro7J2 = 0;
var cuadro8J2 = 0;
var cuadro9J2 = 0;


function Pintarimg(params) {


  if (jugador == 1) {
    
      if (params == 1) {
        document.getElementById("cuadro1").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro1J1++
      }
      if (params == 2) {
        document.getElementById("cuadro2").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro2J1++
      }
      if (params == 3) {
        document.getElementById("cuadro3").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro3J1++
      }
      if (params == 4) {
        document.getElementById("cuadro4").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro4J1++
      }
      if (params == 5) {
        document.getElementById("cuadro5").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro5J1++
      }
      if (params == 6) {
        document.getElementById("cuadro6").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro6J1++
      }
      if (params == 7) {
        document.getElementById("cuadro7").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro7J1++
      }
      if (params == 8) {
        document.getElementById("cuadro8").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro8J1++
      }
      if (params == 9) {
        document.getElementById("cuadro9").innerHTML = `<img src="img/cruz.png" alt="" srcset="">`;
        cuadro9J1++
      }
      jugador++
    }
    else{
      if (params == 1) {
        document.getElementById("cuadro1").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro1J2++
      }
      if (params == 2) {
        document.getElementById("cuadro2").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro2J2++
      }
      if (params == 3) {
        document.getElementById("cuadro3").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro3J2++
      }
      if (params == 4) {
        document.getElementById("cuadro4").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro4J2++
      }
      if (params == 5) {
        document.getElementById("cuadro5").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro5J2++
      }
      if (params == 6) {
        document.getElementById("cuadro6").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro6J2++
      }
      if (params == 7) {
        document.getElementById("cuadro7").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro7J2++
      }
      if (params == 8) {
        document.getElementById("cuadro8").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro8J2++
      }
      if (params == 9) {
        document.getElementById("cuadro9").innerHTML = `<img src="img/circulo.png" alt="" srcset="">`;
        cuadro9J2++
      }
      jugador--
    }

    ganador()
}

function ganador(params) {
  
  //Jugador 1
  //Las líneas verticales

  if (cuadro1J1 == 1 && cuadro2J1 == 1 && cuadro3J1 == 1 ) {
    alert("jugador1 gana");
  }

  else if  (cuadro4J1 == 1 && cuadro5J1 == 1 && cuadro6J1 == 1 ) {
    alert("jugador1 gana");
  }
  else if (cuadro7J1 == 1 && cuadro8J1 == 1 && cuadro9J1 == 1 ) {
    alert("jugador1 gana");
  }

    //Las líneas Horizontales
    else if (cuadro1J1 == 1 && cuadro4J1 == 1 && cuadro7J1 == 1 ) {
      alert("jugador1 gana");
    }
  
    else if (cuadro2J1 == 1 && cuadro5J1 == 1 && cuadro8J1 == 1 ) {
      alert("jugador1 gana");
    }
    else if (cuadro3J1 == 1 && cuadro6J1 == 1 && cuadro9J1 == 1 ) {
      alert("jugador1 gana");
    }

    //Lineas diagonales
    else if (cuadro1J1 == 1 && cuadro5J1 == 1 && cuadro9J1 == 1 ) {
      alert("jugador1 gana");
    }
  
    else if (cuadro3J1 == 1 && cuadro5J1 == 1 && cuadro7J1 == 1 ) {
      alert("jugador1 gana");
    }


  //Jugador 2
  if (cuadro1J2 == 1 && cuadro2J2 == 1 && cuadro3J2 == 1 ) {
    alert("jugador2 gana");
  }

  else if  (cuadro4J2 == 1 && cuadro5J2 == 1 && cuadro6J2 == 1 ) {
    alert("jugador2 gana");
  }
  else if (cuadro7J2 == 1 && cuadro8J2 == 1 && cuadro9J2 == 1 ) {
    alert("jugador2 gana");
  }

    //Las líneas Horizontales
    else if (cuadro1J2 == 1 && cuadro4J2 == 1 && cuadro7J2 == 1 ) {
      alert("jugador2 gana");
    }
  
    else if (cuadro2J2 == 1 && cuadro5J2 == 1 && cuadro8J2 == 1 ) {
      alert("jugador2 gana");
    }
    else if (cuadro3J2 == 1 && cuadro6J2 == 1 && cuadro9J2 == 1 ) {
      alert("jugador2 gana");
    }

    //Lineas diagonales
    else if (cuadro1J2 == 1 && cuadro5J2 == 1 && cuadro9J2 == 1 ) {
      alert("jugador2 gana");
    }
  
    else if (cuadro3J2 == 1 && cuadro5J2 == 1 && cuadro7J2 == 1 ) {
      alert("jugador2 gana");
    }



}

function reiniciar() {
  

   jugador = 1;

 cuadro1J1 = 0;
   cuadro2J1 = 0;
   cuadro3J1 = 0;
   cuadro4J1 = 0;
   cuadro5J1 = 0;
   cuadro6J1 = 0;
   cuadro7J1 = 0;
   cuadro8J1 = 0;
   cuadro9J1 = 0;
  
  
   cuadro1J2 = 0;
   cuadro2J2 = 0;
   cuadro3J2 = 0;
   cuadro4J2 = 0;
   cuadro5J2 = 0;
   cuadro6J2 = 0;
   cuadro7J2 = 0;
   cuadro8J2 = 0;
   cuadro9J2 = 0;

for (let i = 1; i < 10 ; i++) {
 
  document.getElementById(`cuadro${i}`).innerHTML = "";
}


}


function CambiarJugador(parametro) {
  jugador = parametro
}
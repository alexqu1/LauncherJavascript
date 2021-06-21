//iniciar la libreria de animacion
   AOS.init();
//fin

//Sonidos

let audioEtiqueta = document.querySelector("audio")

document.addEventListener("keyup", logKey => {
  audioEtiqueta.setAttribute("src", "sonido/people.mp3")
  audioEtiqueta.play()
  
})
//sonido 2
let boton = document.querySelector(".jugar")

boton.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "sonido/campana.mp3")
  etiquetaAudio.play()
})

//sonido 3

//fin

function CerrarModal(){
  document.getElementById("mymodal").style.display ="none";
  }

  function AbrirModal()
  {
    document.getElementById("mymodal").style.display ="flex";
  }

  function CerrarModalGanar()
  {
  document.getElementById("mymodalGanar").style.display ="none"; 
  }
  
  function AbrirModalGanar()
  {
  document.getElementById("mymodalGanar").style.display ="flex";  


  }
   
  function CerrarControles(){
    let x = document.getElementsByClassName("controles");
    let i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    }
  
    function AbrirControles()
    {
      let x = document.getElementsByClassName("controles");
      let i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "flex";
      }
      
    }
//contador tiempo
    var inter, t = 99;

    var m = 0;


var vida1 = 100;
var vida2 = 100;


var jugador1 ;
var jugador2 ;


var BloqueoP1 = 0;
var AtaqueP1 = 0;

var BloqueoP2 = 0;
var AtaqueP2 = 0;

var contadorGolpeP1 = 1;
var contadorGolpeP2 = 1;

var contadorBloqueo1 = 0;

var contadorBloqueo2 = 0;

inter = setInterval(function() {

  if (t === 0) {
      t = 99;
      m -= 1
  }

  if (m === -1) {
     
      inter, t = 0;
      finTiempo()
  }

  document.getElementById("minutes").innerHTML = m

  document.getElementById("seconds").innerHTML = t--;



}, 1000, "JavaScript");
t = 99;




function finTiempo() {
    if (m <=0 && t<=0) {
      if (vida1 < vida2) {
        vida1 = 0
        ganador()
      }else  if (vida2 < vida1) {
        vida2 = 0
        ganador()
      }else{
        document.getElementById("ganador").innerHTML ="Se acabo el tiempo" + ` <p>Empate<p>` ;
        AbrirModalGanar()
      }


      
    }

}





function jugar() {

  //añadir foto
  // let personajep1 =document.getElementById("personajep1").value ;
  // let extraida1 = personajep1.substring(12);
  // personajep1 = document.getElementById("caracterp1").src="img/" +extraida1 ;


  // let personajep2 = document.getElementById("personajep2").value ;
  // let extraida2 = personajep2.substring(12);
  // personajep2 = document.getElementById("caracterp2").src="img/" +extraida2 ;


  t = 99
  m = 0;

jugador1 =document.getElementById("jugador1").innerHTML =  document.getElementById("inputTitulo").value ;
jugador2 = document.getElementById("jugador2").innerHTML = document.getElementById("inputDescrip").value ;

vida1 = 100;
vida2 = 100;

document.getElementById("vidap1").innerHTML = vida1
document.getElementById("vidap2").innerHTML = vida2

 document.getElementById("vidap1").style.width = "100%";
 document.getElementById("guanteAzul").style.left = "620px";

 document.getElementById("vidap2").style.width = "100%";
 document.getElementById("guanteRojo").style.left = "300px";

 CerrarModal()
 CerrarModalGanar()
}


document.addEventListener('keyup', logKey);

function logKey(e) {



  document.getElementById("vidap1").innerHTML = vida1
  document.getElementById("vidap2").innerHTML = vida2

  if(e.code == "KeyJ"){

    document.getElementById("guanteAzul").style.opacity = "1";
    document.getElementById("guanteAzul").style.left = "250px";
    document.getElementById("vidap1").style.width = `${vida1}%`;

    contadorGolpeP1 = 1;
  }

  if (e.code == "KeyK") {
    document.getElementById("guanteAzul").style.transform = "rotate(270deg)";
    document.getElementById("guanteAzul").style.top = "80px";
    document.getElementById("guanteAzul").style.left = "620px";
    BloqueoP1 = 0;
  }



  if(e.code == "KeyA"){

    document.getElementById("guanteRojo").style.opacity = "1";
    document.getElementById("guanteRojo").style.left = "600px";
    document.getElementById("vidap2").style.width = `${vida2}%`;
    contadorGolpeP2 = 1;

  }


  if (e.code == "KeyS") {
    document.getElementById("guanteRojo").style.transform = "rotate(90deg)";
    BloqueoP1 = 0;
  

  }


}


document.addEventListener('keydown', puños);
function puños(e) {

  CerrarControles()
 
  if(e.code == "KeyJ"){
    document.getElementById("guanteAzul").style.left = "620px";

    AtaqueP1 = 1;
    
    if (contadorGolpeP1 == 1) {
      vida1 = vida1 -5;
      contadorGolpeP1 = 0;
    }
   
  }

  if (e.code == "KeyK") {
    document.getElementById("guanteAzul").style.transform = "rotate(0deg)";
    document.getElementById("guanteAzul").style.top = "30px";
    document.getElementById("guanteAzul").style.left = "580px";
    BloqueoP2 = 1;
  }


  if(e.code == "KeyA"){
    document.getElementById("guanteRojo").style.left = "300px";
    AtaqueP2 = 1;
    if (contadorGolpeP2 == 1) {
      vida2 = vida2 -5;
      contadorGolpeP2 = 0;
    }
 
  }
  if (e.code == "KeyS") {
    document.getElementById("guanteRojo").style.transform = "rotate(0deg)";
    document.getElementById("guanteRojo").style.left = "250px";
    BloqueoP1 = 1;
  }


  if (BloqueoP1 === 1 && AtaqueP1 === 1  ) {
    
 
      contadorBloqueo1++
    if (contadorBloqueo1 < 3) {

      vida1 = vida1 +5;
      AtaqueP1 = 0;
  
    }else  {
      contadorBloqueo1 = 0;
      AtaqueP1 = 0;
      BloqueoP1 = 0;
    }
   
 
  }

  if  (BloqueoP2 === 1 && AtaqueP2 === 1  ) {
    
    contadorBloqueo2++
    if (contadorBloqueo2 < 3) {
   
      
      vida2 = vida2 +5;
      AtaqueP2 = 0;
  
    }else  {
      // document.getElementById("vidap2").style.width = `${vida2}%`;
      console.log("else2")
      contadorBloqueo2 = 0;
      AtaqueP2 = 0;
      BloqueoP2 = 0;
    }

  }


}

 document.addEventListener('keyup', ganador);
function ganador() {
 
  if (vida1 <= 0) {
    document.getElementById("ganador").innerHTML = `${jugador2}  gana`;
    document.getElementById("guanteGanador").innerHTML =  `<img style="margin:2em;width:50%" src="img/guanteAzul.png" alt="" srcset="">`;

    AbrirModalGanar()
   
  }
  else if (vida2 <= 0) {
    document.getElementById("ganador").innerHTML = `${jugador1}  gana`;
    document.getElementById("guanteGanador").innerHTML =  `<img style="margin:2em;width:50%" src="img/guanteRojo.png" alt="" srcset="">`;
    AbrirModalGanar()
}


}

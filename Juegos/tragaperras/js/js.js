//iniciar la libreria de animacion
   AOS.init();
//fin



//declaracion de variables
   var creditos = 0;

//fin

  document.getElementById("creditos").innerHTML = creditos
 
function refrescarCreditos(){

    document.getElementById("creditos").innerHTML = creditos

    document.getElementById("moneda").innerHTML = ``;
    for (var i = 0; i < creditos; i++) {
        document.getElementById("moneda").innerHTML += `
        <img src="img/moneda.png" alt="" class="moneda">
        `
      }
}


  function insertarMoneda(){
      creditos++
      refrescarCreditos()
  }

  function tirar(){
    document.getElementById("alerta").innerHTML = `  `
      if(creditos > 0){
      creditos--
      refrescarCreditos()

      
        //algorismo de maquina
    var num1 = Math.floor((Math.random() * (1 - 4))+4);
    var num2 =Math.floor((Math.random() * (1 - 4))+4);
    var num3 =Math.floor((Math.random() * (1 - 4))+4);  

    if(num1 == 1 && num2 == 1 && num3 == 1 ){
        creditos +=  4
       document.getElementById("alerta").innerHTML = `
       Has Ganado <span class="ganador"> 3 creditos</span>
       `

    }else if(num1 == 2 && num2 == 2 && num3 == 2){
        creditos +=  5
        document.getElementById("alerta").innerHTML = `
        Has Ganado <span class="ganador"> 4 creditos</span>
        `
    }

    else if(num1 == 3 && num2 == 3 && num3 == 3){
        creditos +=  7
        document.getElementById("alerta").innerHTML = `
        Has Ganado <span class="ganador"> 6 creditos</span>
        `
    }
    refrescarCreditos()
    
  


          document.getElementById("caja1").innerHTML = `
          <img src="img/${num1}.png" alt="" class="imagenAleatorio" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1700" >
          `
      
          document.getElementById("caja2").innerHTML = `
          <img src="img/${num2}.png" alt="" class="imagenAleatorio" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1700">
          `

          document.getElementById("caja3").innerHTML = `
          <img src="img/${num3}.png" alt="" class="imagenAleatorio" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1700">
          `
       
      }
      else{
          alert("Inserte Moneda")
      }


  }

  

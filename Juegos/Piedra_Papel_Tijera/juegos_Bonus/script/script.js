// 0 piedra
// 1 tijera
// 2 papel
//3 lagarto
// 4 spock

var score = 0;


const Roca = '<img class="piedra2" src="rock-paper-scissors-master/images/icon-rock.svg">';
const Tijera = '<img class="tijera2" src="rock-paper-scissors-master/images/icon-scissors.svg">';
const Papel = '<img class="papel2" src="rock-paper-scissors-master/images/icon-paper.svg">';
const Lagarto = '<img class="lagarto2" src="rock-paper-scissors-master/images/icon-lizard.svg">';
const Spock = '<img class="spock2" src="rock-paper-scissors-master/images/icon-spock.svg">';

const Ganas = '<p class="textoResultado">WIN</p>';
const Pierdes = '<p class="textoResultado">YOU LOSE</p>';
const Empate = '<p class="textoResultado">EMPATE</p>';

const BotonJugarOtraVez = '  <button class="PlayAgain" onClick="PlayAgain()">PLAY AGAIN</button>';

window.onload = function () {
  if (localStorage.getItem('scoreGuardar') != null)
    score = +localStorage.getItem('scoreGuardar')
  ActualizarScore();
}

function pintar() {
  document.getElementById('contenedor').innerHTML = `
    <div id="triangulo-padre">
        <img src="rock-paper-scissors-master/images/bg-pentagon.svg">
        <div class="piedra">
            <img src="rock-paper-scissors-master/images/icon-rock.svg" onclick="start(0)">
        </div>
        <div class="tijera">
            <img src="rock-paper-scissors-master/images/icon-scissors.svg" onclick="start(1)">
        </div>
        <div class="papel">
            <img src="rock-paper-scissors-master/images/icon-paper.svg" onclick="start(2)">
        </div>
        <div class="lagarto">
            <img src="rock-paper-scissors-master/images/icon-lizard.svg" onclick="start(3)">
        </div>
        <div class="spock">
            <img src="rock-paper-scissors-master/images/icon-spock.svg" onclick="start(4)">
        </div>


    </div>
`
}



function start(num) {
  var aleatorio = Math.floor((Math.random() * 5));
  switch (num) {
    case 0:
      if ( aleatorio === 1 || aleatorio === 3) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            ` 
         ${Roca}
         <div>
         ${Ganas}
         ${BotonJugarOtraVez}
         </div>
            ${elegir(aleatorio)}
         
            
        }
 
           `
      }else if ( aleatorio === 0) {
        document.getElementById('contenedor').innerHTML =
            `
         ${Roca}
            <div>
         ${Empate}
           ${BotonJugarOtraVez}
           </div>
         ${Roca}
          `
      } else   {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
          ${Roca}
          <div>
          ${Pierdes}
           ${BotonJugarOtraVez}
           </div>
          ${elegir(aleatorio)}
           `
      }
      break;
    case 1:
      if ( aleatorio === 2 || aleatorio === 3) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            `
         ${Tijera}
         <div>
         ${Ganas}
         ${BotonJugarOtraVez}
         </div>
         ${elegir(aleatorio)} 
         `
      } else if ( aleatorio === 1) {
        document.getElementById('contenedor').innerHTML =
            `
          ${Tijera} 
          <div>
          ${Empate} 
           ${BotonJugarOtraVez}
            </div>
          ${Tijera}
           `
      } else   {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
          ${Tijera}
          <div>  
          ${Pierdes} 
            ${BotonJugarOtraVez}
            </div>
          ${elegir(aleatorio)}
           `

      }
      break;
    case 2:
      if ( aleatorio === 0 || aleatorio === 4) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            `
           ${Papel} 
              <div>
           ${Ganas}
              ${BotonJugarOtraVez}
                 </div>
           ${elegir(aleatorio)}
            `
      }
      else if (  aleatorio === 2) {
        document.getElementById('contenedor').innerHTML =
            `
            ${Papel} 
               <div>
            ${Empate}
              ${BotonJugarOtraVez}
              </div>
            ${Papel} 
             `
      }
      else  {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
            ${Papel}   
               <div>
            ${Pierdes}
              ${BotonJugarOtraVez}
                 </div>
            ${elegir(aleatorio)}
           `
      }
      break;


    case 3:
      if ( aleatorio === 0 || aleatorio === 2) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            `
           ${Lagarto} 
              <div>
           ${Ganas}
              ${BotonJugarOtraVez}
                 </div>
           ${elegir(aleatorio)}
            `
      }
      else if (  aleatorio === 3) {
        document.getElementById('contenedor').innerHTML =
            `
            ${Lagarto} 
               <div>
            ${Empate}
              ${BotonJugarOtraVez}
              </div>
            ${Lagarto} 
             `
      }
      else  {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
            ${Lagarto}   
               <div>
            ${Pierdes}
              ${BotonJugarOtraVez}
                 </div>
            ${elegir(aleatorio)}
           `
      }
      break;


    case 4:
      if ( aleatorio === 1 || aleatorio === 0) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            `
           ${Spock} 
              <div>
           ${Ganas}
              ${BotonJugarOtraVez}
                 </div>
           ${elegir(aleatorio)}
            `
      }
      else if (  aleatorio === 4) {
        document.getElementById('contenedor').innerHTML =
            `
            ${Spock} 
               <div>
            ${Empate}
              ${BotonJugarOtraVez}
              </div>
            ${Spock} 
             `
      }
      else  {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
            ${Spock}   
               <div>
            ${Pierdes}
              ${BotonJugarOtraVez}
                 </div>
            ${elegir(aleatorio)}
           `
      }
      break;

  }

  ActualizarScore()

  return num;
}


function elegir(aleatorio){
  if (aleatorio === 0){
    return Roca;
  }
  if (aleatorio === 1){
    return Tijera;
  }
  if (aleatorio === 2){
    return Papel;
  }
  if (aleatorio === 3){
    return Lagarto;
  }
  if (aleatorio === 4){
    return Spock;
  }


}

function ActualizarScore() {
  document.getElementById('score').innerHTML = score;
  localStorage.setItem('scoreGuardar', score);

}

function PlayAgain() {
  pintar()
}

function ReiniciarScore() {
  score = 0;
  document.getElementById('score').innerHTML = score;
}

//modal
function pintarmodal() {

  document.getElementById('Rules').innerHTML += ` 
          <div class="cajarules">
      </div>`;
};

function abrirModal() {
  pintarmodal();
  document.getElementById('myModal').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('myModal').style.display = 'none';
}



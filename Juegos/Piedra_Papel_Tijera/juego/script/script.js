// 0 piedra
// 1 tijera
// 2 papel


var score = 0;


const Roca = '<img class="piedra2" src="rock-paper-scissors-master/images/icon-rock.svg">';
const Tijera = '<img class="tijera2" src="rock-paper-scissors-master/images/icon-scissors.svg">';
const Papel = '<img class="papel2" src="rock-paper-scissors-master/images/icon-paper.svg">';

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
    <img src="rock-paper-scissors-master/images/bg-triangle.svg">
    <div class="piedra">
    <img  src="rock-paper-scissors-master/images/icon-rock.svg" onclick="start(0)">
  </div>
<div class="tijera">
    <img  src="rock-paper-scissors-master/images/icon-scissors.svg" onclick="start(1)">
</div>
<div class="papel">
    <img  src="rock-paper-scissors-master/images/icon-paper.svg" onclick="start(2)">
</div>
</div>
</div>
`
}

function start(num) {
  var aleatorio = Math.floor((Math.random() * 3));

  switch (num) {
    case 0:
      if (num === 0 && aleatorio === 1) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            ` 
         ${Roca}
         <div>
         ${Ganas}
         ${BotonJugarOtraVez}
         </div>
         ${Tijera}
           `
      } else if (num === 0 && aleatorio === 2) {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
          ${Roca}
          <div>
          ${Pierdes}
           ${BotonJugarOtraVez}
           </div>
          ${Papel}
           `
      } else if (num === 0 && aleatorio === 0) {
        document.getElementById('contenedor').innerHTML =
            `
         ${Roca}
            <div>
         ${Empate}
           ${BotonJugarOtraVez}
           </div>
         ${Roca}
          `
      }
      break;
    case 1:
      if (num === 1 && aleatorio === 2) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            `
         ${Tijera}
         <div>
         ${Ganas}
         ${BotonJugarOtraVez}
         </div>
         ${Papel} 
         `
      } else if (num === 1 && aleatorio === 0) {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
          ${Tijera}
          <div>  
          ${Pierdes} 
            ${BotonJugarOtraVez}
            </div>
          ${Roca}
           `

      } else if (num === 1 && aleatorio === 1) {
        document.getElementById('contenedor').innerHTML =
            `
          ${Tijera} 
          <div>
          ${Empate} 
           ${BotonJugarOtraVez}
            </div>
          ${Tijera}
           `
      }
      break;
    case 2:
      if (num === 2 && aleatorio === 0) {
        score = score + 1
        document.getElementById('contenedor').innerHTML =
            `
           ${Papel} 
              <div>
           ${Ganas}
              ${BotonJugarOtraVez}
                 </div>
           ${Roca}
            `
      } else if (num === 2 && aleatorio === 1) {
        score = score - 1
        document.getElementById('contenedor').innerHTML =
            `
            ${Papel}   
               <div>
            ${Pierdes}
              ${BotonJugarOtraVez}
                 </div>
            ${Tijera}
           `
      } else if (num === 2 && aleatorio === 2) {
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
      break;


  }

  ActualizarScore()

  return num;
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



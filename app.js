function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function eleccion(jugada) {
  let resultado = "";  
  if(jugada == 1) {
    resultado = "Piedra ✊";
  } else if (jugada == 2) {
    resultado = "Papel 🤚";
  } else if (jugada == 3) {
    resultado = "Tijera ✌";
  }
  return resultado;
}
function combate(jugador) {
  let usuarioChoice = eleccion(jugador);
  pc = aleatorio(1,3);    
  // COMBATE
  if (pc == jugador) {
    infoText.innerHTML = "PC eligió " + eleccion(pc) + ", tu elegiste " + usuarioChoice;
    resultText.innerHTML = "EMPATE";
  } else if (jugador == 1 && pc == 3) {
    infoText.innerHTML = "PC eligió " + eleccion(pc) + ", tu elegiste " + usuarioChoice;
    resultText.innerHTML = "GANASTE";
    triunfos = triunfos + 1;
    userScore.innerHTML = triunfos;
  } else if (jugador == 2 && pc == 1) {
    infoText.innerHTML = "PC eligió " + eleccion(pc) + ", tu elegiste " + usuarioChoice;
    resultText.innerHTML = "GANASTE";
    triunfos = triunfos + 1;
    userScore.innerHTML = triunfos;
  } else if (jugador == 3 && pc == 2) {
    infoText.innerHTML = "PC eligió " + eleccion(pc) + ", tu elegiste " + usuarioChoice;
    resultText.innerHTML = "GANASTE";
    triunfos = triunfos + 1;
    userScore.innerHTML = triunfos;
  } else {
    resultText.innerHTML = "PERDISTE";
    infoText.innerHTML = "PC eligió " + eleccion(pc) + ", tu elegiste " + usuarioChoice;
    perdidas = perdidas + 1;
    pcScore.innerHTML = perdidas;
  }
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let userScore = document.getElementById("user");
let pcScore = document.getElementById("pc");
let infoText = document.getElementById("selectionInfo");
let resultText = document.getElementById("resultInfo");

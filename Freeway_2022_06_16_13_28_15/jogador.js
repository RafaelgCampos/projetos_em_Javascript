let xJog = 375, yJog = 455, speedJog = 3; // Variáveis do jogador
let xJogInicio = xJog, yJogInicio = yJog; // Condições iniciais do jogador
let h = 0, value;

function moveJog(){
  if (keyIsDown("87") && h == 0){
    yJog -= speedJog;
    h++;
  }
  else if (keyIsDown("83"))
    yJog += speedJog;
  else if (keyIsDown("68"))
    xJog += speedJog;
  else if (keyIsDown("65"))
    xJog -= speedJog;
  limiteTela();
  keyReleased();
}

function keyReleased(){
  if (value === 0){
    h = 0;
  }
  return false;
}
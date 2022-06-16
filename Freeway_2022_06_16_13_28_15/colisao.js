let hit;

function limiteTela(){
  if (yJog > height - sizeYjog)
    yJog -= speedJog;
  else if (yJog < 0)
    yJog += speedJog;
  if (xJog > width - sizeXjog)
    xJog -= speedJog;
  else if (xJog < 0)
    xJog += speedJog;
}

function atropela(i){
  hit = collideRectCircle(xCarros[i], yCarros[i], sizeXcarro, sizeYcarro, xJog + sizeXjog / 2, yJog + sizeYjog / 2, sizeYjog);
  if (hit){
    xJog = xJogInicio;
    yJog = yJogInicio;
    hit = false;
    pontos = 0;
    somColisao.play();
  }
}
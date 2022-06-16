let pontos = 0, chegada = 30, recorde = 0;

function placar(){
  if (yJog <= chegada){
    pontos++;
    somPontos.play();
    yJog = yJogInicio;
    xJog = xJogInicio;
  }
  if (pontos > recorde)
    recorde = pontos;
}

function displayPlacar(){
  placar();
  fill(0, 0, 255);
  textSize(25);
  text("Recorde:" + recorde, 10, 30);
  text(pontos, 750, 30);
}
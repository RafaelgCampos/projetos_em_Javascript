function mouX(){
  if (mouseX > 70 && mouseX < 148){
    x = 75;
    mouY();
  }
  else if (mouseX > 148 && mouseX < 252){
    x = 175;
    mouY();
  }
  else if (mouseX > 252 && mouseX < 330){
    x = 275;
    mouY();
  }
}

function mouY(){
  if (mouseY < 148 && mouseY > 70)
    y = 75;
  else if (mouseY > 148 && mouseY < 252)
    y = 175;
  else if (mouseY > 252 && mouseY < 330)
    y = 275;

  jogador();
}
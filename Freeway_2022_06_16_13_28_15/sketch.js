function setup() {
  createCanvas(800, 500);
  //somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  draw_img();
  moveCarro();
  moveJog();
  for (i = 0; i < qntCarros; i++)
    atropela(i);
  displayPlacar();
}
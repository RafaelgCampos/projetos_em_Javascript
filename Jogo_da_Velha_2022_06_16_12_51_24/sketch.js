let xis, zero;
let x, y;
let value = 0;

function preload(){
  xis = loadImage("xis.png");
  zero = loadImage("zero.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mapa();
  desenhar();
  verificacao();
}

function mouseClicked(){
  if (fim == 0)
    mouX();
}

function mapa(){
  fill(0);
  rect(width / 3 + 15, 70, 3, 260);
  rect(width * 2 / 3 - 15, 70, 3, 260);
  rect(70, height / 3 + 15, 260, 3);
  rect(70, height * 2 / 3 - 15, 260, 3);
}

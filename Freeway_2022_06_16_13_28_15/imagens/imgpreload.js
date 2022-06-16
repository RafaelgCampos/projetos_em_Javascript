let imgEstrada, imgAtor, imgCarro1; // Variáveis de Imagens
let imgCarro2, imgCarro3; // Variáveis de Imagens
let sizeXjog = 45, sizeYjog = 45; // Dimensões do jogador
let sizeXcarro = 60, sizeYcarro = 50; // Dimensões dos carros

function preload(){
  imgEstrada = loadImage("imagens/estrada.png");
  imgAtor = loadImage("imagens/ator-1.png");
  imgCarro1 = loadImage("imagens/carro-1.png");
  imgCarro2 = loadImage("imagens/carro-2.png");
  imgCarro3 = loadImage("imagens/carro-3.png");
  imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro2, imgCarro3];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/hurt.mpeg");
  somPontos = loadSound("sons/pontos.wav");
}

function draw_img(){
  image(imgAtor, xJog, yJog, sizeXjog, sizeYjog);
  for (i = 0; i < qntCarros; i++)
    image(imgCarros[i], xCarros[i], yCarros[i], sizeXcarro, sizeYcarro);
}
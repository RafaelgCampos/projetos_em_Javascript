let xCarros = [800, 800, 800, 800, 800, 800]; // Posição x inicial dos carros
let yCarros = [400, 330, 265, 185, 120, 50]; // Posição y inicial dos carros
let velCarros = [3, 4, 2, 5, 2.5, 4]; // Velocidade para todos os carros
let i, qntCarros = yCarros.length; // Variável de controle

function structRuas(rua, ){
  
}


function moveCarro(){
  for (i = 0; i < qntCarros; i++){
    xCarros[i] -= velCarros[i];
    xCarros[i] = retorno(xCarros[i]);
  }
}

function retorno(xCarro){
  if (xCarro < -sizeXcarro)
    return 800;
  return xCarro;
}
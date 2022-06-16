
function verificacao(){
  
  fill(0);
  textSize(30);
  textAlign(CENTER);
  
  if ((i == 1 && k == 1 && m == 1) || (i == 1 && o == 1 && u == 1) || (k == 1 && q == 1 && w == 1) || (o == 1 && q == 1 && s == 1) || (m == 1 && s == 1 && b == 1) || (u == 1 && w == 1 && b == 1) || (i == 1 && q == 1 && b == 1) || (m == 1 && q == 1 && u == 1))
    text ("O jogador 1 venceu!", 200, 40);
  else if ((i == 2 && k == 2 && m == 2) || (i == 2 && o == 2 && u == 2) || (k == 2 && q == 2 && w == 2) || (o == 2 && q == 2 && s == 2) || (m == 2 && s == 2 && b == 2) || (u == 2 && w == 2 && b == 2) || (i == 2 && q == 2 && b == 2) || (m == 2 && q == 2 && u == 2))
    text ("O jogador 2 venceu!", 200, 40);
  else if (j + l + n + p + r + t + v + a + z == 9)
    text ("Empatou!", 200, 40);
}
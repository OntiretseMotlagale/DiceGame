
function rollDice(){

  var randonNumber1 = Math.floor(Math.random() * 6 ) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice"+randonNumber1+".png");

  var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

  if( randonNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " Player 1 WINS! 🏁";

}
  else if(randonNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML =  "Player 2 WINS 🏁";

}
  else{
  document.querySelector("h1").innerHTML = "Draw! 🚩";
}
}

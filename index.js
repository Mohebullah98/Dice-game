function determineWinner(dice1,dice2){
  let dice1Source = "images/dice"+dice1+".png";
  let dice2Source = "images/dice"+dice2+".png";
  document.querySelector(".img1").setAttribute("src",dice1Source);
  document.querySelector(".img2").setAttribute("src",dice2Source);

  let header= document.querySelector("h1");
  if(dice1>dice2){
    header.innerHTML="🚩 Player 1 Wins!";
  }
  else if(dice2>dice1)header.innerHTML="Player 2 Wins! 🚩";
  else header.innerHTML="It's a Draw!";
}

function randomize(){
  let dice1= Math.floor(Math.random()*6+1);
  let dice2= Math.floor(Math.random()*6+1);
  determineWinner(dice1,dice2);
}
function checkRefresh(){
  if (window.performance.navigation.type>0){
    randomize();
  }
}

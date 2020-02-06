class nim {



constructor(player1, player2, victory, total, maxGrab){
  this.player1 = player1;
  this.player2 = player2;
  this.victory = victory;
  this.total = total;
  this.maxGrab = maxGrad;
}

fucntion startGame(){
  player1 = player1("Bob", true);
  player2 = player2("Alice", true);
  victory = false;
  total = 33;
  this.maxGrab = maxGrad;
}


player1(String name, boolean human){
  this.name = "Player One";
  this.human = true;
}

player2(String name, boolean human){
  this.name = "Player Two";
  this.human = true;
}

total(int total){
  this.total = total;
}

maxGrab(){
  maxGrab = 3;
}

maxGrab(int maxGrab){
  this.maxGrab = maxGrab;
}



function victory(String winner){

  //hent ut vinner

  String vinner = (player1.score > player2.score ? player1.name : player2.name);

  alert("vinneren er: " + vinner);

}



function move(){
  //hent ut spiller info og oppdater nim objekt
  constructor();


}

function (){

}


}

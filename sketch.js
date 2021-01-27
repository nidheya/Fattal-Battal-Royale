var database
function setup(){
  canvas = createCanvas(400,400);
  database=firebase.database();
  player1=createSprite(100,200);
  player2=createSprite(300,200);
  player1.shapeColor='blue'
  player2.shapeColor='orange'
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
drawSprites();

if (gameState===1) {
  clear();
  game.play();
}
if (playerCount===2) {
game.update(1)
}
}

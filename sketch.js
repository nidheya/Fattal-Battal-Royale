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
if (gameState===0) {
  if (keyDown('left')) {
    write(-5,0)
  }
  if (keyDown('right')) {
    write(5,0)
  }
  if (keyDown('a')) {
    write1(-5,0)
  }
  if (keyDown('d')) {
    write1(5,0)
  }


}

if (gameState===1) {
  clear();
  game.play();
}
if (playerCount===2) {
game.update(1)
}
}
function write(x,y){
  database.ref().set({
    'x':position.x+x,
    'y':position.y+y,
  });
}
function write1(x,y){
  database.ref().set({
    'x':position1.x+x,
    'y':position1.y+y,
  });
}
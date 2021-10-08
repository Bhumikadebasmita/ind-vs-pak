var indianPlane;
var bullet;
var pakistan1, pakistan2, pakistan3;

var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;

function setup() {
  createCanvas(1000,1000);
  indianPlane=new Indian();
  bullet=new Bullet();
  pakistan1=new Pakistan();
  pakistan2=new Pakistan();
  pakistan3=new Pakistan();
}

function draw() {
  background('skyblue'); 
  
  
  if (keyDown("left"))  
  { 
    indianPlane.moveLeft();
  }
  if (keyDown("right")) 
  { 
    indianPlane.moveRight();
  }
  if (keyDown("up"))
  {
    indianPlane.moveUp();
  }
  if (keyDown("down"))
  {
    indianPlane.moveDown();
  }

  drawSprites();
}
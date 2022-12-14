var path,rocket, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("night-800x800.png");
  rocketImg = loadAnimation("rocket.png","rocket2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
rocket = createSprite(180,340,30,30);
rocket.scale=0.08;
rocket.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);


 leftBoundary.visible = false


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  rocket.x = World.mouseX;
  
  edges= createEdgeSprites();
  rocket.collide(edges[3]);
  rocket.collide(leftBoundary);
  rocket.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

 
  
  drawSprites();
}

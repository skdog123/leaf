var garden,rabbit;
var gardenImg,rabbitImg;
var fall,l1i,l2i,ai;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  l1i = loadImage("redimage.png");
  l2i = loadImage("orangeLeaf.png");
  ai = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 spawnfalls();
  drawSprites();

  rabbit.x=mouseX
}

function spawnfalls() {
  if (frameCount % 60 === 0) {
    fall = createSprite(random(30,370),0,40,10);
    var  skdog= Math.round(random(1,3))
    switch(skdog){
      case 1: fall.addImage(l1i);
      break;
      case 2: fall.addImage(l2i);
      break;
      case 3: fall.addImage(ai);
      break;

    } 
    fall.scale=0.1
    fall.velocityY = 6;
    fall.lifetime = 85
 }
} 
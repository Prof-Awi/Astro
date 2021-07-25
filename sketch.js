var bathanim,eatanim,gymanim,drinkanim,brushanim,sleepanim,moveanim,bgimg
var bath,eat,gym,drink,brush,sleep,move,bg
var astro


function preload(){
  bgimg = loadImage("Images/iss.png")
  sleepanim = loadAnimation("Images/sleep.png")
  bathanim = loadAnimation("Images/bath1.png","Images/bath2.png")
  eatanim = loadAnimation("Images/eat1.png","Images/eat2.png")
  gymanim = loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
  drinkanim = loadAnimation("Images/drink1.png","Images/drink2.png")
  moveanim = loadAnimation("Images/move1.png","Images/move1.png")
  brushanim = loadAnimation("Images/brush.png")

}

function setup() {
  createCanvas(800,400);
  astro = createSprite(400, 200, 50, 50);
  astro.addAnimation("sleeping",sleepanim)
  astro.scale = 0.1
}

function draw() {
  background(bgimg);  
  drawSprites();
  if(keyDown("UP_ARROW")) {
    astro.addAnimation("brushing", brushanim);
    astro.changeAnimation("brushing");
    astro.y = 300;
    astro.x = 400;
    astro.velocityX =  0;
    astro.velocityY = 0;
    }
  
  if(keyDown("DOWN_ARROW")) {
    astro.addAnimation("bath", bathanim);
    astro.changeAnimation("bath");
    astro.y = 300;
    astro.x = 400;
    astro.velocityX =  0;
    astro.velocityY = 0;
    }
  
  if(keyDown("LEFT_ARROW")) {
    astro.addAnimation("sleeping",sleepanim)
    astro.changeAnimation("sleeping");
    astro.y = 300;
    astro.x = 400;
    astro.velocityX =  0;
    astro.velocityY = 0;
    }
  if(keyDown("RIGHT_ARROW")) {
    astro.addAnimation("move",moveanim)
    astro.changeAnimation("move");
    astro.y = 300;
    astro.velocityX =  1;
    astro.velocityY = 0;
    }
    if(keyDown("G")) {
      astro.addAnimation("gym",gymanim)
      astro.changeAnimation("gym");
      astro.y = 300;
      astro.x = 400;

      astro.velocityX =  0;
      astro.velocityY = 0;
      }
}


  
  



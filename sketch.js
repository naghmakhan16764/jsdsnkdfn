var bg,spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4,iss


function preload(){
  bgImage = loadImage("spacebg.jpg");
  spaceCraft1Image=loadImage("spacecraft1.png");
  spaceCraft2Image=loadImage("spacecraft2.png");
  spaceCraft3Image=loadImage("spacecraft3.png");
  spaceCraft4=loadImage("spacecraft4.png");
  issImage=loadImage("iss.png");
 

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  createSprite(400, 200, 50, 50);

  bg = createSprite(100,100)
  bg.addImage(bgImage);
  bg.scale=3

  spaceCraft1=createSprite(200,100);
  spaceCraft1.addImage(spaceCraft1Image);
  spaceCraft1.addImage(spaceCraft2Image);
  spaceCraft1.addImage(spaceCraft3Image);


  iss=createSprite(500,250,30,30);
  iss.addImage(issImage);

  
  
}

function draw() {

  if()
  background(255,255,255);  

  drawSprites();

}
var bg,spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4,iss


function preload(){
  bg = loadImage("spacebg.jpg");
  spaceCraft1=loadImage("spacecraft1.png");
  spaceCraft2=loadImage("spacecraft2.png");
  spaceCraft3=loadImage("spacecraft3.png");
  spaceCraft4=loadImage("spacecraft4.png");
  iss=loadImage("iss.png");
 

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(100,200)
  bg.addImage(spacebg.jpg);

  spaceCraft1=createSprite(200,100);


  
}

function draw() {
  background(255,255,255);  
  bg.display();
  drawSprites();

}
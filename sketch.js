var shipflow, shipbody;
var ocean, seaimg;

function preload(){
seaimg = loadImage("sea.png");
shipflow = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");


}

function setup(){
  createCanvas(2000,950);
 
  ocean = createSprite(400,200);
  ocean.addImage(seaimg);


  shipBody = createSprite(250,500);
  shipBody.addAnimation("ship-1.png", shipflow);

}

function draw() {
  background("blue");

  shipBody.scale = 0.5

   ocean.velocityX = -4;
   if(ocean.x < 0){
      ocean.x = ocean.width/2;
   }

 drawSprites();
}
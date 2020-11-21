var Rec1, Rec2;

function setup() {
    createCanvas(800,600);
   Rec1 = createSprite(750, 50, 50, 50);
   Rec1.debug = true;
   Rec1.shapeColor = "orange";

   Rec2 = createSprite(50,750,50,50);
   Rec2.debug = true;
   Rec2.shapeColor = "orange";

   Rec1.velocityY = 5;
   Rec1.velocityX = -5;
   Rec2.velocityX = 5;
   Rec2.velocityY = -5;

   
  }
  
  function draw() {
    background("black");  

if(Rec1.x - Rec2.x < Rec1.width/2 + Rec2.width/2 &&
    Rec2.x - Rec1.x < Rec1.width/2 + Rec2.width/2 &&
    Rec1.y- Rec2.y < Rec1.height/2 + Rec2.height/2 &&
        Rec2.y - Rec1.y < Rec1.height/2 + Rec2.height/2  ){
    Rec1.velocityX = -1 * Rec1.velocityX;
    Rec2.velocityX = -1 * Rec2.velocityX;
    Rec1.velocityY= -1 * Rec1.velocityY;
    Rec2.velocityY = -1 * Rec2.velocityY;
}


    drawSprites();
  }
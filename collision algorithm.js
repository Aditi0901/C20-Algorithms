var mvRect, fxRect;

function setup() {
  createCanvas(800,400);

  fxRect = createSprite(400, 200, 60, 40);
  fxRect.debug = true;
  fxRect.shapeColor = "green";

  mvRect = createSprite(600, 300, 40, 60);
  mvRect.debug = true;
  mvRect.shapeColor = "green";
}

function draw() {
  background("lightyellow");  

  mvRect.x = mouseX;
  mvRect.y = mouseY;

  console.log(mvRect.x - fxRect.x);

  //chk for overlap
  if(mvRect.x - fxRect.x < mvRect.width/2 + fxRect.width/2 &&
    fxRect.x - mvRect.x < mvRect.width/2 + fxRect.width/2 &&
     mvRect.y - fxRect.y < mvRect.height/2 + fxRect.height/2 &&
     fxRect.y - mvRect.y < mvRect.height/2 + fxRect.height/2){

    mvRect.shapeColor = "red";
    fxRect.shapeColor = "red";
  }else{
    mvRect.shapeColor = "green";
    fxRect.shapeColor = "green";
  }

  drawSprites();
}
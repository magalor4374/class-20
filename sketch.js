function setup() {
  createCanvas(800,400);
 fixedR= createSprite(400, 200, 50, 50);
 movingR= createSprite(300, 200, 90, 50);
}

function draw() {
  background(255,255,255);  
  movingR.x=mouseX;
  movingR.y=mouseY;
  if(movingR.width/2+fixedR.width/2>movingR.x-fixedR.x
    && movingR.width/2+fixedR.width/2>fixedR.x-movingR.x
    &&movingR.height/2+fixedR.height/2>movingR.y-fixedR.y
    &&movingR.height/2+fixedR.height/2>fixedR.y-movingR.y){

    movingR.shapeColor="red";
    fixedR.shapeColor="red";
  }
  else{
    movingR.shapeColor="green";
    fixedR.shapeColor="green";
  }
  drawSprites();
}
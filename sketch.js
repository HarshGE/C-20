var a,b;


function setup() {

  createCanvas(800,400);

  a=createSprite(200, 200, 50, 50);
  b=createSprite(200,100,50,50);

  a.shapeColor='green';
  b.shapeColor='green';
}

function draw() {
  background(255,255,255);  
b.x=World.mouseX;
b.y=World.mouseY;

if(a.x-b.x<a.width/2+b.width/2
  &&b.x-a.x<a.width/2+b.width/2
  &&a.y-b.y<a.height/2+b.height/2
  &&b.y-a.y<a.height/2+b.height/2){
    a.shapeColor='teal';
    b.shapeColor='teal';
  }
else {
  a.shapeColor='green';
  b.shapeColor='green';
}
  

  drawSprites();
}
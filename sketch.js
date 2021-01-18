var car,wall,speed,weight

function setup() {
  createCanvas(2000,1600);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor='red';
  wall=createSprite(1500, 200, 60, 200);
  wall.shapeColor='brown';
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if (wall.x-car.x < car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
   if (deformation>180){
     car.shapeColour='blue';
   }
   if (deformation<180&&deformation>100){
    car.shapeColour='white';
   }
   if (deformation<100){
    car.shapeColour='black';
  }
} 
  drawSprites();
}
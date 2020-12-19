var car,wall;
var speed,weight;
var carImg;

function setup() {
  createCanvas(1366,656);
  
  car=createSprite(50,200,50,50);
  
  

  wall = createSprite(1340,325,60,660);
  

  speed = random(150,300);
  weight = random(400,1500); 

  car.velocityX = speed;

}

function draw() {
  background(0,0,0);  
  wall.shapeColor = color(180,80,100);
    
  if(wall.x - car.x <(car.width + wall.width)){
   car.velocityX= 0;
    var deformation = (0.5*weight*car.velocityX*car.velocityX)/22500 ; 
   //critical
   if(deformation > 181){
      car.shapeColor = color(255,0,0);
   }
   //mediocre
   if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
   }
   //safe
   if(deformation < 100){
      car.shapeColor = color(0,255,0);
   }

}
  drawSprites();

}
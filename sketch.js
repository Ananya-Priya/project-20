var car;
var wall;
var speed;
var weight;


function setup() {
  createCanvas(1200,800);
  
  car=createSprite(50,200,50,50);
  

  wall=createSprite(1000,200,45,250);
  wall.shapeColor="pink";
 
  speed=Math.round(random(5,10));
  weight=Math.round(random(10,5));

  
  
}

function draw() {
  background(0);

  car.velocityX=speed;

  if(wall.x-car.x <(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight*speed*speed/22509;

    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor="white";
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}
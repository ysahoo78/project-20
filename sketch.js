var car, wall, speed, weight



function setup() {
  createCanvas(1000,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(900,200,60,200);
  
  car.velocityX = speed;
  car.shapeColor = "grey";

  wall.shapeColor = "white";
}

function draw() {
  background(32,32,32);
  
  if (collision(car, wall)) { 
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation < 100) { 
    car.shapeColor = color(0,255,0);  
    }
    if(deformation >= 100 && deformation <=180) {
     car.shapeColor = "yellow"; 
    }

    if(deformation > 180) {
    car.shapeColor = "red";  
    }
  }
  drawSprites();
}
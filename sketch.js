//creating all the variables
var car, wall, speed, weight



function setup() {
  //creating the canvas like a rectangle
  createCanvas(1000,400);
  //speed and weight have to be random
  speed = random(55,90);
  weight = random(400,1500);
  //creating the wall and car sprites
  car = createSprite(50,200,50,50);
  wall = createSprite(900,200,60,200);
  //giving velocity and color 
  car.velocityX = speed;
  car.shapeColor = "grey";

  wall.shapeColor = "white";
}

function draw() {
  //making the background black
  background(32,32,32);
  //changing the color of the car when it touches the wall
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
  //making sure all the sprites are displayed
  drawSprites();
}

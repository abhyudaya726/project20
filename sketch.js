var car,wall;
var weight,speed;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(155,90));
  console.log(speed);

  weight = Math.round(random(400,1500));
  console.log(weight);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
}

function draw() {
  background(0);

  if (wall.x-car.x <= (car.width+wall.width)/2) {
    var deformation = (0.5*weight*speed*speed)/22500;
    console.log(deformation);

    if (deformation>180) {
      car.shapeColor = color(255,0,0);
    }
    if (deformation<180 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }
    if (deformation<100) {
      car.shapeColor = color(0,255,0);
    }
    car.velocityX = 0;
  }

  drawSprites();
}
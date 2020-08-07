
var bullet, wall;
var thickness, weight, speed;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 231);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 20, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "grey";
  
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "white";

}

function draw() {
  background(0); 

  textSize (20);
  fill("white");
  
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;

    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if (damage > 10){

      wall.shapeColor = color(255, 0, 0);
      text ("The Wall Should Not Be Used To Make Anything " , 1100, 320);
    }
    if (damage < 10){

      wall.shapeColor = color(0, 255, 0);
      text ("The Wall Can Be Used To Make Anything" , 1100, 320);
    }
    
  }

  drawSprites();
}


function hasCollided(bullet,wall){

    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;

    if(bulletRightEdge >= wallLeftEdge){
          return true;
    }
    else {return false;
    }
}

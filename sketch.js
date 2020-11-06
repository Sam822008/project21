var wall,thickness;
var bullet ,speed,whight;


function setup() {
  createCanvas(800,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet =createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor(255);

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor(255);

}

function draw() {
  background(255,255,255);  
  

 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if(damage>10)
{
  wall.shapeColor = color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor = color(0,255,0);
}

 }
 hasCollided();
 drawSprites();
}

function hasCollided(bullet,wall)
{
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
}




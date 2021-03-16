var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1700);
  car=createSprite(50,200,70,50)
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="80,80,80"
}

function draw() {
  background(220);
  
  //calculating deformation of the car 
 
  
  //changing the colour after colliding;
  if(wall.x-car.x<car.width/2+wall.width/2)
  {
      car.velocityX=0
      deformation=0.5*weight*speed*speed/22500 
      if(deformation<100)
      {
        car.shapeColor="green";
        car.velocityX=0
        
      }

      if(deformation>100 && deformation<180)
      {
        car.shapeColor="yellow"
        car.velocityX=0
        
      }

      if(deformation>180)
      {
        car.shapeColor="red"
        car.velocityX=0
        
      }
      car.velocityX=0
      
      //deformation 
      console.log(deformation);
    }
    
  drawSprites();
}
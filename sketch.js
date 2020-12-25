
var monkey , monkey_running, survivalTime
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground

var PLAY = 0
var END = 1

var gameState = PLAY

    
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 obstacleImage = loadImage("obstacle.png");
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white")

 if(keyDown("space")&& monkey.y >= 310) {
      monkey.velocityY = -18;
    }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  if (gameState === PLAY){
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time: "+ survivalTime, 100,50);
  }
    
  
  
  
  
 if(obstacleGroup.isTouching(monkey)){
   gameState = END
 }  
  
if (gameState === END) {
  FoodGroup.destroyEach();
obstacleGroup.destroyEach();
FoodGroup.setVelocityXEach(0);
obstacleGroup.setVelocityXEach(0);
  survivalTime = 0;
}
  
  food();
  obstacles();
  drawSprites();
  
  
}

function food(){
  if (frameCount % 80 === 0) {
    banana=createSprite(300,10,100,100);
    banana.addImage(bananaImage);
    banana.velocityX = -6
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 150;
    
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0) {
obstacle=createSprite(300,300,100,100);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6
    obstacle.scale = 0.2;
    obstacles.lifetime = 100
    
    obstacleGroup.add(obstacle);
  }
}



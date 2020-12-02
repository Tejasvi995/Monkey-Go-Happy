
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,450);
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.13
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  
  
 
}


function draw() {
background("white ");
  
  stroke("black");
  textSize(20);
  fill("black")
  
  var survivalTime = 0;
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 100,50);
  console.log(survivalTime)
  
  if(ground.x <= 250){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >=300) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  
  bananaGroup = createGroup();

  spawnBanana();
  spawnObstacles();
  
  drawSprites();
}

function spawnBanana() {
  if(frameCount % 80===0) {
    banana = createSprite(500,20,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -5;
    banana.y=Math.round(random(120,200));
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 ===0) {
    obstacle = createSprite(500,326,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.1;
    obstacle.lifetime = 150;
  }
}





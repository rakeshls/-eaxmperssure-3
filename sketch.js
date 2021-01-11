var baby,babyImage;
var ladderImg,babyBottleImg,babyMilkImg,toyImg,babyToyImg,injectionImg,babyCryImg;
var milkGroup;
var gameState = "toddler";
var childImg ;
var milkFlag = 0;
var toyFlag = 0;
var ladderFlag = 0;
var injectionFlag = 0;
var x ;
function preload(){
  babyImage = loadImage("Images/baby1.png");
  ladderImg = loadImage("Images/ladder.png");
  babyBottleImg = loadImage("Images/bottle.png");
  babyMilkImg = loadImage("Images/babyDrinkMilk.png");
 toyImg = loadImage("Images/toys.png");
 babyToyImg = loadImage("Images/happyToy.png");
 childImg = loadImage("Images/child.png");
 babyCryImg = loadImage("Images/cry.png");
 injectionImg = loadImage("Images/injection.png");
} 
function setup(){
  createCanvas(displayWidth,displayHeight);
  x = width;
  baby = createSprite(20,height-100,30,10);
  baby.addImage(babyImage);
  milkGroup = new Group();
  toyGroup = new Group();
  ladderGroup = new Group();
  injectionsGroup = new Group();
}
function draw(){
  background("LightBlue");
  if(keyDown(RIGHT_ARROW)){
    baby.x = baby.x+2;
  }
  if(keyDown(UP_ARROW)){
    baby.y = baby.y-4;
  }
  if(keyDown(DOWN_ARROW)){
    baby.y = baby.y+4;
  }
  if(gameState === "toddler"){
    textSize(20);
    text("You can nurture children’s development using parenting strategies that suit their temperaments.",x,50);
     x = x-1;
    milks();
  if(milkGroup.isTouching(baby)){
    milkFlag = 1;
    baby.addImage(babyMilkImg);
    milkGroup.destroyEach();
    milkGroup.setVelocityXEach(0);
    }
  
  toys();
    if(toyGroup.isTouching(baby)){
      toyFlag = 1;
      baby.addImage(babyToyImg);
      toyGroup.destroyEach();
      toyGroup.setVelocityXEach(0);
      }
  ladders();
  if(ladderGroup.isTouching(baby)){
    ladderFlag = 1;
    ladderGroup.destroyEach();
    baby.addImage(childImg);
    gameState = "child";
  }
  injections();
  if(injectionsGroup.isTouching(baby)){
    injectionFlag = 1;
    injectionsGroup.destroyEach();
    baby.addImage(babyCryImg);
  }
    }
     
    if(gameState === "child"){
      background("green");
    }
  drawSprites();
}

function toys (){
  if(frameCount% 200 === 0 && toyFlag === 0){
var obstacle = createSprite(600,height-50,10,10);
obstacle.y = Math.round(random(100,height-100));
obstacle.velocityX = -3;
 obstacle.addImage(toyImg);
 obstacle.scale =0.5;
 toyGroup.add(obstacle);
  
}
  }
  function ladders  (){
    if(frameCount% 350 === 0 && ladderFlag === 0){
  var obstacle = createSprite(600,height-50,10,10);
  obstacle.y = Math.round(random(100,height-100));
  obstacle.velocityX = -3;
   obstacle.addImage(ladderImg);
   obstacle.scale =0.5;
   ladderGroup.add(obstacle);
    
  }
    }
function milks (){
  if(frameCount% 120 === 0 && milkFlag === 0){
var obstacle = createSprite(600,height-50,10,10);
obstacle.y = Math.round(random(100,height-100));
obstacle.velocityX = -3;
 obstacle.addImage(babyBottleImg);
 milkGroup.add(obstacle);
  
}

  }
function injections (){
  if(frameCount% 120 === 0 && milkFlag === 0){
    var obstacle = createSprite(600,height-50,10,10);
    obstacle.scale = 0.5;
    obstacle.y = Math.round(random(100,height-100));
    obstacle.velocityX = -3;
     obstacle.addImage(injectionImg);
     injectionsGroup.add(obstacle);
}
}


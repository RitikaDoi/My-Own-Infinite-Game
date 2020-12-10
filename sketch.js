var agentImage;
var agent_shooting;
var ripImage;
var agent;
var bgImage;
var bg;
var cdImage;
var cd;
var cdGroup;
var fileImage;
var file;
var fileGroup;
var pdImage
var pd;
var pdGroup;
var sgImage
var sg;
var sgGroup;
var GSGroup;
var dImage
var d;
var dGroup;
var gsGroup;
var invisibleGround;
var InformationCollected;
var score;
var startImage;
var restartImage;
var restart;
var gameoverImage;
var gameover;
var start;
var SERVE = 1;
var PLAY = 2;
var END = 3;
var gameState = 1;

function preload()
{

  agentImage = loadAnimation("agent_running_with_gun_2-removebg-preview.png", "agent_satnding_with_gun-removebg-preview.png");
  
  agent_shooting = loadAnimation("Agent_shooting-removebg-preview.png");
  
  ripImage = loadAnimation("Stone_putted_on_grave_2-removebg-preview.png")
  
  bgImage = loadImage("Background of game 2.jpg");
  
  cdImage = loadImage("CD-removebg-preview.png");
  
  fileImage = loadImage("File-removebg-preview.png");
  
  pdImage = loadImage("Pen_drive-removebg-preview.png");
  
  sgImage = loadImage("Security_guard_shooting-removebg-preview.png");
  
  dImage = loadImage("Desk-removebg-preview.png");
  
  startImage = loadImage("Start_button-removebg-preview.png");
  
  restartImage = loadImage("Restart button 1.jpg");
  
  gameoverImage = loadImage("Game over image.jpg");
  
}

function setup() 
{

  createCanvas(400, 300);
  
  bg = createSprite(200, 170);
  bg.addImage(bgImage);
  bg.scale = 1;
  
  agent = createSprite(50, 200);
  agent.addAnimation("running", agentImage);
  agent.addAnimation("shooting", agent_shooting);
  agent.addAnimation("dead", ripImage);
  agent.scale = 0.2;
  
  invisibleGround = createSprite(100, 260, 200, 10);
  invisibleGround.visible = false;
  
  start = createSprite(350, 265);
  start.addImage(startImage);
  start.scale = 0.4;
  
  restart = createSprite(200, 200);
  restart.addImage(restartImage);
  restart.scale = 2;
  
  gameover = createSprite(200, 100);
  gameover.addImage(gameoverImage);
  gameover.scale = 0.2;
  
  cdGroup = new Group();
  fileGroup = new Group();
  pdGroup = new Group();
  sgGroup = new Group();
  GSGroup = new Group();
  dGroup = new Group();
  gsGroup = new Group();
  
  informationCollected = 0;
  score = 0;
  
}

function draw() 
{
 
  if(gameState === 1)
    {
      
      background("black");
    
      stroke("white")
      textSize(20);
      fill("grey");
      text("Have you ever wondered if you were", 10, 18);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("secret agent?", 10, 38);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("Here is the opportunity to be one", 10, 58);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("Yes, you are selected by RAW for a mission", 10, 78);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("You have to collect information: CDs, files", 10, 98);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("and pendrives of your enemy by preesing up", 10, 118);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("arrow key to jump and Be safe from guards", 10, 138);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("they can shoot you and then you will die, you", 10, 158);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("can also shoot them by pressing space key", 10, 178);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("Desks will also come as obstacles, you have", 10, 198);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("to be safe from them, if you will be not", 10, 218);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("then information collected will get 0", 10, 238);
      
      stroke("white")
      textSize(20);
      fill("grey");
      text("Prees START to play", 10, 258);
      
      bg.visible = false;
      agent.visible = false;
      gameover.visible = false;
      restart.visible = false;
      start.visible = true;
      
      
      if(mousePressedOver(start))
        {
          
          start.visible = false;
          gameState = 2;
          
        }
      
      drawSprites();
      
      stroke("white")
  textSize(20);
  fill("lightBlue");
  text("Information Collected: " + informationCollected, 05, 288);
      
    }
 
  if(gameState === 2)
    {

      bg.visible = true;
      agent.visible = true;
      gameover.visible = false;
      restart.visible = false;
      
      bg.velocityX = -8;
  
  if(bg.x < 0)
    {
      
      bg.x = 125;
      
    }
  
  if(keyDown("up"))
    {
      
      agent.velocityY = -8;
      
    }
  
  if(keyDown("space"))
    {
      
      agent.changeAnimation("shooting", agent_shooting);
      agent.scale = 0.3;
      spawnGss();
      
    }
  
  if(cdGroup.isTouching(agent))
    {
      
      cdGroup.destroyEach();
      informationCollected = informationCollected + 1;
      score = score + 1;
      
    }
  
  if(pdGroup.isTouching(agent))
    {
      
      pdGroup.destroyEach();
      informationCollected = informationCollected + 3;
      score = score + 3;
      
    }
  
  if(fileGroup.isTouching(agent))
    {
      
      fileGroup.destroyEach();
      informationCollected = informationCollected + 2;
      score = score + 2;
      
    }
  
  if(dGroup.isTouching(agent))
    {
      
      dGroup.destroyEach();
      informationCollected = 0;
      
    }
  
  if(gsGroup.isTouching(sg))
    {
      
      sgGroup.destroyEach();
      gsGroup.destroyEach();
      informationCollected = informationCollected + 5;
      score = score + 5;
      GSGroup.destroyEach();
      agent.changeAnimation("running", agentImage);
      agent.scale = 0.2;
      
    }
  
  agent.velocityY = agent.velocityY + 0.8;
  
  agent.collide(invisibleGround);
  
  spawnCDs();
  spawnFiles();
  spawnPds();
  spawnSgs();
  spawnDs();
      
      if(GSGroup.isTouching(agent))
        {
          
          gameState = 3;
          GSGroup.destroyEach();
          gsGroup.destroyEach();
          
        }
      
      drawSprites();
  
  stroke("white")
  textSize(20);
  fill("lightBlue");
  text("Information Collected: " + informationCollected, 05, 18);
      
    }
  
  if(gameState === 3)
    {
      
      agent.changeAnimation("dead", ripImage);
      
      gameover.visible = true;
      restart.visible = true;
      
      cdGroup.setLifetimeEach(-1);
      fileGroup.setLifetimeEach(-1);
      pdGroup.setLifetimeEach(-1);
      sgGroup.setLifetimeEach(-1);
      dGroup.setLifetimeEach(-1);
      
      cdGroup.setVelocityXEach(0);
      fileGroup.setVelocityXEach(0);
      pdGroup.setVelocityXEach(0);
      sgGroup.setVelocityXEach(0);
      dGroup.setVelocityXEach(0);
      
      bg.velocityX = 0;
      agent.velocityY = 0;
      
      if(mousePressedOver(restart))
        {
          
          restartGame();
          
        }
      
      drawSprites();
  
  stroke("white")
  textSize(20);
  fill("lightBlue");
  text("Information Collected: " + informationCollected, 05, 18);
      
    }

}

function spawnCDs()
{
  
  if(frameCount%100 === 0)
    {
      
      cd = createSprite(450, Math.round(random(50,150)));
      cd.velocityX = -5;
      cd.addImage(cdImage);
      cd.scale = 0.2;
      cd.lifetime = 90;
      cdGroup.add(cd);
      cd.depth = gameover.depth;
      gameover.depth = gameover.depth + 1;
      console.log(gameover.depth);
      
    }
  
}

function spawnFiles()
{
  
  if(frameCount%150 === 0)
    {
      
      file = createSprite(450,Math.round(random(50,150)));
      file.velocityX = -5;
      file.addImage(fileImage);
      file.scale = 0.1;
      file.lifetime = 90;
      fileGroup.add(file);
      file.depth = gameover.depth;
      gameover.depth = gameover.depth + 1;
      
    }
  
}

function spawnPds()
{
  
  if(frameCount%250 === 0)
    {
      
      pd = createSprite(450,Math.round(random(50,150)));
      pd.velocityX = -5;
      pd.addImage(pdImage);
      pd.scale = 0.07;
      pd.lifetime = 90;
      pdGroup.add(pd);
      pd.depth = gameover.depth;
      gameover.depth = gameover.depth + 1;
      
    }
  
}

function spawnSgs()
{
      if(frameCount%450 === 0)
    {
      sg = createSprite(350,200);
      sg.addImage(sgImage);
      sg.scale = 0.2;
      sg.lifetime = 680;
      sgGroup.add(sg);
      
      GS = createSprite(340, 180, 10, 5);
      GS.velocityX = -(0.5 + (score/10));
      GS.lifetime = 680;
      GS.shapeColor = "black";
      GSGroup.add(GS);
      GS.depth = gameover.depth;
      gameover.depth = gameover.depth + 1;
      
    }
  
}

function spawnDs()
{
  
  if(frameCount%200 === 0)
    {
      
      d = createSprite(450,220);
      d.velocityX = -5;
      d.addImage(dImage);
      d.scale = 0.1;
      d.lifetime = 90;
      dGroup.add(d);
      d.depth = restart.depth;
      restart.depth = restart.depth + 1;
      
    }
  
}

function spawnGss()
{
  
      gs = createSprite(50, 170, 10, 5);
      gs.velocityX = 5;
      gs.lifetime = 680;
      gs.shapeColor = "black";
      gsGroup.add(gs);
      gs.depth = gameover.depth;
      gameover.depth = gameover.depth + 1;
  
}

function restartGame()
{
  
  gameState = 1;
  
  agent.changeAnimation("running", agentImage);
  
  cdGroup.destroyEach(0);
  fileGroup.destroyEach(0);
  pdGroup.destroyEach(0);
  sgGroup.destroyEach(0);
  dGroup.destroyEach(0);
  
  informationCollected = 0;
  
}




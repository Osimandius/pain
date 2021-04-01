
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var mainPC,ikirClaw,stormDaemon,ratmen1;
var gamelevel = "level1";
var gameState = "play";
var r1hits=0;


function preload()
{
	
  back=loadImage('Sprites/Map for LoB.png')
	stormImg=loadImage('Sprites/Storm Daemon 1.png')
  ikirImg=loadImage('Sprites/Untitled.png')
  mainpcimg = loadImage('Sprites/mainpc.jpg')
  //ikirClaw.image=loadImage('Sprites/Untitled.png')
  
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	mainPC = createSprite(400,750,40,40);
	mainPC.addImage(mainpcimg)
	ikirClaw= createSprite(100,100,40,40)
	stormDaemon= createSprite(110,110,40,40)
	ratmen1=createSprite(200,300,20,20);
	ratmen1.velocityX=1;

	edges = createEdgeSprites();

}


function draw() {

  background(back);
  mainPC.velocityX = 0;
  mainPC.velocityY = 0;

  
	if(gameState === "play"){
		if (keyDown("LEFT_ARROW")){
			//mainPC.x=mainPC.x-3;
			mainPC.velocityX = -3;
		  }
		  if (keyDown("RIGHT_ARROW")){
			//mainPC.x=mainPC.x+3;
			mainPC.velocityX = 3;
		  }
		  if (keyDown("UP_ARROW")){
			//mainPC.y=mainPC.y-3;
			mainPC.velocityY= -3;
		  }

		  if (keyDown("DOWN_ARROW")){
			//mainPC.y=mainPC.y+3;
			mainPC.velocityY= 3;
		  }
  		pt1();

		  ratmen1.bounceOff(edges);
		  mainPC.bounceOff(edges);
	}
	else if(gameState ==="end"){

	}
  
  drawSprites();
 
}

function pt1(){

	if(gamelevel==="level1"){
		if (mainPC.isTouching(ratmen1)){
			mainPC.bounce(ratmen1)
			r1hits+=1;
		}
		if (r1hits==2){
			ratmen1.destroy()
		}

	}
}
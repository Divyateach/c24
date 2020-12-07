
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3;
var paper1,ground1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,200)
	ground1=new Ground(400,690,800,20)
	
  wall1=createSprite(550,630,10,100)
  wall1.shapeColor="white"
  wall2=createSprite(700,630,10,100)
  wall2.shapeColor="white"
  wall3=createSprite(625,680,135,10)
  wall3.shapeColor="white"
}


function draw() {
  
  background(0);
  Engine.update(engine)
  ground1.display();
  paper1.display();
  keyPressed();
 drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


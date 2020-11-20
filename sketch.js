
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new Bob(100,500,20);
	bobObj2 = new Bob(120,500,20);
	bobObj3 = new Bob(140,500,20);
	bobObj4 = new Bob(160,500,20);
	bobObj5 = new Bob(180,500,20);

	roofObj = new Roof(0, 100, 800, 20);

	rope1 = new Rope(bobObj1.body,roofObj.body,20*2,0);
	rope2 = new Rope(bobObj2.body,roofObj.body,20*2,0);
	rope3 = new Rope(bobObj3.body,roofObj.body,20*2,0);
	rope4 = new Rope(bobObj4.body,roofObj.body,20*2,0);
	rope5 = new Rope(bobObj5.body,roofObj.body,20*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();

	roofObj.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}
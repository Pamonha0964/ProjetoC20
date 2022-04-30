const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var Plane;
var block1;
var block2;
var block3;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    Plane = Bodies.rectangle(100, 650, 10, 10, {isStatic: true});
	World.add(world,Plane);
	block1 = Bodies.circle(220,600,10, {restruction: 0.5,friction: 0.02,frictionAir: 0});
    World.add(world,block1);
	block2 = Bodies.rectangle(110, 600, 10, 10,{restruction: 0.7,friction: 0.01,frictionAir: 0.1});
    World.add(world,block2);
	block3 = Bodies.rectangle(350, 600, 10, 10,{restruction: 0.01,friction: 1,frictionAir: 0.3});
    World.add(world,block3);


}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(51);
  Engine.update(engine);

  rect(block2.position.x, block2.position.y,10 * 4,10 * 4);
  rect(block3.position.x, block3.position.y,20 * 4,10 * 4);
  ellipse(block1.position.x,block1.position.y,10 * 2);
  rect(Plane.position.x, Plane.position.y, width * 2, 10);
  
  drawSprites();
}




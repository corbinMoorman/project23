const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1
var bob2
var bob3
var bob4
var bob5
var rope1,rope2,rope3,rope4,rope5


//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
    var ball_options={
		restitution:1,
        isStatic:false,
        friction:0,
        density:0.8
	}
    bob1 = Bodies.circle(270,375,15,ball_options)
    World.add(world,bob1)

	bob2 = Bodies.circle(320,378,15,ball_options)
    World.add(world,bob2)
    
	bob3 = Bodies.circle(370,380,15,ball_options)
    World.add(world,bob3)

	bob4 = Bodies.circle(420,380,15,ball_options)
    World.add(world,bob4)

	bob5 = Bodies.circle(470,380,15,ball_options)
    World.add(world,bob5)
  
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    rope1 = new rope(bob1,roof,-80,0)
    
    rope2 = new rope(bob2,roof,-50,0)
    
    rope3 = new rope(bob3,roof,-20,0)

    rope4 = new rope(bob4,roof,10,0)

    rope5 = new rope(bob5,roof,40,0)

	Engine.run(engine);
	
  
}

function draw() {
  ellipseMode(RADIUS);
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,15)
  ellipse(bob2.position.x,bob2.position.y,15)
  ellipse(bob3.position.x,bob3.position.y,15)
  ellipse(bob4.position.x,bob4.position.y,15)
  ellipse(bob5.position.x,bob5.position.y,15)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
    if(keyCode==UP_ARROW){    
Matter.Body.applyForce(bob1,{x:0,y:0},{x:-6,y:0});
}
}
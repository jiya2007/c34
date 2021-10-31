const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
    world = engine.world;
    ground= Bodies.rectangle(400,380,800,20,{isStatic:true})

    World.add(world,ground)
    b1= new Box(400,350,50,50)
    b2= new Box(400,350,50,50)
    b3= new Box(400,350,50,50)
    b4= new Box(400,350,50,50)
    b5= new Box(500,350,50,50)
    b6= new Box(500,350,50,50)
    b7= new Box(500,350,50,50)
    b8= new Box(500,350,50,50)
    
    ball= Bodies.circle(260,180,20,{density:1,frictionAir:0.0005})


    World.add(world,ball)
    attach= new rope(this.ball,{x:260,y:100})
}
function draw() {
  background('blue');  
  Engine.update(engine)
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
attach.display()
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
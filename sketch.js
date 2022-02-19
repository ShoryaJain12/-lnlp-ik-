const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball2;
var ball;
var ledge;
var ground;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;

  var ball_Options={
    restitution:1, 
    airfriction:0.01
  }
ball=Bodies.circle(100,10,20,ball_Options)
World.add(world, ball)

var ground_Options={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,ground_Options)
World.add(world, ground)

var ledge_Options={
  isStatic:true
}
rectMode(CENTER)
ledge=Bodies.rectangle(300,250,200,20,ledge_Options)
World.add(world, ledge)

var ball2_Options={
  restitution:0.8,
  airfriction:0.05
}
ball2=Bodies.circle(300,10,20,ball2_Options)
World.add(world, ball2)
}



function draw() 
{
  background(51);
  Engine.update(engine)
  ellipse(ball.position.x, ball.position.y,20)
  rect(ground.position.x, ground.position.y,400,20)
  rect(ledge.position.x, ledge.position.y,200,20)
  ellipse(ball2.position.x, ball2.position.y,20)
}


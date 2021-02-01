const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18;

var ball;

var chain;

function setup(){

createCanvas(1000,600);
engine = Engine.create();
world = engine.world;

ground = new Ground(500,550,1000,10);

box1 =new Box(600,515,40,40);
box2 =new Box(640,515,40,40);
box3 =new Box(680,515,40,40);

box4 =new Box(600,475,40,40);
box5 =new Box(640,475,40,40);
box6 =new Box(680,475,40,40);

box7 =new Box(600,435,40,40);
box8 =new Box(640,435,40,40);
box9 =new Box(680,435,40,40);

box10 =new Box(600,395,40,40);
box11 =new Box(640,395,40,40);
box12 =new Box(680,395,40,40);

box13 =new Box(600,355,40,40);
box14 =new Box(640,355,40,40);
box15 =new Box(680,355,40,40);

box16 =new Box(600,315,40,40);
box17 =new Box(640,315,40,40);
box18 =new Box(680,315,40,40);

ball = new Polygon(450,400);

chain = new Chain(ball.body,{x:450,y:155});





}

function draw(){
    background("black");

    Engine.update(engine);


    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();   
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ball.display();
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
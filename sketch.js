const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box, box1, ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;

    box=  new Box(200,300,50,50);
    box1= new Box(220,200,30,80);
    ground= new Ground(200,390,400,20);
}

function draw(){
    
    background(0);
    Engine.update(engine);
    box.display();
    box1.display();
    ground.display();
}




const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var Box1
function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    Ground1 = new Ground(200,200,250,10)
    Box1 = new Box(100,100,50,50)
}
function draw(){
    background("Black")
    Engine.update(engine);
    Ground1.display();
    Box1.display();
}
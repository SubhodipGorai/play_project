const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,r1,r2,r3,r4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    r1 = new Rubber(200,500,40);
    r2 = new Rubber(210,500,40);
    r3 = new Rubber(220,500,40);
    r4 = new Rubber(230,500,40);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    r1.display();
    r2.display();
    r3.display();
    r4.display();

 
}
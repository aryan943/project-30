const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot,ground,ground2;
var box1,box2,box3,box4,box5,box6,box7;
var b1,b2,b3,b4;
var polygon;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height-50,400,20);
    ground2 = new Ground(900,height-400,300,20);
    box1 = new Box(650,height-100,100,100); 
    box2 = new Box(750,height-100,100,100);
    box3 = new Box(850,height-100,100,100); 
    box4 = new Box(950,height-100,100,100); 
    box5 = new Box(750,height-150,100,100); 
    box6 = new Box(850,height-150,100,100); 
    box7 = new Box(800,height-200,100,100);
    b1 = new Box(800,150,100,100);
    b2 = new Box(900,height-450,100,100);
    b3 = new Box(1000,height-450,100,100);
    b4 = new Box(900,height-500,100,100);
    
    polygon = new pol(200,400,45);
  
   slingshot = new Slingshot(polygon.body,{x:200,y:400});

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    slingshot.display();
    polygon.display();
    
    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){  

    if(keyCode === 32){
       slingshot.attach(polygon.body);
       Matter.Body.setPosition(polygon.body,{x:200,y:400});
    }
}
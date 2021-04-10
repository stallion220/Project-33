const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];

var engine,world;
var particles;
var turn = 1;
var c=0;
var gameState = "PLAY";

var divisionHeight=300;
var score =0;

function preload(){
  // mousePressed();
  calculateScore();
}

function setup() {
  var canvas = createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
backgroundimg = loadImage("background.png")

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(backgroundimg);
  Engine.update(engine);
  
  ground.display();
  if(gameState==="PLAY")
  {
  
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }

    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }

    textSize(20)
    text("Score : "+score,20,30);
     
      if(particles!==undefined)
     {
        particles.display();
        if(particles.body.position.y>760)
        {
          if(particles.body.position.x<320)
          {
            score=score+500;
            particles=undefined;
          } else if(particles.body.position.x>320 && particles.body.position.x<560)
          {
            score=score+100;
            particles=undefined;
          } else if(particles.body.position.x>560)
          {
            score=score+200;
            particles=undefined;
          }
        }
      }

    if (turn>=6 && particles===undefined){
      gameState="END"
    }
  } else if (gameState==="END")
  {
    textSize(60);
    text("Score : "+score,100,400);
    textSize(20);
    text("Press SPACE to restart.",200,600);
    if(keyIsDown(32))
    {
      gameState="PLAY";
      turn=1;
      score=0;
    }
  }
  textSize(30);
  if (gameState==="PLAY"){
    for(var a=15;a<=255;a+=80){
      text("500",a,520);
    }
    for(var a=335;a<=495;a+=80){
      text("100",a,520);
    }
    for(var a=575;a<=735;a+=80){
      text("200",a,520);
    }
  }
 
}
function mouseReleased(){
  if(turn<=5)
  {
    turn++;
    particles=new Particle(mouseX,30,10);
  }
  



}

function calculateScore(){

}

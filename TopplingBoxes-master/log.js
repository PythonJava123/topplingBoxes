class Log{
    constructor(x,y,height,angle){

 var logOptions = {

  restitution: 1,
  friction: 2,
  density: 0.8

 }

 this.body = Bodies.rectangle(x,y,20,height,logOptions);
 this.width = 20;
 this.height = height;
 Matter.Body.setAngle(this.body,angle);

World.add(world,this.body);
    }
 display(){
   push();
  fill("brown");
  rectMode(CENTER);
  var position = this.body.position;
  var angle = this.body.angle;
  translate(position.x,position.y);
  rotate(angle);
  rect(0,0,this.width,this.height);
  pop();
  }
}
class Pig{
    constructor(x,y){

var pigOptions = {

  restitution: 1,
  friction: 0.6,
  density: 0.8

}

 this.body = Bodies.rectangle(x,y,50,50,pigOptions);
 this.width = 50;
 this.height = 50;

 World.add(world,this.body)

    }

  display(){

  push();
  fill("green");
  rectMode(CENTER);
  var angle = this.body.angle;
  var position = this.body.position;
  translate(position.x,position.y);
  rotate(angle);
  rect(0,0,this.width,this.height);
  pop();
  }
}
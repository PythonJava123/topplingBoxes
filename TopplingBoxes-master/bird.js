class bird{
    constructor(x,y){
  var birdOptions = {
  restitution: 1,
  friction: 1.8,
  density: 1
  }
  this.body = Bodies.rectangle(x,y,40,40,birdOptions);
  this.width = 40;
  this.height = 40;

  World.add(world,this.body);
    }
  display(){
      push();
  fill("red");
  rectMode(CENTER);
  var position = this.body.position;
  position.x = mouseX;
  position.y = mouseY
  var angle = this.body.angle;
  translate(position.x,position.y);
  rotate(angle);
  rect(0,0,this.width,this.height);
     pop();
  }
}
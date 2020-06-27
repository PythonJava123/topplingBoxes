class Sling{
    constructor(x,y,width,height){

var slingOptions = {
   isStatic: true,
   density: 1.5,
   restitution: 0.8
        }
this.body = Bodies.rectangle(x,y,width,height,slingOptions);
this.width = width;
this.height = height;

World.add(world,this.body);
    }
display(){
 fill(255);
 rectMode(CENTER);
 rect(0,0,this.width,this.height)
}
}
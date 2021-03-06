class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var GroundPos =this.body.position;
      push();
      translate(GroundPos.x,GroundPos.y);
      rectMode(CENTER);
      fill(128,128,128);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
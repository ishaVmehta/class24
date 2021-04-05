class log {
    constructor(x,y,height,angle) {
      var options = {
          'restitution':0.5,
          'friction':2.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,20,height,angle, options);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
      Matter.Body.setAngle(this.body,angle)
    }
    display(){
     var pos =this.body.position;
     var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      strokeWeight(4)
      stroke("white")
      fill("brown")
      rectMode(CENTER)
      rect(0,0, this.width, this.height);
      pop()
    }
  };
  
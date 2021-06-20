class Iron {
    constructor(x, y) {
      var options = {
        restitution:0.8,
        friction:3,
        density:30
      }

      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var ironpos=this.body.position;		
      var angle = this.body.angle;
			push()
			translate(ironpos.x, ironpos.y);
      rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
      rect(0, 0, this.width, this.height);

			pop()
    };
  };
  
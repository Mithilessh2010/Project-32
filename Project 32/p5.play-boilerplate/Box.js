class Box {
  static score = 0;
  constructor(x, y, width, height, color) {
    var options = {
      'restitution': 0.7,
      'friction': 0.6,
      'isStatic': false
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = this.body.speed;
    World.add(world, this.body);
   
  }
  display() {
    var pos = this.body.position;

    if (this.body.speed < 3) {
      // console.log("NOT REMOVED - " + this.speed);
      push();
      translate(this.body.position.x, this.body.position.y);
      fill(this.color);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      //console.log("REMOVED");
      World.remove(world, this.body);
      push();
      if(this.Visibility)
      {
        score++;
      }
      this.Visibility = false; //this.Visibility - 5;
      
      // tint(255, this.Visibility);
      pop();
    }
  }  

}

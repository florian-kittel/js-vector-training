class Mover {
  location;
  from = -4;
  to = 4;
  acceleration;
  velocity;
  topspeed = 10;

  constructor(x, y) {
    this.location = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(3));
  }

  update() {
    let mouse = createVector(mouseX, mouseY);

    this.acceleration = p5.Vector.sub(mouse, this.location);
    this.acceleration.setMag(0.1);
    this.velocity.add(this.acceleration);

    this.velocity.limit(this.topspeed);

    this.location.add(this.velocity);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    fill(255, 100);
    circle(this.location.x, this.location.y, 20);
  }

  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}

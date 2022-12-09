class Mover {
  location;
  from = -4;
  to = 4;
  acceleration = createVector(0, 0);
  velocity;
  topspeed = 10;
  radius = 16;

  constructor(x, y) {
    this.location = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(2));
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);

    // this.acceleration = p5.Vector.sub(mouse, this.location);
    this.acceleration.setMag(0.1);
    this.velocity.add(this.acceleration);

    this.velocity.limit(this.topspeed);

    this.location.add(this.velocity);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    fill(255, 100);
    circle(this.location.x, this.location.y, this.radius * 2);
  }

  checkEdges() {
    if (this.location.x > width - this.radius) {
      this.location.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.location.x < this.radius) {
      this.location.x = this.radius;
      this.velocity.x *= -1;
    }

    if (this.location.y >= height - this.radius) {
      this.location.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.location.y < this.radius) {
      this.location.y = this.radius;
    }
  }
}

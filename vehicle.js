class Vehicle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.maxSpeed = 4;
    this.maxForce = .1;
    this.radius = 16;
  }


  applyForce(force) {
    this.acceleration.add(force);
  }


  seek(target) {
    let force = p5.Vector.sub(target, this.position);
    force.setMag(this.maxSpeed);
    force.sub(this.velocity);
    force.limit(this.maxForce);

    this.applyForce(force);
  }


  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
  }


  show() {
    stroke(255, 100);
    strokeWeight(2);
    fill(255, 100);
    push();

    translate(this.position.x, this.position.y);
    rotate(this.velocity.heading());
    const r = this.radius;
    triangle(-r, -r / 2, -r, r / 2, r, 0);
    pop();
  }
}

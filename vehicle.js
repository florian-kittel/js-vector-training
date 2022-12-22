
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


  pursue(vehicle) {
    let target = vehicle.position.copy();
    let prediction = vehicle.velocity.copy();

    prediction.mult(20);
    target.add(prediction);

    fill(0, 255, 0);
    circle(target.x, target.y, 16);

    return this.seek(target);
  }


  evade(vehicle) {
    let pursuit = this.pursue(vehicle);
    pursuit.mult(-1);
    return pursuit;
  }


  flee(target) {
    return this.seek(target).mult(-1);
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.position);
    force.setMag(this.maxSpeed);
    force.sub(this.velocity);
    force.limit(this.maxForce);

    return force;
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

  checkEdges() {
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }

    if (this.position.y >= height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y < this.radius) {
      this.position.y = this.radius;
      this.velocity.y *= -1;
    }
  }
}

class Target extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.velocity = createVector(5, 6);

    this.maxSpeed = 3;
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    fill('#F063A475');
    push();

    translate(this.position.x, this.position.y);
    circle(0, 0, this.radius * 2);
    pop();
  }
}

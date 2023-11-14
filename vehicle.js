/**
 * The Vehicle class represents an object that moves in a 2D space.
 */
class Vehicle {
  /**
   * Creates a new Vehicle object.
   * @param {number} x - The x-coordinate of the Vehicle's starting position.
   * @param {number} y - The y-coordinate of the Vehicle's starting position.
   */
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.maxSpeed = 4;
    this.maxForce = .1;
    this.radius = 16;
  }

  /**
   * Applies a force to the Vehicle, changing its acceleration.
   * @param {p5.Vector} force - The force to apply.
   */
  applyForce(force) {
    this.acceleration.add(force);
  }

  /**
   * Makes the Vehicle pursue another Vehicle.
   * @param {Vehicle} vehicle - The Vehicle to pursue.
   * @returns {p5.Vector} The force needed to move towards the target.
   */
  pursue(vehicle) {
    const targetRadius = 16;

    let target = vehicle.position.copy();
    let prediction = vehicle.velocity.copy();

    prediction.mult(20);
    target.add(prediction);

    if (target.x > width - targetRadius) {
      target.x = width - targetRadius + prediction.x * -1;
    } else if (target.x < targetRadius) {
      target.x = targetRadius + prediction.x * -1;
    }

    if (target.y >= height - targetRadius) {
      target.y = height - targetRadius + prediction.y * -1;
    } else if (target.y < targetRadius) {
      target.y = targetRadius + prediction.y * -1;
    }
    // target.add(prediction);


    // fill(0, 255, 0);
    // circle(target.x, target.y, targetRadius);

    return this.seek(target);
  }

  /**
   * Makes the Vehicle evade another Vehicle.
   * @param {Vehicle} vehicle - The Vehicle to evade.
   * @returns {p5.Vector} The force needed to move away from the target.
   */
  evade(vehicle) {
    let pursuit = this.pursue(vehicle);
    pursuit.mult(-1);
    return pursuit;
  }

  /**
   * Makes the Vehicle flee from a target.
   * @param {p5.Vector} target - The target to flee from.
   * @returns {p5.Vector} The force needed to move away from the target.
   */
  flee(target) {
    return this.seek(target).mult(-1);
  }

  /**
   * Makes the Vehicle seek a target.
   * @param {p5.Vector} target - The target to seek.
   * @returns {p5.Vector} The force needed to move towards the target.
   */
  seek(target) {
    let force = p5.Vector.sub(target, this.position);
    force.setMag(this.maxSpeed);
    force.sub(this.velocity);
    force.limit(this.maxForce);

    return force;
  }

  /**
   * Updates the Vehicle's position and velocity.
   */
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0);
  }

  /**
   * Displays the Vehicle on the 2D surface.
   */
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

  /**
   * Checks if the Vehicle has hit the edge of the canvas and reverses direction if it has.
   */
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

/**
 * The Target class represents a target that the Vehicle can pursue or evade.
 */
class Target extends Vehicle {
  /**
   * Creates a new Target object.
   * @param {number} x - The x-coordinate of the Target's position.
   * @param {number} y - The y-coordinate of the Target's position.
   */
  constructor(x, y) {
    super(x, y);
    this.velocity = createVector(random(-4, 4), random(-4, 4));

    this.maxSpeed = 2;
    this.fill = '#F063A475';
  }

  /**
   * Displays the Target on the 2D surface.
   */
  show() {
    stroke(255, 100);
    strokeWeight(2);
    fill(this.fill);
    push();

    translate(this.position.x, this.position.y);
    circle(0, 0, this.radius * 2);
    pop();
  }
}

class Walker {
  pos;
  from = -4;
  to = 4;

  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = p5.Vector.random2D();
    // this.vel.mult(random(-1, 1));
  }

  update() {

    // this.pos.add(this.vel);
    this.pos.x = this.pos.x + random(this.from, this.to);
    this.pos.y = this.pos.y + random(this.from, this.to);
  }

  show() {
    // circle(this.pos.x, this.pos.y, 20);
    stroke(255, 100);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}

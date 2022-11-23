class Walker {
  pos;
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  update() {
    this.pos.x = this.pos.x + random(-2, 2);
    this.pos.y = this.pos.y + random(-2, 2);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}

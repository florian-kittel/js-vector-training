class RandomLines {
  x = 0;
  y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    let v = p5.Vector.random2D();
    translate(this.x, this.y);
    v.mult(random(50, 100));

    stroke(255, 50);
    strokeWeight(2);
    line(0, 0, v.x, v.y);
  }
}

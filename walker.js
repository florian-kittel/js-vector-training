/**
 * The Walker class represents an object that moves randomly on a 2D surface.
 */
class Walker {
  // The current position of the Walker
  pos;

  // The lower limit of the range within which the Walker can move
  from = -4;

  // The upper limit of the range within which the Walker can move
  to = 4;

  /**
   * Creates a new Walker object.
   * @param {number} x - The x-coordinate of the Walker's starting position.
   * @param {number} y - The y-coordinate of the Walker's starting position.
   */
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  /**
   * Updates the position of the Walker.
   */
  update() {
    this.pos.x = this.pos.x + random(this.from, this.to);
    this.pos.y = this.pos.y + random(this.from, this.to);
  }

  /**
   * Displays the Walker on the 2D surface.
   */
  show() {
    stroke(255, 100);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}

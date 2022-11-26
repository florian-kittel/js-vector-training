let pos;
let x;
let y;
let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);

  walker = new Walker(width / 2, height / 2);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  walker.show();
  walker.update();

  // translate(width / 2, height / 2);
  // let v = p5.Vector.random2D();
  // v.mult(random(50, 100));

  // stroke(255, 50);
  // strokeWeight(2);
  // line(0, 0, v.x, v.y);
}

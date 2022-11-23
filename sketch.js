let pos;
let x;
let y;
let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60);

  walker = new Walker(width / 2, height / 2);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  walker.show();
  walker.update();
}

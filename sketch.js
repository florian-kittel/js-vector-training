let pos;
let x;
let y;
let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);

  walker = new Walker(width / 2, height / 2);
  lines = new RandomLines(width / 2, height / 2);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);

  let pos = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);

  // let m = v.mag();
  // v.div(m);
  v.normalize().mult(50);
  // v.mult(50);
  // console.log(m); 
  // background(m);
  // v.setMag(50);

  translate(width / 2, height / 2);
  stroke(200);
  strokeWeight(4);
  line(0, 0, v.x, v.y);

  // walker.show();
  // walker.update();

  // lines.update(); 
}

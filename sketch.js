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
  let pos = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);
  // v.normalize();
  
  // translate(width / 2, height / 2);

  // stroke(255, 50);
  // strokeWeight(2);
  // line(0, 0, v.x, v.y);

  walker.show();
  walker.update();

  lines.update(); 
}

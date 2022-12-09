let pos;
let x;
let y;
let walker;
let mover;
let moverB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);

  mover = new Mover(width / 2 + 40, height / 2, 2);
  moverB = new Mover(width / 2, height / 2, 4);
  // lines = new RandomLines(width / 2, height / 2);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(40);

  // let pos = createVector(width / 2, height / 2);
  // let mouse = createVector(mouseX, mouseY);

  // let v = p5.Vector.sub(mouse, pos);

  // let m = v.mag();
  // v.div(m);
  // v.normalize().mult(50);
  // v.mult(50);
  // console.log(m); 
  // background(m);
  // v.setMag(50);

  // translate(width / 2, height / 2); 
  // stroke(200);
  // strokeWeight(4);
  // line(0, 0, v.x, v.y);

  if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
    moverB.applyForce(wind);
  }

  let gravity = createVector(0, 0.1);

  let weigtA = p5.Vector.mult(gravity, mover.mass);
  let weigtB = p5.Vector.mult(gravity, moverB.mass);
  mover.applyForce(weigtA);
  moverB.applyForce(weigtB);

  mover.show();
  mover.update();
  mover.checkEdges();

  moverB.show();
  moverB.update();
  moverB.checkEdges();

  // lines.update(); 
}

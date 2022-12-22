let pursuer;
let target;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pursuer = new Vehicle(windowWidth / 2, windowHeight / 2);
  target = new Target(200, 100);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(40);
  fill(255, 0, 0);

  const steering = pursuer.pursue(target);
  pursuer.applyForce(steering);

  const targetSteering = target.flee(pursuer.position);
  target.applyForce(targetSteering);


  let distance = p5.Vector.dist(pursuer.position, target.position);
  if (distance < pursuer.radius + target.radius) {
    target = new Target(random(width), random(height));
  }

  pursuer.checkEdges();
  pursuer.update();
  pursuer.show();

  target.checkEdges();
  target.update();
  target.show();

}

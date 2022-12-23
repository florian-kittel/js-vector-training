let pursuer;
let target;
let target2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pursuer = new Vehicle(windowWidth / 2, windowHeight / 2);
  target = new Target(random(width), random(height));
  target2 = new Target(random(width), random(height));

  target2.maxSpeed = 4;
  target2.fill = '#CCCCCC75';
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(40);
  fill(255, 0, 0);

  const steering = pursuer.pursue(target);
  pursuer.applyForce(steering);

  // Evade to collide with Target2 during pursuit Target
  let distanceToTarget2 = p5.Vector.dist(pursuer.position, target2.position);
  if (distanceToTarget2 < (pursuer.radius + target2.radius) * 10) {
    const steering2 = pursuer.evade(target2);
    pursuer.applyForce(steering2);
  }

  let distance = p5.Vector.dist(pursuer.position, target.position);
  if (distance < pursuer.radius + target.radius) {
    target = new Target(random(width), random(height));
  }

  if (distance < (pursuer.radius + target.radius) * 15) {
    const steeringTarget = target.flee(pursuer.position);
    target.applyForce(steeringTarget);
    target.maxSpeed = 4;
  }

  pursuer.checkEdges();
  pursuer.update();
  pursuer.show();

  target.checkEdges();
  target.update();
  target.show();

  target2.checkEdges();
  target2.update();
  target2.show();

}

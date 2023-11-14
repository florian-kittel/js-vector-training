/**
 * The pursuer, primaryTarget, and secondaryTarget are global variables that will hold instances of the Vehicle and Target classes.
 */
let pursuer;
let primaryTarget;
let secondaryTarget;

/**
 * The setup function is a p5.js function that is called once when the program starts. It's used to define initial environment properties.
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeEntities();
}

/**
 * The initializeEntities function is used to initialize the pursuer, primaryTarget, and secondaryTarget with their initial properties.
 */
function initializeEntities() {
  pursuer = new Vehicle(windowWidth / 2, windowHeight / 2);
  primaryTarget = new Target(random(width), random(height));
  secondaryTarget = new Target(random(width), random(height));

  secondaryTarget.maxSpeed = 4;
  secondaryTarget.fill = '#CCCCCC75';
}

/**
 * The windowResized function is a p5.js function that is called every time the browser window is resized.
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/**
 * The draw function is a p5.js function that is called continuously. It's used to execute the code inside continuously.
 */
function draw() {
  background(40);
  fill(255, 0, 0);

  pursuePrimaryTarget();
  evadeSecondaryTarget();
  fleeFromPursuer();

  updateAndDisplayEntities();
}

/**
 * The pursuePrimaryTarget function is used to make the pursuer pursue the primary target.
 */
function pursuePrimaryTarget() {
  const steering = pursuer.pursue(primaryTarget);
  pursuer.applyForce(steering);

  let distanceToPrimaryTarget = p5.Vector.dist(pursuer.position, primaryTarget.position);
  if (distanceToPrimaryTarget < pursuer.radius + primaryTarget.radius) {
    primaryTarget = new Target(random(width), random(height));
  }
}

/**
 * The evadeSecondaryTarget function is used to make the pursuer evade the secondary target.
 */
function evadeSecondaryTarget() {
  let distanceToSecondaryTarget = p5.Vector.dist(pursuer.position, secondaryTarget.position);
  if (distanceToSecondaryTarget < (pursuer.radius + secondaryTarget.radius) * 10) {
    const steering = pursuer.evade(secondaryTarget);
    pursuer.applyForce(steering);
  }
}

/**
 * The fleeFromPursuer function is used to make the primary target flee from the pursuer.
 */
function fleeFromPursuer() {
  let distance = p5.Vector.dist(primaryTarget.position, pursuer.position);
  if (distance < (pursuer.radius + primaryTarget.radius) * 15) {
    const steering = primaryTarget.flee(pursuer.position);
    primaryTarget.applyForce(steering);
    primaryTarget.maxSpeed = 4;
  }
}

/**
 * Updates and displays the entities.
 */
function updateAndDisplayEntities() {
  pursuer.checkEdges();
  pursuer.update();
  pursuer.show();

  primaryTarget.checkEdges();
  primaryTarget.update();
  primaryTarget.show();

  secondaryTarget.checkEdges();
  secondaryTarget.update();
  secondaryTarget.show();
}

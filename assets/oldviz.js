var canvas = null;              // The canvas.
var $viz = $('#viz');           // The canvas container.

var particles = [];             // Global particle array.
var gravity = {x: 0, y: -10};   // "Gravity" for the particles.
var particleDeath = 800;        // How many millis before kill particle.

var touchTarget = {             // Target to generate particles on touch.
    x: $viz.width() / 2,
    y: $viz.height() / 2
};

/**
 * The Particle object for the smoke.
 * @param x
 * @param y
 * @constructor
 */
function Particle(x, y) {
    var particle = this;
    particle.x = x;
    particle.y = y;
    particle.width = 5;
    particle.height = 5;
    particle.stroke = color(0, 0);
    particle.strokeWeight = 2;
    particle.fill = {
        r: 50,
        g: 220,
        b: 120,
        a: 10
    };
    particle.velocity = {x: 0, y: 0};
    particle.forces = [gravity];
    particle.birth = millis();
}

/**
 * What to do when the particle is updated.
 */
Particle.prototype.update = function () {
    var particle = this;
    for (var i = 0; i < particle.forces.length; i++) {
        var force = particle.forces[i];
        var frameX = force.x / frameRate();
        var frameY = force.y / frameRate();
        particle.velocity.x += frameX;
        particle.velocity.y += frameY;
    }
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;
};

/**
 * How to draw the particle.
 */
Particle.prototype.draw = function () {
    var particle = this;
    stroke(particle.stroke);
    strokeWeight(particle.strokeWeight);
    fill(particle.fill.r, particle.fill.g, particle.fill.b, particle.fill.a);
    ellipseMode(CENTER);
    ellipse(particle.x, particle.y, particle.width, particle.height);
};

/**
 * The age of the particle.
 * @returns {number}
 */
Particle.prototype.age = function () {
    var particle = this;
    return millis() - particle.birth;
};

function getParticleTarget(){
    if(rotationX == null){
        return {
            x: mouseX,
            y: mouseY
        }
    }
    else {
        touchTarget.x += (rotationY / 25);
        touchTarget.y += (rotationX / 25);
        if(touchTarget.x < 0){
            touchTarget.x = 0;
        }
        if(touchTarget.y < 0){
            touchTarget.y = 0;
        }
        if(touchTarget.x > width){
            touchTarget.x = width;
        }
        if(touchTarget.y > height){
            touchTarget.y = height;
        }
        return touchTarget;
    }
}

/**
 * Create new smoke particles.
 */
function newParticles() {
    for (var i = 0; i < 8; i++) {
        var pos = getParticleTarget();
        var particle = new Particle(pos.x, pos.y);
        particle.velocity.y = (Math.random() * 2) - 1;
        particle.velocity.x = (Math.random() * 2) - 1;
        particles.push(particle);
    }
}

/**
 * Destroy old particles.
 */
function oldParticles() {
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        if (particle.age() > particleDeath) {
            particles.splice(i, 1);
        }
    }
}

/**
 * Update and draw the particles.
 */
function updateParticles() {
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        var sizePlus = 1;
        particle.width += sizePlus;
        particle.height += sizePlus;
        particle.fill.a -= 0.15;
        particle.update();
        particle.draw();
    }
}

/**
 * Setup the canvas.
 */
function setup() {
    canvas = createCanvas($viz.width(), $viz.height());
    canvas.parent('viz');
}

/**
 * Global draw method.
 */
function draw() {
    clear();
    newParticles();
    oldParticles();
    updateParticles();
}

/**
 * User can control the direction the smoke blows in using the arrow keys.
 */
function keyReleased() {
    if (keyCode == UP_ARROW) {
        gravity.y--;
    }
    if (keyCode == DOWN_ARROW) {
        gravity.y++;
    }
    if (keyCode == LEFT_ARROW) {
        gravity.x--;
    }
    if (keyCode == RIGHT_ARROW) {
        gravity.x++;
    }
}

/**
 * Make sure to handle window size changes, particularly for mobile.
 */
function windowResized() {
  resizeCanvas($viz.width(), $viz.height());
}
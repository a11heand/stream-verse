// Filename: DynamicVisuals.js

// Content: A dynamic visual simulation of particles moving in a gravitational field

// Canvas setup
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = Math.random() * 2 - 1;
    this.dy = Math.random() * 2 - 1;
    this.vx = 0;
    this.vy = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
      this.dx *= -1;

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
      this.dy *= -1;

    this.vx += this.dx;
    this.vy += this.dy;
    this.x += this.vx;
    this.y += this.vy;

    this.draw();
  }
}

// Generate particles
const particles = [];
for (let i = 0; i < 100; i++) {
  const radius = Math.random() * 10 + 5;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, color));
}

// Animate particles
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
}

animate();
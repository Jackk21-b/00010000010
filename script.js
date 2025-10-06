// Efek partikel neon
const bg = document.getElementById('background');
const canvas = document.createElement('canvas');
bg.appendChild(canvas);
const ctx = canvas.getContext('2d');

let particles = [];
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function createParticles() {
  particles = [];
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
    });
  }
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#00ffff";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > w) p.speedX *= -1;
    if (p.y < 0 || p.y > h) p.speedY *= -1;
  });

  requestAnimationFrame(animate);
}

createParticles();
animate();

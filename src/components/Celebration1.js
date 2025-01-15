export default class Celebration {
    constructor() {
      this.canvas = null;
      this.context = null;
      this.confettiParticles = [];
      this.animationFrame = null;
      this.createCanvas();
    }
  
    createCanvas() {
      this.canvas = document.createElement("canvas");
      this.context = this.canvas.getContext("2d");
      this.canvas.style.position = "fixed";
      this.canvas.style.top = "0";
      this.canvas.style.left = "0";
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.style.pointerEvents = "none";
      document.body.appendChild(this.canvas);
  
      this.resizeCanvas();
      window.addEventListener("resize", () => this.resizeCanvas());
    }
  
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  
    createParticles() {
      const colors = ["#ff0", "#f0f", "#0ff", "#0f0", "#00f", "#f00"];
      const count = 100;
  
      for (let i = 0; i < count; i++) {
        this.confettiParticles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height - this.canvas.height,
          size: Math.random() * 10 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 5 + 2,
        });
      }
    }
  
    drawParticles() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      this.confettiParticles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
  
        if (particle.y > this.canvas.height) {
          this.confettiParticles.splice(index, 1);
        }
  
        this.context.fillStyle = particle.color;
        this.context.fillRect(particle.x, particle.y, particle.size, particle.size);
      });
    }
  
    animate() {
      this.drawParticles();
  
      if (this.confettiParticles.length > 0) {
        this.animationFrame = requestAnimationFrame(() => this.animate());
      } else {
        this.stop();
      }
    }
  
    start() {
      this.createParticles();
      if (!this.animationFrame) {
        this.animate();
      }
    }
  
    stop() {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
      this.confettiParticles = [];
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
    }
  }
  
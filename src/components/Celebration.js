// Celebration.js

class Celebration {
    constructor() {
      this.container = document.createElement('div');
      this.container.style.position = 'fixed';
      this.container.style.top = '0';
      this.container.style.left = '0';
      this.container.style.width = '100%';
      this.container.style.height = '100%';
      this.container.style.zIndex = '9999';
      this.container.style.pointerEvents = 'none';
      document.body.appendChild(this.container);
    }
  
    createPaper() {
      const paper = document.createElement('div');
      const size = Math.random() * 15 + 5;
      paper.style.width = `${size}px`;
      paper.style.height = `${size}px`;
      paper.style.position = 'absolute';
      paper.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
      paper.style.opacity = Math.random() * 0.5 + 0.3;
      paper.style.borderRadius = `${Math.random() * 50}%`;
      paper.style.transform = `rotate(${Math.random() * 360}deg)`;
      paper.style.left = `${Math.random() * 100}%`;
  
      const duration = Math.random() * 5 + 3;
      const delay = Math.random() * 2;
      paper.style.animation = `fall ${duration}s linear ${delay}s infinite`;
      
      this.container.appendChild(paper);
  
      setTimeout(() => {
        paper.remove();
      }, (duration + delay) * 1000);
    }
  
    start() {
      for (let i = 0; i < 100; i++) {
        this.createPaper();
      }
    }
  
    stop() {
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }
    }
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% {
        transform: translateY(-10%);
        opacity: 1;
      }
      100% {
        transform: translateY(110vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  export default Celebration;
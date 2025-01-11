// Celebration effect: falling colored papers
export default function createCelebrationEffect() {
    const colors = ['#ff5733', '#ffeb3b', '#33b5ff', '#ff99cc', '#4caf50', '#ff5722']; // Celebration colors
    const numberOfPapers = 30; // Number of falling papers
    const animationDuration = '4s'; // Duration of the animation
  
    // Create falling paper elements
    for (let i = 0; i < numberOfPapers; i++) {
      const paper = document.createElement('div');
      paper.style.position = 'absolute';
      paper.style.top = `-10px`; // Start from just above the screen
      paper.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      paper.style.width = `${Math.random() * 10 + 10}px`; // Random width of papers
      paper.style.height = `${Math.random() * 10 + 10}px`; // Random height of papers
      paper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      paper.style.opacity = 0.8 + Math.random() * 0.2; // Random opacity
      paper.style.borderRadius = '50%';
      paper.style.animation = `fall ${animationDuration} linear infinite`;
  
      // Append paper to the body
      document.body.appendChild(paper);
  
      // Remove paper after animation to clean up the DOM
      setTimeout(() => {
        paper.remove();
      }, parseFloat(animationDuration) * 1000); // Time in milliseconds
    }
  
    // Define the keyframes for the animation
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes fall {
        0% {
          transform: translateY(0) rotate(0deg);
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
        }
      }
    `, styleSheet.cssRules.length);
  }
  
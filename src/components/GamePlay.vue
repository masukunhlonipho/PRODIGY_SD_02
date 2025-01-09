<template>
  <div class="gameplay">
    <h2>Guess the Number</h2>
    
    <!-- Player Status Section -->
    <div v-for="player in players" :key="player.name" class="player-status">
      <p>
        <span :style="{ color: player.color }">{{ player.name }}</span>: {{ player.attempts }} attempts
      </p>
    </div>

    <!-- Game Play Section (when no winner yet) -->
    <div v-if="!winner">
      <p class="current-player">
        Player Turn: <span :style="{ color: currentPlayer.color }">{{ currentPlayer.name }}</span>
      </p>
      <input 
        v-model="guess" 
        type="number" 
        placeholder="Enter your guess" 
        class="guess-input"
      />
      <button @click="submitGuess" class="submit-btn">Submit</button>
      <p class="feedback">{{ feedback }}</p>
    </div>

    <!-- Winner Section (displayed once there's a winner) -->
    <div v-else>
      <h3 class="winner-message">
        🎉 {{ winner.name }} Wins in {{ winner.attempts }} attempts! 🎉
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [
        { name: 'Player 1', color: '#ff6347', attempts: 0 },
        { name: 'Player 2', color: '#4682b4', attempts: 0 },
      ],
      currentPlayer: { name: 'Player 1', color: '#ff6347', attempts: 0 },
      guess: '',
      feedback: '',
      winner: null,
    };
  },
  methods: {
    submitGuess() {
      // Logic to process the guess, update attempts, etc.
      this.currentPlayer.attempts++;
      // Feedback and winner logic
    },
  },
};
</script>

<style scoped>
.gameplay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation: slideIn 1s ease-in-out;
}

h2 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.player-status {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
  max-width: 400px;
  color: #444;
}

.current-player {
  font-size: 1.8em;
  color: #444;
  margin-bottom: 20px;
}

.guess-input {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 12px 15px;
  font-size: 1.2em;
  width: 250px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease;
}

.guess-input:focus {
  border-color: #4caf50;
  outline: none;
}

.submit-btn {
  background: linear-gradient(45deg, #4caf50, #66bb6a);
  color: white;
  font-size: 1.5em;
  padding: 12px 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.submit-btn:hover {
  background: linear-gradient(45deg, #45a049, #5ba55d);
  transform: scale(1.05);
}

.feedback {
  font-size: 1.2em;
  color: #333;
  margin-top: 20px;
}

.winner-message {
  font-size: 2em;
  color: #4caf50;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 1s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

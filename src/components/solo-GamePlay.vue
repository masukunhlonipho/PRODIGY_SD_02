<template>
  <div class="gameplay container flex-column gap-20">
    <PlayerStatus :player="player" />

    <div class="game-area">
      <p v-if="!gameOver">Guess the number between 1 and 100:</p>
      <input
        v-if="!gameOver"
        type="number"
        v-model.number="playerGuess"
        placeholder="Enter your guess"
        @keyup.enter="submitGuess"
      />
      <button v-if="!gameOver" @click="submitGuess" class="submit-btn">
        Submit
      </button>

      <p class="feedback">{{ feedback }}</p>

      <button v-if="gameOver" @click="restartGame" class="restart-btn">
        Go Back to Home
      </button>
    </div>
  </div>
</template>

<script>
import PlayerStatus from "./solo-PlayerStatus.vue"; // Import the component
import Celebration from './Celebration1'; // Import the Celebration class

export default {
  props: {
    players: Array,
  },
  components: {
    PlayerStatus, // Register the component
  },
  data() {
    return {
      player: this.players[0], // Single-player mode
      playerGuess: null,
      targetNumber: Math.floor(Math.random() * 100) + 1,
      feedback: "",
      gameOver: false,
      celebration: null, // Celebration instance
    };
  },
  methods: {
    submitGuess() {
      if (this.playerGuess < this.targetNumber) {
        this.feedback = "Too low!";
      } else if (this.playerGuess > this.targetNumber) {
        this.feedback = "Too high!";
      } else {
        this.feedback = `Congratulations, ${this.player.name}! You guessed it right after ${this.player.attempts + 1} attempts.`;
        this.gameOver = true;
        
        // Trigger celebration effect
        if (!this.celebration) {
          this.celebration = new Celebration(); // Initialize the celebration
        }
        this.celebration.start(); // Start the celebration
      }

      this.player.attempts = (this.player.attempts || 0) + 1;
    },

    restartGame() {
      this.$emit("restart");

      // Reset game state
      this.playerGuess = null;
      this.targetNumber = Math.floor(Math.random() * 100) + 1;
      this.feedback = "";
      this.gameOver = false;

      // Stop celebration effect
      if (this.celebration) {
        this.celebration.stop();
      }
    },
  },
};
</script>

<style scoped>
.gameplay {
  padding: 30px;
  border-radius: 15px;
}

.game-area {
  margin-top: 20px;
}

.feedback {
  margin-top: 20px;
  font-size: 1.5em;
  color: #444;
}
</style>

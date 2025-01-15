<template>
  <div class="gameplay container flex-column gap-20">
    <MultiPlayerStatus
      :players="players"
      :currentPlayerIndex="currentPlayerIndex"
    />
    <div class="game-area">
      <p v-if="!gameOver">Player {{ currentPlayer.name }}, guess the number:</p>
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
        Restart Game
      </button>
    </div>
  </div>
</template>

<script>
import MultiPlayerStatus from "./multi-PlayerStatus.vue";
import Celebration from './Celebration';

export default {
  props: {
    players: {
      type: Array,
      required: true,
    },
  },
  components: {
    MultiPlayerStatus,
  },
  data() {
    return {
      currentPlayerIndex: 0,
      playerGuess: null,
      targetNumber: Math.floor(Math.random() * 100) + 1,
      feedback: "",
      gameOver: false,
      celebration: null,
    };
  },
  computed: {
    currentPlayer() {
      return this.players[this.currentPlayerIndex];
    },
  },
  methods: {
    submitGuess() {
      const guess = this.playerGuess;
      const player = this.players[this.currentPlayerIndex];

      if (guess === null || guess === undefined) {
        this.feedback = "Please enter a valid number!";
        return;
      }

      if (guess < this.targetNumber) {
        this.feedback = "Too low!";
      } else if (guess > this.targetNumber) {
        this.feedback = "Too high!";
      } else {
        this.feedback = `Congratulations ${player.name}, you guessed it right!`;
        this.gameOver = true;

        // Trigger celebration
        if (!this.celebration) {
          this.celebration = new Celebration();
        }
        this.celebration.start();
        return;
      }

      // Increment player's attempt count
      player.attempts = (player.attempts || 0) + 1;

      // Move to next player
      this.currentPlayerIndex =
        (this.currentPlayerIndex + 1) % this.players.length;

      // Reset the guess
      this.playerGuess = null;
    },
    
    restartGame() {
      this.$emit("restart");

      // Reset game state
      this.currentPlayerIndex = 0;
      this.playerGuess = null;
      this.targetNumber = Math.floor(Math.random() * 100) + 1;
      this.feedback = "";
      this.gameOver = false;

      // Reset player attempts
      this.players.forEach(player => (player.attempts = 0));

      // Stop celebration if active
      if (this.celebration) {
        this.celebration.stop();
      }
    },
  },
};
</script>

<style scoped>
.feedback {
  font-size: 1.2em;
}
</style>

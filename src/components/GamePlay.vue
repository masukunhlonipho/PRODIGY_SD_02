<template>
  <div class="gameplay">
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
      <button v-if="!gameOver" @click="submitGuess" class="submit-btn">Submit</button>

      <p class="feedback">{{ feedback }}</p>

      <button v-if="gameOver" @click="restartGame" class="restart-btn">Go Back to Home</button>
    </div>
  </div>
</template>

<script>
import PlayerStatus from "./PlayerStatus.vue"; // Import the component

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
      }
      this.player.attempts = (this.player.attempts || 0) + 1;
    },
    restartGame() {
      this.$emit("restart");
    },
  },
};
</script>

<!-- <style scoped>
</style> -->

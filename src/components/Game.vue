<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="game-container">
    <h1>Guessing Game</h1>
    <p v-if="!gameWon">Guess a number between 1 and 100:</p>

    <input 
      type="number" 
      v-model="userGuess" 
      placeholder="Enter your guess"
      :disabled="gameWon"
    />
    <button @click="makeGuess" :disabled="gameWon">Submit Guess</button>

    <p>{{ feedback }}</p>

    <button v-if="gameWon" @click="restartGame">Play Again</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNumber: Math.floor(Math.random() * 100) + 1, // Generate a number between 1-100
      userGuess: null,
      feedback: '',
      attempts: 0,
      gameWon: false,
    };
  },
  methods: {
    makeGuess() {
      if (this.userGuess === null) {
        this.feedback = 'Please enter a valid number!';
        return;
      }

      this.attempts++;
      if (this.userGuess < this.randomNumber) {
        this.feedback = 'Too low! Try again.';
      } else if (this.userGuess > this.randomNumber) {
        this.feedback = 'Too high! Try again.';
      } else {
        this.feedback = `Congratulations! You guessed it in ${this.attempts} attempts.`;
        this.gameWon = true;
      }
      this.userGuess = null; // Reset input field
    },
    restartGame() {
      this.randomNumber = Math.floor(Math.random() * 100) + 1;
      this.feedback = '';
      this.attempts = 0;
      this.gameWon = false;
    },
  },
};
</script>

<style scoped>
.game-container {
  text-align: center;
  margin-top: 50px;
}

input {
  margin: 10px;
  padding: 5px;
  font-size: 16px;
}

button {
  margin: 10px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>

<template>
  <div class="player-setup">
    <h2>Welcome to the Guessing Game!</h2>
    <div class="input-container">
      <label for="playerName">Enter Your Name:</label>
      <input
        v-model="playerName"
        type="text"
        id="playerName"
        placeholder="Enter your name"
        @input="validateName"
      />
    </div>
    <button @click="startGame" :disabled="!playerName" class="start-btn">
      Start Game
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: "",
    };
  },
  methods: {
    validateName() {
      this.playerName = this.playerName.replace(/[^a-zA-Z]/g, "").slice(0, 10); // Only letters and max length 10
    },
    startGame() {
      if (this.playerName) {
        this.$emit("start-game", { isSolo: true, players: [{ name: this.playerName, color: "#000000" }] });
      }
    },
  },
};
</script>

<!-- <style scoped>
</style> -->

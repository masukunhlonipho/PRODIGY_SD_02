<template>
  <div class="player-setup center flex-column gap-20">
    <h2>Welcome to Multiplayer Guessing Game!</h2>
    <div
      class="input-container"
      v-for="(player, index) in players"
      :key="index"
    >
      <label :for="'playerName' + index">Enter Player {{ index + 1 }} Name:</label>
      <input
        v-model="player.name"
        type="text"
        :id="'playerName' + index"
        placeholder="Enter player name"
        @input="validateNames"
      />
      <button
        v-if="index > 1"
        @click="removePlayer(index)"
        class="remove-player-btn"
      >
        Remove
      </button>
    </div>
    <button
      v-if="players.length < 4"
      @click="addPlayer"
      class="add-player-btn"
    >
      Add Another Player
    </button>
    <button
      @click="startGame"
      :disabled="players.some((p) => !p.name) || hasDuplicateNames || players.length < 2"
      class="start-btn"
    >
      Start Game
    </button>
    <p v-if="hasDuplicateNames" class="error-msg">Player names must be unique.</p>
    <p v-if="players.length < 2" class="error-msg">At least 2 players are required to start the game.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [{ name: "" }, { name: "" }], // Default to 2 players
    };
  },
  computed: {
    hasDuplicateNames() {
      const names = this.players.map((player) => player.name);
      return new Set(names).size !== names.length;
    },
  },
  methods: {
    validateNames() {
      this.players.forEach((player) => {
        player.name = player.name.replace(/[^a-zA-Z]/g, "").slice(0, 10);
      });
    },
    addPlayer() {
      if (this.players.length < 4) { // Limit to 3 players maximum
        this.players.push({ name: "" });
      }
    },
    removePlayer(index) {
      if (this.players.length > 2) {
        this.players.splice(index, 1); // Allow removal only if more than 2 players
      }
    },
    startGame() {
      const validPlayers = this.players.filter((player) => player.name);
      this.$emit("start-game", { players: validPlayers });
    },
  },
};
</script>

<style scoped>
.remove-player-btn {
  margin-left: 10px;
}
.error-msg {
  color: red;
  font-size: 0.9em;
}
</style>

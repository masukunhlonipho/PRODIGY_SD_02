<template>
  <div class="player-setup">
    <h2>Choose Your Game Setup</h2>

    <!-- Game Mode Selection (Solo vs. Multiplayer) -->
    <div class="mode-select">
      <div class="mode-option">
        <input
          type="radio"
          id="solo"
          v-model="isSolo"
          :value="true"
          class="radio-btn"
        />
        <label for="solo">Solo</label>
      </div>
      <div class="mode-option">
        <input
          type="radio"
          id="multi"
          v-model="isSolo"
          :value="false"
          class="radio-btn"
        />
        <label for="multi">Multiplayer</label>
      </div>
    </div>

    <!-- Player Setup Form -->
    <div v-for="(player, index) in players" :key="index" class="player-input">
      <label :for="'name-' + index" class="player-label">Player {{ index + 1 }} Name:</label>
      <input
        type="text"
        v-model="player.name"
        :id="'name-' + index"
        placeholder="Enter name"
        class="input-field"
        @input="validateName(player)"
      />

      <label :for="'color-' + index" class="player-label">Choose Color:</label>
      <input
        type="color"
        v-model="player.color"
        :id="'color-' + index"
        class="color-picker"
      />
    </div>

    <!-- Player Count for Multiplayer -->
    <div v-if="!isSolo" class="player-count">
      <label for="playerCount" class="count-label">Number of Players:</label>
      <input
        type="number"
        v-model="playerCount"
        min="2"
        max="4"
        class="count-input"
      />
    </div>

    <!-- Start Game Button -->
    <button @click="startGame" class="start-btn">Start Game</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSolo: true,
      playerCount: 2,
      players: [{ name: "Player 1", color: "#000000" }],
    };
  },
  watch: {
    playerCount(val) {
      this.players = Array.from({ length: val }, () => ({
        name: "",
        color: "#000000",
      }));
    },
    isSolo(val) {
      if (val) {
        this.players = [{ name: "Player 1", color: "#000000" }];
      } else {
        this.players = Array.from({ length: this.playerCount }, () => ({
          name: "",
          color: "#000000",
        }));
      }
    },
  },
  methods: {
    validateName(player) {
      player.name = player.name.replace(/[^a-zA-Z]/g, "").slice(0, 10);
    },
    startGame() {
      this.$emit("start-game", { isSolo: this.isSolo, players: this.players });
    },
  },
};
</script>

<style scoped>
.player-setup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-in-out;
}

h2 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.mode-select {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.mode-option {
  display: flex;
  align-items: center;
}

.radio-btn {
  margin-right: 10px;
}

.player-input {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
}

.player-label {
  font-size: 1.2em;
  color: #444;
  width: 120px;
}

.input-field {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 12px 15px;
  font-size: 1.2em;
  width: 250px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #4caf50;
  outline: none;
}

.color-picker {
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
}

.player-count {
  margin-top: 20px;
}

.count-label {
  font-size: 1.2em;
  color: #444;
}

.count-input {
  padding: 12px 15px;
  font-size: 1.2em;
  width: 100px;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.start-btn {
  margin-top: 30px;
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

.start-btn:hover {
  background: linear-gradient(45deg, #45a049, #5ba55d);
  transform: scale(1.05);
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

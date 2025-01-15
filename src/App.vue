<template>
  <div class="background-wrapper center">
    <div v-if="!gameMode">
      <div class="game-mode-selection center flex-column gap-20">
        <h2>Select Game Mode</h2>
        <button @click="selectGameMode('solo')" class="start-btn">Solo Mode</button>
        <button @click="selectGameMode('multi')" class="start-btn">Multiplayer Mode</button>
      </div>
    </div>
    <div v-else-if="gameMode === 'solo' && !gameStarted">
      <SoloPlayerSetup @start-game="startGame" />
    </div>
    <div v-else-if="gameMode === 'multi' && !gameStarted">
      <MultiPlayerSetup @start-game="startGame" />
    </div>
    <div v-else-if="gameMode === 'solo' && gameStarted">
      <SoloGamePlay :players="players" @restart="restartGame" />
    </div>
    <div v-else-if="gameMode === 'multi' && gameStarted">
      <MultiGamePlay :players="players" @restart="restartGame" />
    </div>
  </div>
</template>

<script>
import SoloPlayerSetup from "./components/solo-PlayerSetup.vue";
import MultiPlayerSetup from "./components/multi-PlayerSetup";
import SoloGamePlay from "./components/solo-GamePlay.vue";
import MultiGamePlay from "./components/multi-GamePlay";

export default {
  data() {
    return {
      gameMode: null, // 'solo' or 'multi'
      gameStarted: false,
      players: [],
    };
  },
  components: {
    SoloPlayerSetup,
    MultiPlayerSetup,
    SoloGamePlay,
    MultiGamePlay,
  },
  methods: {
    selectGameMode(mode) {
      this.gameMode = mode;
    },
    startGame({ players }) {
      this.players = players.map((player) => ({
        name: player.name,
        attempts: 0,
      }));
      this.gameStarted = true;
    },
    restartGame() {
      this.gameMode = null;
      this.gameStarted = false;
      this.players = [];
    },
  },
};
</script>

<style scoped>
.background-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 100vh;
}
</style>

<template>
  <div class="background-wrapper">
    <div v-if="!gameStarted">
      <PlayerSetup @start-game="handleStartGame" />
    </div>
    <div v-else>
      <GamePlay :players="players" :isSolo="isSolo" />
    </div>
  </div>
</template>

<script>
import PlayerSetup from "./components/PlayerSetup.vue";
import GamePlay from "./components/GamePlay.vue";

export default {
  data() {
    return {
      gameStarted: false,
      players: [],
      isSolo: true,
    };
  },
  components: {
    PlayerSetup,
    GamePlay,
  },
  methods: {
    handleStartGame({ isSolo, players }) {
      this.isSolo = isSolo;
      this.players = players;
      this.gameStarted = true;
    },
  },
};
</script>

<style>
.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('./assets/background.jpeg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  animation: zoomIn 1s ease-in-out;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

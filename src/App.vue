<template>
  <div class="background-wrapper">
    <div v-if="!gameStarted">
      <PlayerSetup @start-game="startGame" />
    </div>
    <div v-else>
      <GamePlay :players="players" @restart="restartGame" />
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
    };
  },
  components: {
    PlayerSetup,
    GamePlay,
  },
  methods: {
    startGame({ players }) {
      this.players = players;
      this.gameStarted = true;
    },
    restartGame() {
      this.players = [];
      this.gameStarted = false;
    },
  },
};
</script>

<!-- <style>
</style> -->

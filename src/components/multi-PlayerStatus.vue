<template>
  <div class="player-status">
    <h3>Player: {{ currentPlayer.name }}</h3>
    <p>Attempts: {{ currentPlayer.attempts || 0 }}</p>
    <p>Current Turn: {{ currentPlayerIndex + 1 }} of {{ players.length }}</p>
  </div>
</template>

<script>
export default {
  props: {
    players: Array,
    currentPlayerIndex: Number,
  },
  computed: {
    currentPlayer() {
      return this.players[this.currentPlayerIndex];
    },
  },
};
</script>

<style scoped>
.player-status {
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.player-status h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.player-status p {
  font-size: 1.2em;
  color: #666;
}
</style>

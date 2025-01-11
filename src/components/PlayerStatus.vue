<template>
  <div class="player-status">
    <h3>Player: {{ player.name }}</h3>
    <p>Attempts: {{ player.attempts || 0 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    player: Object,
  },
};
</script>

<!-- <style scoped>
</style> -->

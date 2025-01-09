<template>
  <div 
    class="player-status" 
    :class="{ 'active-player': isCurrentPlayer }"
  >
    <div class="avatar">
      <span>{{ player.avatar }}</span>
    </div>
    <div class="info">
      <h3>Player {{ player.id }}</h3>
      <p>Attempts: {{ player.attempts }}</p>
      <p v-if="isCurrentPlayer" class="turn-indicator">It's your turn!</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: Object,
    isCurrentPlayer: Boolean,
  },
};
</script>

<style scoped>
.player-status {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.player-status.active-player {
  background-color: #e0ffe0;
  box-shadow: 0 4px 12px rgba(0, 255, 0, 0.2);
}

.avatar {
  font-size: 2em;
  text-align: center;
  color: #4caf50;
}

.info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #666;
}

.turn-indicator {
  font-size: 1.2em;
  color: #ff6347;
  font-weight: bold;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>

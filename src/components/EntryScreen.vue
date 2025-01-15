<template>
  <div class="entry-screen center flex-column gap-20">
    <h1>Welcome to the Guessing Game!</h1>
    <p>Please select your mode:</p>
    <div class="button-group">
      <button @click="selectMode('solo')" class="mode-btn">Solo Mode</button>
      <button @click="selectMode('multiplayer')" class="mode-btn">Multiplayer Mode</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectMode(mode) {
      this.$emit("mode-selected", mode); // Emit event to parent with selected mode
    },
  },
};
</script>

<style scoped>
.entry-screen {
  text-align: center;
}
.button-group {
  display: flex;
  gap: 20px;
}
.mode-btn {
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}
.mode-btn:hover {
  background-color: #0056b3;
}
</style>

<script setup lang="ts"></script>

<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 2.5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2.5px solid var(--primary);
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

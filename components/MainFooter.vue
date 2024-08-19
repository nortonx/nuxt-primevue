<template>
  <footer class="text-700 text-center">
    <p class="footer-text">&copy; {{ year }}</p>
  </footer>
</template>

<script setup lang="ts">
const year = computed(() => new Date().getFullYear());
</script>

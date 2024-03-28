<template>
  <footer class="text-700 text-center">
    <p>&copy; {{ year }}</p>
  </footer> 
</template>

<script setup lang="ts">
import { computed } from "vue"

const year = computed(() => new Date().getFullYear())
</script>
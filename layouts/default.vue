<template>
  <div class="grid grid-nogutter surface-section text-800">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>
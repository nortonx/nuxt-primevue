<template>
  <div class="main-layout p-3">
    <Header />
    <main class="mt-3">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
.main-layout {
  height: 96vh;
}
</style>

<template>
  <div class="main-layout">
    <Header />
    <main>
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
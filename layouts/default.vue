<template>
  <div class="main-layout p-3">
    <Header></Header>
    <main class="mt-3">
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.main-layout {
  height: 96vh;
}
</style>

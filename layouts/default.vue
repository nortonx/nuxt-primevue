<template>
  <div class="main-layout p-3">
    <MainHeader></MainHeader>
    <main class="mt-3">
      <slot></slot>
    </main>
    <MainFooter></MainFooter>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.main-layout {
  height: 96vh;
}
</style>

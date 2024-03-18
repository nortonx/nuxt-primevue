<template>
  <Menubar :model="items">
    <template #item="{ item }">
      <NuxtLink :to="item.to">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </NuxtLink>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar";
import { computed } from "vue"

const items = computed(() => [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    to: "/"
  },
  {
    label: "About",
    icon: "pi pi-fw pi-info",
    to: "/about"
  }
])
</script>
<template>
  <Menubar :model="items">
    <template #item="{ item }">
      <NuxtLink :to="item.to">
        <i :class="item.icon"></i>
        <span class="ml-1 mr-5">{{ item.label }}</span>
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
    label: "Word Counter",
    icon: "pi pi-fw pi-pencil",
    to: "/wordcounter"
  },
  {
    label: "ToDo List",
    icon: "pi pi-fw pi-list",
    to: "/todo"
  },
  {
    label: "Orders",
    icon: "pi pi-fw pi-shopping-cart",
    to: "/orders" 
  },
  {
    label: "About",
    icon: "pi pi-fw pi-info",
    to: "/about"
  }
])
</script>

<style lang="scss" scoped>
.p-menubar {
  .p-menuitem {
    .p-menuitem-content {
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
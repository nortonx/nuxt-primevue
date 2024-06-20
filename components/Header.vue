<template>
  <Menubar :model="items">
    <template #start>
      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
        <path d="..." fill="var(--p-primary-color)" />
        <path d="..." fill="var(--p-text-color)" />
      </svg>
    </template>
    <template #item="{ item, props, root }">
      <NuxtLink :to="item.to" class="flex items-center" v-bind="props.action">
        <span :class="item.icon"></span>
        <span class="item-label ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
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
    label: "Data",
    icon: "pi pi-fw pi-database",
    to: "/data"
  },
  {
    label: "Form",
    icon: "pi pi-fw pi-user",
    to: "/form"
  },
  {
    label: "Orders",
    icon: "pi pi-fw pi-shopping-cart",
    to: "/orders"
  },
  {
    label: "Parking",
    icon: "pi pi-fw pi-car",
    to: "/parking"
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
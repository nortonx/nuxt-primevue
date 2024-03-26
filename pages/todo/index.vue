<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">TO-DO List</div>
    <div class="grid">
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <InputText placeholder="What needs to be done?" class="w-full"></InputText>
        </div>
      </div>
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex justify-content-between mx-8">
            
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex justify-content-between mx-8">
            <div class="text-900 font-bold text-xl">Total</div>
            <div class="text-900 font-bold text-xl">$20.95</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext"
import { useTodoStore } from "@/stores/todo.store"

const todoStore = useTodoStore()
</script>
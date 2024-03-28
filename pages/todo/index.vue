<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">TO-DO List</div>
    <div class="grid">
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <InputText placeholder="What needs to be done?" class="w-full" v-model="todo"></InputText>
          <Button label="Add" class="w-full mt-4" @click="addTodo"></Button>
        </div>
      </div>
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex flex-column mx-8">
            <div v-for="(todo, index) in todoStore.todos" :key="index" class="text-900 font-bold text-xl">
              <div
                @click="strikeTodo(index)"
                :style="todo.completed ? 'text-decoration: line-through' : 'text-decoration: none'"
                class="my-2"
              >
                {{ todo.title }}
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex justify-content-between mx-8">
            <div class="text-900 font-bold text-xl">Total: {{ todoStore.todos.length }}</div>
            <div class="text-900 font-bold text-xl">Completed: {{ completedItems }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext"
import { ref, computed } from "vue"
import { useTodoStore, ToDo } from "@/stores/todo.store"

const todoStore = useTodoStore()
const todo = ref(null)

// Computed properties
const completedItems = computed(() => todoStore.todos.filter((todo: ToDo) => todo.completed).length)

// Methods
function addTodo() {
  todoStore.add({
    title: todo.value,
    completed: false
  })
  todo.value = null
}

function strikeTodo(index: number) {
  todoStore.todos[index].completed = !todoStore.todos[index].completed
}
 

</script>
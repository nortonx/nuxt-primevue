<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">TO-DO List</div>
    <div class="grid">
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <InputText 
            placeholder="What needs to be done?" 
            class="w-full" 
            v-model="todo"
            @keydown.enter="addTodo"
          ></InputText>
          <Button label="Add" class="w-full mt-3" @click="addTodo"></Button>
        </div>
      </div>
      <div class="col-12 lg:col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex flex-column mx-4">
            <div class="text-900 font-bold text-xl text-center" v-if="emptyList">No items in the list</div>
            <ul v-else>
              <li v-for="(todo, index) in todoStore.todos" :key="index" class="text-900 font-bold text-xl flex flex-row align-items-center">
                <i class="pi mx-2" :class="todo.completed ? 'pi-check' : 'pi-times'"></i>
                <div
                  @click="strikeTodo(index)"
                  :style="todo.completed ? 'text-decoration: line-through' : 'text-decoration: none'"
                  class="my-2"
                >
                  {{ todo.title }}
                </div>
              </li>
            </ul>
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
import { ref, computed } from "vue"
import { type ToDo } from "@/types/todo.type";
import { useTodoStore } from "@/stores/todo.store"

const todoStore = useTodoStore()
const todo = ref<string>("")

// Computed properties
const completedItems = computed(() => todoStore.todos.filter((todo: ToDo) => todo.completed).length)
const emptyList = computed(() => todoStore.todos.length === 0)

// Methods
function addTodo() {
  if (todo.value.trim() === "") return
  todoStore.add({
    id: todoStore.todos.length + 1,
    title: todo.value,
    completed: false
  })
  todo.value = ""
}

function strikeTodo(index: number) {
  todoStore.todos[index].completed = !todoStore.todos[index].completed
}
 
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}

</style>
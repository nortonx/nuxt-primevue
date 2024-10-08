<template>
  <div class="p-4 md:px-6 lg:px-8">
    <h1 class="mb-4 text-center">TO-DO List</h1>
    <div class="grid">
      <div class="col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <InputText
            v-model="todoItem"
            placeholder="What needs to be done?"
            class="w-full"
            variant="filled"
            @keydown.enter="addTodo"
          ></InputText>
          <Button label="Add" class="w-full mt-3" @click="addTodo"></Button>
        </div>
      </div>
      <div class="col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex flex-column mx-4">
            <div
              v-if="emptyList"
              class="text-900 font-bold text-xl text-center"
            >
              No items in the list
            </div>
            <ul v-else>
              <li
                v-for="(todo, index) in todoStore.todos"
                :key="index"
                class="todo-item text-900 font-bold text-xl flex flex-row align-items-center"
              >
                <i
                  class="pi mx-2"
                  :class="todo.completed ? 'pi-check' : 'pi-times'"
                ></i>
                <div
                  :style="
                    todo.completed
                      ? 'text-decoration: line-through'
                      : 'text-decoration: none'
                  "
                  class="my-2 todo-item__text"
                  @click="strikeTodo(index)"
                >
                  {{ todo.title }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-8 col-offset-2">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex justify-content-between mx-4">
            <div class="text-900 font-bold text-xl">
              Total: {{ todoStore.todos.length }}
            </div>
            <div class="text-900 font-bold text-xl">
              Completed: {{ completedItems }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { type ToDo } from "@/types/todo.type";
import { useTodoStore } from "@/stores/todo.store";

const todoStore = useTodoStore();
const todoItem = ref<string>("");

// Computed properties
const completedItems = computed(
  () => todoStore.todos.filter((todo: ToDo) => todo.completed).length,
);
const emptyList = computed(() => todoStore.todos.length === 0);

// Methods
function addTodo() {
  if (todoItem.value.trim() === "") return;
  todoStore.add({
    id: todoStore.todos.length + 1,
    title: todoItem.value,
    completed: false,
  });
  todoItem.value = "";
}

function strikeTodo(index: number) {
  todoStore.todos[index].completed = !todoStore.todos[index].completed;
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  .todo-item {
    &__text {
      cursor: pointer;
    }
  }
}
</style>

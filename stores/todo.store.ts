import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { type ToDo } from "@/types/todo.type";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<ToDo[]>([] as ToDo[]);
  const completedTodos = computed(() =>
    todos.value.filter((todo) => todo.completed),
  );
  const pendingTodos = computed(() =>
    todos.value.filter((todo) => !todo.completed),
  );
  const totalTodos = computed(() => todos.value.length);

  function add(todo: ToDo) {
    todos.value.push(todo);
  }

  function remove(id: number) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  function toggle(id: number) {
    const index = todos.value.findIndex((todo) => todo.id === id);
    todos.value[index].completed = !todos.value[index].completed;
  }

  function clearCompleted() {
    todos.value = todos.value.filter((todo) => !todo.completed);
  }

  return {
    todos,
    completedTodos,
    pendingTodos,
    totalTodos,
    add,
    remove,
    toggle,
    clearCompleted,
  };
});

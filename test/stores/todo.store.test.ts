import { setActivePinia, createPinia } from 'pinia';
import { useTodoStore } from '@/stores/todo.store';
import { test, expect, describe, beforeEach } from 'vitest'

describe('Todo store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test('Todo store is initialized with empty todos', () => {
    const todoStore = useTodoStore();
    expect(todoStore.todos).toEqual([]);
  })

  test('Todo store can add a todo', () => {
    const todoStore = useTodoStore();
    todoStore.add({ id: 1, text: 'Test todo', completed: false });
    expect(todoStore.todos).toEqual([{ id: 1, text: 'Test todo', completed: false }]);
  })

  test('Todo store can remove a todo', () => {
    const todoStore = useTodoStore();
    todoStore.add({ id: 1, text: 'Test todo', completed: false });
    todoStore.remove(1);
    expect(todoStore.todos).toEqual([]);
  })
})

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { FormData } from "@/types/formData.type";

export const useFormStore = defineStore("form", () => {
  const records = ref<FormData[]>([] as FormData[]);
  const totalRecords = computed(() => records.value.length);
  const isEmpty = computed(() => records.value.length === 0);
  const lastRecord = computed(() => records.value[records.value.length - 1]);

  function add(record: FormData) {
    records.value.push(record);
  }

  function remove(index: number) {
    records.value.splice(index, 1);
  }

  function clear() {
    records.value = [];
  }

  return {
    records,
    totalRecords,
    isEmpty,
    lastRecord,
    add,
    remove,
    clear,
  };
});

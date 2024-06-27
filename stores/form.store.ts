import { defineStore } from "pinia"
import { ref, computed } from "vue"

import type { FormRecord } from "@/types/formRecord.type"

export const useFormStore = defineStore('form', () =>{
  const records = ref<FormRecord[]>([] as FormRecord[])
  const totalRecords = computed(() => records.value.length)

  function add(record: FormRecord) {
    records.value.push(record)
  }

  function remove(index: number) {
    records.value.splice(index, 1)
  }

  function clear() {
    records.value = []
  }

  return {
    records,
    totalRecords,
    add,
    remove,
    clear
  }
})
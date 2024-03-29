<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Data List {{ searchTerm }}</div>
    <div class="text-700 font-bold text-2xl mb-4 text-center">Filtered data length: {{ filteredData.length }}</div>
    <div class="grid">
      <div class="col-12 lg:col-10 col-offset-1">
        <div class="shadow-2 p-4 h-full flex flex-column surface-card ">
          <InputText
            placeholder="Search by ACT Symbol"
            class="w-full"
            v-model="searchTerm"
            ref="searchField"
            variant="filled"
          ></InputText>
        </div>
      </div>
      <div class="col-12 lg:col-10 col-offset-1">
        <DataTable :value="filteredData" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20]">
          <Column field="ACT Symbol" header="ACT Symbol" sortable></Column>
          <Column field="NASDAQ Symbol" header="NASDAQ Symbol" sortable></Column>
          <Column field="Company Name" header="Name" sortable></Column>
          <Column field="Round Lot Size" header="Round Lot Size" sortable></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import rawJsonData from "@/data/csvjson.json"
import { type Ticker } from "@/types/ticker.type"

const searchField = ref(null)
const searchTerm = ref("")
const jsonData = ref<Ticker[]>(rawJsonData)

// computed
const filteredData = computed(() => {
  if (!searchTerm.value) {
    return jsonData.value;
  }
  return jsonData.value.filter((item: Ticker) => {
    return item["ACT Symbol"].toLowerCase().includes(searchTerm.value.toLowerCase())
  })
})

</script>
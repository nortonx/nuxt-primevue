<template>
  <div class="px-4 py-4 md:px-6 lg:px-8">
    <h1 class="mb-4 text-center">Data List {{ searchTerm }}</h1>
    <h2 class="text-700 font-bold text-2xl mb-4 text-center">Filtered data length: {{ filteredData.length }}</h2>
    <div class="grid">
      <div class="col-8 col-offset-2">
        <div class="shadow-2 p-4 h-full flex flex-column surface-card ">
          <IconField iconPosition="left">
            <InputIcon class="pi pi-search"></InputIcon>
            <InputText
              placeholder="Search by ACT Symbol"
              class="w-full"
              v-model="searchTerm"
              ref="searchField"
              variant="filled"
            ></InputText>
          </IconField>
        </div>
      </div>
      <div class="col-8 col-offset-2">
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
const jsonData = shallowRef<Ticker[]>(rawJsonData)

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
<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Data List</div>
    <div class="grid">
      <!-- <div class="col-12 lg:col-10 col-offset-1">
        <div class="shadow-2 p-4 h-full flex flex-column surface-card ">
          <InputText 
            placeholder="Search by ACT Symbol" 
            class="w-full" 
            v-model="search" 
            ref="search"
            @change="handleSearch(search)"
          ></InputText>
        </div>
      </div> -->
      <div class="col-12 lg:col-10 col-offset-1">
        <DataTable :value="jsonData" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20]">
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
import jsonData from "@/data/csvjson.json"


function handleSearch(search: string) {
  return jsonData.filter((item: any) => {
    return item["ACT Symbol"].toLowerCase().includes(search.toLowerCase())
  })
}
</script>
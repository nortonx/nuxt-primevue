<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-blue-600 font-bold mb-3"><i class="pi pi-prime"></i>&nbsp;POWERED BY PrimeVue</div>
      <div class="text-900 font-bold text-5xl mb-3">Push the button for SW Ships</div>

      <OrderList v-if="data.value" :value="data.value.results" header="Starships" style="height: 300px" :listStyle="{height: '200px'}">
        <template #header>List of Starships</template>L
        <template #item="slotProps">
          <div class="flex flex-wrap p-2 align-items-center gap-3">
            <img 
              class="w-4rem flex-shrink-0 border-round"
              src=""
              :alt="slotProps.item.name"
              />
              <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ slotProps.item.name }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>length: {{ slotProps.item.length }}</span>
                </div>
            </div>
            <span class="font-bold">$ {{ slotProps.item.cost_in_credits }}</span>
          </div>
        </template>
      </OrderList>
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderList from "primevue/orderlist"
import { onMounted } from "vue"

const { data, pending, error, refresh } = await useFetch("https://swapi.dev/api/starships/", {
  pick: ["results"]
});

onMounted(() => {
  console.log("data content:", data.value.results)
})

</script>
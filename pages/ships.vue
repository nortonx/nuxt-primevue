<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-blue-600 font-bold mb-3"><i class="pi pi-prime"></i>&nbsp;List of Star Wars Ships:</div>
      

      <ProgressSpinner v-if="pending" />
      <ul v-if="data">
        <div class="">I really wanted to show the ships image</div>
        <li v-for="ship in data.results" :key="ship.name">
          {{ ship.name }} | crew: {{ ship.crew }}
        </li>
      </ul>
      <div v-else>
        Deu merda
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressSpinner from "primevue/progressspinner"
import { onMounted } from "vue"

const { data, pending, error, refresh } = await useFetch("https://swapi.dev/api/starships/", {
  pick: ["results"],
});

onMounted(() => {
  console.log("data content:", (data as any).value.results)
})

</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
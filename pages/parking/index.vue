<template>
  <div class="border-round-xs border-1 p-3">
    <h1 class="text-center">Parking</h1>
    <div class="flex flex-wrap justify-content-center">
      <car 
        v-for="car in data"
        :key="car.plate"
        :car-model="car.model"
        :car-plate="car.plate"
        :car-color="car.color"
        :car-owner="car.owner"
      ></car>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Car } from "@/types/car.type"

import data from "@/data/carData.json"

onMounted(() => {
  console.log(data)
})



</script>
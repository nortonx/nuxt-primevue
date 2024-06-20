<template>
  <div class="border-round-xs border-1 p-3">
    <h1 class="text-center">Parking</h1>
    <div v-if="carData" class="flex flex-wrap justify-content-center">
      <car 
        v-for="car in carData"
        :key="car.plate"
        :car-model="car.model"
        :car-plate="car.plate"
        :car-color="car.color"
        :car-owner="car.user.name"
      ></car>
    </div>
    <div v-else class="flex flex-wrap justify-content-center">
      <div class="text-center">Could not load content :-(</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Car } from "@/types/car.type"

const API_URL = "http://localhost:8000"

const { data, error } = useFetch<Car[]>(`${API_URL}/cars`)

const carData = data

onMounted(() => {
  console.log(carData)
})



</script>
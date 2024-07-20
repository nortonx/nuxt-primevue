<template>
  <div class="shadow-2 p-4 h-full flex flex-column surface-card border-round-md">
    <div v-if="carData" class="flex flex-wrap justify-content-center">
      <car 
        v-for="car in carData"
        :key="car.plate"
        :id="car.id"
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

const API_URL = import.meta.env.VITE_PARKING_API_URL as string
const { data, error } = useFetch<Car[]>(`${API_URL}/cars`)
const carData = data

</script>

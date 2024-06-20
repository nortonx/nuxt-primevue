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
        :car-owner="car.user.name"
      ></car>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import carData from "@/data/carData.json"

const API_URL = "http://localhost:8000"

interface Car {
  model: string
  plate: string
  color: string
  user: {
    name: string
  }
}

const { data, error } = useFetch<Car[]>(`${API_URL}/cars`)
onMounted(() => {
  console.log(data)
})



</script>
<template>
  <div class="border-round-xs border-1 p-3">
    <h1 class="text-center">Parking</h1>
    <div v-if="data" class="flex flex-wrap justify-content-center">
      <car 
        v-for="car in data"
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
<template>
  <div class="p-4 md:px-6 lg:px-8">
    <h1 class="mb-4 text-center">Parking ({{ API_URL }})</h1>
    <div class="grid">
      <div class="col-8 col-offset-2">
        <div class="shadow-2 p-4 h-full flex flex-column surface-card border-round-md">
          <TabView>
            <TabPanel header="Cars">
              <div v-if="Array.isArray(carData)" class="flex flex-wrap justify-content-center">
                <car 
                  v-for="car in carData"
                  :key="car.id"
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
            </TabPanel>
            <TabPanel header="Users">
              <div class="flex flex-wrap justify-content-center">
                <div class="card col-4 m-2">
                  <div class="card-header">
                    <h3>Users</h3>
                  </div>
                  <div class="card-body">
                    <ul>
                      <li v-for="car in carData" :key="car.plate">
                        <div>{{ car.user.name }}</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Garages">
              <div class="flex flex-wrap justify-content-center">
                <div class="card col-4 m-2">
                  <div class="card-header">
                    <h3>Garages</h3>
                  </div>
                  <div class="card-body">
                    
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TabView from "primevue/tabview"
import TabPanel from "primevue/tabpanel"
import type { Car } from "@/types/car.type"

const API_URL = import.meta.env.VITE_PARKING_API_URL as string
const { data, error } = useFetch<Car[]>(`${API_URL}/cars`)
const carData = data

onMounted(() => {
  if (Array.isArray(data)) {
    console.log("Data from parking-api:", carData)
  }
})

</script>

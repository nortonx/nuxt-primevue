<template>
  <div class="car-item border-1 border-round-sm p-2 w-2 flex flex-column justify-content-center align-items-center m-3">
    <div class="action-buttons flex flex-wrap justify-content-center align-items-center m-1">
      <Button
        icon="pi pi-pencil"
        @click="editCar"
        :label="editLabel"
        class="mb-1"
        severity="info"
      ></Button>
      <Button
        icon="pi pi-trash"
        @click="deleteCar"
        label="Delete"
        class="mb-1 ml-1"
        severity="danger"
      ></Button>
    </div>
    <img 
      src="~/assets/car.svg"
      :alt="props.carModel"
      class="car-image p-1"
    />
    <div class="car-info">
      <editable-field label="Model" :value="props.carModel" v-model="props.carModel" class="car-model" @toggle-click="toggleClick"></editable-field>
      <editable-field label="Plate" :value="props.carPlate" v-model="props.carPlate" @toggle-click="toggleClick"></editable-field>
      <editable-field label="Color" :value="props.carColor" v-model="props.carColor" @toggle-click="toggleClick"></editable-field>
      <div class="car-owner"><span class="car-property font-bold">Owner</span>: {{ props.carOwner }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "primevue/button"
import type { Car } from "@/types/car.type"

const API_URL = import.meta.env.VITE_PARKING_API_URL as string
const props = defineProps<{
  id: number,
  carModel: string,
  carPlate: string,
  carColor: string,
  carOwner: string
}>()

const clicked = ref(false)
const editLabel = ref("Edit")

function toggleClick() {
  clicked.value = !clicked.value
  editLabel.value = clicked.value ? "Save" : "Edit"
}

async function editCar() {
  console.log("Editing car with plate:", props.carPlate, props.carModel)
  const { data, error, status } = await useFetch<Car>(`${API_URL}/cars/${props.id}`, {
    method: "PUT",
    body: JSON.stringify({
      model: props.carModel,
      plate: props.carPlate,
      color: props.carColor,
      user: props.carOwner
    })
  })
  console.log("Data from parking-api:", data.value, "error:", error.value, "status:", status.value)
  toggleClick()
}

function deleteCar() {
  console.log("Deleting car with plate:", props.carPlate, props.carModel)
}
</script>

<style scoped>
.car-item {
  min-width: 160px;
  img {
    width: 120px;
    height: 120px;
  }
}
</style>
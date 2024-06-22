<template>
  <div class="car-item border-1 border-round-sm p-2 w-2 flex flex-column justify-content-center align-items-center m-3">
    <img 
      src="~/assets/car.svg"
      :alt="props.carModel"
      class="car-image p-1"
    />
    <div class="car-info">
      <div class="car-model"><span class="car-property font-bold">Model</span>: {{ props.carModel }}</div>
      <div class="car-plate"><span class="car-property font-bold">Plate</span>: <code>{{ props.carPlate }}</code></div>
      <div class="car-color"><span class="car-property font-bold">Color</span>: <span class="car-property-value" :style="{ border: `2px solid ${props.carColor}`, paddingLeft: '2px', paddingRight: '2px' }">{{ props.carColor }}</span></div>
      <div class="car-owner"><span class="car-property font-bold">Owner</span>: {{ props.carOwner }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import svg from '@/assets/car.svg';
const props = defineProps<{
  carModel: string,
  carPlate: string,
  carColor: string,
  carOwner: string
}>()

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
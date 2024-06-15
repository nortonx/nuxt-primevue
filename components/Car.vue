<template>
  <div class="car-item border-1 border-round-sm p-2 w-2 flex flex-column justify-content-center align-items-center m-3">
    <img 
      src="~/assets/car-compact-svgrepo-com.svg"
      :alt="props.carModel"
      class="car-image p-1"
    />
    <div class="car-info">
      <div><span class="car-property font-bold">Model</span>: {{ props.carModel }}</div>
      <div><span class="car-property font-bold">Plate</span>: <code>{{ props.carPlate }}</code></div>
      <div><span class="car-property font-bold">Color</span>: <span class="car-property-value" :style="{ backgroundColor: props.carColor }">{{ props.carColor }}</span></div>
      <div><span class="car-property font-bold">Owner</span>: {{ props.carOwner }}</div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  carModel: string,
  carPlate: string,
  carColor: string,
  carOwner: string
}>()

</script>

<style scoped>
.car-item {
  img {
    width: 120px;
    height: 120px;
  }
}
</style>
<template>
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 p-3 border-round">
      <div class="flex justify-content-between md-3">
        <div>
          <span class="block text-500 font-medium mb-3 label">{{ props.label }}</span>
          <div class="text-900 font-medium text-xl counter">{{ props.counter }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  counter: Number,
  label: String
})
</script>
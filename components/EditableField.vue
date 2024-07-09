<template>
  <div class="editable-field cursor-pointer my-1">
    <span class="field-label font-bold" @click="toggleClick">{{ props.label }}: </span>
    <span v-if="!clicked" class="field-value">{{ props.value }}</span>
    <span v-else>
      <input type="text" class="w-6" v-model="props.value" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

const props = defineProps<{
  label: string,
  value: string
}>()

const clicked = ref(false)
const emits = defineEmits(['toggle-click'])

function toggleClick() {
  clicked.value = !clicked.value
  emits('toggle-click', clicked.value)
}

</script>

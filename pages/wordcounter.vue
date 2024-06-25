<template>
  <div class="px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12">
        <h1 class="text-4xl font-bold text-center mb-4">Word Counter</h1>
        <p class="text-center text-800">Enter your text below to count the number of words.</p>
      </div>
      <div class="col-8 col-offset-2">
        <Textarea
          v-model="content"
          rows="8"
          cols="60"
          autoResize
          class="w-full border-round shadow-2 p-3 text-800"
        ></Textarea>
      </div>
      
      <CounterBox :counter="words" label="Words" />
      <CounterBox :counter="characters" label="Characters" />
      <CounterBox :counter="phrases" label="Phrases" />
      <CounterBox :counter="paragraphs" label="Paragraphs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Textarea from "primevue/textarea"
import { ref, computed } from "vue"
import CounterBox from "@/components/CounterBox.vue"


const content = ref("")

const words = computed(() => {
  if (content.value === "") return 0
  return content.value.trim().split(/\s+/).length
})

const characters = computed(() => content.value.length)

const phrases = computed(() => {
  if (content.value === "") return 0
  return content.value.split(/[.!?]+/).length - 1
})

const paragraphs = computed(() => {
  if (content.value === "") return 0
  return content.value.split("\n").length - 1
})

</script>

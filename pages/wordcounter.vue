<template>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12">
        <h1 class="text-4xl font-bold text-center mb-4">Word Counter</h1>
        <p class="text-center text-800">Enter your text below to count the number of words.</p>
      </div>
      <div class="col-12">
        <Textarea
          v-model="content"
          rows="12"
          cols="60"
          autoResize
          class="w-full border-round shadow-2 p-3 text-800"
        ></Textarea>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between md-3">
            <div>
              <span class="block text-500 font-medium mb-3">Words</span>
              <div class="text-900 font-medium text-xl">{{ words }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between md-3">
            <div>
              <span class="block text-500 font-medium mb-3">Characters</span>
              <div class="text-900 font-medium text-xl">{{ characters }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between md-3">
            <div>
              <span class="block text-500 font-medium mb-3">Phrases</span>
              <div class="text-900 font-medium text-xl">{{ phrases }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between md-3">
            <div>
              <span class="block text-500 font-medium mb-3">Paragraphs</span>
              <div class="text-900 font-medium text-xl">{{ paragraphs }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Textarea from "primevue/textarea"
import { ref, computed } from "vue"

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

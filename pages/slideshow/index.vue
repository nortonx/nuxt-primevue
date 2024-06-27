<template>
  <div class="p-4 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12">
        <h1 class="text-4xl font-bold text-center mb-4">Slideshow</h1>
        <p class="text-center text-800">This is a simple slideshow created using PrimeVue components.</p>
        <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="3"
          :circular="true"
          :showItemNavigators="true"
          :showItemNavigatorsOnHover="true"
          :showItemNavigatorsOnTop="true"
          :showItemNavigatorsOnBottom="true"
          :showItemNavigatorsOnLeft="true"

        />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Galleria from "primevue/galleria"
import { createApi } from "unsplash-js"

const images = ref()

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY as string
  })

const responsiveOptions = ref([
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1
  }
])

onMounted(() => {
  console.log("Was mounted (gallery-page)")
  unsplash.photos.getRandom({ count: 10 })
    .then(result => {
      if (result.errors) {
        console.log("error occurred: ", result.errors[0])
      } else {
        images.value = result.response
        console.log("images: ", images.value)
      }
    })
})

</script>
<template>
  <div class="p-4 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-8 col-offset-2">
        <h1 class="text-4xl font-bold text-center mb-4">Slideshow</h1>
        <p class="text-center text-800">This is a simple slideshow created using PrimeVue components.</p>
        <div class="card">
          <Galleria
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="5"
            
          >
            <template #item="{ item }">
              <img :src="item.itemImageSrc" :alt="item.alt" class="w-full h-full object-cover" />
            </template>
            <template #thumbnail="{ item }">
              <img :src="item.itemImageSrc" :alt="item.alt" class="w-full h-full object-cover" />
            </template>
          </Galleria>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Galleria from "primevue/galleria"

const images = ref()

images.value = [
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptnyi5ptnyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptnyi5ptnyi5p.jpg"
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptoyi5ptoyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptoyi5ptoyi5p.jpg"
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptpyi5ptpyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptpyi5ptpyi5p.jpg"
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptqyi5ptqyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptqyi5ptqyi5p.jpg"
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptryi5ptryi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptryi5ptryi5p.jpg"
  },
]


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

</script>
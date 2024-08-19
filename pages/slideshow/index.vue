<template>
  <div class="p-4 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12">
        <h1 class="text-4xl font-bold text-center mb-4">Slideshow</h1>
        <p class="text-center text-800">
          This is a simple slideshow created using PrimeVue components.
        </p>
        <TabView>
          <TabPanel header="Slideshow Component">
            <div class="card col-8 col-offset-2">
              <Galleria
                :value="images"
                :responsive-options="responsiveOptions"
                :num-visible="3"
                :circular="true"
              >
                <template #item="slotProps">
                  <img
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    class="w-full"
                  />
                </template>
                <template #thumbnail="slotProps">
                  <img
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    class="w-full"
                  />
                </template>
              </Galleria>
            </div>
          </TabPanel>
          <TabPanel header="Image Component">
            <div class="card">
              <Image
                v-for="image in images"
                :key="image.src"
                preview
                class="w-3 m-1"
              >
                <template #indicatoricon>
                  <i class="pi pi-search"></i>
                </template>
                <template #image>
                  <img
                    :src="image.itemImageSrc"
                    :alt="image.alt"
                    class="w-full"
                  />
                </template>
                <template #preview>
                  <img :src="image.itemImageSrc" alt="Preview" class="w-full" />
                </template>
              </Image>
            </div>
          </TabPanel>
          <TabPanel header="Carousel Component">
            <Carousel
              :value="images"
              :num-visible="3"
              :num-scroll="3"
              :responsive-options="responsiveOptionsCarousel"
            >
              <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                  <div class="mb-3">
                    <div class="relative mx-auto">
                      <img
                        :src="slotProps.data.itemImageSrc"
                        :alt="slotProps.data.alt"
                        class="w-full border-round"
                      />
                    </div>
                  </div>
                  <div class="mb-3 font-medium">{{ slotProps.data.alt }}</div>
                  <div class="flex justify-content-between align-items-center">
                    <div class="mt-0 font-semibold text-xl">10.00</div>
                    <span>
                      <Button
                        icon="pi pi-search"
                        severity="secondary"
                        outlined
                      ></Button>
                      <Button icon="pi pi-shopping-cart" class="ml-2"></Button>
                    </span>
                  </div>
                </div>
              </template>
            </Carousel>
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Galleria from "primevue/galleria";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Image from "primevue/image";
import Carousel from "primevue/carousel";

const images = ref();

images.value = [
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptnyi5ptnyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptnyi5ptnyi5p.jpg",
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptoyi5ptoyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptoyi5ptoyi5p.jpg",
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptpyi5ptpyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptpyi5ptpyi5p.jpg",
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptqyi5ptqyi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptqyi5ptqyi5p.jpg",
  },
  {
    itemImageSrc: "/images/set-1/Gemini_Generated_Image_yi5ptryi5ptryi5p.jpg",
    alt: "Gemini_Generated_Image_yi5ptryi5ptryi5p.jpg",
  },
];

const responsiveOptions = ref([
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const responsiveOptionsCarousel = ref([
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 2,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div
      class="lg:col-6 md:col-6 p-6 text-center md:text-left flex align-items-center"
    >
      <section>
        <span class="block text-6xl font-bold mb-1">Norton Almeida</span>
        <div class="text-6xl text-primary font-bold mb-3">
          Vue.js Frontend Developer
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3">
          This is a landing page created using PrimeBlocks and PrimeVue, for
          demo purposes. Feel free to click on the links above and see the
          examples.
        </p>

        <Button
          label="Toggle Dialog Example"
          type="button"
          class="mr-3 p-button-raised"
          @click="toggleDialog"
        ></Button>
        <Button
          label="Look, that's an AI generated image (o11y enabled)"
          type="button"
          icon="pi pi-arrow-right"
          class="p-button-outlined mt-2"
        ></Button>
        <Dialog
          v-model:visible="isVisible"
          modal
          header="Disclaimer"
          footer="- Norton Almeida"
          close-on-escape
          :style="{ width: '50vw' }"
          @on-hide="isVisible = false"
        >
          <p>
            The content presented here were implemented based on code challenges
            from recruiting proccess that I was part of. Also, there are
            challenges that are in progress suck as the parking feature, which
            is based on an app we used on another company I used to work for.
          </p>
          <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>
        </Dialog>
      </section>
    </div>
    <div class="lg:col-6 md:col-6 overflow-hidden">
      <Image
        src="/images/AI_generated_2.jpeg"
        alt="Funko-like developer image"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
        preview
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Image from "primevue/image";

const isVisible = ref(false);

function toggleDialog() {
  isVisible.value = !isVisible.value;
}
</script>

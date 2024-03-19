<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
      <section>
        <span class="block text-6xl font-bold mb-1">Create the screens your</span>
        <div class="text-6xl text-primary font-bold mb-3">visitors deserve to see</div>
        <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
        <Button label="Learn More" type="button" class="mr-3 p-button-raised" @click="toggleDialog"></Button>
        <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
        <Dialog 
          v-model:visible="isVisible"
          modal
          header="Header content"
          footer="Footer content"
          close-on-escape
          :visible="isVisible"
          @onHide="isVisible = false"
          :style="{ width: '50vw' }"
        >
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </Dialog>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img 
        src="/images/hero-1.png"
        alt="Woman looking right"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Dialog from "primevue/dialog"

const isVisible = ref(false)

function toggleDialog() {
  isVisible.value = !isVisible.value
}
</script>
<template>
  <div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12">
        <div class="formgrid grid">
          <div class="field col-12 md:col-6">
            <label for="firstName">First Name</label>
            <InputText id="firstName" v-model="formData.firstName" class="m-2 w-auto"/>
          </div>
          <div class="field col-12 md:col-6">
            <label for="lastName">Last Name</label>
            <InputText id="lastName" v-model="formData.lastName" class="m-2 w-auto"/>
          </div>
          <div class="field col-12 md:col-6">
            <label for="email">Email</label>
            <InputText id="email" v-model="formData.email" class="m-2 w-auto"/>
          </div>
          <div class="field col-12 md:col-6">
            <label for="phone">Phone</label>
            <InputText id="phone" v-model="formData.phone" class="m-2 w-auto"/>
          </div>
          <div class="field col-12 md:col-3">
            <Dropdown
              v-model="formData.country"
              :options="countries"
              optionLabel="name"
              placeholder="Select a Country"
              class="m-2 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue"
import Dropdown from "primevue/dropdown"
import { type FormData } from "@/types/formData.type"


const formData = ref<FormData>({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: ""
})

const countries = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'Canada', code: 'CA' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Italy', code: 'IT' },
  { name: 'Japan', code: 'JP' },
  { name: 'Russia', code: 'RU' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
])

onMounted(() => {
  console.log("Form Page Mounted", formData.value)
})

watchEffect(() => {
  if (formData.value) {
    console.log("Form Data Changed", formData.value)
  }
})

</script>
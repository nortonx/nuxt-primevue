<template>
  <div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-center">
      <div class="col-12">
        <div class="surface-card p-4 shadow-2 border-round w-full">
          <div class="text-center mb-5">
              <div class="text-900 text-3xl font-medium mb-3">Sign Up</div>
              <span class="text-600 font-medium line-height-3">(For demo purposes only)</span>
          </div>
          <div class="formgrid grid">
            <div class="field col-12 md:col-6">
              <label for="firstName" class="block text-900 font-medium mb-2">First Name</label>
              <InputText id="firstName" v-model="formData.firstName" class="w-full mb-3"/>
            </div>
            <div class="field col-12 md:col-6">
              <label for="lastName" class="block text-900 font-medium mb-2">Last Name</label>
              <InputText id="lastName" v-model="formData.lastName" class="w-full mb-3"/>
            </div>
            <div class="field col-12 md:col-6">
              <label for="email" class="block text-900 font-medium mb-2">Email</label>
              <InputText id="email" v-model="formData.email" class="w-full mb-3"/>
            </div>
            <div class="field col-12 md:col-6">
              <label for="phone" class="block text-900 font-medium mb-2">Phone</label>
              <InputText id="phone" v-model="formData.phone" class="w-full mb-3"/>
            </div>
            <div class="field col-12 md:col-6">
              <label for="password" class="block text-900 font-medium mb-2">Password</label>
              <InputText id="password" type="password" class="w-full mb-3" />
            </div>
            <div class="field col-12 md:col-6">
              <label class="block text-900 font-medium mb-2" for="country">Country</label>
              <Dropdown
                id="country"
                v-model="formData.country"
                :options="countries"
                optionLabel="name"
                placeholder="Select a Country"
                class="w-full"
              />
            </div>
            <div class="field col-12 action-row flex justify-content-center">
              <Button label="Sign Up"></Button>
            </div>
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
  password: "",
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
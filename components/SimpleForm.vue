<template>
  <div class="formgrid grid">
    <div class="field col-12 md:col-6">
      <label for="firstName" class="block text-900 font-medium mb-1">First Name</label>
      <InputText id="firstName" v-model="formData.firstName" class="w-full mb-2"/>
      <span v-if="$v.formData.firstName.$error" class="error-message">Campo obrigatório</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="lastName" class="block text-900 font-medium mb-1">Last Name</label>
      <InputText id="lastName" v-model="formData.lastName" class="w-full mb-2"/>
      <span v-if="$v.formData.lastName.$error" class="error-message">Campo obrigatório</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="email" class="block text-900 font-medium mb-1">Email</label>
      <InputText id="email" v-model="formData.email" class="w-full mb-2"/>
      <span v-if="$v.formData.email.$error" class="error-message">Campo inválido</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="phone" class="block text-900 font-medium mb-1">Phone</label>
      <InputText id="phone" v-model="formData.phone" class="w-full mb-2"/>
      <span v-if="$v.formData.phone.$error" class="error-message">Campo obrigatório</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="password" class="block text-900 font-medium mb-1">Password</label>
      <InputText id="password" type="password" v-model="formData.password" class="w-full mb-2" />
      <span v-if="$v.formData.password.$error" class="error-message">Campo obrigatório</span>
    </div>
    <div class="field col-12 md:col-6">
      <label class="block text-900 font-medium mb-1" for="country">Country</label>
      <Dropdown
        id="country"
        v-model="formData.country"
        :options="countries"
        optionLabel="name"
        placeholder="Select a Country"
        class="w-full mb-2"
      />
      <span v-if="$v.formData.country.$error" class="error-message">Campo obrigatório</span>
    </div>
    <div class="errors">
      <p v-for="error in $v.$errors" :key="error.$uid">{{ error.$params }}</p>
    </div>
    <div class="field col-12 action-row flex justify-content-center">
      <Button label="Sign Up" @click="$v.$validate()"></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue"
import Dropdown from "primevue/dropdown"
import { type FormData } from "@/types/formData.type"
import { useVuelidate } from "@vuelidate/core"
import { required, email, minLength, alpha } from "@vuelidate/validators"

const formData = ref<FormData>({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  country: ""
})

const rules = {
  formData: {
    firstName: {required },
    lastName: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    phone: { required, alpha },
    country: { required }
  }
}

const $v = useVuelidate(rules, { formData })

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

watchEffect(() => {
  if (formData.value) {
    console.log("Form Data Changed", formData.value)
  }
})

</script>

<style lang="scss" scoped>
.formgrid {
  .field {

    .error-message {
      color: red;
      font-size: 0.7rem;
      display: block;
    }
  }

  .action-row {
    margin-top: 1rem;
  }
}

</style>
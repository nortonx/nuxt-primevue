<template>
  <div class="formgrid grid">
    <div class="field col-12 md:col-6">
      <label for="firstName" class="block text-900 font-medium mb-1">First Name</label>
      <InputText 
        id="firstName" 
        v-model="formData.firstName" 
        class="w-full mb-2" 
        @blur="$v.formData.firstName.$touch" 
      />
      <span v-show="$v.formData.firstName.$error" class="error-message">{{ $v.formData.firstName.required.$message }}</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="lastName" class="block text-900 font-medium mb-1">Last Name</label>
      <InputText 
        id="lastName" 
        v-model="formData.lastName" 
        class="w-full mb-2"
        @blur="$v.formData.lastName.$touch"
      />
      <span v-show="$v.formData.lastName.$error" class="error-message">{{ $v.formData.lastName.required.$message }}</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="email" class="block text-900 font-medium mb-1">Email</label>
      <InputText 
        id="email" 
        v-model="formData.email" 
        class="w-full mb-2"
        @blur="$v.formData.email.$touch"
      />
      <span v-show="$v.formData.email.$error" class="error-message">{{ $v.formData.email.required.$message }}</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="phone" class="block text-900 font-medium mb-1">Phone</label>
      <InputMask 
        id="phone" 
        mask="+99 (99) 9 9999-9999" 
        placeholder="+1 (99) 9 9999-9999" 
        v-model="formData.phone" 
        class="w-full mb-2"
        @blur="$v.formData.phone.$touch"
      />
      <span v-show="$v.formData.phone.$error" class="error-message">{{ $v.formData.phone.required.$message }}</span>
    </div>
    <div class="field col-12 md:col-6">
      <label for="password" class="block text-900 font-medium mb-1">Password</label>
      <InputText 
        id="password" 
        type="password" 
        v-model="formData.password" 
        class="w-full mb-2"
        @blur="$v.formData.password.$touch"
      />
      <span v-show="$v.formData.password.$error" class="error-message">{{ $v.formData.password.required.$message }}</span>
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
      <span v-show="$v.formData.country.$error" class="error-message">{{ $v.formData.country.required.$message }}</span>
    </div>
    <div class="errors">
      <code>
        <p v-for="error in $v.$errors" :key="error.$uid">{{ error.$property }} : {{ error.$params }}</p>
      </code>
      <code v-if="isFormValid">
        {{ formData }}
      </code>
    </div>
    <div class="field col-12 action-row flex justify-content-center">
      <Button label="Add User to List" @click="submitForm"></Button>
    </div>
  </div>
  <Panel header="List of users">
    <div class="card" v-if="formStore.records">
      <ul class="user-list list-none p-0 flex flex-wrap">
        <li v-for="(record, index) in formStore.records" :key="record.phone" class="user-card m-3 w6">
          <Card>
            <template #title>{{ `${index + 1} - ${record.firstName} ${record.lastName}` }}</template>
            <template #content>
              <div class="row">
                <span class="label font-bold">Email: </span>
                <span class="value">{{ record.email }}</span>
              </div>
              <div class="row">
                <span class="label font-bold">Phone: </span>
                <span class="value">{{ record.phone }}</span> 
              </div>
              <div class="row">
                <span class="label font-bold">Country: </span>
                <span class="value">{{ record.country.name }}</span>
              </div>
              <div class="row mt-4 flex justify-content-end">
                <Button label="Delete" icon="pi pi-times" class="p-button-danger" @click="formStore.remove(index)"></Button>
              </div>
            </template>
          </Card>
        </li>
      </ul>
    </div>
  </Panel>
</template>

<script setup lang="ts">
import Dropdown from "primevue/dropdown"
import InputMask from "primevue/inputmask"
import { type FormData } from "@/types/formData.type"
import { useVuelidate } from "@vuelidate/core"
import { required, email, minLength, helpers } from "@vuelidate/validators"
import { useFormStore } from "@/stores/form.store"
import Panel from "primevue/panel"
import Card from "primevue/card"
import type { CountryType } from "@/types/country.type"

const formData = ref<FormData>({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  country: { name: "", code: "" }
  
})

const formStore = useFormStore()

const isFormValid = ref(false)

const rules = {
  formData: {
    firstName: { required: helpers.withMessage("This field is required", required) },
    lastName: { required: helpers.withMessage("This field is required", required) },
    email: { required: helpers.withMessage("E-mail with invalid format", required), email },
    password: { required: helpers.withMessage("Password should be at least 6 characters long", required), minLength: minLength(6) },
    phone: { required: helpers.withMessage("Phone number is required", required) },
    country: { required: helpers.withMessage("Select an option", required) }
  }
}

const $v = useVuelidate(rules, { formData })

const countries = ref<CountryType[]>([
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

async function submitForm() {
  isFormValid.value = await $v.value.$validate()
  if (!isFormValid.value) {
    console.log("Form is not valid")
    return
  }

  if (JSON.stringify(formData.value) !== JSON.stringify(formStore.lastRecord)) {
    formStore.add(formData.value)
    resetForm()
  }
}

function resetForm() {
  formData.value = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: { name: "", code: "" }
  }
  $v.value.$reset()
}

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
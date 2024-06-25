<template>
  <div class="p-4 md:px-6 lg:px-8">
    <h1 class="mb-4 text-center">Checkout Order # {{ route.params.id }}</h1>
    <div class="grid">
      <div class="col-12">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <DataTable
            ref="dt"
            :value="products"
            dataKey="id"
          >
            <Column field="name" header="Name"></Column>
            <Column field="price" header="Price"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="discount" header="Discount"></Column>
            <Column field="subtotal" header="Subtotal"></Column>
          </DataTable>
        </div>
      </div>
      <div class="col-12">
        <div class="shadow-2 p-3 h-full flex flex-column surface-card">
          <div class="flex justify-content-between mx-8">
            <div class="text-900 font-bold text-xl">Total</div>
            <div class="text-900 font-bold text-xl">${{ total }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product } from "@/types/product.type"
import { onMounted } from "vue"


const route = useRoute()

const randomValue = ref(Math.floor(Math.random() * parseInt(route.params.id)))

onMounted(() => {
  console.log("Hello from checkout page with id: ", route.params.id)
  console.log("Random value: ", randomValue)
})


const products: Product[] = [
  {
    id: 1,
    name: "Apple",
    price: 3,
    quantity: 4,
    discount: `${randomValue.value}%`,
    subtotal: computed(() => products[0].price * products[0].quantity - (products[0].price * products[0].quantity * randomValue.value / 100)),
  },
  {
    id: 2,
    name: "Orange",
    price: 2,
    quantity: 3,
    discount: `${randomValue.value}%`,
    subtotal: computed(() => products[1].price * products[1].quantity - (products[1].price * products[1].quantity * randomValue.value / 100))
  },
  {
    id: 3,
    name: "Banana",
    price: 2,
    quantity: 5,
    discount: `${randomValue.value}%`,
    subtotal: computed(() => products[2].price * products[2].quantity - (products[2].price * products[2].quantity * randomValue.value / 100)),
  }
]

const total = computed(() => {
  return products.reduce((acc, product) => acc + product.subtotal.value, 0)
})

</script>
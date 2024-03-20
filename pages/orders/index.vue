<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Checkout</div>
    <div class="grid">
      <div class="col-12 lg:col-8 col-offset-2">
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
      <div class="col-12 lg:col-8 col-offset-2">
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
import { computed } from "vue"

type product = {
  id: number
  name: string
  price: number
  quantity: number
  discount: string
  subtotal: number | any
}

const products: product[] = [
  {
    id: 1,
    name: "Apple",
    price: 3,
    quantity: 4,
    discount: "2%",
    subtotal: computed(() => products[0].price * products[0].quantity - (products[0].price * products[0].quantity * 0.02)),
  },
  {
    id: 2,
    name: "Orange",
    price: 2,
    quantity: 3,
    discount: "5%",
    subtotal: computed(() => products[1].price * products[1].quantity - (products[1].price * products[1].quantity * 0.05))
  },
  {
    id: 3,
    name: "Banana",
    price: 2,
    quantity: 5,
    discount: "-",
    subtotal: computed(() => products[2].price * products[2].quantity - (products[2].price * products[2].quantity * 0)),
  }
]

const total = computed(() => {
  return products.reduce((acc, product) => acc + product.subtotal.value, 0)
})

</script>
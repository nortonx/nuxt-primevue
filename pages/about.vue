<template>
  <div class="grid surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 col-8 col-offset-2">
      <div class="text-blue-600 font-bold mb-3 text-3xl text-center">
        <i class="pi pi-prime"></i>&nbsp;POWERED BY PrimeVue
      </div>
      <div class="text-700 text-2xl mb-5">
        <h2 class="text-center">
          This website was built using a powerful combination of cutting-edge
          technologies:
        </h2>

        <ul class="about-list p-l2">
          <li class="text-xl">
            Nuxt 3: A lightning-fast and feature-rich framework for building
            Vue.js applications. Nuxt 3 offers server-side rendering, static
            site generation, and a fantastic developer experience.
          </li>
          <li class="text-xl">
            Pinia: A modern state management library for Vue.js applications.
            Pinia provides a clean and intuitive way to manage application
            state, making your code easier to understand and maintain.
          </li>
          <li class="text-xl">
            Unit Tests: This website is covered by comprehensive unit tests,
            ensuring its functionality remains rock-solid as new features are
            added.
          </li>
        </ul>

        <h2 class="text-center">This tech stack allows for:</h2>
        <ul class="about-list p-l2">
          <li class="text-xl">
            Blazing-fast performance: Enjoy a smooth and responsive user
            experience on any device.
          </li>
          <li class="text-xl">
            Scalability and Flexibility: The website can easily adapt and grow
            as your needs evolve.
          </li>
          <li class="text-xl">
            Robustness and Reliability: Unit tests guarantee consistent behavior
            and minimize the risk of regressions.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.about-list {
  list-style-type: disc;
  li {
    text-align: left;
    margin-bottom: 6px;
  }
}
</style>

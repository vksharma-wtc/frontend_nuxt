<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-emerald-500">

    <div class="max-w-7xl mx-auto px-6 py-28">

      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span class="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
            Healthy Living Starts Here
          </span>

          <h1 class="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Discover Better Health
            <span class="text-yellow-300">
              Every Day
            </span>
          </h1>

          <p class="mt-6 text-lg text-green-100 leading-8">
            Read trusted articles about nutrition, fitness, healthy recipes,
            mental wellness and lifestyle from experts.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">

  <NuxtLink
    to="/articles"
    class="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition"
  >
    Explore Articles
  </NuxtLink>

  <NuxtLink
    to="/about"
    class="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition"
  >
    Learn More
  </NuxtLink>

</div>

        </div>

        <div>

          <img
            src="https://chirag.academy/wp-content/uploads/2026/08/photo1.jpg"
            class="rounded-3xl shadow-2xl"
          >

        </div>

      </div>

    </div>

  </section>
</template>
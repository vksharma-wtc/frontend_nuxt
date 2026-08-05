<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-6">

      <h2 class="text-4xl font-bold text-center mb-12">
        Explore Categories
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

        <NuxtLink
          v-for="item in categories"
          :key="item.title"
          :to="item.link"
          class="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-8 text-center"
        >
          <div class="text-5xl mb-4">
            {{ item.icon }}
          </div>

          <h3 class="font-bold text-xl">
            {{ item.title }}
          </h3>

          <p class="text-gray-600 mt-3">
            {{ item.description }}
          </p>
        </NuxtLink>

      </div>

    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    icon: '❤️',
    title: 'Health',
    description: 'Healthy living & wellness',
    link: '/health'
  },
  {
    icon: '🥗',
    title: 'Nutrition',
    description: 'Healthy eating guides',
    link: '/nutrition'
  },
  {
    icon: '🏃',
    title: 'Fitness',
    description: 'Workout tips',
    link: '/fitness'
  },
  {
    icon: '🧘',
    title: 'Wellness',
    description: 'Mental health',
    link: '/wellness'
  },
  {
    icon: '🥣',
    title: 'Recipes',
    description: 'Healthy cooking',
    link: '/recipes'
  }
]
</script>
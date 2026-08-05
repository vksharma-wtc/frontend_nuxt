<script setup lang="ts">
useSeoMeta({
  title: 'Nutrition | Chirag International',
  description:
    'Learn about healthy eating, balanced diets, vitamins, superfoods, and nutrition tips.'
})

const nutritionTips = [
  {
    title: 'Eat More Fruits',
    description: 'Include seasonal fruits in your daily diet.'
  },
  {
    title: 'Stay Hydrated',
    description: 'Drink 2–3 litres of water every day.'
  },
  {
    title: 'Whole Grains',
    description: 'Choose whole grains instead of refined flour.'
  },
  {
    title: 'Protein Rich Foods',
    description: 'Add eggs, beans, lentils and dairy products.'
  },
  {
    title: 'Healthy Fats',
    description: 'Eat nuts, seeds and olive oil in moderation.'
  },
  {
    title: 'Limit Sugar',
    description: 'Reduce sugary drinks and processed foods.'
  }
]

const featuredArticles = [
  {
    title: 'Top 10 Superfoods',
    slug: 'top-10-superfoods',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900',
    excerpt: 'Discover nutrient-rich foods that support a healthy lifestyle.'
  },
  {
    title: 'Benefits of a Balanced Diet',
    slug: 'balanced-diet-benefits',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900',
    excerpt: 'Understand why balanced nutrition is important.'
  },
  {
    title: 'Healthy Breakfast Ideas',
    slug: 'healthy-breakfast',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=900',
    excerpt: 'Quick and healthy breakfast recipes to start your day.'
  }
]
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-emerald-700 via-green-600 to-lime-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24">

        <div class="max-w-3xl">

          <span class="bg-white/20 px-4 py-2 rounded-full text-sm">
            Healthy Nutrition
          </span>

          <h1 class="text-5xl md:text-6xl font-bold mt-6">
            Eat Better,
            <span class="text-yellow-300">
              Live Better
            </span>
          </h1>

          <p class="mt-6 text-xl text-green-100 leading-8">
            Discover healthy eating habits, balanced diets,
            vitamins, minerals, and nutritious recipes.
          </p>

          <NuxtLink
            to="/articles"
            class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100"
          >
            Explore Articles
          </NuxtLink>

        </div>

      </div>
    </section>

    <!-- Nutrition Tips -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">
            Daily Nutrition Tips
          </h2>

          <p class="mt-4 text-gray-600">
            Build healthy eating habits one meal at a time.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="tip in nutritionTips"
            :key="tip.title"
            class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div class="text-5xl mb-4">
              🥗
            </div>

            <h3 class="text-xl font-bold">
              {{ tip.title }}
            </h3>

            <p class="mt-3 text-gray-600">
              {{ tip.description }}
            </p>

          </div>

        </div>

      </div>
    </section>

    <!-- Featured Articles -->
    <section class="bg-gray-50 py-20">

      <div class="max-w-7xl mx-auto px-6">

        <div class="flex justify-between items-center mb-10">
          <h2 class="text-4xl font-bold">
            Featured Nutrition Articles
          </h2>

          <NuxtLink
            to="/articles"
            class="text-green-600 font-semibold"
          >
            View All →
          </NuxtLink>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">

          <article
            v-for="article in featuredArticles"
            :key="article.slug"
            class="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-60 object-cover"
            >

            <div class="p-6">

              <h3 class="text-2xl font-bold">
                {{ article.title }}
              </h3>

              <p class="mt-4 text-gray-600">
                {{ article.excerpt }}
              </p>

              <NuxtLink
                :to="`/articles/${article.slug}`"
                class="inline-block mt-6 text-green-700 font-semibold"
              >
                Read More →
              </NuxtLink>

            </div>

          </article>

        </div>

      </div>

    </section>

    <!-- Healthy Foods -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-12">
          Eat More Of These
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          <div class="bg-green-100 rounded-xl p-6 text-center">
            🍎
            <p class="mt-3 font-semibold">Fruits</p>
          </div>

          <div class="bg-green-100 rounded-xl p-6 text-center">
            🥦
            <p class="mt-3 font-semibold">Vegetables</p>
          </div>

          <div class="bg-green-100 rounded-xl p-6 text-center">
            🥛
            <p class="mt-3 font-semibold">Dairy</p>
          </div>

          <div class="bg-green-100 rounded-xl p-6 text-center">
            🫘
            <p class="mt-3 font-semibold">Beans</p>
          </div>

          <div class="bg-green-100 rounded-xl p-6 text-center">
            🐟
            <p class="mt-3 font-semibold">Fish</p>
          </div>

          <div class="bg-green-100 rounded-xl p-6 text-center">
            🥜
            <p class="mt-3 font-semibold">Nuts</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="bg-green-700 text-white py-20">

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2 class="text-4xl font-bold">
          Start Eating Healthy Today
        </h2>

        <p class="mt-6 text-green-100">
          Discover nutritious recipes, healthy meal plans and expert dietary advice.
        </p>

        <NuxtLink
          to="/contact"
          class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100"
        >
          Contact Our Team
        </NuxtLink>

      </div>

    </section>

  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Healthy Recipes | Chirag International',
  description:
    'Explore healthy breakfast, lunch, dinner, snacks and drink recipes for a balanced lifestyle.'
})

const recipeCategories = [
  {
    icon: '🍳',
    title: 'Healthy Breakfast',
    description: 'Start your day with nutritious meals.'
  },
  {
    icon: '🥗',
    title: 'Lunch',
    description: 'Balanced meals packed with nutrients.'
  },
  {
    icon: '🍲',
    title: 'Dinner',
    description: 'Light and healthy dinner recipes.'
  },
  {
    icon: '🥤',
    title: 'Healthy Drinks',
    description: 'Smoothies, juices and detox drinks.'
  },
  {
    icon: '🥜',
    title: 'Healthy Snacks',
    description: 'Quick snacks for busy days.'
  },
  {
    icon: '🍓',
    title: 'Desserts',
    description: 'Healthy desserts with less sugar.'
  }
]

const featuredRecipes = [
  {
    title: 'Avocado Toast with Eggs',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900',
    slug: 'avocado-toast',
    time: '15 mins'
  },
  {
    title: 'Fresh Vegetable Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900',
    slug: 'vegetable-salad',
    time: '10 mins'
  },
  {
    title: 'Berry Smoothie',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=900',
    slug: 'berry-smoothie',
    time: '5 mins'
  }
]


const { getPostsByCategory } = useCategoryPosts()

const articles = await getPostsByCategory('recipes')

const tips = [
  'Cook with fresh seasonal vegetables.',
  'Reduce salt and sugar intake.',
  'Choose whole grains whenever possible.',
  'Use healthy oils like olive oil.',
  'Drink plenty of water throughout the day.',
  'Include protein in every meal.'
]
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24">

        <div class="max-w-3xl">

          <span class="bg-white/20 px-4 py-2 rounded-full text-sm">
            Healthy Recipes
          </span>

          <h1 class="text-5xl md:text-6xl font-bold mt-6">
            Delicious Food.
            <span class="text-green-900">
              Healthy Life.
            </span>
          </h1>

          <p class="mt-6 text-xl leading-8 text-orange-50">
            Discover easy, nutritious and delicious recipes for every meal.
          </p>

          <NuxtLink
            to="/articles"
            class="inline-block mt-8 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Recipes
          </NuxtLink>

        </div>

      </div>
    </section>

    <!-- Recipe Categories -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">
            Recipe Categories
          </h2>

          <p class="mt-4 text-gray-600">
            Healthy meals for every part of your day.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="item in recipeCategories"
            :key="item.title"
            class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
          >

            <div class="text-5xl">
              {{ item.icon }}
            </div>

            <h3 class="mt-5 text-2xl font-bold">
              {{ item.title }}
            </h3>

            <p class="mt-4 text-gray-600">
              {{ item.description }}
            </p>

          </div>

        </div>

      </div>
    </section>

    <!-- Featured Recipes -->
    <section class="bg-gray-50 py-20">

      <div class="max-w-7xl mx-auto px-6">

        <div class="flex justify-between items-center mb-10">

          <h2 class="text-4xl font-bold">
            Featured Recipes
          </h2>

          <NuxtLink
            to="/articles"
            class="text-orange-600 font-semibold"
          >
            View All →
          </NuxtLink>

        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  <article
    v-for="article in articles"
    :key="article.id"
    class="bg-white rounded-2xl shadow-lg overflow-hidden"
  >

    <img
      :src="article.featuredImage?.node?.sourceUrl"
      class="w-full h-60 object-cover"
    >

    <div class="p-6">

      <span class="text-green-600">
        {{ article.categories.nodes[0]?.name }}
      </span>

      <h2 class="text-2xl font-bold mt-3">
        {{ article.title }}
      </h2>

      <div
        class="mt-4 text-gray-600 line-clamp-3"
        v-html="article.excerpt"
      />

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

    <!-- Healthy Cooking Tips -->
    <section class="py-20">

      <div class="max-w-6xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-12">
          Healthy Cooking Tips
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            v-for="tip in tips"
            :key="tip"
            class="bg-orange-50 rounded-xl p-6"
          >
            <div class="flex gap-3">

              <span class="text-orange-600 text-2xl">
                🍽️
              </span>

              <p>{{ tip }}</p>

            </div>
          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class="bg-orange-600 text-white py-20">

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2 class="text-4xl font-bold">
          Eat Healthy Every Day
        </h2>

        <p class="mt-6 text-orange-100">
          Browse delicious recipes, healthy cooking guides and meal plans for the whole family.
        </p>

        <NuxtLink
          to="/contact"
          class="inline-block mt-8 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100"
        >
          Contact Us
        </NuxtLink>

      </div>

    </section>

  </div>
</template>
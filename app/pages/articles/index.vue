<script setup lang="ts">
useSeoMeta({
  title: 'Articles | Chirag International',
  description: 'Explore the latest articles on health, nutrition, fitness and healthy living.'
})

const articles = [
  {
    id: 1,
    title: '10 Daily Habits for Better Health',
    slug: '10-daily-habits-for-better-health',
    category: 'Health',
    date: 'Aug 5, 2026',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900',
    excerpt: 'Simple daily habits that can improve your overall health and well-being.'
  },
  {
    id: 2,
    title: 'Healthy Breakfast Ideas',
    slug: 'healthy-breakfast-ideas',
    category: 'Nutrition',
    date: 'Aug 3, 2026',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900',
    excerpt: 'Start your day with nutritious and delicious breakfast recipes.'
  },
  {
    id: 3,
    title: 'Morning Yoga Routine',
    slug: 'morning-yoga-routine',
    category: 'Fitness',
    date: 'Aug 1, 2026',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900',
    excerpt: 'A simple yoga routine to improve flexibility and energy.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-r from-green-700 to-emerald-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 class="text-5xl font-bold">Health Articles</h1>
        <p class="mt-5 text-green-100">
          Discover expert articles on health, nutrition and wellness.
        </p>
      </div>
    </section>

    <!-- Articles -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <article
          v-for="article in articles"
          :key="article.id"
          class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
        >
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-60 object-cover"
          />

          <div class="p-6">

            <span class="text-green-600 text-sm font-semibold">
              {{ article.category }}
            </span>

            <h2 class="text-2xl font-bold mt-3">
              {{ article.title }}
            </h2>

            <p class="text-gray-500 text-sm mt-2">
              {{ article.date }}
            </p>

            <p class="mt-4 text-gray-600">
              {{ article.excerpt }}
            </p>

            <NuxtLink
              :to="`/articles/${article.slug}`"
              class="inline-block mt-6 text-green-700 font-semibold hover:text-green-900"
            >
              Read More →
            </NuxtLink>

          </div>
        </article>

      </div>
    </section>
  </div>
</template>
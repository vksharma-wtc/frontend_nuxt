<script setup lang="ts">
useSeoMeta({
  title: 'Health | Chirag International',
  description: 'Discover trusted health information, wellness tips, healthy habits and preventive healthcare articles.'
})

const featuredArticles = [
  {
    id: 1,
    title: '10 Daily Habits for Better Health',
    category: 'Healthy Living',
    slug: '10-daily-habits-for-better-health',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900',
    excerpt: 'Simple daily habits that can improve your physical and mental well-being.'
  },
  {
    id: 2,
    title: 'Foods That Strengthen Your Immunity',
    category: 'Nutrition',
    slug: 'foods-that-strengthen-your-immunity',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900',
    excerpt: 'Learn which foods help boost your immune system naturally.'
  },
  {
    id: 3,
    title: 'Morning Exercise Benefits',
    category: 'Fitness',
    slug: 'morning-exercise-benefits',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900',
    excerpt: 'Start your day with energy using a simple morning routine.'
  }
]

const tips = [
  'Drink at least 2–3 litres of water every day.',
  'Eat more fresh fruits and vegetables.',
  'Sleep for 7–8 hours each night.',
  'Exercise for at least 30 minutes daily.',
  'Reduce sugar and processed food intake.',
  'Practice meditation to reduce stress.'
]
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24">

        <div class="max-w-3xl">
          <span class="bg-white/20 px-4 py-2 rounded-full text-sm">
            Healthy Living
          </span>

          <h1 class="text-5xl md:text-6xl font-bold mt-6">
            Your Journey to Better Health Starts Here
          </h1>

          <p class="mt-6 text-xl text-green-100">
            Explore expert advice on healthy habits, nutrition,
            preventive care, fitness and overall wellness.
          </p>

          <NuxtLink
            to="/articles"
            class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Read Articles
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- Health Tips -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">
            Healthy Lifestyle Tips
          </h2>

          <p class="mt-4 text-gray-600">
            Small changes every day can make a big difference.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            v-for="tip in tips"
            :key="tip"
            class="bg-green-50 rounded-2xl p-6 shadow-sm"
          >
            <div class="flex items-start gap-3">
              <div class="text-green-600 text-2xl">
                ✔
              </div>

              <p class="text-gray-700">
                {{ tip }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Featured Articles -->
    <section class="bg-gray-50 py-20">

      <div class="max-w-7xl mx-auto px-6">

        <div class="flex justify-between items-center mb-10">

          <h2 class="text-4xl font-bold">
            Featured Articles
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
            :key="article.id"
            class="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden"
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

              <h3 class="text-2xl font-bold mt-3">
                {{ article.title }}
              </h3>

              <p class="text-gray-600 mt-4">
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

    <!-- Call To Action -->
    <section class="py-20">

      <div class="max-w-5xl mx-auto px-6">

        <div class="bg-green-700 rounded-3xl p-12 text-center text-white">

          <h2 class="text-4xl font-bold">
            Live Healthier Every Day
          </h2>

          <p class="mt-6 text-green-100">
            Subscribe to receive weekly wellness tips, healthy recipes,
            and expert health advice.
          </p>

          <NuxtLink
            to="/contact"
            class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100"
          >
            Contact Us
          </NuxtLink>

        </div>

      </div>

    </section>

  </div>
</template>
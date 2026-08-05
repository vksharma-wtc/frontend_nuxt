<script setup lang="ts">
useSeoMeta({
  title: 'Wellness | Chirag International',
  description:
    'Improve your mental and physical well-being with wellness tips, stress management, mindfulness, sleep, and self-care.'
})

const wellnessTopics = [
  {
    icon: '🧘',
    title: 'Mindfulness',
    description: 'Practice mindfulness to improve focus and reduce stress.'
  },
  {
    icon: '😴',
    title: 'Better Sleep',
    description: 'Develop healthy sleeping habits for a better tomorrow.'
  },
  {
    icon: '💚',
    title: 'Mental Health',
    description: 'Take care of your emotional and psychological well-being.'
  },
  {
    icon: '🌿',
    title: 'Self Care',
    description: 'Create a daily routine that supports your health and happiness.'
  },
  {
    icon: '🌞',
    title: 'Healthy Lifestyle',
    description: 'Build sustainable habits for long-term wellness.'
  },
  {
    icon: '🤝',
    title: 'Work-Life Balance',
    description: 'Balance your personal and professional life effectively.'
  }
]

const featuredArticles = [
  {
    title: '10 Simple Ways to Reduce Stress',
    slug: 'reduce-stress',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900',
    excerpt: 'Learn practical techniques to reduce stress and improve mental well-being.'
  },
  {
    title: 'The Importance of Quality Sleep',
    slug: 'quality-sleep',
    image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=900',
    excerpt: 'Understand why good sleep is essential for a healthy life.'
  },
  {
    title: 'Meditation for Beginners',
    slug: 'meditation-for-beginners',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900',
    excerpt: 'Start your meditation journey with these easy techniques.'
  }
]

const wellnessTips = [
  'Practice meditation for 10 minutes every day.',
  'Sleep at least 7–8 hours every night.',
  'Spend time outdoors regularly.',
  'Limit screen time before bedtime.',
  'Stay connected with family and friends.',
  'Practice gratitude every day.'
]
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-teal-700 via-emerald-600 to-green-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24">

        <div class="max-w-3xl">

          <span class="bg-white/20 px-4 py-2 rounded-full text-sm">
            Wellness & Self Care
          </span>

          <h1 class="text-5xl md:text-6xl font-bold mt-6">
            Live Calm.
            <span class="text-yellow-300">
              Live Better.
            </span>
          </h1>

          <p class="mt-6 text-xl text-green-100 leading-8">
            Discover practical ways to improve your mental health,
            emotional well-being and overall quality of life.
          </p>

          <NuxtLink
            to="/articles"
            class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Wellness
          </NuxtLink>

        </div>

      </div>
    </section>

    <!-- Wellness Topics -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">
            Wellness Topics
          </h2>

          <p class="mt-4 text-gray-600">
            Improve your lifestyle with healthy daily habits.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="topic in wellnessTopics"
            :key="topic.title"
            class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <div class="text-5xl">
              {{ topic.icon }}
            </div>

            <h3 class="mt-5 text-2xl font-bold">
              {{ topic.title }}
            </h3>

            <p class="mt-4 text-gray-600">
              {{ topic.description }}
            </p>

          </div>

        </div>

      </div>
    </section>

    <!-- Wellness Tips -->
    <section class="bg-gray-50 py-20">

      <div class="max-w-6xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-12">
          Daily Wellness Tips
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            v-for="tip in wellnessTips"
            :key="tip"
            class="bg-white rounded-xl p-6 shadow"
          >
            <div class="flex items-start gap-3">
              <span class="text-green-600 text-2xl">✔</span>
              <p>{{ tip }}</p>
            </div>
          </div>

        </div>

      </div>

    </section>

    <!-- Featured Articles -->
    <section class="py-20">

      <div class="max-w-7xl mx-auto px-6">

        <div class="flex justify-between items-center mb-10">

          <h2 class="text-4xl font-bold">
            Wellness Articles
          </h2>

          <NuxtLink
            to="/articles"
            class="text-green-700 font-semibold"
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

    <!-- CTA -->
    <section class="bg-green-700 text-white py-20">

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2 class="text-4xl font-bold">
          Prioritize Your Well-Being
        </h2>

        <p class="mt-6 text-green-100">
          Small daily habits can lead to a happier, healthier and more balanced life.
        </p>

        <NuxtLink
          to="/contact"
          class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100"
        >
          Contact Us
        </NuxtLink>

      </div>

    </section>

  </div>
</template>
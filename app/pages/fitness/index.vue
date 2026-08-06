<script setup lang="ts">
useSeoMeta({
  title: 'Fitness | Chirag International',
  description:
    'Discover fitness tips, workout routines, strength training, cardio exercises, yoga, and healthy lifestyle advice.'
})

const workoutPlans = [
  {
    title: 'Home Workout',
    icon: '🏠',
    description: 'No equipment required. Perfect for beginners.'
  },
  {
    title: 'Strength Training',
    icon: '🏋️',
    description: 'Build muscle and improve overall strength.'
  },
  {
    title: 'Cardio',
    icon: '🏃',
    description: 'Burn calories and improve heart health.'
  },
  {
    title: 'Yoga',
    icon: '🧘',
    description: 'Increase flexibility and reduce stress.'
  },
  {
    title: 'HIIT',
    icon: '⚡',
    description: 'High-intensity workouts for fat loss.'
  },
  {
    title: 'Stretching',
    icon: '🤸',
    description: 'Improve mobility and prevent injuries.'
  }
]

const featuredArticles = [
  {
    title: 'Best Morning Workout Routine',
    slug: 'morning-workout-routine',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900',
    excerpt: 'Kick-start your day with an energizing morning workout.'
  },
  {
    title: 'Strength Training for Beginners',
    slug: 'strength-training-beginners',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900',
    excerpt: 'Learn the basics of weight training safely.'
  },
  {
    title: 'Benefits of Daily Walking',
    slug: 'daily-walking-benefits',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=900',
    excerpt: 'Walking is one of the simplest ways to stay fit.'
  }
]

const { getPostsByCategory } = useCategoryPosts()

const articles = await getPostsByCategory('fitness')

const fitnessTips = [
  'Exercise at least 30 minutes every day.',
  'Warm up before every workout.',
  'Stay hydrated during exercise.',
  'Eat enough protein for muscle recovery.',
  'Get 7–8 hours of quality sleep.',
  'Take rest days to avoid overtraining.'
]
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24">

        <div class="max-w-3xl">

          <span class="bg-white/20 px-4 py-2 rounded-full text-sm">
            Fitness & Exercise
          </span>

          <h1 class="text-5xl md:text-6xl font-bold mt-6">
            Stay Active.
            <span class="text-yellow-300">
              Stay Strong.
            </span>
          </h1>

          <p class="mt-6 text-xl text-blue-100 leading-8">
            Build strength, improve endurance and live a healthier life with
            expert fitness advice and workout routines.
          </p>

          <NuxtLink
            to="/articles"
            class="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Workouts
          </NuxtLink>

        </div>

      </div>
    </section>

    <!-- Workout Categories -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">
            Workout Categories
          </h2>

          <p class="mt-4 text-gray-600">
            Choose a fitness program that suits your lifestyle.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="plan in workoutPlans"
            :key="plan.title"
            class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
          >

            <div class="text-5xl">
              {{ plan.icon }}
            </div>

            <h3 class="mt-5 text-2xl font-bold">
              {{ plan.title }}
            </h3>

            <p class="mt-4 text-gray-600">
              {{ plan.description }}
            </p>

          </div>

        </div>

      </div>
    </section>

    <!-- Fitness Tips -->
    <section class="bg-gray-50 py-20">

      <div class="max-w-6xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-12">
          Daily Fitness Tips
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            v-for="tip in fitnessTips"
            :key="tip"
            class="bg-white rounded-xl p-6 shadow"
          >
            <div class="flex items-start gap-3">

              <span class="text-green-600 text-2xl">
                ✔
              </span>

              <p>
                {{ tip }}
              </p>

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
            Fitness Articles
          </h2>

          <NuxtLink
            to="/articles"
            class="text-blue-700 font-semibold"
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

    <!-- CTA -->
    <section class="bg-blue-700 text-white py-20">

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2 class="text-4xl font-bold">
          Make Fitness a Daily Habit
        </h2>

        <p class="mt-6 text-blue-100">
          Stay motivated with expert fitness advice, workout plans and healthy lifestyle tips.
        </p>

        <NuxtLink
          to="/contact"
          class="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100"
        >
          Join Our Community
        </NuxtLink>

      </div>

    </section>

  </div>
</template>
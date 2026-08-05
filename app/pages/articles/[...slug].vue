<script setup lang="ts">
const route = useRoute()

const article = {
  title: route.params.slug
    .toString()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase()),

  image:
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200',

  category: 'Health',

  date: 'August 5, 2026'
}

useSeoMeta({
  title: article.title,
  description: article.title
})
</script>

<template>
  <div>

    <!-- Hero Image -->
    <section>
      <img
        :src="article.image"
        class="w-full h-[450px] object-cover"
      />
    </section>

    <!-- Article -->
    <section class="max-w-4xl mx-auto px-6 py-16">

      <span class="text-green-600 font-semibold">
        {{ article.category }}
      </span>

      <h1 class="text-5xl font-bold mt-4">
        {{ article.title }}
      </h1>

      <p class="text-gray-500 mt-3">
        {{ article.date }}
      </p>

      <div class="prose prose-lg max-w-none mt-10">

        <p>
          A healthy lifestyle is built on small, consistent habits.
          Eating nutritious food, staying active, sleeping well and
          managing stress all contribute to better physical and mental
          well-being.
        </p>

        <h2>Why Healthy Habits Matter</h2>

        <p>
          Developing positive daily routines can improve energy levels,
          strengthen immunity and reduce the risk of chronic diseases.
        </p>

        <blockquote>
          “Take care of your body. It's the only place you have to live.”
        </blockquote>

        <h2>Simple Tips</h2>

        <ul>
          <li>Drink enough water.</li>
          <li>Exercise at least 30 minutes daily.</li>
          <li>Eat fresh fruits and vegetables.</li>
          <li>Sleep 7–8 hours every night.</li>
          <li>Practice mindfulness or meditation.</li>
        </ul>

      </div>

      <NuxtLink
        to="/articles"
        class="inline-block mt-12 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        ← Back to Articles
      </NuxtLink>

    </section>

  </div>
</template>
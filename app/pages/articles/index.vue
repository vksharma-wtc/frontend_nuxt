<script setup lang="ts">
useSeoMeta({
  title: 'Articles | Chirag International',
  description: 'Explore the latest articles on health, nutrition, fitness and healthy living.'
})

const { getPosts } = usePosts()

const articles = await getPosts()
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
  v-if="article.featuredImage?.node?.sourceUrl"
  :src="article.featuredImage.node.sourceUrl"
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

            <div
  class="mt-4 text-gray-600 line-clamp-3"
  v-html="article.excerpt"
></div>

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
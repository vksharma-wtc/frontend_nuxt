<script setup lang="ts">
useSeoMeta({
  title: 'Articles | Chirag International',
  description: 'Explore the latest articles on health, nutrition, fitness and healthy living.'
})

const { getPosts } = usePosts()

const articles = await getPosts()
</script>

<template>

<section class="bg-gray-50 py-20">

<div class="max-w-7xl mx-auto px-6">

<div class="flex justify-between items-center mb-10">

<h2 class="text-4xl font-bold">
Latest Articles
</h2>

<a href="#" class="text-green-600 font-semibold">
View All →
</a>

</div>

<div class="grid lg:grid-cols-3 gap-8">

<div
v-for="article in articles"
          :key="article.id"
class="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
>

  <img
            :src="article.featuredImage.node.sourceUrl"
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

</div>

</div>

</div>

</section>

</template>
<script setup lang="ts">
const route = useRoute()

const { getPost } = usePost()

const article = await getPost(route.params.slug.toString())

useSeoMeta({
  title: article.title,
  description: article.excerpt
})
</script>

<template>
  <div>

    <!-- Hero Image -->
    <section>
        <img
          :src="article.featuredImage?.node?.sourceUrl"
          :alt="article.featuredImage?.node?.altText"
          class="w-full h-[450px] object-cover"
        />
    </section>

    <!-- Article -->
    <section class="max-w-4xl mx-auto px-6 py-16">

      <span class="text-green-600 font-semibold">
       {{ article.categories.nodes[0]?.name }}
      </span>

      <h1 class="text-5xl font-bold mt-4">
        {{ article.title }}
      </h1>

      <p class="text-gray-500 mt-3">
        {{ new Date(article.date).toLocaleDateString() }}
      </p>

      <div class="prose prose-lg max-w-none mt-10">

       <div
  class="prose prose-lg max-w-none mt-10"
  v-html="article.content"
></div>
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
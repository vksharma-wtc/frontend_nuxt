<script setup>

import HeroBanner from '~/components/home/HeroBanner.vue'
import CategorySection from '~/components/home/CategorySection.vue'
import FeaturedProducts from '~/components/home/FeaturedProducts.vue'
import PromoBanner from '~/components/home/PromoBanner.vue'
import Newsletter from '~/components/home/Newsletter.vue'

const config = useRuntimeConfig()

const query = `
query {
  posts(first:5) {
    nodes {
      id
      title
      slug
    }
  }
}
`

const { data, error } = await useFetch(
  config.public.wordpressGraphql,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      query
    }
  }
)
</script>

<template>
  <div>

  <HeroBanner />
  <!--<CategorySection />-->
  <FeaturedProducts />
  <PromoBanner />
  <Newsletter />

    <h1>Blog Posts</h1>

    <div v-if="error">
      Error loading posts
    </div>

    <div
      v-for="post in data?.data?.posts?.nodes"
      :key="post.id"
    >
      <h2>{{ post.title }}</h2>
      <p>{{ post.slug }}</p>
    </div>
  </div>
</template>
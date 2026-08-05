<script setup>

import HeroSection from '~/components/HeroSection.vue'
import CategorySection from '~/components/CategorySection.vue'
import LatestArticles from '~/components/LatestArticles.vue'

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

   <HeroSection />

    <CategorySection />

    <LatestArticles />

  </div>
</template>
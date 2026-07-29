<script setup>
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
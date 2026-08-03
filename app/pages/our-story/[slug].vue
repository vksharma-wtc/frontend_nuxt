<script setup lang="ts">
const { getPosts } = usePosts()

const posts = await getPosts()
</script>

<template>
<div><b>Our Story : Slug pages</b></div>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
  </div>
</template>
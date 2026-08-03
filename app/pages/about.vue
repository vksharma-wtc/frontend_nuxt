<script setup lang="ts">
const route = useRoute()
const { getPage } = usePages()

// Convert route to WordPress URI
const uri = route.path.endsWith('/')
  ? route.path
  : `${route.path}/`

const page = await getPage(uri)
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content"></div>
  </div>
</template>
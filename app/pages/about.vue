<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const { getPage } = usePages()

let uri = route.path

// Remove language prefix
uri = uri.replace(`/${locale.value}`, '')

if (!uri.endsWith('/')) {
  uri += '/'
}

if (uri === '/') {
  uri = '/'
}

const page = await getPage(uri)

console.log(uri)
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content"></div>
  </div>
</template>
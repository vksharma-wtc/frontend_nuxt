<script setup>
const route = useRoute()

console.log(route.params.slug)
</script>

<template>
  <div>
    Catch-all route works!
    <br>
    {{ route.params.slug }}
  </div>
</template>
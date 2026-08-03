<script setup>
const { products } = await useProducts(8)
</script>

<template>

<section class="categories Featured">

<div class="container">

<h2>Featured Products</h2>

<div class="grid">

 <div 
      v-for="product in products"
      :key="product.id"
      class="card"
    >

 <img
        :src="product.image.sourceUrl"
        :alt="product.name"
        class="w-full h-48 object-cover"
      >

<h3>{{ product.name }}</h3>


<NuxtLink
        :to="`/products/${product.slug}`"
        class="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded"
      >
        Buy Now
      </NuxtLink>

</div>

</div>

</div>

</section>

</template>


<style scoped>

.categories{
padding:60px 0;
}

.grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
}

.card{
border:1px solid #ddd;
padding:20px;
text-align:center;
}

.card img{
width:100%;
}

</style>
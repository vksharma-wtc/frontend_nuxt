<template>

<section class="categories">

<div class="container">

<h2>Shop by Category</h2>

<div class="grid">

<div
class="card"
v-for="i in 4"
:key="i"
>

<img
:src="`https://picsum.photos/300/30${i}`"
/>

<h3>Category {{ i }}</h3>

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
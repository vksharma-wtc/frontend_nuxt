<template>

<section class="py-20">

<div class="max-w-7xl mx-auto px-6">

<h2 class="text-4xl font-bold text-center mb-12">
Explore Categories
</h2>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div
v-for="item in categories"
:key="item.title"
class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center"
>

<div class="text-5xl mb-4">
{{ item.icon }}
</div>

<h3 class="font-bold text-xl">
{{ item.title }}
</h3>

<p class="text-gray-600 mt-3">
{{ item.description }}
</p>

</div>

</div>

</div>

</section>

</template>

<script setup>

const categories=[
{
icon:'🥗',
title:'Nutrition',
description:'Healthy eating guides'
},
{
icon:'🏃',
title:'Fitness',
description:'Workout tips'
},
{
icon:'🧘',
title:'Wellness',
description:'Mental health'
},
{
icon:'🥣',
title:'Recipes',
description:'Healthy cooking'
}
]

</script>
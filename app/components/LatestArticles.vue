<template>

<section class="bg-gray-50 py-20">

<div class="max-w-7xl mx-auto px-6">

<div class="flex justify-between items-center mb-10">

<h2 class="text-4xl font-bold">
Latest Articles
</h2>

<a href="#" class="text-green-600 font-semibold">
View All →
</a>

</div>

<div class="grid lg:grid-cols-3 gap-8">

<div
v-for="post in 6"
:key="post"
class="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
>

<img
src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
class="w-full h-60 object-cover"
/>

<div class="p-6">

<span class="text-green-600 text-sm font-semibold">
Nutrition
</span>

<h3 class="text-2xl font-bold mt-3">
10 Healthy Habits For Better Life
</h3>

<p class="text-gray-600 mt-4">
Discover simple habits that improve your health every day.
</p>

<button class="mt-6 text-green-700 font-semibold">
Read More →
</button>

</div>

</div>

</div>

</div>

</section>

</template>
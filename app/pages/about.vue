<script setup lang="ts">
useSeoMeta({
  title: 'About Us | Chirag International',
  description:
    'Learn about Chirag International, our mission, vision, and commitment to promoting healthy living and wellness.'
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24 text-center">
        <p class="uppercase tracking-widest text-green-100 font-semibold">
          About Us
        </p>

        <h1 class="mt-4 text-5xl font-bold">
          Inspiring Healthy Living
        </h1>

        <p class="mt-6 max-w-3xl mx-auto text-lg text-green-100 leading-8">
          We believe that a healthy lifestyle starts with reliable knowledge,
          balanced nutrition, fitness, and mindful daily habits.
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900"
              alt="Healthy Lifestyle"
              class="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          <div>
            <span class="text-green-600 font-semibold uppercase">
              Our Story
            </span>

            <h2 class="mt-4 text-4xl font-bold text-gray-900">
              Helping People Live Better Every Day
            </h2>

            <p class="mt-6 text-gray-600 leading-8">
              Chirag International is a modern health and lifestyle platform
              dedicated to sharing trusted information on wellness,
              nutrition, fitness, healthy recipes, and everyday habits.
            </p>

            <p class="mt-4 text-gray-600 leading-8">
              Our goal is to make quality health information accessible,
              practical, and easy to understand for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission / Vision / Values -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center">
          <h2 class="text-4xl font-bold">
            What Drives Us
          </h2>

          <p class="mt-4 text-gray-600">
            Our purpose is to educate, inspire, and support healthier lifestyles.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mt-14">

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="text-5xl mb-5">🎯</div>

            <h3 class="text-2xl font-bold">
              Our Mission
            </h3>

            <p class="mt-4 text-gray-600 leading-7">
              To provide trustworthy health and wellness information
              that helps people make informed lifestyle choices.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="text-5xl mb-5">🌍</div>

            <h3 class="text-2xl font-bold">
              Our Vision
            </h3>

            <p class="mt-4 text-gray-600 leading-7">
              To become a global destination for health,
              nutrition, and wellness content.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="text-5xl mb-5">💚</div>

            <h3 class="text-2xl font-bold">
              Our Values
            </h3>

            <p class="mt-4 text-gray-600 leading-7">
              Integrity, quality, transparency,
              and continuous learning are at the heart of everything we do.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 class="text-5xl font-bold text-green-600">
              500+
            </h3>
            <p class="mt-3 text-gray-600">
              Health Articles
            </p>
          </div>

          <div>
            <h3 class="text-5xl font-bold text-green-600">
              100+
            </h3>
            <p class="mt-3 text-gray-600">
              Healthy Recipes
            </p>
          </div>

          <div>
            <h3 class="text-5xl font-bold text-green-600">
              50K+
            </h3>
            <p class="mt-3 text-gray-600">
              Monthly Readers
            </p>
          </div>

          <div>
            <h3 class="text-5xl font-bold text-green-600">
              10+
            </h3>
            <p class="mt-3 text-gray-600">
              Expert Contributors
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-green-700 text-white py-20">
      <div class="max-w-4xl mx-auto px-6 text-center">

        <h2 class="text-4xl font-bold">
          Start Your Healthy Lifestyle Journey
        </h2>

        <p class="mt-5 text-lg text-green-100">
          Explore our latest articles, practical wellness tips,
          and healthy recipes designed to help you live better.
        </p>

        <NuxtLink
          to="/articles"
          class="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Explore Articles
        </NuxtLink>

      </div>
    </section>
  </div>
</template>
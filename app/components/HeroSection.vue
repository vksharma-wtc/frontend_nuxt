<script setup lang="ts">
const { t } = useI18n()

const { data } = await useHomePage()

const hero = computed(() => data?.page?.heroBanner)


</script>



<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-emerald-500">

    <div class="max-w-7xl mx-auto px-6 py-28">

      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span class="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
            {{ hero?.heroBadge }}
          </span>

          <h1 class="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {{ t('hero.title') }}
            <span class="text-yellow-300">
              {{ t('hero.highlight') }}
            </span>
          </h1>

          <p class="mt-6 text-lg text-green-100 leading-8">
            {{ hero?.heroDescription }}
          </p>

          <div class="mt-10 flex flex-wrap gap-4">

  <NuxtLink
    to="/articles"
    class="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition"
  >
    Explore Articles
  </NuxtLink>

  <NuxtLink
    to="/about"
    class="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition"
  >
    Learn More
  </NuxtLink>

</div>

        </div>

        <div>

        <img
  v-if="hero?.heroImage?.node?.sourceUrl"
  :src="hero.heroImage.node.sourceUrl"
  :alt="hero.heroImage.node.altText || 'Hero image'"
  class="rounded-3xl shadow-2xl"
/>
        </div>

      </div>

    </div>

  </section>
</template>
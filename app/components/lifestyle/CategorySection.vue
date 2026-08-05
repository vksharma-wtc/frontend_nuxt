<template>
  <section class="py-20 bg-gray-50">

    <div class="max-w-7xl mx-auto px-6">

      <!-- Heading -->
      <div class="text-center mb-14">

        <p class="text-green-600 font-semibold uppercase tracking-widest">
          Explore
        </p>

        <h2 class="text-4xl font-bold text-gray-900 mt-3">
          Browse by Category
        </h2>

        <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover inspiring articles, healthy recipes, travel ideas,
          fitness tips and much more.
        </p>

      </div>

      <!-- Categories -->

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Card -->

        <div
          v-for="category in categories"
          :key="category.title"
          class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">

          <div class="overflow-hidden">

            <img
              :src="category.image"
              :alt="category.title"
              class="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />

          </div>

          <div class="p-8">

            <div
              class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">

              {{ category.icon }}

            </div>

            <h3
              class="mt-5 text-2xl font-bold text-gray-900 group-hover:text-green-600 transition">

              {{ category.title }}

            </h3>

            <p class="text-gray-500 mt-4 leading-7">

              {{ category.description }}

            </p>

            <button
              class="mt-8 inline-flex items-center gap-2 text-green-600 font-semibold">

              Explore

              <span
                class="group-hover:translate-x-2 transition">

                →

              </span>

            </button>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">

const categories = [

  {
    title: 'Healthy Living',
    icon: '🌿',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900',
    description:
      'Simple lifestyle habits to improve your physical and mental wellbeing.'
  },

  {
    title: 'Nutrition',
    icon: '🥗',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900',
    description:
      'Balanced diet guides, vitamins, minerals and healthy eating tips.'
  },

  {
    title: 'Fitness',
    icon: '💪',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900',
    description:
      'Workout routines, stretching exercises and fitness motivation.'
  },

  {
    title: 'Travel',
    icon: '✈️',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
    description:
      'Explore beautiful destinations, cultures and travel experiences.'
  },

  {
    title: 'Recipes',
    icon: '🍽️',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900',
    description:
      'Healthy recipes that are easy to prepare and delicious to enjoy.'
  },

  {
    title: 'Mindfulness',
    icon: '🧘',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900',
    description:
      'Meditation, stress management and mindfulness for everyday life.'
  }

]

</script>
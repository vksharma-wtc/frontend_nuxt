<template>
  <div class="min-h-screen bg-white">

    <!-- Header -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4">

        <div class="flex items-center justify-between h-20">

          <!-- Logo -->
          <a href="#" class="text-4xl font-bold text-red-600">
            Yakult
          </a>

          <!-- Desktop Menu -->
          <nav class="hidden lg:flex space-x-8 font-medium">

            <a href="#" class="hover:text-red-600">
              Home
            </a>

            <a href="#">
              Products
            </a>

            <a href="#">
              Our Story
            </a>

            <a href="#">
              Gut Science
            </a>

            <a href="#">
              Contact
            </a>

          </nav>

          <!-- Search -->
          <div class="hidden md:block">

            <input
              type="text"
              placeholder="Search..."
              class="border rounded-lg px-4 py-2 w-64"
            >

          </div>

          <!-- Mobile Menu -->
          <button class="lg:hidden text-3xl">

            ☰

          </button>

        </div>

      </div>
    </header>

    <!-- Hero -->

    <section class="bg-red-50">

      <div class="max-w-7xl mx-auto px-4 py-16">

        <div class="grid lg:grid-cols-2 gap-10 items-center">

          <!-- Left -->

          <div>

            <h1 class="text-5xl font-bold text-gray-900 mb-6">

              Friendly Bacteria

            </h1>

            <p class="text-gray-600 mb-8">

              Yakult increases the bacteria in the gut and supports digestive health.

            </p>

            <button
              class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg"
            >
              Shop Now
            </button>

          </div>

          <!-- Right -->

          <div>

            <img
              src="https://placehold.co/700x400"
              class="rounded-xl w-full"
            >

          </div>

        </div>

      </div>

    </section>

    <!-- Featured Products -->

    <section class="py-16">

      <div class="max-w-7xl mx-auto px-4">

        <h2 class="text-3xl font-bold mb-10">

          Featured Products

        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <!-- Product -->

          <div class="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">

            <img
              src="https://placehold.co/200x200"
              class="mx-auto mb-4"
            >

            <h3 class="font-semibold text-lg">

              Yakult Original

            </h3>

            <p class="text-red-600 font-bold mt-2">

              ₹99

            </p>

            <button
              class="mt-4 bg-red-600 text-white px-5 py-2 rounded"
            >

              Buy Now

            </button>

          </div>

          <!-- Product -->

          <div class="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">

            <img
              src="https://placehold.co/200x200"
              class="mx-auto mb-4"
            >

            <h3 class="font-semibold text-lg">

              Yakult Light

            </h3>

            <p class="text-red-600 font-bold mt-2">

              ₹110

            </p>

            <button
              class="mt-4 bg-red-600 text-white px-5 py-2 rounded"
            >

              Buy Now

            </button>

          </div>

          <!-- Product -->

          <div class="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">

            <img
              src="https://placehold.co/200x200"
              class="mx-auto mb-4"
            >

            <h3 class="font-semibold text-lg">

              Yakult Plus

            </h3>

            <p class="text-red-600 font-bold mt-2">

              ₹120

            </p>

            <button
              class="mt-4 bg-red-600 text-white px-5 py-2 rounded"
            >

              Buy Now

            </button>

          </div>

          <!-- Product -->

          <div class="border rounded-xl p-6 text-center shadow hover:shadow-lg transition">

            <img
              src="https://placehold.co/200x200"
              class="mx-auto mb-4"
            >

            <h3 class="font-semibold text-lg">

              Yakult Balance

            </h3>

            <p class="text-red-600 font-bold mt-2">

              ₹130

            </p>

            <button
              class="mt-4 bg-red-600 text-white px-5 py-2 rounded"
            >

              Buy Now

            </button>

          </div>

        </div>

      </div>

    </section>

    <!-- Offer Banner -->

    <section class="bg-red-600 py-16">

      <div class="max-w-7xl mx-auto px-4 text-center text-white">

        <h2 class="text-4xl font-bold">

          Flat 50% OFF

        </h2>

        <p class="mt-4 text-lg">

          Limited Time Offer

        </p>

        <button
          class="mt-6 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold"
        >

          Shop Now

        </button>

      </div>

    </section>

    <!-- Newsletter -->

    <section class="py-16">

      <div class="max-w-xl mx-auto px-4 text-center">

        <h2 class="text-3xl font-bold">

          Subscribe

        </h2>

        <p class="text-gray-500 mt-3">

          Get updates on new products and offers.

        </p>

        <div class="mt-6 flex flex-col md:flex-row gap-4">

          <input
            type="email"
            placeholder="Email Address"
            class="border rounded-lg px-4 py-3 flex-1"
          >

          <button
            class="bg-red-600 text-white px-6 rounded-lg"
          >

            Subscribe

          </button>

        </div>

      </div>

    </section>

    <!-- Footer -->

    <footer class="bg-gray-900 text-white">

      <div class="max-w-7xl mx-auto px-4 py-12">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>

            <h3 class="font-bold text-xl mb-4">

              Yakult

            </h3>

            <p>

              Friendly bacteria for a healthy life.

            </p>

          </div>

          <div>

            <h3 class="font-bold mb-4">

              Products

            </h3>

            <ul class="space-y-2">

              <li>Yakult Original</li>

              <li>Yakult Light</li>

            </ul>

          </div>

          <div>

            <h3 class="font-bold mb-4">

              Company

            </h3>

            <ul class="space-y-2">

              <li>About</li>

              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 class="font-bold mb-4">

              Follow Us

            </h3>

            <p>Facebook</p>

            <p>Instagram</p>

          </div>

        </div>

      </div>

    </footer>

  </div>
</template>
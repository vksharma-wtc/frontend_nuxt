<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | Chirag International',
  description: 'Get in touch with Chirag International for questions, feedback, or collaboration opportunities.'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log(form)
  alert('Thank you! Your message has been submitted.')
}
</script>

<template>
   <div class=" text-white p-6 rounded-lg">
    Hello Tailwind
  </div>
<button
  class="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
>
    Submit
</button>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-24 text-center">
        <p class="uppercase tracking-widest text-green-100 font-semibold">
          Contact Us
        </p>

        <h1 class="mt-4 text-5xl font-bold">
          We'd Love to Hear From You
        </h1>

        <p class="mt-6 text-lg text-green-100 max-w-3xl mx-auto">
          Have a question, suggestion, or partnership opportunity?
          Send us a message and we'll get back to you.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-12">

          <!-- Contact Information -->
          <div>

            <h2 class="text-4xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p class="mt-6 text-gray-600 leading-8">
              We are passionate about promoting healthier lifestyles through
              trusted information, practical tips, and wellness resources.
            </p>

            <div class="mt-10 space-y-6">

             <!-- <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 class="font-semibold text-lg">Address</h3>
                  <p class="text-gray-600">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>-->

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  📧
                </div>

                <div>
                  <h3 class="font-semibold text-lg">Email</h3>
                  <p class="text-gray-600">
                    contact@chirag.international
                  </p>
                </div>
              </div>

             <!-- <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 class="font-semibold text-lg">Phone</h3>
                  <p class="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>-->

            </div>

          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-3xl shadow-xl p-8">

            <h2 class="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form @submit.prevent="submitForm" class="space-y-6">

              <div>
                <label class="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Enter your name"
                  class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your email"
                  class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Subject"
                  class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Write your message..."
                  class="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <button
                type="submit"
                class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>

    <!-- Map Placeholder -->
    <!--<section class="py-16">
      <div class="max-w-7xl mx-auto px-6">

        <div class="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
          <p class="text-gray-600 text-xl">
            Google Map will be displayed here
          </p>
        </div>

      </div>
    </section>-->
  </div>
</template>
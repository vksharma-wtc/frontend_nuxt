<script setup lang="ts">
useSeoMeta({
  title: 'Terms & Conditions | Chirag International',
  description:
    'Read the Terms & Conditions governing the use of the Chirag International website.'
})

const lastUpdated = 'August 2026'
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-16">

        <h1 class="text-5xl font-bold">
          Terms & Conditions
        </h1>

        <p class="mt-4 text-green-100 text-lg">
          Last Updated: {{ lastUpdated }}
        </p>

      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-gray-50">

      <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-12">

        <p class="text-lg text-gray-700 leading-9">
          Welcome to <strong>Chirag International</strong>. By accessing or using
          this website, you agree to comply with these Terms & Conditions.
          Please read them carefully before using our website and services.
        </p>

        <hr class="my-10">

        <!-- Acceptance -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            1. Acceptance of Terms
          </h2>

          <p class="text-gray-700 leading-8">
            By accessing this website, you agree to these Terms & Conditions,
            our Privacy Policy, and all applicable laws and regulations.
          </p>

        </div>

        <hr class="my-10">

        <!-- Website Use -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            2. Website Use
          </h2>

          <ul class="list-disc list-inside space-y-3 text-gray-700">

            <li>Use this website only for lawful purposes.</li>

            <li>Do not attempt to hack or disrupt our services.</li>

            <li>Do not upload malicious software or harmful content.</li>

            <li>Respect the rights of other users.</li>

          </ul>

        </div>

        <hr class="my-10">

        <!-- Intellectual Property -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            3. Intellectual Property
          </h2>

          <p class="text-gray-700 leading-8">
            All content including text, graphics, images, logos and website
            design is owned by Chirag International unless otherwise stated.
            You may not reproduce or distribute our content without written
            permission.
          </p>

        </div>

        <hr class="my-10">

        <!-- User Responsibilities -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            4. User Responsibilities
          </h2>

          <ul class="list-disc list-inside space-y-3 text-gray-700">

            <li>Provide accurate information when contacting us.</li>

            <li>Maintain the confidentiality of your account, if applicable.</li>

            <li>Do not misuse the website or its resources.</li>

          </ul>

        </div>

        <hr class="my-10">

        <!-- Third Party -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            5. Third-Party Links
          </h2>

          <p class="text-gray-700 leading-8">
            Our website may contain links to third-party websites for your
            convenience. We are not responsible for their content, privacy
            practices or services.
          </p>

        </div>

        <hr class="my-10">

        <!-- Disclaimer -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            6. Disclaimer
          </h2>

          <p class="text-gray-700 leading-8">
            Information published on this website is provided for general
            educational and informational purposes only. It should not be
            considered medical, legal or professional advice.
          </p>

        </div>

        <hr class="my-10">

        <!-- Limitation -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            7. Limitation of Liability
          </h2>

          <p class="text-gray-700 leading-8">
            Chirag International shall not be liable for any direct, indirect,
            incidental or consequential damages arising from the use of this
            website.
          </p>

        </div>

        <hr class="my-10">

        <!-- Changes -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            8. Changes to These Terms
          </h2>

          <p class="text-gray-700 leading-8">
            We reserve the right to modify these Terms & Conditions at any
            time. Updated versions will be published on this page.
          </p>

        </div>

        <hr class="my-10">

        <!-- Governing Law -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            9. Governing Law
          </h2>

          <p class="text-gray-700 leading-8">
            These Terms & Conditions are governed by the applicable laws of
            the jurisdiction in which Chirag International operates.
          </p>

        </div>

        <hr class="my-10">

        <!-- Contact -->

        <div>

          <h2 class="text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6">
            10. Contact Us
          </h2>

          <p class="text-gray-700 leading-8">
            If you have any questions regarding these Terms & Conditions,
            please contact us using our Contact page.
          </p>

          <div class="bg-green-50 rounded-xl p-8 mt-8 text-center">

            <h3 class="text-2xl font-semibold mb-3">
              Need Assistance?
            </h3>

            <p class="text-gray-600 mb-6">
              Our team is available to answer your questions regarding our website policies.
            </p>

            <NuxtLink
              to="/contact"
              class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Contact Us
            </NuxtLink>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>
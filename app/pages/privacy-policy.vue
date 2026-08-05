<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | Chirag International',
  description:
    'Read the Privacy Policy for Chirag International.'
})

const lastUpdated = 'August 2026'
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white">
      <div class="max-w-7xl mx-auto px-6 py-20">

        <h1 class="text-5xl font-bold">
          Privacy Policy
        </h1>

        <p class="mt-4 text-green-100 text-lg">
          Last Updated: {{ lastUpdated }}
        </p>

      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-gray-50">

      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        <p class="text-gray-600 leading-8">
          At <strong>Chirag International</strong>, your privacy is important to us.
          This Privacy Policy explains how we collect, use and protect your
          personal information when you use our website.
        </p>

        <div class="mt-10 space-y-10">

          <!-- Information We Collect -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              1. Information We Collect
            </h2>

            <ul class="list-disc ml-6 space-y-2 text-gray-600">
              <li>Name</li>
              <li>Email Address</li>
              <li>Contact Information</li>
              <li>Browser and Device Information</li>
              <li>Website Usage Statistics</li>
            </ul>
          </div>

          <!-- How We Use -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              2. How We Use Your Information
            </h2>

            <ul class="list-disc ml-6 space-y-2 text-gray-600">
              <li>Provide our services.</li>
              <li>Improve website performance.</li>
              <li>Respond to your inquiries.</li>
              <li>Send newsletters if you subscribe.</li>
              <li>Analyze website traffic.</li>
            </ul>
          </div>

          <!-- Cookies -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              3. Cookies
            </h2>

            <p class="text-gray-600 leading-8">
              We use cookies to improve your browsing experience,
              remember preferences and analyze website traffic.
              You may disable cookies in your browser settings.
            </p>
          </div>

          <!-- Data Security -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              4. Data Security
            </h2>

            <p class="text-gray-600 leading-8">
              We use reasonable technical and organizational measures to
              protect your information from unauthorized access,
              disclosure or misuse.
            </p>
          </div>

          <!-- Third Party -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              5. Third-Party Services
            </h2>

            <p class="text-gray-600 leading-8">
              We may use third-party services such as analytics,
              advertising platforms and embedded content.
              These services may collect information according to
              their own privacy policies.
            </p>
          </div>

          <!-- User Rights -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              6. Your Rights
            </h2>

            <ul class="list-disc ml-6 space-y-2 text-gray-600">
              <li>Request access to your personal data.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
          </div>

          <!-- Children's Privacy -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              7. Children's Privacy
            </h2>

            <p class="text-gray-600 leading-8">
              Our website is not intended for children under the age of
              13. We do not knowingly collect personal information from
              children.
            </p>
          </div>

          <!-- Updates -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              8. Changes to this Policy
            </h2>

            <p class="text-gray-600 leading-8">
              We may update this Privacy Policy from time to time.
              Changes will be posted on this page with the updated date.
            </p>
          </div>

          <!-- Contact -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              9. Contact Us
            </h2>

            <p class="text-gray-600 leading-8">
              If you have any questions regarding this Privacy Policy,
              please contact us using the Contact page.
            </p>

            <NuxtLink
              to="/contact"
              class="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Contact Us
            </NuxtLink>
          </div>

        </div>

      </div>

    </section>

  </div>
</template>
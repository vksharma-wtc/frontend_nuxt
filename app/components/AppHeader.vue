<script setup>
import MegaMenu from '~/components/MegaMenu.vue'
const menu = [
  {
    id: 1,
    title: 'Health',
    url: '/health'
  },
  {
    id: 2,
    title: 'Nutrition',
    url: '/nutrition'
  },
  {
    id: 3,
    title: 'Fitness',
    url: '/fitness'
  },
  {
    id: 4,
    title: 'Wellness',
    url: '/wellness'
  },
  {
    id: 5,
    title: 'Recipes',
    url: '/recipes',
  },
  {
    id: 6,
    title: 'Blog',
    url: '/articles',
  },
  {
    id: 7,
    title: 'About',
    url: '/about',
  },
  {
    id: 8,
    title: 'Contact',
    url: '/contact',
  }
]



const localePath = useLocalePath()
</script>
<template>
  <header class="header">
    <div class="container">

      <NuxtLink
  :to="localePath('/')"
  class="flex items-center gap-3"
>
  <img
    src="/images/logo.png"
    alt="Chirag International"
    class="h-16 w-auto"
  >

  
</NuxtLink>

      <!-- Navigation -->
      <nav>
        <MegaMenu :items="menu" />
      </nav>

      <!-- Right Side -->
      <div class="icons">

       <!-- <NuxtLink to="/wishlist">
          ❤️
        </NuxtLink>

        <NuxtLink to="/cart">
          🛒
        </NuxtLink>

        <NuxtLink to="/login">
          Login
        </NuxtLink>-->

         <!-- Search -->
      <!--<div class="search-box">
        <input
          type="text"
          placeholder="Search"
        />
      </div>-->

        <LanguageSwitcher />

      </div>

    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: #ffffff;
  color: #111827;
  box-shadow: 0 2px 12px rgba(0,0,0,.08);
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 20px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  color: #16a34a;
  text-decoration: none;
}

.search-box input {
  width: 250px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.icons {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
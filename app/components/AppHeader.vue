<script setup>
import MegaMenu from '~/components/MegaMenu.vue'
const menu = [
  {
    id: 1,
    title: 'Health',
    url: '/health',
    children: [
      {
        id: 31,
        title: 'Wellness',
        url: '/health/wellness'
      },

      {
        id: 32,
        title: 'Mental Health',
        url: '/health/mental-health'
      },

      {
        id: 33,
        title: "Healthy Habits",
        url: '/health/healthy-habits'
      }
    ]
  },
  {
    id: 2,
    title: 'Nutrition',
    url: '/nutrition',
    children: [
      {
        id: 31,
        title: 'Healthy Foods',
        url: '/our-story/all'
      },

      {
        id: 32,
        title: 'Vitamins',
        url: '/our-story/our-mission'
      },

      {
        id: 33,
        title: "Diet Plans",
        url: '/our-story/our-science-mission'
      },

    ]
  },
  {
    id: 3,
    title: 'Fitness',
    url: '/Fitness',
    children: [
      {
        id: 31,
        title: 'Home Workout',
        url: '/gut-science/all'
      },

      {
        id: 32,
        title: 'Yoga',
        url: '/gut-science/bacteria-science'
      },

       {
        id: 32,
        title: 'Weight Loss',
        url: '/gut-science/gut-bacteria'
      }

    ]
  },
  {
    id: 4,
    title: 'Recipes',
    url: '/Recipes',
    children: [
      {
        id: 31,
        title: 'Breakfast',
        url: '/gut-health/all'
      },

      {
        id: 32,
        title: 'Lunch',
        url: '/gut-health/our-mission'
      },

      {
        id: 33,
        title: "Dinner",
        url: '/gut-health/our-science-mission'
      },

      {
        id: 33,
        title: "Drinks",
        url: '/gut-health/our-social-mission'
      },

    ]
  },
  {
    id: 5,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 6,
    title: 'About',
    url: '/about',
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contact',
  }
]
const localePath = useLocalePath()
</script>
<template>
  <header class="header">
    <div class="container">

      <!-- Logo -->
     <NuxtLink :to="localePath('/')" class="logo">
  {{ $t('shop') }}
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
      <div class="search-box">
        <input
          type="text"
          placeholder="Search"
        />
      </div>

        <LanguageSwitcher />

      </div>

    </div>
  </header>
</template>

<style scoped>

  .header{
  color:white;
  }

  .container{
  width:1200px;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  }

  .logo{
  font-size:30px;
  font-weight:bold;
  color:red;
  text-decoration:none;
  }

  .search-box input{
  width:350px;
  padding:10px;
  border:none;
  border-radius:5px;
  }

  .menu{
  display:flex;
  gap:25px;
  list-style:none;
  margin:0;
  padding:0;
  }

  .menu a{
  color:white;
  text-decoration:none;
  }

  .icons{
  display:flex;
  gap:20px;
  align-items:center;
  }

  .icons a{
  color:white;
  text-decoration:none;
  }

</style>
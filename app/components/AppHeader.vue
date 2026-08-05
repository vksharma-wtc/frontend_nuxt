<script setup>
import MegaMenu from '~/components/MegaMenu.vue'
const menu = [
  {
    id: 1,
    title: 'Products',
    url: '/products',
    children: [
      {
        id: 31,
        title: 'Yakult Balance',
        url: '/products/yakult-balance'
      },

      {
        id: 32,
        title: 'Yakult Original',
        url: '/products/yakult-original'
      },

      {
        id: 33,
        title: "Yakult Plus Peach",
        url: '/products/yakult-plus-peach'
      }
    ]
  },
  {
    id: 2,
    title: 'Our Story',
    url: '/our-story',
    children: [
      {
        id: 31,
        title: 'All',
        url: '/our-story/all'
      },

      {
        id: 32,
        title: 'Our Mission',
        url: '/our-story/our-mission'
      },

      {
        id: 33,
        title: "Our Science Mission",
        url: '/our-story/our-science-mission'
      },

      {
        id: 33,
        title: "Our Social Mission",
        url: '/our-story/our-social-mission'
      },

      {
        id: 33,
        title: "Manufacturing Process",
        url: '/our-story/manufacturing-process'
      }
    ]
  },
  {
    id: 3,
    title: 'Gut Science',
    url: '/gut-science',
    children: [
      {
        id: 31,
        title: 'All',
        url: '/gut-science/all'
      },

      {
        id: 32,
        title: 'Bacteria Science',
        url: '/gut-science/bacteria-science'
      },

       {
        id: 32,
        title: 'Gut Bacteria',
        url: '/gut-science/gut-bacteria'
      },

      {
        id: 32,
        title: 'Digestive System',
        url: '/gut-science/digestive-system'
      },

      {
        id: 32,
        title: 'Gut Brain Axis',
        url: '/gut-science/gut-brain-axis'
      },

      {
        id: 33,
        title: "Women's Gut Guide",
        url: '/gut-science/womens-gut-guide/',

        children: [

          {
            id: 331,
            title: 'Menstruation',
            url: '/gut-science/menstruation'
          },

          {
            id: 332,
            title: 'Perimenopause',
            url: '/gut-science/perimenopause'
          },

          {
            id: 333,
            title: 'Menopause',
            url: '/gut-science/menopause'
          }

        ]
      }

    ]
  },
  {
    id: 4,
    title: 'Gut Health',
    url: '/gut-health',
    children: [
      {
        id: 31,
        title: 'All',
        url: '/gut-health/all'
      },

      {
        id: 32,
        title: 'Our Mission',
        url: '/gut-health/our-mission'
      },

      {
        id: 33,
        title: "Our Science Mission",
        url: '/gut-health/our-science-mission'
      },

      {
        id: 33,
        title: "Our Social Mission",
        url: '/gut-health/our-social-mission'
      },

      {
        id: 33,
        title: "Manufacturing Process",
        url: '/gut-health/manufacturing-process'
      }
    ]
  },
  {
    id: 5,
    title: 'FAQ',
    url: '/faq',
  },
  {
    id: 6,
    title: 'Buy Yakult',
    url: '/buy-yakult',
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
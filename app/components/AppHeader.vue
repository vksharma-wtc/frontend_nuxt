<template>
  <header class="header">
    <div class="container">

      <!-- Logo -->
      <NuxtLink to="/" class="logo">
        NuxtShop
      </NuxtLink>

      <!-- Search -->
      <div class="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      <!-- Navigation -->
      <nav>
        <ul class="menu">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/our-story">Our Story</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/category">Categories</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Right Side -->
      <div class="icons">

        <NuxtLink to="/wishlist">
          ❤️
        </NuxtLink>

        <NuxtLink to="/cart">
          🛒
        </NuxtLink>

        <NuxtLink to="/login">
          Login
        </NuxtLink>

      </div>

    </div>
  </header>
</template>

<style scoped>

  .header{
  background:#222;
  padding:15px 0;
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
  color:white;
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
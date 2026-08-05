<script setup>
const props = defineProps({
  items: Array
})

const activeMenu = ref(null)
const activeChild = ref(null)
</script>

<template>
  <ul class="menu">
    <li
      v-for="item in items"
      :key="item.id"
      class="menu-item"
      @mouseenter="activeMenu = item.id"
      @mouseleave="activeMenu = null"
    >
      <NuxtLink :to="item.url">
        {{ item.title }}
      </NuxtLink>

      <!-- Level 2 -->
      <div
        v-if="activeMenu === item.id && item.children"
        class="dropdown"
      >
        <div
          v-for="child in item.children"
          :key="child.id"
          class="dropdown-item"
          @mouseenter="activeChild = child.id"
        >
          <NuxtLink :to="child.url">
            {{ child.title }}
          </NuxtLink>

          <span v-if="child.children">
            ▶
          </span>

          <!-- Level 3 -->
          <div
            v-if="activeChild === child.id && child.children"
            class="submenu"
          >
            <NuxtLink
              v-for="sub in child.children"
              :key="sub.id"
              :to="sub.url"
              class="submenu-link"
            >
              {{ sub.title }}
            </NuxtLink>
          </div>

        </div>
      </div>

    </li>
  </ul>
</template>

<style scoped>

.menu{
display:flex;
list-style:none;
gap:30px;
}

.menu-item{
position:relative;
padding:15px 0;
}

.dropdown{
position:absolute;
top:100%;
left:0;
background:white;
width:250px;
box-shadow:0 5px 20px rgba(0,0,0,.15);
border-radius:10px;
}

.dropdown-item{
position:relative;
padding:12px 15px;
display:flex;
justify-content:space-between;
cursor:pointer;
}

.submenu{
position:absolute;
left:100%;
top:0;
width:220px;
background:white;
box-shadow:0 5px 20px rgba(0,0,0,.15);
border-radius:10px;
}

.submenu-link{
display:block;
padding:12px;
text-decoration:none;
color:#000;
}

a{
text-decoration:none;
color:#000;
}

</style>
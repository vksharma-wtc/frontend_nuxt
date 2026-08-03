<script setup>
const route = useRoute()

// Fetch product by slug
const { product, pending, error } = await useProduct(route.params.slug)

const quantity = ref(1)

const increaseQty = () => {
  quantity.value++
}

const decreaseQty = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>

<template>
  <div class="container">
  <div class="product-wrapper">

    <div class="product-image">
      <img :src="product.image.sourceUrl">
    </div>

    <div class="product-info">
      <h1>{{ product.name }}</h1>

      <!--<button class="btn cart-btn">
        Add to Cart
      </button>-->

      <button class="btn buy-btn">
        Buy Now
      </button>
    </div>

  </div>

  <div class="description">
    <div v-html="product.description"></div>
  </div>

  <div v-if="pending">
  Loading...
</div>

<div v-else-if="error">
  {{ error }}
</div>

<ProductDetail
  v-else
  :product="product"
/>

</div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.product-wrapper {
  display: flex;
  gap: 40px;
}

.product-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
}

.product-info {
  flex: 1;
}

.price {
  color: red;
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0;
}

.btn {
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
}

.cart-btn {
  background: black;
  color: white;
}

.buy-btn {
  background: red;
  color: white;
}

.description {
  margin-top: 50px;
}
</style>

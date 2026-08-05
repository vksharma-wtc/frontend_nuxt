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
    <img :src="product.image.sourceUrl" :alt="product.name" />
  </div>

  <div class="product-info">
    <h1>{{ product.name }}</h1>

    <button class="buy-btn">
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px 40px;
}

.product-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  min-height: 80vh;
}

.product-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.product-image img {
   width: 220px;
    height: auto;
  max-width: 520px;
  height: auto;
  object-fit: contain;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-info h1 {
  font-size: 48px;
  font-weight: 700;
  color: #d50000;
  margin-bottom: 30px;
}

.buy-btn {
  width: 180px;
  height: 55px;

  background: #e60000;
  color: #fff;

  border: none;
  border-radius: 8px;

  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
  transition: .3s;
}

.buy-btn:hover {
  background: #b70000;
}

.description {
  margin-top: 70px;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .product-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    min-height: auto;
  }

  .product-image img {
    max-width: 320px;
  }

  .product-info {
    align-items: center;
  }

  .product-info h1 {
    font-size: 32px;
  }

  .buy-btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>

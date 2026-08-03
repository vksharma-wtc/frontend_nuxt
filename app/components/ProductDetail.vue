<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const quantity = ref(1)

const increaseQty = () => quantity.value++
const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--
}

const selectedPack = ref('8 X 65ML')

const stores = [
  {
    id: 1,
    name: 'Tesco',
    logo: '/images/tesco.png'
  },
  {
    id: 2,
    name: 'Sainsbury',
    logo: '/images/sainsbury.png'
  },
  {
    id: 3,
    name: 'ASDA',
    logo: '/images/asda.png'
  },
  {
    id: 4,
    name: 'Morrisons',
    logo: '/images/morrisons.png'
  }
]
</script>

<template>
  <div class="product-page">

    <div class="product-container">

      <div class="product-image">
        <img
          :src="product.image?.sourceUrl"
          :alt="product.name"
        >
      </div>

      <div class="product-info">

        <h1>{{ product.name }}</h1>

        <div class="rating">
          ★★★★★
          <span>(4.7)</span>
        </div>

        <h2>Pack Size</h2>

        <div class="pack-size">

          <button
            :class="{active:selectedPack==='8 X 65ML'}"
            @click="selectedPack='8 X 65ML'"
          >
            8 X 65ML
          </button>

          <button
            :class="{active:selectedPack==='15 X 65ML'}"
            @click="selectedPack='15 X 65ML'"
          >
            15 X 65ML
          </button>

        </div>

        <div class="price">
          {{ product.price }}
        </div>

      </div>

    </div>

    <div class="retailer-grid">

      <div
        class="retailer-card"
        v-for="store in stores"
        :key="store.id"
      >

        <img
          :src="store.logo"
          :alt="store.name"
        >

        <button>
          BUY NOW
        </button>

      </div>

    </div>

  </div>
</template>

<style scoped>
.product-page{
    max-width:1200px;
    margin:auto;
    padding:40px 20px;
}

.product-container{
    display:flex;
    gap:80px;
    align-items:center;
}

.product-image img{
    width:450px;
}

.product-info h1{
    font-size:52px;
    color:#E3062B;
}

.rating{
    margin:20px 0;
}

.pack-size{
    display:flex;
    gap:20px;
    margin:30px 0;
}

.pack-size button{
    padding:14px 30px;
    border-radius:30px;
    border:2px solid #E3062B;
    background:white;
    color:#E3062B;
    cursor:pointer;
}

.pack-size .active{
    background:#E3062B;
    color:white;
}

.price{
    font-size:36px;
    color:#E3062B;
    font-weight:bold;
}

.retailer-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:25px;
    margin-top:70px;
}

.retailer-card{
    border:2px solid #E3062B;
    border-radius:25px;
    padding:30px;
    text-align:center;
}

.retailer-card img{
    width:140px;
    height:60px;
    object-fit:contain;
}

.retailer-card button{
    margin-top:25px;
    background:#E3062B;
    color:white;
    border:none;
    padding:12px 30px;
    border-radius:30px;
    cursor:pointer;
}
</style>
<script>
import ProductDetails from './ProductDetails.vue'
export default {
  components: {
    ProductDetails
  },
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: '../public/socks_green.jpg',
          quantity: 10
        },
        {
          id: 2235,
          color: 'blue',
          image: '../public/socks_blue.jpg',
          quantity: 0
        }
      ]
    }
  },
  methods: {
    updateVariant(index) {
      this.selectedVariant = index
    },
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    }
  },
  computed: {
    title() {
      return this.variants[this.selectedVariant].color + ' ' + this.product
    },
    shippingPrice() {
      return this.premium ? 'Free' : '2,99€'
    }
  }
}
</script>

<template>
  <div>
    <section>
      <img
        :src="this.variants[this.selectedVariant].image"
        :alt="this.variants[selectedVariant].color + ' socks'"
      />
    </section>
    <section>
      <h2>{{ title }}</h2>
      <h4 v-if="this.variants[selectedVariant].quantity > 0">in stock</h4>
      <h4 v-else>out of stock</h4>
      <h4>Shipping: {{ shippingPrice }}</h4>
      <ProductDetails :details="details" />
      <div class="colors">
        <div
          class="color"
          v-for="(variant, index) in this.variants"
          :key="variant.id"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateVariant(index)"
        ></div>
      </div>
      <button @click="addToCart" :disabled="!this.variants[this.selectedVariant].quantity">
        Add to Cart
      </button>
      <button @click="removeFromCart" :disabled="!this.variants[this.selectedVariant].quantity">
        Remove from Cart
      </button>
    </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

img {
  width: 200px;
  height: auto;
}

ul {
  display: flex;
  column-gap: 50px;
}

.color {
  width: 30px;
  height: 30px;
  border-radius: 20px;
}

.colors {
  display: flex;
  column-gap: 5px;
}

.disabledButton {
  background-color: grey;
}
</style>

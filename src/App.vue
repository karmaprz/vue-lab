<script>
import ProductDisplay from './components/ProductDisplay.vue'
import ReviewForm from './components/ReviewForm.vue'
import ReviewsList from './components/ReviewsList.vue'

export default {
  components: {
    ProductDisplay,
    ReviewForm,
    ReviewsList
  },
  data() {
    return {
      reviews: [],
      tabs: ['review-form', 'review-list'],
      activeTab: 'review-form',
      cart: [],
      premium: true
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    deleteProduct(id) {
      const index = this.cart.indexOf(id)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    },
    addReview(productReview) {
      this.reviews.push(productReview)
      console.log(this.reviews)
    }
  }
}
</script>

<template>
  <header>
    <h1>Vue.js Lab</h1>
  </header>

  <main>
    <ProductDisplay
      :premium="premium"
      @add-to-cart="updateCart"
      @remove-from-cart="deleteProduct"
    />
    <section>
      <h3>Cart ({{ cart.length }})</h3>
      <ReviewForm @review-submitted="addReview" />
      <ReviewsList v-show="reviews.length" :reviews="this.reviews" />
    </section>
  </main>
</template>

<style>
header {
  padding: calc(var(--section-gap) / 2);
  text-align: center;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}

section {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

button {
  background-color: aquamarine;
  padding: 10px;
  border-style: none;
  border-radius: 5px;
  font-weight: 600;
}
</style>

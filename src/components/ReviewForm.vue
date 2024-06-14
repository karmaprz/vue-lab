<script>
export default {
  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }

      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h3>Add a review of this product</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating</label>
    <select id="rating" v-model.number="rating">
      <option disabled value>Rate the product</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>

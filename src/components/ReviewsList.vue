<template>
  <div>
    <h3>Reviews</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name + review.rating + review.review + '   ' + index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>

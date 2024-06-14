<script>
export default {
  props: {
    details: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="(detail, index) in this.details" :key="index">{{ detail }}</li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  column-gap: 50px;
}
</style>

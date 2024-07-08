<script setup>
import { defineProps } from 'vue'

defineProps({
  recipe: {
    type: Object,
    required: true
  }
})

</script>

<template>
<div>
    <div>{{ recipe.title }}</div>
</div>
</template>

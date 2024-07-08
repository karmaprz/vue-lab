<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['delete-recipe']);

const handleDelete = (id, title) => {
  const deleteRecipe = window.confirm(`Are you sure you want to delete ${title} recipe?`)
  deleteRecipe && emit('delete-recipe', id)
}

</script>

<template>
  <div class="recipe-wrapper">
      <h2>{{ recipe.title }}</h2>
      <p>Hearty lentil soup with carrots, celery, and spices, perfect for a cozy meal.</p>
      <span class="buttons-wrapper">
        <button @click="handleDelete(recipe.id, recipe.title)">Delete recipe</button> | 
        <button>Edit recipe</button>
      </span>
  </div>
</template>

<style scoped>
.recipe-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin: 20px;
  border-radius: 5px;
  border: solid 1px black;
  padding: 15px;
}

.buttons-wrapper > button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0; 
  margin: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  line-height: normal;
  cursor: pointer;
  outline: none;
  text-decoration: underline;
  text-decoration-color: rgb(167, 0, 189);
}

</style>

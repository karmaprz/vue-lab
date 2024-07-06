<script setup>

</script>

<template>
  <section class="component-wrapper">
    <h2 class="title">Your recipes</h2>
    <div class="recipes-container">
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
      <div class="recipe-container"></div>
    </div>
  </section>
</template>

<style scoped>
.title {
  text-align: center;
  font-weight: 500;
  font-size: 2.6rem;
}

.component-wrapper {
  justify-items: center;  
}

.recipes-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
}

.recipe-container{
  width: 100%;
  height: 190px;
  border-radius: 10px;
  background-color: aliceblue;
}

</style>

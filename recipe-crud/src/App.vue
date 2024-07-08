<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Recipes</RouterLink>
        <RouterLink to="/add-recipe">Add a new recipe</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
header {
  padding: 30px 0;
  align-self: center;
  width: 100%;
}

nav {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>

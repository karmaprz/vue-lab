<script setup>
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const recipe = reactive({
  title: 'dhal',
  image: "../public/dhal.jpg"
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <span>Recipes Creator</span>
        <RouterLink to="/">Your recipes</RouterLink>      
        <RouterLink to="/create-recipe">Create recipe</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <img :src="recipe.image" :alt="recipe.title"/>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  padding: 20px 30px;
  column-gap: 20px;
}
nav > span {
  margin-right: auto;
}

nav > a, span {
  align-self: center;
}

main {
  padding-top: 100px;
}
a {
  font-size: 16px;
  text-decoration: none;
}
</style>

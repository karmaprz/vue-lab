<script setup>
import RecipeItem from '@/components/RecipeItem.vue'
import {ref, onMounted} from 'vue'
import RecipeService from '@/services/RecipeService'

const recipes = ref(null)
const error = ref(null) 


onMounted(() => {
    RecipeService.getRecipes()
    .then(res => recipes.value = res.data)
    .catch(err => error.value = err.message || 'Failed to fetch recipes')
})


</script>

<template>
    <div v-if="error" class="error">{{ error }}</div>
    <section class="recipes-wrapper">
        <RecipeItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
    </section>
</template>

<style scoped>
.recipes-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    text-align: center;
}

.error {
    background-color: rgb(239, 185, 185);
    padding: 10px 15px;
    border-radius: 5px;
    border: solid 1px rgb(85, 2, 2);
    color: rgb(85, 2, 2);
}
</style>
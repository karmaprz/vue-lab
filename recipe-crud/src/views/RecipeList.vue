<script setup>

</script>

<template>
    <section class="recipes-wrapper">
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
    </section>
</template>

<style scoped>
.recipes-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
}
</style>
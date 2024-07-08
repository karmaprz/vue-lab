<script setup>
import {ref} from 'vue'
import RecipeService from '@/services/RecipeService'


const formData = ref({
    title: '',
    description: ''
})
const submissionError = ref(null);
const confirmationMessage = ref(null);

const handleSubmit = () => {
    RecipeService.createRecipe()
    .then(confirmationMessage.value = 'Recipe created successfully!')
    .then(clearData)
    .catch((err) => submissionError.value = err.message || 'Failed to submit the form.')
}

const clearData = () => {
    formData.value = {
      title: '',
      description: '',
    }
    submissionError.value = null;
    setTimeout(() => {
        confirmationMessage.value = null;
    }, 2000)

}
</script>

<template>
    <section class="page-wrapper">
        <h1>New recipe</h1>
        <form @submit.prevent="handleSubmit" autocomplete="on">
                <label for="title">Title:</label>
                <input
                type="text"
                id="title"
                name="title"
                v-model="formData.title"
                required
                />
                <label for="description">Description:</label>
                <input
                type="text"
                id="description"
                name="description"
                v-model="formData.description"
                required
                />
            <button type="submit">Submit</button>
            <div v-if="submissionError">{{ submissionError }}</div>
            <div v-if="confirmationMessage">{{ confirmationMessage }}</div>
        </form>
    </section>
</template>

<style scoped>
.page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}
h1 {
    text-align: center;
}
form {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 400px;
}
</style>
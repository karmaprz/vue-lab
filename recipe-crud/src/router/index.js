import { createRouter, createWebHistory } from 'vue-router'
import RecipeList from '../views/RecipeList.vue'
import AddRecipeForm from '../views/AddRecipeForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Recipes',
      component: RecipeList
    },
    {
      path: '/add-recipe',
      name: 'Add recipe',
      component: AddRecipeForm
    }
  ]
})

export default router

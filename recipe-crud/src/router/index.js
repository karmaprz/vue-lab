import { createRouter, createWebHistory } from 'vue-router'
import RecipeList from '../views/RecipeList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RecipeList
    }
  ]
})

export default router
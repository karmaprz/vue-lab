import { createRouter, createWebHistory } from 'vue-router'
import EventsListView from '../views/EventsListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events-list',
      component: EventsListView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      component: EventDetailsView,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router

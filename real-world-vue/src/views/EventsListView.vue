<script setup>
import { onMounted, ref, computed, watchEffect } from 'vue'
import EventCard from '../components/EventCard.vue'
import EventService from '@/services/EventService.js'

const events = ref(null)
const props = defineProps(['page'])
const page = computed(() => props.page)
const totalEvents = ref(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
      .then((res) => {
        events.value = res.data
        totalEvents.value = res.headers["x-total-count"]
      })
      .catch((err) => console.log(err))
  })
})

</script>

<template>
  <main>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <router-link
          id="page-prev"
          :to="{ name: 'events-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
        >
          Prev page</router-link
        >
        |
    
        <router-link id="page-next" :to="{ name: 'events-list', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">
          Next page</router-link
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>

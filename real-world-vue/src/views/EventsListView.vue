<script setup>
import { onMounted, ref } from 'vue'
import EventCard from '../components/EventCard.vue'
import EventService from '@/services/EventService.js'

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((res) => {
      events.value = res.data
    })
    .catch((err) => console.log(err))
})
</script>

<template>
  <main>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </main>
</template>

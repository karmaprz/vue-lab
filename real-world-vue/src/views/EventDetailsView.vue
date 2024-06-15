<script setup>
import EventService from '@/services/EventService';
import { onMounted, ref } from 'vue';

const event = ref(null)

const props = defineProps({
    id: {
        required: true
    }
})

onMounted(() => {
    EventService.getEvent(props.id)
    .then((res) => {
        event.value = res.data
    })
    .catch((err) => console.log(err))
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p> {{ event.time }} on {{ event.datex }} @ {{ event.location }}</p>
        <p> {{ event.description }}</p>
    </div>
</template>
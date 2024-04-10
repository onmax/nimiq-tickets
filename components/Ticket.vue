<script setup lang="ts">
import type { TicketInsert } from '~/server/utils/drizzle';

const { user, clear } = useUserSession()

const { data: ticket, refresh } = await useFetch('/api/tickets', {query: { username: user.value?.username }})

onMounted(async () => {
  console.log(ticket.value)
  if (ticket.value) {
    return
  }
  const ticketBody: Omit<TicketInsert, 'createdAt'> = user.value!
  await $fetch('/api/tickets', { method: 'POST', body: ticketBody })
  refresh()
})
</script>

<template>
  <button @click="clear">Logout</button>
  Ticket: {{ ticket }}

  User: {{ user }}
</template>

<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession()

const { data: ticket } = await useFetch('/api/tickets', { query: { username: user.value?.username }})
console.log(ticket)
if(!ticket.value) {
  console.log(`no ticket found for ${user.value?.username}`)
  const ticketData = { username: user.value?.username, name: user.value?.name, avatar: user.value?.avatar }
  const { data: ticket } = await useFetch('/api/tickets', { method: 'POST', body: ticketData })
  console.log(ticket)
}
</script>

<template>
<button @click="clear">Logout</button>
{{ ticket }}
</template>

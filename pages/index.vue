<script setup>
const { loggedIn } = useUserSession()
</script>

<template>
  <Ticket v-if="loggedIn" />
  <div v-else>
    <h1>Not logged in</h1>
    <a href="/auth/github">Login with GitHub</a>
  </div>
</template>

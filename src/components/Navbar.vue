<script setup>
defineProps({
  loggedIn: String,
});
</script>

<template>
  <nav>
    <div class="title">
      <router-link :to="{ name: 'home' }">Laravel Sanctum</router-link>
    </div>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-else>
        <button @click.prevent="$emit('toLogOut')">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

li {
  list-style: none;
}
</style>

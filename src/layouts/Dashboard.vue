<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  if (!localStorage.getItem("loggedIn")) {
    return router.push({ name: "login" });
  }
});
</script>

<template>
  <div>Halaman dashboard</div>
</template>

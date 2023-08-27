<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const token = ref(null);
const user = ref(null);

token.value = localStorage.getItem("token");

axios
  .get("http://127.0.0.1:8000/api/user", {
    headers: { Authorization: "Bearer " + token.value },
  })
  .then((response) => {
    user.value = response.data;
  })
  .catch((err) => console.log(err));

onMounted(() => {
  if (!localStorage.getItem("loggedIn")) {
    return router.push({ name: "login" });
  }
});
</script>

<template>
  <div>Halaman dashboard</div>
  <p v-if="user">hello {{ user.name }}</p>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loggedIn = ref(null);

function getLoggedIn() {
  loggedIn.value = localStorage.getItem("loggedIn");
}

async function logout() {
  await axios.get("http://127.0.0.1:8000/api/logout").then(() => {
    //remove localStorage
    localStorage.removeItem("loggedIn");

    //redirect
    return router.push({ name: "login" });
  });
}
</script>

<template>
  {{ loggedIn }}
  <Navbar :loggedIn="loggedIn" @to-log-out="logout" />
  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(false);
const loggedIn = ref(localStorage.getItem("loggedIn"));

const user = {
  email: "",
  password: "",
};

const validation = {
  email: false,
  password: false,
};

async function login() {
  isLoading.value = true;
  await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
  await axios
    .post("http://127.0.0.1:8000/api/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      if (response.data.success) {
        //set localStorage
        localStorage.setItem("loggedIn", true);

        //set localStorage Token
        localStorage.setItem("token", response.data.token);

        //redirect dashboard
        return router.push({ name: "dashboard" });
      }
    })
    .catch((err) => {
      console.log(err);

      validation.email = true;
      validation.password = true;
    });

  isLoading.value = false;
}
</script>

<template>
  <div>Halaman Login {{ loggedIn }}</div>
  <br />
  <form @submit.prevent="login" v-if="!isLoading">
    <div>
      <label>Email</label>
      <input type="email" v-model="user.email" />
      <span v-if="validation.email">Check your email</span>
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="user.password" />
      <span v-if="validation.password">Check your password</span>
    </div>

    <button type="submit">Submit</button>
  </form>
  <div v-else>Loading...</div>
</template>

<style scoped>
span {
  font-size: 8px;
  color: red;
}
</style>

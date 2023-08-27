import Home from "@/layouts/Home.vue";
import Login from "@/layouts/Login.vue";
import Dashboard from "@/layouts/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
  },
  {
    path: "/",
    component: Home,
    name: "home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

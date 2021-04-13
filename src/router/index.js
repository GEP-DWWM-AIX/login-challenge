import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/", //chemin vers 'root'
    name: "Home",
    component: Home,
  },
  {
    path: "/about", //chemin vers about
    name: "About",
    component: About,
  },
    {
        path: "/login", //chemin vers about
        name: "Login",
        component: Login,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
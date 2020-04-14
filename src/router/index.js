import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Game1 from "../views/Game1.vue"
import Game2 from "../views/Game2.vue"
import Game3 from "../views/Game3.vue"
import Game4 from "../views/Game4.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game1",
    name: "game1",
    component: Game1,
  },
  {
    path: "/game2",
    name: "game2",
    component: Game2,
  },
  {
    path: "/game3",
    name: "game3",
    component: Game3,
  },
  {
    path: "/game4",
    name: "game4",
    component: Game4,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

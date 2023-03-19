import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterUser from "../views/RegisterUser.vue";
import LoginUser from "../views/LoginUser.vue";
import UsersAdmin from "../views/UsersAdmin.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "RegisterUser",
    component: RegisterUser,
  },
  {
    path: "/login",
    name: "LoginUser",
    component: LoginUser,
  },
  {
    path: "/admin/users",
    name: "UsersAdmin",
    component: UsersAdmin,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") != undefined) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

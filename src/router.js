import { createRouter, createWebHashHistory } from "vue-router";
import DashLogin from "./components/DashLogin";
import DashHome from "./components/DashHome";
import UserRegistration from "./components/UserRegistration";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/login",
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "DashLogin",
    component: DashLogin,
  },
  {
    path: "/home",
    name: "DashHome",
    component: DashHome,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "UserRegistration",
    component: UserRegistration,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

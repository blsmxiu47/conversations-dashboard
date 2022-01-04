import { createRouter, createWebHashHistory } from "vue-router";
import DashLogin from "./components/DashLogin";
import DashHome from "./components/DashHome";
import UserRegistration from "./components/UserRegistration";
import DashSettings from "./components/DashSettings";
import EditQuery from "./components/EditQuery";
import ConversationsAbout from "./components/ConversationsAbout";

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
  {
    path: "/settings",
    name: "DashSettings",
    component: DashSettings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-query",
    name: "EditQuery",
    component: EditQuery,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "ConversationsAbout",
    component: ConversationsAbout,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;

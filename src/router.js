import { createRouter, createWebHashHistory } from "vue-router";
import DashLogin from "./components/DashLogin";
 
const routes = [
    {
        path: "/:catchAll(.*)",
        redirect: "/login"
    },
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "DashLogin",
        component: DashLogin
    }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
 
export default router;
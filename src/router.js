import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./components/Login.vue";
import ProjectDetails from "./components/ProjectDetail.vue";

const routes = [
    {
        path : "/",
        name : "Login",
        component : Login
    },
    {
        path : "/project-detail",
        name : "ProjectDetails",
        component : ProjectDetails
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
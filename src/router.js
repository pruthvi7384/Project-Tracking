import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./components/Login.vue";
import ProjectDetails from "./components/ProjectDetail.vue";
import ProjectInfoCard from "./components/ProjectInfoCard.vue";

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
    },
    {
        path : "/project-detail/:id",
        name : "ProjectInfoCard",
        component : ProjectInfoCard
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
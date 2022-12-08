import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./components/Login.vue";
import ProjectDetails from "./components/ProjectDetail.vue";
import ProjectInfoCard from "./components/ProjectInfoCard.vue";
import Technology from "./components/Technology.vue";
import Payment from "./components/Payment.vue";
import Database from "./components/Database.vue";
import Timesheet from "./components/Timesheet.vue";

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
    },
    {
        path : "/technology/:id",
        name : "Technology",
        component : Technology
    },
    {
        path : "/payment/:id",
        name : "Payment",
        component : Payment
    },
    {
        path : "/database/:id",
        name : "Database",
        component : Database
    },
    {
        path : "/timesheet/:id",
        name : "Timesheet",
        component : Timesheet
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
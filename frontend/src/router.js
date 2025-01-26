import { createWebHistory, createRouter } from "vue-router";
import ListService from "./components/service/ListService.vue";

const routes = [
    {
        path: "/listService", 
        name: "services", 
        alias: "/services", 
        component: ListService, 
        meta: {
            title: "Наши услуги"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Главная страница';
    next();
});

export default router;
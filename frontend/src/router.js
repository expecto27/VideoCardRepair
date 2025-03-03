import { createWebHistory, createRouter } from "vue-router";
import ListService from "./components/service/ListService.vue";
import Main from "./Main.vue";
import PostmatMap from "./components/postmat/PostmatMap.vue";
import Review from "./components/review/Review.vue";
import Login from "./components/authorization/Login";
import Profile from "./components/authorization/Profile";
import Register from "./components/authorization/Register";
import store from "./store/index";
import AddRequest from "./components/request/AddRequest.vue";
import AdminPanel from "./components/admin/AdminPanel.vue";
import EditService from "./components/service/EditService.vue";
import AddReview from "./components/review/AddReview.vue";
const routes = [
    {
        path: "/login",
        name: "login-user",
        component: Login,
        meta: {
            title: "Вход в систему"
        }
    },
    {
        path: "/register",
        name: "register-user",
        component: Register,
        meta: {
            title: "Регистрация"
        }
    },
    {
        path: "/profile",
        name: "profile-user",
        component: Profile,
        meta: {
            title: "Профиль пользователя",
            requiredAuth: true
        }
    },
    {
        path: "/listService", 
        name: "services", 
        alias: "/services", 
        component: ListService, 
        meta: {
            title: "Наши услуги"
        }
    },
    {
        path: "/mainPage", 
        name: "mainPage", 
        alias: "/main", 
        component: Main, 
        meta: {
            title: "Главная"
        }
    },
    {
        path: "/postmatMap", 
        name: "PostmatMap", 
        alias: "/postmats", 
        component: PostmatMap, 
        meta: {
            title: "Карта постаматов"
        }
    },
    {
        path: "/listReview", 
        name: "RevuewPage", 
        alias: "/reviews", 
        component: Review, 
        meta: {
            title: "Отзывы"
        }
    },
    { 
        path: "/add-request/:id",
        name: "add-request",
        component: AddRequest,
        props: true ,
        meta: {
            requiredAuth: true
        }
    },
    { 
        path: "/edit-service/:id",
        name: "edit-service",
        component: EditService,
        props: true ,
        meta: {
            requiredAuth: true
        }
    },
    { 
        path: "/admin",
        name: "admin",
        component: AdminPanel,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/add-review/:serviceId',
        name: 'AddReview',
        component: AddReview,
        props: true,
        meta: {
            requiredAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
});

// указание заголовка компонентам (тега title), заголовки определены в meta
router.beforeEach(async (to, from, next) => {
    // для тех маршрутов, для которых не определены компоненты, подключается только App.vue
    // поэтому устанавливаем заголовком по умолчанию название "Главная страница"
    document.title = to.meta.title || 'Главная страница';

    // проверяем наличие токена и срок его действия
    const auth = await store.getters["auth/isTokenActive"];
    if (auth) {
        return next();
    }
    // если токена нет или его срок действия истёк, а страница доступна только авторизованному пользователю,
    // то переходим на страницу входа в систему (ссылка на /login)
    else if (!auth && to.meta.requiredAuth) {
        const user = JSON.parse(localStorage.getItem("user"));
        await store.dispatch("auth/refreshToken", user)
            .then(() => {
                return next();
            })
            .catch(() => {
                return next({path: "/login"});
            });
        return next({ path: "/login" });
    }
    return next();
});

export default router;
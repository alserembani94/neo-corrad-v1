import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Page404 from "../views/404.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
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

    // TODO: For nested routes, use children
    // Temporarily declare this way - will improve later
    {
        path: "/basics/text",
        name: "Texts",
        component: () => import("../views/basics/Text.vue"),
    },
    {
        path: "/basics/button",
        name: "Buttons",
        component: () => import("../views/basics/Button.vue"),
    },
    {
        path: "/forms/input",
        name: "Input",
        component: () => import("../views/forms/Input.vue"),
    },

    {
        path: "/containers/card",
        name: "Card",
        component: () => import("../views/containers/Card.vue"),
    },
    {
        path: "/containers/table",
        name: "Table",
        component: () => import("../views/containers/Table.vue"),
    },

    {
        path: "/layouts/default",
        name: "Default Layout",
        component: () => import("../views/layouts/Default.vue"),
    },

    {
        path: "/themes",
        name: "Themes",
        component: () => import("../views/themes/Index.vue"),
    },

    // For 404 Error Page
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: Page404,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

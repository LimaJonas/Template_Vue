import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue")
    },
    {
        path: "/Services",
        name: "Services",
        component: () => import("../components/Services.vue")
    },
    {
        path: "/Portfolio",
        name: "Portfolio",
        component: () => import("../components/Portfolio.vue")
    },
    {
        path: "/About",
        name: "About",
        component: () => import("../components/About.vue")
    },
    {
        path: "/Contact",
        name: "Contact",
        component: () => import("../components/Contact.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
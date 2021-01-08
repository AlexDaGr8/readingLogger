import { createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router';
import Home from '@/components/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const routerOptions: RouterOptions = {
    history: createWebHistory(),
    routes
}

const router: Router = createRouter(routerOptions);

export default router;
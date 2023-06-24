import { createRouter, createWebHistory } from 'vue-router';
import ListGamers from './components/ListGamers.vue';

const routes = [
    {
        path: '/gamers',
        component: ListGamers,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

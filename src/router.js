import { createRouter, createWebHistory } from 'vue-router';
import ListGamers from './components/ListGamers.vue';
import ListTeams from './components/ListTeams.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
    {
      path: '/',
      name: '/',
      component: HelloWorld,
    },
    {
        path: '/gamers',
        name: 'gamers',
        component: ListGamers,
    },
    {
      path: '/teams',
      name: 'teams',
      component: ListTeams,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

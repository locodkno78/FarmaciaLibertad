import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../modules/home/view/HomeView.vue';
import RecetsView from '../modules/recets/view/RecetsView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/RecetsView',
    name: 'RecetsView',
    component: RecetsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

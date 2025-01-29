import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../modules/home/view/HomeView.vue';
import RecetsView from '../modules/recets/view/RecetsView.vue';
import ContactView from '../modules/contact/view/ContactView.vue';
import LocationView from '../modules/location/view/LocationView.vue';


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
  {
    path: '/ContactView',
    name: 'ContactView',
    component: ContactView,
  },
  {
    path: '/LocationView',
    name: 'LocationView',
    component: LocationView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

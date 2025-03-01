import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../modules/home/view/HomeView.vue';
import RecetsView from '../modules/recets/view/RecetsView.vue';
import ContactView from '../modules/contact/view/ContactView.vue';
import LocationView from '../modules/location/view/LocationView.vue';
import PersonalCareView from '../modules/personalCare/view/PersonalCareView.vue';
import PerfumeryView from '../modules/perfumery/view/PerfumeryView.vue';
import OffersView from '../modules/offers/view/OffersView.vue';
import OrthopedicsView from '../modules/orthopedics/view/OrthopedicsView.vue';


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
  {
    path: '/PersonalCareView',
    name: 'PersonalCareView',
    component: PersonalCareView,
  },
  {
    path: '/PerfumeryView',
    name: 'PerfumeryView',
    component: PerfumeryView,
  },
  {
    path: '/OffersView',
    name: 'OffersView',
    component: OffersView,
  },
  {
    path: '/OrthopedicsView',
    name: 'OrthopedicsView',
    component: OrthopedicsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

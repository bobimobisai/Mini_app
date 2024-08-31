import { createRouter, createWebHistory } from 'vue-router';
import BirthdatePage from '../components/Birthdate.vue';
import NamePage from '../components/Name.vue';
import SummaryPage from '../components/Summary.vue';

const routes = [
  {
    path: '/',
    name: 'BirthdatePage',
    component: BirthdatePage,
  },
  {
    path: '/name',
    name: 'NamePage',
    component: NamePage,
  },
  {
    path: '/summary',
    name: 'SummaryPage',
    component: SummaryPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

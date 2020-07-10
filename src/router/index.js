import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import poll from './modules/poll';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/wansoo/polls',
  },
  {
    path: '*',
    component: () => import('@/views/NotFound.vue'),
  },
  poll,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

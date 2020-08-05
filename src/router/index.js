import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import poll from './modules/poll';
import vote from './modules/vote';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/pollapp/polls',
  },
  {
    path: '*',
    component: () => import('@/views/NotFound.vue'),
  },
  poll,
  vote,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

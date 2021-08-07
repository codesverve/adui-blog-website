import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Layout from '../layout/Index.vue';
import Home from '../views/Home/Index.vue';
import Article from '../views/Article/Index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/article/:articleId',
        name: 'Article',
        component: Article,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

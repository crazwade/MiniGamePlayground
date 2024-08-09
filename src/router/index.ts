import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/MiniGamePlayground/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/1A2B',
      name: '1A2B 遊戲',
      component: () => import('../views/1A2B.vue')
    }
  ]
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
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
    },
    {
      path: '/minesweeper',
      name: '踩地雷',
      component: () => import('../views/MineSweeper.vue')
    },
    {
      path: '/paint',
      name: '繪畫板',
      component: () => import('../views/Paint.vue')
    }
  ]
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/PersonalHome',
    name: 'PersonalHome',
    component: () => import('@/views/PersonalHomeView.vue'),
  },
  {
    path: '/QuestionBrowse',
    name: 'QuestionBrowse',
    component: () => import('@/views/QuestionBrowseView.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

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
  },
  {
    path: '/QuestionDetail/:id',
    name: 'QuestionDetail',
    component: () => import('@/views/QuestionDetailView.vue'),
  },
  {
    path: '/NewQuestion',
    name: 'NewQuestion',
    component: () => import('@/views/NewQuestionView.vue'),
  }, {
    path: '/QuestionSuccess',
    name: 'QuestionSuccess',
    component: () => import('@/views/QuestionSuccessView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router';
import PersonalHomeView from '@/views/PersonalHomeView.vue';
import QuestionBrowseView from '@/views/QuestionBrowseView.vue';

const routes = [
  {
    path: '/PersonalHome',
    name: 'PersonalHome',
    component: PersonalHomeView,
  },
  {
    path: '/QuestionBrowse',
    name: 'QuestionBrowse',
    component: QuestionBrowseView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

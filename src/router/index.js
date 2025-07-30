import HomeView from '@/views/HomeView.vue'
import QuizView from '@/views/QuizView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quizzes',
      name: 'quizzes',
      component: QuizView
    }
  ],
})

export default router

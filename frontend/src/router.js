import { createRouter, createWebHistory } from 'vue-router';
import AboutView from './components/AboutView.vue'; // 컴포넌트 가져오기
import HomeView from './components/HomeView.vue'; // 컴포넌트 가져오기

const routes = [
  { 
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

import './assets/common.css' //css file

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // router.js에서 라우터 가져오기
import axios from 'axios';

const app = createApp(App)
  .use(router);

  app.config.globalProperties.$axios = axios;  // 전역변수 설정
  app.config.globalProperties.$serverUrl = '//localhost:8082'; // API 서버 URL 설정
  
  app.mount('#app');

import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router/router' // router.js에서 라우터 가져오기

createApp(App).use(router).mount('#app');

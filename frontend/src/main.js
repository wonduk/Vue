// dtp project css file
import './css/content.css'
import './css/contents.css'
import './css/jquery.datetimepicker.css'
import './css/layout.css'
import './css/lk-style.css'
import './css/mail.css'
import './css/vrf/content.css'
import './css/vrf/jquery.datetimepicker.css'
import './css/jquery/jquery-ui.css'
import './css/jquery/jquery-ui.min.css'
import './css/jquery/jquery.contextMenu.min.css'
import './css/jquery/ui.fancytree.min.css'

// bootstrap
//  import 'bootstrap/dist/css/bootstrap.min.css';
//  import 'jquery';
 //import 'bootstrap/dist/js/bootstrap.min.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // router.js에서 라우터 가져오기
import axios from 'axios';

const app = createApp(App)
  .use(router);

  app.config.globalProperties.$axios = axios;  // 전역변수 설정
  app.config.globalProperties.$serverUrl = '//localhost:8082'; // API 서버 URL 설정
  
  app.mount('#app');

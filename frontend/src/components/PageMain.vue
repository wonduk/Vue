<template>
    <div class="PageTab">
      <!-- Body -->
      <div id="body">	     
          <!-- LEFT -->
          <div class="lnb-area">
              <div class="control-bar">                   
                  <div class="control-left"> <strong class="title">MENU</strong>
                      <button type="button" class="btn-menu-show" @click='isMenuOpen()'>메뉴펼치기</button>
                      <button type="button" class="btn-menu-hide" @click='isMenuOpen()'>메뉴접기</button>
                  </div>
                  <div class="control-right">
                      <button type="button" class="btn favorate-toggle">즐겨찾기</button>
                      <!-- 즐겨찾기 설정 -->
                      <div class="favorate-box">
                          <button type="button" class="btn ico favorate-add" @click="addUserMyMenu();"><em class="ico-plus"></em>현재 페이지 추가</button>
                          <div class="favorate-list">
                              <ul>
                              </ul>
                          </div>
                      </div>
                      <!-- //즐겨찾기 설정 -->
                  </div>
                  <div class="lnb-search">
                  <label for="" class="hidden">검색</label>
                  <div class="input-search">
                <input type="text" id="searchMenuNm">
                <button type="button" @click="javascript:getSearchMenu();">검색</button>
              </div>
                </div>
              </div>
              <nav class="lnb-wrap">
                 <div class="menu">
                  <ul class="menu-list">
                    <!-- 메뉴 항목을 반복문으로 생성 -->
                    <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
                      <!-- 첫 번째 단계 메뉴 항목 -->
                      <div @click="toggleSubMenu(index)" class="menu-title">
                        <span>{{ item.title }}</span>
                        <span v-if="item.subMenu" class="toggle-icon">{{ item.isOpen ? '▲' : '▼' }}</span>
                      </div>

                      <!-- 서브 메뉴 항목 (두 번째 단계 메뉴) -->
                      <ul v-if="item.isOpen" class="submenu">
                        <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex" class="submenu-item">
                           <router-link :to="subItem.link">{{ subItem.title }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                  <ul class="lnb" id="lnbMenuArea"></ul>
              </nav>	              
          </div>
          <!-- //LEFT -->	            
          <!-- RIGHT -->
          <div class="contents-area">
              <button type="button" class="btn lnb-toggle"></button>	                
              <!-- open page tab -->
              <div class="openpage-tab">
                  <div id="openTabs" class="scroll_tabs_theme_light qms">
                    <span class="_home tab_selected">
                      <img alt="Home" style="vertical-align:middle" />
                      <!-- <img alt="Home" style="vertical-align:middle" src="${contextPath}/images/ico_home.png" /> -->
                    </span>
                  </div>
                  <div class="openpage-list">
                      <ul>
                      </ul>
                  </div>
              </div>
              <!-- //open page tab -->	
              <!-- 업무화면 iframe -->
              <div class="iframe-area" id="_iframeDiv">
                <iframe class="_openiFrame _home" title="biz_section"></iframe>
                <router-view />  <!-- 페이지 이동이 표시될 곳 -->
                <!-- <iframe class="_openiFrame _home" src="${contextPath}/biz/main/bizMain/page" title="biz_section"></iframe> -->
              </div>
              <!-- //업무화면 iframe -->	                
              <!-- //Right : Contents -->
          </div>
          <!-- //RIGHT -->
      </div>
      <!-- Body -->	        
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      // 메뉴 항목 데이터
      menuItems: [
        {
          title: '회원관리',
          isOpen: false,
          subMenu: [{ title: '회원조회', link: '/user/info' },
            { title: '회원가입현황', link: '/user/subscriptionStatus' }
            ]
        },
        {
          title: '고객관리',
          isOpen: false,
          subMenu: [{ title: '웹 개발', link: '/service/web' },
            { title: '앱 개발', link: '/service/app' }
            ]
        },
        {
          title: '화물관리',
          isOpen: false,
          subMenu: [{ title: '고객 지원', link: '/support/customer' },
            { title: '자주 묻는 질문', link: '/support/faq' }
            ]
        }
      ]
    };
  },
  methods: {
    // 서브 메뉴를 토글하는 함수
    toggleSubMenu(index) {
      this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
    },

    isMenuOpen(){
      console.log('dsaadsadsadsadsads');
      this.menuItems.isOpen = true;
    }
  }
};
  </script>
  
  <style scoped>
 
  </style>
  
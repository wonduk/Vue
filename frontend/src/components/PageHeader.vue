<template>
     <!-- Header -->
    <div id="header">
        <header>
            <div class="sta-wrap">
                <div class="left-area">
                    <h1><a href="/system/mgt/main/viewMain" class="logo" ><span class="ir">CJ 올리브네트웍스</span></a></h1>
                </div>
                <div class="right-area"> <strong class="user" id="userName"><c:out value="${g_userNm}"/></strong> <a href="/logout" target="_top" id="logoutBtn"><em class="ico-logout"></em>로그아웃</a><em class="time-now"><c:out value="${g_loginDt}"/></em> </div>
            </div>
            <div class="nav-wrap" v-if="isNavVisible">
                <h1><a href="javascript:;" class="system-name"><span class="ir">CJ 올리브네트웍스</span></a></h1>                
            </div>
        </header>
    </div>
    <!-- //headerArea -->	

  <!-- <div>
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/board/list">게시판</router-link>
      </div>
    </header>
    <hr/>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: false // 초기에는 보이도록 설정
    };
  },
  methods: {

  }
};
</script>

<style scoped>

</style>

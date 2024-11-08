<template>
  <div>
  <!-- 모달창 작업 -->
  <!-- 동적 ui만들때 작업: ui현재 상태를 데이터로 저장, 현재 어떻게 보일지 작성 -->
  <div class="black-bg" v-if="modalOpenYn==true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세내용</p>
      <button class="" @click="modalOpenYn = false">닫기</button>
    </div>
  </div>

    <div class ="menu">
      <!-- v-for="value in 3" :key="value" key= 반복문을 구분하기 위한 속성 , value자리에는 2개까지 가능 (a,i) 이런식으로 하면 i 자리에는 0, 1, 2이런식으로 출력-->
      <a v-for="a in 메뉴들" :key="a">{{ a }}</a> 
    </div>
    
    <div>
      <div>
        {{ logo }}
      </div>
      <div v-for="(Data,i) in carData" :key="i">
        <h4 @click="modalOpenYn = true">{{ carData[i].content }}</h4>
        <img class="room-img" :src="carData[i].image"/>
        <p>{{ carData[i].price }} 만원</p>
      </div>
    </div>
    
    <HomeView ></HomeView>
</div>
</template>

<script>

import carData from './carData.js';

export default {
  name: 'App',
  //데이터를 전부 집어넣는 공간
  data(){
    //데이터바인딩 사용이유 : 1. HTML하드 코딩시 나중에 변경 어려움.(가변 데이터 사용을 위해)
    // ★2. 실시간 자동 렌더링을 위해서 (자주 변하는 데이터를 저장하여 사용)★
    return { //데이터보관함 여기다가 다 저장하면 됨 (object형식 이름:값)
      modalOpenYn : false,
      carData : carData,
      count : [0,0,0],
      price1 : 40,
      price2 : 70,
      logo : "현대차",
      products : ['싼타페','스타렉스','K5'],
      메뉴들 : ['Home','Shop', 'About']
    }
  },
  components: {
  },

  //함수를 만드는 공간
  methods : {
    //해당 위치에서는 변수에 대해서 this. 사용하여 내부 객체에 접근하도록 함
    increase(i){
      this.count[i] += 1;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkgray;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  margin-top: 40px;
  width: 250px;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.black-bg{
  width: 100%;; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%;; height: 30%;
  background: white;
  border-radius: 8px; padding: 20px;
}

</style>

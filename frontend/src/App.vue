<template>
  <div>
  <!-- 모달창 작업 -->
  <!-- 동적 ui만들때 작업: ui현재 상태를 데이터로 저장, 현재 어떻게 보일지 작성 -->
  <div class="black-bg">
    <div class="whitte-bg">
      <h4>상세페이지</h4>
      <p>상세내용</p>
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
      <div>
        <h4>{{ products[0] }}</h4>
        <img class="room_img" src="https://media.istockphoto.com/id/1150931120/ko/%EC%82%AC%EC%A7%84/%EC%9D%BC%EB%B0%98-%EC%BB%B4%ED%8C%A9%ED%8A%B8-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%9E%90%EB%8F%99%EC%B0%A8-%EC%A0%84%EB%A9%B4-%EC%B8%A1%EB%A9%B4%EC%9D%98-3d-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=0&k=20&c=evtR5CTByAQWEj-b_C0CeAyT6LQJlCxvo8J702KEhaI="/>
        <p>{{ price1 }} 만원</p>
        <!-- <button v-on:click="jscode">허위매물신고</button><span>신고수 : 0</span>  @ = v-on약자-->
        <button @click=increase(0)>허위매물신고</button><span>신고수 : {{ count[0] }}</span>
      </div>
      <div>
        <h4>{{ products[1] }}</h4>
        <img class="room_img" src="https://cdn.imweb.me/thumbnail/20190322/5c94ad20bd043.jpg"/>
        <p>{{ price2 }} 만원</p>
        <button @click=increase(1)>허위매물신고</button><span>신고수 : {{ count[1] }}</span>
      </div>
      <div>
        <h4>{{ products[2] }}</h4>
        <img class="room_img" src="data:image/jpeg;base64,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"/>
        <p>{{ price2 }} 만원</p>
        <button @click=increase(2)>허위매물신고</button><span>신고수 : {{ count[2] }}</span>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'App',
  //데이터를 전부 집어넣는 공간
  data(){
    //데이터바인딩 사용이유 : 1. HTML하드 코딩시 나중에 변경 어려움.(가변 데이터 사용을 위해)
    // ★2. 실시간 자동 렌더링을 위해서 (자주 변하는 데이터를 저장하여 사용)★
    return { //데이터보관함 여기다가 다 저장하면 됨 (object형식 이름:값)
      modalOpenYn : true,
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

.room_img {
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
  width: 100%;; height: 100%;
  background: white;
  border-radius: 8px; padding: 20px;
}

</style>

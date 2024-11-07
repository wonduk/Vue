<template>
	<div>
        <a src="{{test}}">테스트</a> <!-- 링크 진입 당연히 안됨, 큰 따옴표를 없애도 오류 발생 -->
	</div>
</template>

<script>
	export default{
		name: 'example',
		data() {
			return { 
				test: "http://www.naver.com/"
			} 
		}, 
		method(s): { // .vue 내부에서 이벤트에 따라 실행하거나, 내부적으로 사용될 함수들을 정의한다. 
			functionnameone(): function() {
				console.log("올때 "+this.test) //this.정의했던 변수명으로 해당 변수값에 접근 가능
			},
		} 
	}
</script>

<style>
	/* 해당 모듈의 스타일을 정의하는 부분 */
</style>
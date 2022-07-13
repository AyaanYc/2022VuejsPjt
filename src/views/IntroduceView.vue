<template>
  <div>
    <h1>나의 이름은 홍길동입니다.</h1>
    <input type="number" v-model.number="numberModel">
    {{ printNumber }}
    <div>
      <label>여성<input type="radio" v-model="gender" value="0"></label>
      <label>남성<input type="radio" v-model="gender" value="1"></label>
    </div>
    <div>{{ gender }}</div>
    <div>{{ printGender }}</div>
    <div>
      <h3>p.96</h3>
      <div> {{ htmlString }}</div>
      <div v-html="htmlString"></div><!-- 태그 적용 하고싶을때 사용 -->
    </div>
    <hr>
    <div>
      <!-- v-model은 value랑 연결되있음 -->
      <h3>p.99</h3>
      <textarea v-model="message"></textarea><!--속성으로 값을넣어줘야됨-->
    </div>
    <div>
      <h3>p.100</h3>
      <select v-model="city"><!--해당값이 option선택된다 option을바꾸면 city값도 바뀜 -->
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
      </select>
    </div>
    <div>
      <h3>p.101 - {{ basketball }}</h3>
      <label><input type="checkbox" v-model="basketball">농구</label>
      <label>
        <input type="checkbox" v-model="basketball" true-value="1" false-value="0">
        풋볼
      </label>
    </div>
    <div>
      <input type="text" v-model="textValue1">
      <br>
      <input type="text" v-model="textValue2">
      <br>
      <button type="button" v-bind:disabled="textValue1 === '' || textValue1 !== textValue2">전송</button>
      <p v-bind:hidden="textValue1||textValue2 !== ''">비밀번호를 입력해주세요</p>
      <p v-bind:hidden="textValue1 === textValue2">비밀번호가 일치하지 않습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberModel: 3,
      gender: '0',
      htmlString: '<p style="color:red">This is a red string</p>',
      message: 'textarea입니다.',
      city: "21",
      basketball: false,
      football: '1',
      textValue1: '',
      textValue2: '',
    }
  },
  computed: { 
    printNumber() {
      return this.numberModel + 3;
    },
    printGender() {
      return this.gender === '0' ? '여성' : '남성';
    }
  }
}
</script>

<style>

</style>
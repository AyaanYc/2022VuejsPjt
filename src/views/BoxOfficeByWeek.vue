<template>
  <div class="container-center">
    <h1>boxOfficeByWeek</h1>
    <div>
      <input type="date" v-model="selectedDate">
      <button @click="search">검색</button>
      <select v-model="cd">
        <option value="">전체</option>
        <option value="K">국내</option>
        <option value="F">해외</option>
      </select>
      연도/주차 : {{ yearWeekTime }}
    </div>
    <table >
      <thead>
        <tr>
          <th>순위</th>
          <th>제목</th>
          <th>개봉일</th>
          <th>누적관객수</th>
          <th>누적매출액</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in list" :key="item.movieCd">
          <td>{{ item.rank }}</td>
          <td>{{ item.movieNm }}</td>
          <td>{{ item.openDt }}</td>
          <td>{{ numberComma(item.audiAcc) }}</td>
          <td>{{ numberComma(item.salesAcc) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: '',
      list: [],
      cd: '',
      yearWeekTime: ''
    }
  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 7);
    this.selectedDate = this.getOnlyDateStr(d);
    console.log(d);
    this.search();
  },
  methods: {
    search() {
      const targetDt = this.selectedDate.replaceAll('-', '');
      this.getData(targetDt, this.cd);
    },
    async getData(targetDt, cd) {
      const data = await this.getBoxOfficeByWeek(targetDt, cd);
      this.list = data.boxOfficeResult.weeklyBoxOfficeList;
      this.yearWeekTime = data.boxOfficeResult.yearWeekTime;
      console.log(data);
    }
  }
}
</script>

<style>
</style>

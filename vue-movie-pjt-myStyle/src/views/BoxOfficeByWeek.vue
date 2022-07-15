<template>
  <div class="container-center">
    <h1>boxOfficeByWeek</h1>
    <div>
      <input type="date" v-model="selectedDate">
      <select v-model="cd">
        <option value="">전체</option>
        <option value="K">국내</option>
        <option value="F">해외</option>
      </select>
    <select v-model="title">
        <option value=2>주중</option>
        <option value=1>주간</option>
        <option value=0>주말</option>
      </select>
      연도/주차 : {{ yearWeekTime.slice(0, 4) + '/' +  yearWeekTime.slice(4)}}
      <button @click="search">검색</button>
    </div>
    <rank-table :list="list"/>
  </div>
</template>

<script>
import RankTable from "../components/boxOffice/RankTable.vue";

export default {
  components: {
    RankTable
  },

  data() {
    return {
      selectedDate: '',
      list: [],
      cd: '',
      yearWeekTime: '',
      title: 0
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
      this.getData(targetDt, this.cd, this.title);
    },
    async getData(targetDt, cd, title) {
      const data = await this.getBoxOfficeByWeek(targetDt, cd, title);
      this.list = data.boxOfficeResult.weeklyBoxOfficeList;
      this.yearWeekTime = data.boxOfficeResult.yearWeekTime;
      console.log(data);
    }
  }
}
</script>

<style>
</style>

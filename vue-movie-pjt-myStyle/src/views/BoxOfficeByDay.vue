<template>
  <div class="container-center">
    <h1>boxOfficeByDay</h1>
    <div>
      <input type="date" v-model="selectedDate">
      <select v-model="cd">
        <option value="">전체</option>
        <option value="K">국내</option>
        <option value="F">해외</option>
      </select>
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
      cd: ''
    }
  },

  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = this.getOnlyDateStr(d);
    console.log(d);
    this.search();
  },

  methods: {
    search() {
      const targetDt = this.selectedDate.replaceAll('-', '');
      const cd = this.cd;
      this.getData(targetDt, cd);
    },

    async getData(targetDt, cd) {
      const data = await this.getBoxOfficeByDay(targetDt, cd);
      this.list = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(data);
    }
  }
}
</script>

<style>
</style>

<template>
    <tr>
        <td>{{ item.rank }}</td>
        <td>{{ item.movieNm }}</td>
        <td>{{ item.openDt }}</td>
        <td  class="align-right">{{ commasalesAcc }}</td>
        <td  class="align-right">{{ commaAudiAcc }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    },
    computed: {
        commasalesAcc() {
            return this.numberComma(this.item.salesAcc);
        },
        commaAudiAcc() {
            return this.numberComma(this.item.audiAcc);
        }  
    }
}
</script>

<style>

</style>
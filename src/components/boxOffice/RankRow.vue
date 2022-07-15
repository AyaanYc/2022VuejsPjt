<template>
    <tr>
        <td>{{ item.rank }}</td>
        <td @click="getInfo">{{ item.movieNm }}</td>
        <td>{{ item.openDt }}</td>
        <td  class="align-right">{{ commasalesAcc }}</td>
        <td  class="align-right">{{ commaAudiAcc }}</td>
    </tr>
    <AlertModal :show="modalShow" header="알림창" :body="infoModal.innerHTML" @close="hiddenModal"></AlertModal>
</template>

<script>
import AlertModal from './AlertModal.vue';

export default {
    data() {
        return {
            modalShow: false,
            info: [],
        }
    },

    props: {
        item: Object,
    },

    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        async getInfo() {
            const movieCd = this.item.movieCd;
            const data = await this.movieInfos(movieCd);
            this.info = data.movieInfoResult.movieInfo;
            console.log(data);
            this.modalShow = true;
        },
        modalopen() {
        },
        hiddenModal() {
            this.modalShow = false;
        }
    },

    computed: {
        commasalesAcc() {
            return this.numberComma(this.item.salesAcc);
        },
        commaAudiAcc() {
            return this.numberComma(this.item.audiAcc);
        },
        infoModal() {
            const modalcnt = document.createElement('div');
            modalcnt.innerHTML = `
            <ul>
            <li> ${this.info.movieNm} </li>
            <li> ${this.info.showTm} </li>
            <li> ${this.info.openDt} </li>
            <li> ${this.info.typeNm} </li>
            </ul>
            `;
            return modalcnt;
        }  
    },

    components: {
        AlertModal
    }
}
</script>

<style>

</style>
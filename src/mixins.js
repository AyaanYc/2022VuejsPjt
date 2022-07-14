import axios from 'axios';

export default {
    data() {
        return {
            key: '1a0a7ecf96ad3364d8de70e91560767a',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json'
        }
    },
    methods: {
        async $api(url, parameter) {
            return (await axios.get(url, {
                params: parameter
            })            
            .catch(e => {
                console.log(e);
            })).data;
        },
        async getBoxOfficeByDay(targetDt) {
            const parameter = {
                key: this.key,                
                targetDt
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter);
        },
        async getBoxOfficeByWeek(targetDt) {
            const parameter = {
                key: this.key,                
                targetDt,
                weekGb: 0
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter);
        },
        getOnlyDateStr(date) {
            return date.toISOString().slice(0,10);
        },
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}
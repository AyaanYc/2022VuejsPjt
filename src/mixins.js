import axios from 'axios';

export default {
    data() {
        return {
            key: '60963831bbadff4aa469549e33d94012',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json',
            movieInfo: 'movie/searchMovieInfo.json'
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
        async getBoxOfficeByDay(targetDt,cd) {
            const parameter = {
                key: this.key,                
                targetDt,
                repNationCd: cd
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter);
        },
        async getBoxOfficeByWeek(targetDt, cd, title) {
            const parameter = {
                key: this.key,                
                targetDt,
                weekGb: title,
                repNationCd: cd
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter);
        },
        async movieInfos(movieCd) {
            const parameter = {
                key: this.key,                
                movieCd
            }
            const url = this.baseUrl + this.movieInfo;
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
<template>
    <td>{{ item.product_name}}</td>
        <td>{{ getPrice}}</td>
        <td>{{ item.quantity}} <input type="button" value='+'><input type="button" value='-'></td>
        <td>{{ item.category}}</td>
        <td>{{ getDeliveryPrice}}</td>
        <td>{{ getPinalPrice}}</td>
</template>

<script>
export default {
    props: {
        item: Object
    },
    computed: {
        getPrice() {
            return this.numberComma(this.item.price);
        },
        getDeliveryPrice() {
            return this.numberComma(this.item.delivery_price);
        },
        getPinalPrice() {
            return this.numberComma(this.item.price * this.item.quantity + this.item.delivery_price);
        }
    },
    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}
</script>

<style>

</style>
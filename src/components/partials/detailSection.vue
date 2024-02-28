<template lang="">
    <div class="detailSection">
        <div class="detailMain">

        <div class="detailContainerOne">
            <p>Samsung / {{ $route.params.title }}</p>
            <h3>{{ $route.params.title }}</h3>
            <span>${{ total }}</span>
            <select name="Select GB">
                <option value="28GB">Select GigaByte</option>
                <option value="28GB">28 GB</option>
                <option value="64GB">64 GB</option>
                <option value="128GB">128 GB</option>
                <option value="128GB">512 GB</option>
            </select>
            <select name="Select Color" class="selectColor">
                <option value="28GB">Select Color</option>
                <option value="28GB">Space Black</option>
                <option value="64GB">silver</option>
                <option value="128GB">Gold</option>
                <option value="128GB">Dark Violet</option>
            </select>
            <input type="number" v-model="number" @input="updatePr" min="1" max="50" class="inputNum">
            <button class="buy">Buy</button>
            <h5>Delivery in 5/10 working days</h5>
            <img src="../../assets/img/greencircle.png" alt="">
            <h4 class="productDetails">Product Details</h4>
            <p class="productDetailParagraph">{{ $route.params.productDetails }}</p>
        </div>
        

        <div class="detailContainerTwo"> 
            <img class="mainImg" :src="mainImg">
            <div class="imgGroups"> 
                <img :src="item.img" v-for="item in imgGroup" :key="item.id"
                @click="changeImg(item.img)">

            </div>
        </div>
       
    </div>
    </div>
</template>
<script>
import jsonData from "../../data/data.json"
export default {
    data() {
        return {
            imgGroup:[],
            productData : jsonData,
            mainImg:this.$route.params.img,
            number:1,
            price: parseFloat(this.$route.params.price),
            total: parseFloat(this.$route.params.price)
        }
    },
    mounted() {
        this.imgGroup = JSON.parse(this.$route.params.imgGroup);
    },

    methods: {
        changeImg(src){
            this.mainImg = src
        },
        updatePr(){
            if(this.number > 1){
               this.total = this.price * Math.pow(2, this.number - 1)
            }
            else{
                this.total = this.price
            }
        }
       
   
    },
    
  }
    

</script>
<style lang="">
    
</style>
<template>
    
    <div class="samsungSection">
        <h3>{{ productInfo.titles[0].IphoneSection }}</h3>
    <div class="samsungProducts">
        <div class="samsungBox" v-for="item in productInfo.Iphone" :key="item.id">
                <h1>{{ item.title }}</h1>
                <p><span>Price</span> ${{ item.price }}</p>
                <img :src="item.img">
                <div class="seeMore">
                    <h5 @click="goToDetailPage(item.title, item.price,item.img,item.productDetails,item.imgGroup)">Buy Now</h5>
                    <h6>See More</h6>
                </div>
            </div>
    </div>
  </div>
</template>


<script>
import jsonData from "../../data/data.json"

export default{
    data() {
        return {
            productInfo : jsonData,
            cart:[]
        }
    },
    methods: {
        goToDetailPage(title,price,img,productDetails,imgGroup){
            const groupString = JSON.stringify(imgGroup);
            this.$router.push({
                name: "detailPage",
                params:{
                    title,price,img,productDetails,imgGroup:groupString
                }
            })
        },

    },
}
</script>

<style>
 



</style>
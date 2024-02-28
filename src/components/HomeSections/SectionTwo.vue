<template lang="">
    <div class="sectionTwo">
        <h3>Featured Products</h3>
        <div class="featured">

            <div class="featuredBox">
                <h1>{{ productInfo.Iphone[2].title }}</h1>
                <p><span>Price</span> ${{ productInfo.Iphone[2].price }}</p>
                <img :src=" productInfo.Iphone[2].img ">
                <div class="seeMore">
                    <h5 @click="detailPage(productInfo.Iphone[2].title, productInfo.Iphone[2].price, productInfo.Iphone[2].img, productInfo.Iphone[2].productDetails, productInfo.Iphone[2].imgGroup)">Buy Now</h5>
                    <router-link class="seeMore" to="/Iphone"><h6>See More</h6></router-link>
                </div>
            </div>

            <div class="featuredBox">
                <h1>{{ productInfo.samsung[1].title }}</h1>
                <p><span>Price</span> ${{ productInfo.samsung[1].price }}</p>
                <img :src="productInfo.samsung[1].img ">
                <div class="seeMore">
                    <h5 @click="detailPage(productInfo.samsung[1].title, productInfo.samsung[1].price, productInfo.samsung[1].img, productInfo.samsung[1].productDetails, productInfo.samsung[1].imgGroup)">Buy Now</h5>
                    <router-link class="seeMore" to="/Samsung"><h6>See More</h6></router-link>
                </div>
            </div>

            <div class="featuredBox">
                <h1>{{ productInfo.huawei[1].title }}</h1>
                <p><span>Price</span> ${{ productInfo.huawei[1].price }}</p>
                <img :src=" productInfo.huawei[1].img">
                <div class="seeMore">
                    <h5 @click="detailPage(productInfo.huawei[1].title, productInfo.huawei[1].price, productInfo.huawei[1].img, productInfo.huawei[1].productDetails, productInfo.huawei[1].imgGroup)">Buy Now</h5>
                    <router-link class="seeMore" to="/Huawei"><h6>See More</h6></router-link>
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
            productInfo : jsonData
        }
    },
    methods: {
        detailPage(title,price,img,productDetails,imgGroup){
            const groupStr = JSON.stringify(imgGroup)
            this.$router.push({
                name:"detailPage",
                params:{
                    title,
                    price,
                    img,
                    productDetails,
                    imgGroup: groupStr
                }
            })
        }
    },

    }

</script>
<style lang="">
    
</style>
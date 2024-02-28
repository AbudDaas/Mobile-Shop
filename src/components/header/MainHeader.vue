<template>
    
    <header class="main">
      <a class="logo">
      <img src="../../assets/img/logo.png" alt="">
      </a>
        <nav>
            <router-link class="nav" to="/">HOME</router-link>
            <hr class="hrOne">
            <router-link class="nav" id="product" to="/" @mouseover="showProductList" @mouseleave="notShowProductList">
            PRODUCTS
            <ul v-show="productList">
                <router-link class="links" to="/Iphone"><li>Iphone</li></router-link>
                <router-link class="links" to="/Samsung"><li>Samsung</li></router-link>
                <router-link class="links" to="/Huawei"><li>Huawei</li></router-link>
                <!-- <li><router-link class="links" to="/">Cover</router-link></li>  -->
              </ul>
            </router-link>
            
            <hr class="hrTwo">
            <router-link class="nav" to="/">ABOUT US</router-link>
            <hr class="hrThree">
            <a class="nav" id="contact" @mouseover="showContactList" @mouseleave="notShowContactList">
              CONTACT
              <ul v-show="contactList">
                <li>+90 5876880122</li>
                <li class="number">lifestore@gmail.com</li>
              </ul>
            </a>
            <hr class="hrFour">
        </nav>
  
        <button class="headerButton">Contact</button>
     </header>


</template>

<script>
export default{
  data() {
    return {
      productList:false,
      contactList:false
    }
  },
  methods: {
      showProductList(){
         this.productList = true
      },
      notShowProductList(){
         this.productList = false
      },
      showContactList(){
         this.contactList = true
      },
      notShowContactList(){
         this.contactList = false
      },
    
    }
  
}
  
</script>
<style lang="">

</style>
    
    






    





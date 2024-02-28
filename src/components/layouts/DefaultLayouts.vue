<template>

    <MainHeader />
    <slot></slot>
    <MainFooters />

</template>
<script>
import MainHeader from '../header/MainHeader.vue';
import MainFooters from '../footers/MainFooters.vue';
export default {
    name: "DefaultLayouts",
    components: { MainHeader, MainFooters }
}
</script>
<style lang="">
    
</style>
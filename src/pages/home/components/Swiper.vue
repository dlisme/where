<template>
    <!-- 外面加一个div防止页面抖动 -->
    <div class="wrapper"> 
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                //loop轮播插件支持循环轮播
                loop: true
            },
            //定义一个swiperList的数组,使其轮播图循环输出
            swiperList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/bc/7752f5a5a8b39002.jpg_750x200_4c71b4f8.jpg'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
            }]
        }
    }
}
//.wrapper >>> ...实现穿透，不受scoped的限制
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color: #fff
    .wrapper
        width: 100%
        height: 0
        overflow: hidden
        padding-bottom: 31.25%
        background-color: #eee
        .swiper-img
            width: 100%
</style>

<template>
    <div class="home">
        <home-header></home-header>
        <!-- 下面写的是大写的 HomeHeader，在模板里面自动把大写与小写做上关联 -->
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
// 如何在Home中是用Header.vue, 如下引入，后面可以省略.vue
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'    // 发送ajax请求
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {    //声明局部组件才能用
        HomeHeader,   //在es6中键值如果是一样的话，可以将HomeHeader : HomeHeader省略为HomeHeader
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {         //首页父子组件数据传递(通过属性的方式,然后子组件接收),将拿到的数据传入上方的小组件
        return {
            lastCity: '',
            swiperList: [],  //swiper最初创建的时候接收的是外部创建的空数组，所以默认轮播是最后轮播图，（swiper初次创建由完整的数据创建，
                            //在swiper组件加v-if="list.length" 或者创建计算属性）
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {        //函数应该定义在methods里
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    // 借助mounted生命周期钩子发送ajax请求
    mounted () {
        this.lastCity = this.city
        // console.log('mounted')
        this.getHomeInfo()
    },
    activated () {
        if (this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
        // console.log('activated')
    }
}
</script>

<style>


</style>



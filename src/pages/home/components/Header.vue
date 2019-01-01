<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩/主题
        </div>
        <router-link to='/city'>
            <div class="header-right">
                <!-- {{this.$store.state.city}} -->
                {{this.city}}
                <!-- {{this.doubleCity}} -->
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
            <!-- <router-view></router-view> -->
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// import { mapState, mapGetters } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])  //vuex里面的数据映射到omputed计算属性里
        // ...mapGetters(['doubleCity'])
    }
}
//1rem = html font-size = 50px
// 86/100
// @代表src目录 在css中引用其他css要在前面加一个波浪线  eg：~@
// 起一个名字让@符号代表其他目录  
// 1、打开build目录下面的webpack.base.conf.js    
// 2、找到resolve的@指向
// 3、自己创建别名 xxx代表xxx

// 问题一： 我我我找不到此目录webpack.base.conf.js
// 问题二： 安装了stylus，但是咋用不了？ （因为字体还是那么大） 
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>

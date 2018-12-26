<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <!-- v-for="item of iconList" 改为 v-for="item of page",循环page-->
                <div class="icon" 
                     v-for="item of page" 
                     :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>    
                        <p class="icon-desc">{{item.desc}}</p> 
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    //定义一组数据，返回值是真正数据的内容
    // 里面定义一个iconList的数组，里面放着每一个小图标
    // 第9个图标在下一个轮播显示，借助计算属性

    // 当icon下面的文字很多时，里面有三个点的提示，借助css样式overflow: hidden  white-space: nowrap  text-align: ellipsis已将这三个样式封装进mixins.styl里面
    data () {
        return {
            iconList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                desc: '泡温泉'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: '成都必游'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                desc: '川剧变脸'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
                desc: '年终大促'
            },{
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
                desc: '滑雪'
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
                desc: '成都熊猫基地'
            },{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
                desc: '黑体彩林'
            },{
                id: '0010',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                desc: '全部玩乐'
            }]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages;
        }
    }
}
//.swiper-container自带overflow:hidden
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icon
        position: relative 
        overflow: hidden
        float: left 
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute 
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute 
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>

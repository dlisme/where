<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return{
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
                title: '成都必打卡',
                desc: '成都的标志，也是现代人对老成都的记忆'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/98/47e8d7bdbed162.jpg_r_640x214_f6059302.jpg',
                title: '有温泉就是任性',
                desc: '繁忙的一周结束，拖着疲惫的身体赶紧来泡个养生温泉吧，解除你的疲劳'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
                title: '远离烧烤模式',
                desc: '与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会，艰辛会有的，可这都是值得的'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
                title: '摩崖石刻造像',
                desc: '诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
                title: '成都文艺范儿',
                desc: '《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'
            }]
        }
    }
}
// 引用ellipsis()如果未出现...，在具备flex: 1的选择器加min-width: 0;
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #aaa
            ellipsis()
</style>


<template>
    <div>
        <div class="title">猜你喜欢</div>
        <ul>
                <router-link 
                    tag="li"
                    class="item border-bottom" 
                    v-for="item of list" 
                    :key="item.id"
                    :to="'/detail/' + item.id"
                >
                    <img class="item-img" :src="item.imgUrl">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    },
//     data () {
//         return{
//             recommendList: [{
//                 id: '0001',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
//                 title: '成都欢乐谷',
//                 desc: '超级旋转过山车刺激到让你怀疑人生'
//             },{
//                 id: '0002',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
//                 title: '国色天乡·陆地乐园',
//                 desc: '镇园之宝眼镜蛇过山车'
//             },{
//                 id: '0003',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/90/90c1bc45fe24299a.water.jpg_200x200_ef275228.jpg',
//                 title: '西岭雪山滑雪场',
//                 desc: '中国大型高山滑草场，多雪静风乐趣无穷'
//             },{
//                 id: '0004',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
//                 title: '成都熊猫基地',
//                 desc: '看！熊猫宝宝在向你招手呢'
//             },{
//                 id: '0005',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/53/53c486532f848d71.img.jpg_200x200_c4be246c.jpg',
//                 title: '西岭雪山',
//                 desc: '帅的人都去过了😎，你还等什么~'
//             },{
//                 id: '0006',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
//                 title: '成都海昌极地海洋公园',
//                 desc: '蠢萌企鹅陪你嗨翻这个秋'
//             },{
//                 id: '0007',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/16/ae96ce4058bd5cf093835fbb.jpg_200x200_e4cb9743.jpg',
//                 title: '青城道温泉',
//                 desc: '吐纳青城气息，享受自然温暖'
//             },{
//                 id: '0008',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_200x200_c26fb243.jpg',
//                 title: '都江堰',
//                 desc: '气势磅礴的“世界水利文化鼻祖”'
//             },{
//                 id: '0009',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
//                 title: '青城山',
//                 desc: '青城山下白素贞，洞中千年修此身'
//             },{
//                 id: '0010',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p64/201211/04/9173ff9f33e97f3193835fbb.jpg_200x200_bfc9ee53.jpg',
//                 title: '成都杜甫草堂',
//                 desc: '万里桥西一草堂，百花潭水即沧浪'
//             }]
//         }
//     }
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
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #aaa
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff
</style>


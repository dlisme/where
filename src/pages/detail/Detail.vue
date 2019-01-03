<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    // name值的用途：1.做递归组件的时候会用到
                 // 2.对某个组件取消缓存的时候
                 // 3.vue开发调试工具，显示组件名字的时候显示的是name
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetailInfo () {
            // axios.get('/api/detail.json?id=' + this.$route.params.id
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                // console.log(data)
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }

        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
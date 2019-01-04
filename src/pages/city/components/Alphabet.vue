<template>
<!-- import { setTimeout } from 'timers';
import { clearTimeout } from 'timers'; -->
    <ul class="list">
            <!-- v-for="(item , key) of cities" 
            :key="key" -->
            <!-- .prevent阻止默认行为 滑动手机整个页面不会上下动 -->
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </li>
        <!-- {{key}} -->
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {      //计算属性
        letters () {
            const letters = []
            for (let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    data () {     //拖拽开始才进行move，定义一个标示位
        return{
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText.trim())
        },
        //右边字母表拖拽，左边跟着滚动
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus){
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout ( () => {
                    // console.log(startY)
                    const touchY = e.touches[0].clientY - 79
                    // console.log(touchY)
                    const index = Math.floor((touchY - this.startY) / 20)
                    // console.log(index)
                    if (index >= 0 && index< this.letters.length){
                        this.$emit('change', this.letters[index])
                    }
                },16)  
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
    display: flex 
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0 
    width: .4rem
    .item
        line-height: .4rem
        text-align: center
        color: $bgColor
</style>
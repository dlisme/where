<template>
    <div class="home">
        <home-header></home-header>
        <!-- 下面写的是大写的 HomeHeader，在模板里面自动把大写与小写做上关联 -->
       
    </div>
</template>

<script>
// 如何在Home中是用Header.vue, 如下引入，后面可以省略.vue
import HomeHeader from './components/Header';

export default {
    name: 'Home',
    components: {    //声明局部组件才能用
        HomeHeader   //在es6中键值如果是一样的话，可以将HomeHeader : HomeHeader省略为HomeHeader
    }
}
</script>

<style>
.home{
    font-size: 20px;
}


</style>



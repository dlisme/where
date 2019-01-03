<template>
<div id="app">
  <!-- 显示的是当前路由地址所对应的内容 -->
   <!-- exclude="组件名字"，只有detail不被缓存 -->
  <keep-alive exclude="Detail">
    <router-view/>
  </keep-alive>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>

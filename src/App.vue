<template>
  <div id="app">
    <!--serach component-->
    <home-header></home-header>
    <div style="height: 200px">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
          <img class="swipe-img" :src="item.url" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <home-icons></home-icons>
    <div class="pos-container">
      <div class="pos"><i class="iconfont">&#xe60e;</i>定位信息</div>
      <div class="pos"><i class="iconfont">&#xe635;</i>促销活动</div>
    </div>
    <home-hot></home-hot>
    <home-like></home-like>
  </div>
</template>

<script>
  import HomeHeader from './components/homeheader'
  import HomeIcons from './components/HomeIcons'
  import HomeHot from './components/HomeHot'
  import HomeLike from './components/HomeLike'
export default {
  name: 'App',
  components:{
    HomeHeader,
    HomeIcons,
    HomeHot,
    HomeLike
  },
  data(){
    return{
      imgList:[
        {
          id:1,
          url:'http://dummyimage.com/360x300'
        },
        {
          id:2,
          url:'http://dummyimage.com/360x300'
        },
        {
          id:3,
          url:'http://dummyimage.com/360x300'
        }
      ]
    }
  }
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .swipe-img{
    width: 100%;
  }
  .is-active{
    background-color: red !important;
  }
  .pos-container{
    display: flex;
    .pos{
      flex: 1;
      height: 3rem;
      background-color: rebeccapurple;
      position: relative;
      text-align: center;
      line-height: 3rem;
    }
  }
}
</style>

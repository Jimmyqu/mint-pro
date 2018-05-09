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
    <router-view/>
  </div>
</template>

<script>
  import HomeHeader from './components/homeheader'
export default {
  name: 'App',
  components:{
    HomeHeader
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
}
</style>

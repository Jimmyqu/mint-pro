<template>
  <div id="app">
    <!--serach component-->
    <keep-alive exclude="detail">
      <!--<keep-alive exclude="detail">-->
      <!-- 除了 name 为 detail 的组件都将被缓存！ -->
      <router-view >

      </router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  components:{

  },
  data(){
    return{
      modal:false,
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
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

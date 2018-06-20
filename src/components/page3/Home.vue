<template>
  <div class="hello">
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
      <div class="pos" @click="modal=true"><i class="iconfont">&#xe60e;</i>定位信息</div>
      <div class="pos" @click="ToLocation"><i class="iconfont">&#xe635;</i>促销活动</div>
    </div>
    <home-hot></home-hot>
    <home-like></home-like>
    <transition name="fade">
      <div id="model"  ref="modal" v-show="modal">
        <div @click="modal=false">111</div>
      </div>
    </transition>
  </div>
</template>

<script>
  import HomeHeader from '../homeheader'
  import HomeIcons from '../HomeIcons'
  import HomeHot from '../HomeHot'
  import HomeLike from '../HomeLike'

export default {
  name: 'HelloWorld',
  components:{
    HomeHeader,
    HomeIcons,
    HomeHot,
    HomeLike
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
    this.$refs.modal.style.height=window.screen.height-10+'px'
    console.log(this.$refs.modal.style.height=window.screen.height-10+'px')
    console.log(window.screen.height )
  },
  methods:{
    ToLocation(){
      //console.log( this.$router)  //整个实例路由信息
      this.$router.push({name:'Location', params: { userId: 123 }}) //跳转
      //this.$router.replace({name:'Location'})  //替换
      //console.log( this.$route) //当前路由信息
    }
  }
}
</script>

<style lang="less">
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
    height: .3rem;
    background-color: rebeccapurple;
    position: relative;
    text-align: center;
    line-height: .3rem;
    }
  }

  #model{
    width: 90%;
    position: fixed;
    top: 0.05rem;
    z-index: 2;
    left: 5%;
    background-color: slategray;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

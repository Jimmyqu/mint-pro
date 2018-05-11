<template>
  <div class="hot-container">
    <div class="hot-top">
      <div class="hot-left"><i class="iconfont">&#xe683;</i>本周热门榜单</div>
      <div class="hot-right">全部榜单<i class="iconfont" style="font-size: 0.6rem">&#xe8f6;</i></div>
    </div>
    <div class="hot-swipe">
      <div style="overflow-x:scroll;display: -webkit-box;">
        <div class="swipe-item" v-for="item in [1,2,3,4,5,6,7,8]">
          <img src="http://img1.qunarzz.com/sight/p0/1503/55/5577ab22b2e205d0.water.jpg_150x150_b3d42462.jpg" alt="">
          <p class="swipe-item-place">黄鹤楼</p>
          <p class="swipe-item-price">
            <i style="color: hotpink">35</i>
            元
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">

  export default {
    name: "HomeHot",
  }

</script>

<style lang="less">
  .hot-container{
    .hot-top{
      display: flex;
      padding:0 0.5rem;
      div{
        flex:1;
        height: 2rem;
        line-height: 2rem;
      }
      .hot-left{
        font-size: 1rem;
      }
      .hot-right{
        direction: rtl;
        font-size: 0.6rem;
      }
    }
    .hot-swipe{
      padding:0 0.5rem;
      .swipe-item{
        width: 8rem;
        height: 8rem;
        margin: 0 0.1rem;
        text-align: center;
        img{
          margin-top: 0.2rem;
          width: 70%;
        }
        .swipe-item-place{
          font-size: 0.5rem;
        }
        .swipe-item-price{
          font-size: 0.3rem;
        }
      }
    }
  }
</style>

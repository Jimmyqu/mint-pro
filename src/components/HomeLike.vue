<template>
    <div class="like-container">
        <div class="like-top">
          <div class="like-left"><i class="iconfont">&#xe683;</i>本周热门榜单</div>
        </div>
        <div class="like-bottom">
          <div class="like-bottom-item" v-for="item in [1,2,3,4]">

          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-like"
    }
</script>

<style scoped lang="less">
  .like-container{
    padding:0 0.05rem;
    .like-top{

      .like-left{
        height: .2rem;
        line-height: .2rem;
      }
    }
    .like-bottom{

      .like-bottom-item{
        height: .8rem;
        background-color: rosybrown;
        border-bottom: 1px slategray solid;
      }
    }
  }
</style>

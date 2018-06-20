<template>
    <div id="location">

      <mt-header title="标题过长会隐藏后">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right" @click="show=!show" ></mt-button>
      </mt-header>
      <transition
        name="toggle"
      >
        <div class="toggle-container" v-show="show">

          <div ref="row" style="display: flex;flex-direction: column;">
            <div  style="flex: 1;display: flex;flex-direction: row;">
              <div class="flex-box" v-for="item in [1,2,3,4]" :key="item">
                <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
                <p>{{item}}</p>

              </div>
            </div>
            <div style="flex: 1;display: flex;flex-direction: row;">
              <div class="flex-box" v-for="item in [5,6,7,8]" :key="item">
                <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
                <p>{{item}}</p>

              </div>
            </div>
          </div>

        </div>

      </transition>
      <ul
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="this.deactivated"
        infinite-scroll-distance="10">
        <li v-for="item in list" @click="toDetail(item.postid)">
          <div class="news-item">
            <div class="item-img">
              <img v-lazy="item.imgsrc
" alt="">
            </div>
            <div class="item-content">
              <h4>{{ item.title }}</h4>
              <p>{{item.digest}}</p>
              <span class="time-slot">
                {{ item.mtime.slice(0,10) }}
              </span>
              <span class="title-slot">
                {{item.source}}
              </span>
            </div>
          </div>

        </li>
      </ul>
      <div
        v-if="loading"
        style="display: flex;justify-content: center;"
      >
        <mt-spinner  color="#26a2ff" type="double-bounce"></mt-spinner>
      </div>

    </div>
</template>

<script>
  const api='https://api.it919.cn/index.php/api/News/new_list?'
  //page=10&type=0

  //todo 记住位置跳转后返回
    export default {
        name: "location",
        data(){
          return {
            show:false,
            font:true,
            loading:false,
            list:[],
            newsIndex:10,
            deactivated:false,
            scroll:0 //锚点位置
          }
        },
        mounted(){
          window.addEventListener('scroll', this.handleScroll);
          // console.log(this.$route) //当前路由 含有传递过来的参数
          // console.log(this.$refs.row.offsetHeight)
          // console.log(this.$refs.row.getBoundingClientRect().height)
          this.$axios.get(api+`page=${this.newsIndex}&type=0`)
            .then((res)=>{

              let data=res.data.data

              //this.list.push(1)
              this.list=data
              console.log(this.list)
            }).catch((err)=>{
              console.log(err)
          })

        },
      deactivated(){
        // 页面退出时关闭事件
        this.deactivated=true
        console.log(this.scroll)
        window.removeEventListener('scroll', this.handleScroll);
      },
      activated() {
        if(this.scroll > 0|| this.scroll ===0){
          window.scrollTo(0, this.scroll);
          this.scroll = 0;
          window.addEventListener('scroll', this.handleScroll);
        }
      },
      methods:{
        loadMore() {
          this.loading = true;
          if(this.$route.name==='Location'){
            this.$axios.get(api+`page=${this.newsIndex}&type=0`)
              .then((res)=>{
                let data=res.data.data
                for(let i in data)  {
                  this.list.push(data[i])
                }
                this.newsIndex+=10
                //console.log(this.newsIndex)

                setTimeout(()=>{
                  this.loading = false
                },2000)

              }).catch((err)=>{
              console.log(err)
            })
          }else {
            return false
          }
        },
        toDetail(id){
          //console.log(id)
          this.$router.push({name: 'detail', params: {postId: id}})
        },
        handleScroll () {
          this.scroll  = document.documentElement &&  document.documentElement.scrollTop
          console.log(this.scroll)
        }
      }
    }
</script>

<style scoped lang="less">

  image[lazy=loading] {
    width: 0.2rem;
    height: 0.2rem;
    background-color: hotpink;
    margin: auto;
  }
  /*自定义Ui组件颜色 打包后直接更改*/
  .toggle-container{
    background-color: rebeccapurple;
    overflow: hidden;
    position: absolute;
    top: 0.4rem;
    width: 100%;
  }
  .toggle-enter-active, .toggle-leave-active {
    transform-origin: center top;
    transition: transform .5s;
  }
  .toggle-enter, .toggle-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform-origin: center top;
    transform: scaleY(0);
  }
  .flex-box{
    position: relative;
    display: flex;
    flex: 1;
    padding-bottom: 25%;
    justify-content: center;
    align-items: center;
    img{
      width: 80%;
      position: absolute;
      top:0;
    }
    p{
      text-align: center;
      position: absolute;
      bottom: 0;
    }
  }
  /*新闻item*/
  .news-item{
     display:flex;
     flex-direction: row;
     margin: 0.1rem 0;
     padding: 0 0.05rem;
    .item-img{
      flex: 1;
      text-align: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .item-content{
      flex:2.5;
      padding: 0 0.1rem;
      height: 0.7rem;
      h4{
        font-size: 0.14rem;
        font-weight: bold;
      }
      p{
        word-wrap:break-word;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.1rem;
        line-height: 0.14rem;
        margin-top: 0.02rem;
      }
      .time-slot{
        font-size: 0.04rem;
      }
      .title-slot{
        font-size: 0.04rem;
        margin-left: 0.2rem;
      }
    }
  }
</style>

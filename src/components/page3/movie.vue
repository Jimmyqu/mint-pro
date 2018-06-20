<template>
  <div>
    <mt-header title="标题过长会隐藏后">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"  ></mt-button>
    </mt-header>
    <h3>正在热映</h3>
    <div id="movie-box">
      <div
        class="movie-item"
        v-for="item in this.list"
      >
        <div>
          <img

            :src="item.images.small"
            alt=""
          >
        </div>
        <p>{{item.title}}</p>
      </div>
      <div
        @click="loadMore"
        class="more"
        v-if="this.list.length<this.total">
        加载更多
      </div>

    </div>
  </div>

</template>

<script>
  import {Indicator} from 'mint-ui'  //引入加载组件

  const api='https://api.it919.cn/index.php/api/Movie/playing_movie_list?' ;



  export default {
    name: "movie",
    data(){
      return {
        list:[],
        newsIndex:0,
        total:0,

      }
    },
    created(){
      Indicator.open('加载中...');
      // this.$axios.interceptors.request.use(function(config){
      //   //在发送请求之前做某事 提取到app main中了
      //
      //   return config;
      // })

    },
    mounted(){
      this.$axios.get(api+`start=${this.newsIndex}&count=9`,)
        .then((res)=>{
          console.log(res.data)
          let data=res.data.subjects
          this.list=data
          this.total=res.data.total
          this.newsIndex=this.list.length
          console.log(this.newsIndex)
          Indicator.close();
        }).catch((err)=>{
        console.log(err)
        Indicator.close();
      })
    },
    methods:{
      loadMore(){
        Indicator.open('加载中...');
        if(this.newsIndex<this.total){
          this.$axios.get(api+`start=${this.newsIndex}&count=9`)
            .then((res)=>{
              let data=res.data.subjects
              data.map((item)=>{
                this.list.push(item)
              })
              console.log(this.list)
              this.newsIndex=this.list.length
              console.log(this.newsIndex)
              Indicator.close();
            }).catch((err)=>{
            console.log(err)
            Indicator.close();
          })
        }

      },

    }
  }
</script>

<style scoped lang="less">
  h3{
    text-align: center;
    font-size: .18rem;
    margin-top: .2rem;
  }
#movie-box{
  .more{
    background-color: rebeccapurple;
    color: #fff;
    margin: 0.2rem auto;
    width: 50%;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    border-radius: .08rem;
  }
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.1rem;
  justify-content: space-between;
  .movie-item{
    width: 30%;
    height: 2rem;
    margin-top: .2rem;
    &:last-child{
      float: right;
    }
    div{
      width: 100%;
      height: 1.5rem;
      img{
        width: 100%;
        height: 1.5rem;
      }
    }
    p{
      text-align: center;
      font-size: .12rem;
      margin-top: .1rem;
    }
  }
}
</style>

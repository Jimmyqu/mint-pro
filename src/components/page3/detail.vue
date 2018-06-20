<template>
    <div>
      <mt-header title="标题过长会隐藏后">
        <router-link to="/location" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"  ></mt-button>
      </mt-header>
      <div class="new-container">
        <h3>{{this.newsData.title}}</h3>
        <p class="source">{{this.newsData.source}}</p>
        <p class="ptime">{{this.newsData.ptime}}</p>
        <div class="body" v-html="this.newsData.body"></div>
      </div>
    </div>
</template>

<script>

  import {Indicator} from 'mint-ui'  //引入加载组件

  const detail='https://api.it919.cn/index.php/api/News/new_detail?postid='
  //const postId=this.$route.params.postId
  export default {
        name: "detail",
      data(){
        return {
          newsData:''
        }
      },
      created(){
          Indicator.open('加载中...');
        console.log(this.$route.params.postId)
        this.$axios.get(detail+this.$route.params.postId)
          .then((res)=>{
            console.log(res)
            let data=res.data.data
            this.newsData=data
            setTimeout(()=>{
              Indicator.close();
            },1000)

          }).catch((err)=>{
          console.log(err)
        })
      }
    }
</script>

<style scoped lang="less">
.new-container{
  margin-top: .5rem;
  h3{
    font-weight: bold;
    text-align: center;
    padding:0 0.5rem;
  }
  .source{
    margin-top: .2rem;
    text-align: center;
    font-size: .12rem ;
  }
  .ptime{
    margin-top: .05rem;
    font-size: .1rem;
    text-align: center;

  }
  .body{
    margin: .2rem 0;

    padding: .1rem;
    font-size: .14rem;
    line-height: .18rem;
  }
}
</style>

<template>
    <div class="water-fall-container">
      <!--<ul>-->
        <!--<li v-for="item in this.list">-->
          <!--<img style="width: 100%" v-lazy="item.img">-->
        <!--</li>-->
      <!--</ul>-->
      <mt-header title="标题过长会隐藏后">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"  ></mt-button>
      </mt-header>
      <vue-waterfall-easy
        :imgsArr="this.list"
        @scrollReachBottom="getData"
      >
        <div slot="waterfall-head">
          <h3>写真集合</h3>

        </div>
        <div class="img-info" slot-scope="props">

          <p class="some-info">{{props.value.title}}</p>
          <p class="some-info">{{props.value.like}}</p>
        </div>
      </vue-waterfall-easy>
    </div>
</template>

<script>
  import {Indicator} from 'mint-ui'  //引入加载组件
  import vueWaterfallEasy from 'vue-waterfall-easy' //瀑布流
  const api='https://api.it919.cn/index.php/api/Picture/hua_ban';
    export default {
        name: "water-fall",
      components: {
        vueWaterfallEasy
      },
      data(){
        return {
          list:[],
        }
      },
      created(){
        //Indicator.open('加载中...');
      },
      mounted(){
        this.$axios.get(api)
          .then((res)=>{
            let data=res.data.data
            console.log(data)
            data.map((item)=>{
              this.list.push({
                src:item.img,
                href:'#',
                title:item.title,
                like:item.like
              })
            })
            console.log(this.list)
            //Indicator.close();
          }).catch((err)=>{
          console.log(err)
        })

      },
      methods: {
        getData() {
          this.$axios.get(api)
            .then(res => {
              let newInfo=[]
              res.data.data.map((item)=>{
                  newInfo.push({
                    src:item.img,
                    href:'#',
                    title:item.title,
                    like:item.like
                  })
              });
              this.list = this.list.concat(newInfo)
              console.log(this.list)
            })
        },
      },
    }
</script>

<style scoped lang="less">
  img[lazy=loading] {
    width: 0.5rem;
    height: 0.5rem;
    margin: auto;
    background-color: hotpink;
  }
  .water-fall-container{
    h3{
      margin: .2rem 0;
      text-align: center;
      font-size: .16rem;
      font-weight: bold;
    }
    height: 10rem;
    width: 100%;
    a{
      text-decoration: none;
      text-underline: none!important;
      .some-info{
        color: navajowhite;
        text-align: center;
      }
    }

  }
</style>

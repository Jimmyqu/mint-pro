<template>
    <div>
      <div class="video-items" v-for="item in this.list">
        <video
          style="width: 100%"
          :poster="item.cover"
          :src="item.mp4_url" >
        </video>
      </div>
    </div>
</template>

<script>
  import {Indicator} from 'mint-ui'  //引入加载组件

  const api='https://api.it919.cn/index.php/api/Video/video_type?type=2&page=10'
    export default {
        name: "videoCom",
      data(){
        return {
          list:[],
          newsIndex:10,
        }
      },
      created(){
        Indicator.open('加载中...');
      },
      mounted(){
        this.$axios.get(api+`page=${this.newsIndex}&type=2`)
          .then((res)=>{
            let data=res.data.data
            this.list=data
            console.log(this.list)
            Indicator.close();
          }).catch((err)=>{
          console.log(err)
        })

      },
    }
</script>

<style scoped lang="less">
  .video-items{

  }
</style>

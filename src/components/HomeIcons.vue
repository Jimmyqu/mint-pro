<template>
  <div class="items-container">
    <div class="items" v-for="i in ['videoCom','waterFall','indexList','movie',5,6,7,8]" @click="toItems(i)">
      <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
      <p>{{i}}</p>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  export default {
    name: "HomeIcons",
    methods:{
      toItems(index){
        console.log(index)
        this.$router.push({name:index})
      }
    }
  }

</script>

<style lang="less">
.items-container{
  padding-bottom: 50%;

  .items{
    position: relative;
    display: flex;
    justify-content: center;
    width: 25%;
    padding-bottom: 25%;
    float: left;
    background-color: navajowhite;
    img{
      width: 80%;
      position: absolute;
      top: 0;
    }
    p{
      position: absolute;
      bottom: 0;

    }
  }
}
</style>

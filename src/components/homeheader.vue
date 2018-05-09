<template>
    <div style="height:55px">
      <mt-search
        v-model="value"
      >
        <mt-cell
          v-for="item in list"
          :title="item.year"
          :value="item.title"
          :key="item"
          @click.native="itemclick(item)"
        >
        </mt-cell>
      </mt-search>
    </div>
</template>

<script>
    //const url='https://api.douban.com/v2/movie/search?count=5&q='
    export default {
        name: "homeheader",
      data(){
          return {
            value:'',
            list:[]
          }
      },
      methods:{
          itemclick(index){
            alert(index)
          }
      },
      watch:{
        value(val){
          this.$axios(url+val).then((data)=>
            this.list=data.data.subjects
          )
        }
      }
    }
</script>

<style scoped>
  /*不受scoped 限制>>>*/
  >>>.mint-searchbar{
  background-color: slateblue;
}
</style>

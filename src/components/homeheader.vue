<template>
    <div>
      <mt-search
        v-model="value"
      >
        <mt-cell
          v-for="item in list"
          :title="item.year"
          :value="item.title"
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

</style>

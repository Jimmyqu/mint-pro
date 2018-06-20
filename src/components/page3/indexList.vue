<template>
    <div>
      <mt-index-list>

        <!--<mt-index-section index="A">-->
          <!--<mt-cell title="Aaron"></mt-cell>-->
          <!--<mt-cell title="Alden"></mt-cell>-->
          <!--<mt-cell title="Austin"></mt-cell>-->
        <!--</mt-index-section>-->
        <mt-index-section  v-for="item,index in arr" :index="item" :key="item">
          <mt-cell
            v-for="item in city[index]"
            :title="item.name"
            :key="item.id"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>

<script>

  import {Indicator} from 'mint-ui'  //引入加载组件

export default {
  name: "index-list",
  data(){
    return {
      arr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"],
      cities:[],
      city:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    }
  },
  created(){
    Indicator.open('加载中...');
    this.$axios.get('../../../static/mock/mock.json').then((res)=>{
      this.cities=res.data.data.cities
      for (let i in this.arr){
        this.cities.map((item)=>{
          //console.log(item.pinyin[0]==this.arr[i])
          if(item.pinyin[0]===this.arr[i]){
            //console.log(item.pinyin)
            this.city[i].push(item)
          }
        })
      }
      setTimeout(()=>{
        Indicator.close();
      },1000)

    })

  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <!--serach component-->
    <home-header></home-header>
    <router-view/>
  </div>
</template>

<script>
  import HomeHeader from './components/homeheader'
export default {
  name: 'App',
  components:{
    HomeHeader
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

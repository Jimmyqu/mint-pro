<template>
  <div>
    <transition name="fade">
      <div
        v-if="show"
       >
        <p>11111111111</p>
        <p>11111111111</p>
        <p>11111111111</p>
      </div>
    </transition>

    <button @click="show=!show">
      click
    </button>
  </div>


  <!--<div id="demo">-->
  <!---->
    <!--<transition name="fade">-->
      <!--<div v-if="show">-->
        <!--<p >hello</p>-->
        <!--<p >hello</p>-->
        <!--<p >hello</p>-->
        <!--<p >hello</p>-->
        <!--<p >hello</p>-->
      <!--</div>-->

    <!--</transition>-->
    <!--<button v-on:click="show = !show">-->
      <!--Toggle-->
    <!--</button>-->
    <!---->
  <!--</div>-->

</template>

<script>
    export default {
        name: "transition-test",
      data(){
          return {
            show:true
          }
      }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

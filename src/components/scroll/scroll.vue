<template>
<div class="scroll-container" ref="scroll">
  <div class="scroll-content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
export default {
  name: "scroll",
  data(){
    return {
      bs:null
    }
  },
  mounted() {
    if(this.$refs.scroll){
      this.bs = new BScroll(this.$refs.scroll,{
        probeType:3,
        click:true,
        pullUpLoad:true,
        observeDOM:true
      })
    }
  }
}
</script>

<style scoped>
.scroll-container{
  height:100%;
}
</style>

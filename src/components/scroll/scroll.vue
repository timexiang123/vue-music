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
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted() {
    if(this.$refs.scroll){
      this.bs = new BScroll(this.$refs.scroll,{
        probeType:this.probeType,
        click:true,
        pullUpLoad:true,
        observeDOM:true
      });
      if(this.probeType){
        this.bs.on('scroll',(pos)=>{
          this.$emit('scroll',-pos.y)
        });
      }
    }
  }
}
</script>

<style scoped>
.scroll-container{
  height:100%;
}
</style>

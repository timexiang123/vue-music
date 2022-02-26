<template>
<div class="header-container">
  <div class="left">
   <slot name="left"></slot>
  </div>
  <div class="middle">
    <slot name="middle"></slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "vHeader",
  props:{

  }
}
</script>

<style scoped>
.header-container{
  display: flex;
  justify-content: space-between;
  height:44px;
}
.header-container > div{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
.left,.right{
  width:44px;
}
.middle{
  flex:1;
}
.right img{
  display:block;
  width:32px;
  height:32px;
  margin:6px auto;
}
</style>

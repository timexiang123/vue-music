<template>
<div class="header-container">
  <div class="left"></div>
  <div class="middle">
    <slot></slot>
  </div>
  <div class="right">
    <img src="../../assets/images/person.png" alt="用户中心" />
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

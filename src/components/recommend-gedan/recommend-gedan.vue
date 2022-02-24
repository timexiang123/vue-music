<template>
<div class="recommend-gedan">
  <div class="recommend-title">热门歌单推荐</div>
  <div class="recommend-list">
    <div class="recommend-item" v-for="item in list" :key="item.id">
      <div class="cover-img">
        <img v-lazy="item.coverImgUrl" alt="歌单封面图" />
      </div>
      <div class="info">
        <div class="name text-overflow">{{item.name}}</div>
        <div class="description text-overflow">{{item.description || '暂无简介'}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "recommend-gedan",
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created() {
  }
}
</script>

<style scoped>
.recommend-title{
  color:#ffdc00;
  text-align:center;
  padding:24px 0;
}
.recommend-list{
  padding:0 20px 20px;
}
.recommend-item{
  display:flex;
  align-items: center;
  margin-bottom: 20px;
}
.recommend-item .cover-img img{
  width:60px;
  height:60px;
  margin-right: 20px;
}
.recommend-item .info {
  max-width:260px;
}
.recommend-item .description{
  color:#636363;
  margin-top: 10px;
}
</style>

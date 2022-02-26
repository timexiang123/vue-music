<template>
<div class="song-list">
  <div class="song-item" v-for="item in songList" :key="item.id">
    <div class="song-name text-overflow">{{item.name}}</div>
    <div class="album-name text-overflow">{{item.ar[0].name}}.{{item.al.name}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "song-list",
  props:{
    songList:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.song-item{
  padding:10px 20px;
}
.song-name{
  font-weight: 800;
}
.album-name{
  color:#999;
  margin-top: 10px;
}
</style>

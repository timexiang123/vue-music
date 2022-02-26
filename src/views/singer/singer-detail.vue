<template>
  <transition name="fade" appear>
    <div class="singer-detail">
      <!--  头部-->
      <v-header>
        <div class="back" slot="left" @click="$router.go(-1)">
          <img src="../../assets/images/left-arrow.png" alt="返回按钮" />
        </div>
        <div class="title-name" slot="middle">{{singerDetail.name || '未知歌手'}}</div>
      </v-header>
      <!-- pic -->
      <div class="pic-container">
        <img v-lazy="singerDetail.cover" alt="歌手封面图" />
        <div class="play-btn">随机播放全部</div>
      </div>
      <!--    songList-->
      <div class="content">
        <scroll>
          <song-list :songList="songsList"></song-list>
        </scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import vHeader from "@/components/header/header"
import songList from "@/components/song-list/song-list"
import scroll from "@/components/scroll/scroll"
import {getSingerDetail,getSingerSongs} from "@/service/api"
export default {
  name: "singer-detail",
  data(){
    return {
      id:'',
      singerDetail:{},
      songsList:[]
    }
  },
  created() {
    this.id = this.$route.params.id
    if(this.id){
      this.getSingerDetail(this.id)
      this.getSingerSongs(this.id)
    }
  },
  methods:{
    //获取歌手详情数据
    async getSingerDetail(id){
      const res = await getSingerDetail(id);
      if(res.data && res.data.artist ){
        this.singerDetail = res.data.artist
      }
    },
    //获取歌手的50首歌曲
    async getSingerSongs(id){
      const res = await getSingerSongs(id);
      if(res.songs && res.songs.length){
        this.songsList = res.songs;
      }
    }
  },
  components:{
    vHeader,
    songList,
    scroll
  }
}
</script>

<style scoped>
.singer-detail {
  z-index: 10;
  position: absolute;
  top: 0;
  left:0;
  width:100vw;
  height:100vh;
  background-color: #222222;
}
.back img{
  width:24px;
  height:24px;
}
.title-name{
  font-size: 16px;
  font-weight: 800;
}
.header-container{
 background:rgba(0,0,0,.5);
}
.pic-container{
  position:relative;
  width:100vw;
  height:300px;
  backdrop-filter: blur(10px);
}
.pic-container img{
  width:100%;
  height:100%;
  opacity: .5;
}
.play-btn{
  position:absolute;
  left:50%;
  transform:translate(-50%,0);
  bottom:50px;
  padding:6px 12px;
  color:#ffdc00;
  border-radius:20px;
  border:1px solid #ffdc00;
}
.content{
  position:fixed;
  left:0;
  right:0;
  top:344px;
  bottom:0;
  margin:0 auto;
  overflow: hidden;
}
/*过渡样式*/
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

 .fade-enter-from ,.fade-leave-to {
 transform:translate3d(100%,0,0);
}
</style>

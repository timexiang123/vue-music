<template>
  <div class="recommend animate__animated animate__fadeIn">
    <van-skeleton title :row="100" :loading="loading"/>
    <scroll>
      <!--  轮播图-->
      <banner :bannerList="bannerList" v-if="bannerList.length"></banner>
      <!--  热门歌单推荐-->
      <recommend-gedan :list="gedanList" v-if="gedanList.length"></recommend-gedan>
    </scroll>
  </div>
</template>

<script>
import scroll from "@/components/scroll/scroll";
import banner from "@/components/banner/banner";
import recommendGedan from "@/components/recommend-gedan/recommend-gedan";
import {getBannerData, getPlayList} from "@/service/api";
import {Skeleton} from "vant";
export default {
  name: "recommend",
  data() {
    return {
      bannerList: [],
      gedanList: [],
      loading:true
    }
  },
  created() {
    this.getBannerData();
    this.getPlayList();
  },
  methods: {
    //拉取轮播图数据
    async getBannerData() {
      const res = await getBannerData();
      if (res.banners && res.banners.length) {
        this.bannerList = res.banners;
        if(this.loading){
          this.loading = false;
        }
      }
    },
    //拉取推荐歌单数据
    async getPlayList() {
      const res = await getPlayList();
      if (res.playlists && res.playlists.length) {
        this.gedanList = res.playlists;
        if(this.loading){
          this.loading = false;
        }
      }
    }
  },
  components: {
    scroll,
    banner,
    recommendGedan,
    [Skeleton.name]:Skeleton
  }
}
</script>

<style scoped>
.recommend{
  position:absolute;
  left:0;
  right:0;
  top:88px;
  bottom:0;
  margin:0 auto;
  overflow: hidden;
}
</style>

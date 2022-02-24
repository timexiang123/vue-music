<template>
  <div class="recommend">
    <!--  轮播图-->
    <banner :bannerList="bannerList"></banner>
    <!--  热门歌单推荐-->
    
  </div>
</template>

<script>
import banner from "@/components/banner/banner";
import {getBannerData} from "@/service/api";

export default {
  name: "recommend",
  data() {
    return {
      bannerList: []
    }
  },
  created() {
    this.getBannerData();
  },
  methods: {
    //拉取轮播图数据
    async getBannerData() {
      const res = await getBannerData();
      if (res.banners && res.banners.length) {
        this.bannerList = res.banners;
      }
    }
  },
  components: {
    banner
  }
}
</script>

<style scoped>

</style>

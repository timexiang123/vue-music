<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.pic">
        <img :src="item.pic" alt="封面图"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {Swipe, SwipeItem} from 'vant';

export default {
  name: "banner",
  props: {
    bannerList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>

<style scoped>
.banner img {
  width: 100vw;
  height: 180px;
}
</style>

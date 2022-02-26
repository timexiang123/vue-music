<template>
  <div class="singer-list animate__animated animate__fadeIn">
    <van-skeleton title :row="100" :loading="loading"/>
    <scroll :probe-type="3" ref="scroll" @scroll="handleScroll">
      <div ref="singerWrapper" class="singer-wrapper" v-if="!loading">
        <div class="outer-wrapper" v-for="item in singerList" :key="item.title">
          <div class="singer-title"> {{ item.title }}</div>
          <div class="inner-wrapper">
            <div class="singer-item" v-for="singer in item.list" :key="singer.id" @click="toSingerDetail(singer.id)">
              <img v-lazy="singer.picUrl" alt="歌手封面图"/>
              <span class="text-overflow">{{ singer.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <index-bar :activeIndex="activeIndex" :indexList="indexList" @switchChar="switchChar"></index-bar>
  </div>
</template>

<script>
import {getSingerList} from "@/service/api"
import scroll from "@/components/scroll/scroll";
import indexBar from "@/components/index-bar/index-bar";
import {Skeleton} from "vant";

export default {
  name: "singer-list",
  data() {
    return {
      charArr: [],
      singerList: [],
      list: [],
      indexList: [],
      areaHeight: [],
      loading: true,
      activeIndex: 0
    }
  },
  created() {
    this.generateCharArr();
  },
  mounted() {


  },
  methods: {
    //计算各区域高度
    calcAreaHeight() {
      this.loading = false;
      let singerWrapper = this.$refs.singerWrapper;
      if (singerWrapper) {
        let initHeight = 0;
        this.areaHeight.push(initHeight);
        let outerWrapper = singerWrapper.querySelectorAll(".outer-wrapper");
        outerWrapper.forEach(item => {
          initHeight += item.offsetHeight;
          this.areaHeight.push(initHeight);
        });
      }
    },
    //监听滚动事件
    handleScroll(pos) {
      pos = Math.abs(pos);
      for (let i = 0; i < this.areaHeight.length; i++) {
        let current = this.areaHeight[i];
        let next = this.areaHeight[i + 1]
        if (pos >= current && pos < next) {
          this.activeIndex = i;
        }

      }
    },
    //切换字符
    switchChar(index) {
      //改变激活索引
      this.activeIndex = index;
      //滚动到对应位置
      let scroll = this.$refs.scroll
      if (scroll && scroll.bs) {
        scroll.bs.scrollTo(0, -this.areaHeight[this.activeIndex], 500)
      }
    },
    //去歌手详情页
    toSingerDetail(id){
      this.$router.push("/singer-detail/"+id);
    },
    //生成字符数组
    generateCharArr() {
      this.charArr.push(-1);
      for (let i = 97; i <= 122; i++) {
        this.charArr.push(String.fromCharCode(i));
      }
      //生成字符索引
      this.charArr.forEach(item => {
        if (item == -1) {
          this.indexList.push("热");
        } else {
          this.indexList.push(item.toUpperCase());
        }
        this.getSingerList(item)
      });
      //请求歌手列表
      //对请求到的歌手列表数据进行排序
      this.list.sort((a, b) => {
        return a.title.toString() - b.title.toString()
      });
      this.singerList = this.list
    },
    async getSingerList(initial) {
      const res = await getSingerList(initial);
      if (res.artists && res.artists.length) {
        if (initial == -1) {
          this.list.push({
            title: "热",
            list: res.artists
          });
        } else {
          this.list.push({
            title: initial.toUpperCase(),
            list: res.artists
          });
        }
      }
    }
  },
  components: {
    scroll,
    indexBar,
    [Skeleton.name]: Skeleton
  },
  watch: {
    'singerList.length': {
      handler(val) {
        if (val == this.charArr.length) {
          this.$nextTick(() => {
            this.calcAreaHeight()
          })
        }
      }
    }
  }

}
</script>

<style scoped>
.singer-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 88px;
  bottom: 0;
  margin: 0 auto;
  overflow: hidden;
}
.singer-list >>> .index-bar {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 10px;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.singer-list >>> .index-item {
  flex: 1;
  padding: 4px;
  text-align: center;
}

.singer-title {
  box-sizing: border-box;
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  color: #999989;
  font-weight: 800;
  background-color: #333;
}

.singer-item {
  display: flex;
  align-items: center;
  padding: 20px 30px 10px;
}

.singer-item img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
}

.singer-item span {
  flex: 1;
}

</style>

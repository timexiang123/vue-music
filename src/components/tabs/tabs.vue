<template>
<div class="tabs">
  <div class="tab-item" v-for="(item,index) in tabList" :key="item.path"
       :class="{active:currentTabIndex == index}"
       @click="switchTab(item.path,index)">
   <div class="text">{{item.text}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "tabs",
  data(){
    return {
      currentTabIndex:-1,
      tabList:[
        {
          path:"/recommend",
          text:"推荐"
        },
        {
          path:"/singer",
          text:"歌手"
        },
        {
          path:"/top-list",
          text:"排行"
        },
        {
          path:"/search",
          text:"搜索"
        }
      ]
    }
  },
  methods:{
    //切换tab类型
    switchTab(path,index){
      if(this.currentTabIndex == index) return;
      this.currentTabIndex = index;
      this.$router.push(path);
    }
  },
  watch:{
    '$route.path':{
      handler(val){
        if(val == '/recommend'){
          this.currentTabIndex = 0
        }else if(val == '/singer'){
          this.currentTabIndex = 1;
        }else if(val == '/top-list'){
          this.currentTabIndex =2;
        }else if(val == '/search'){
          this.currentTabIndex =3;
        }
      },
      immediate:true
    }
  }
}
</script>

<style scoped>
.tabs{
  display:flex;
  height:44px;
}
.tab-item{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:gray;
}
.tab-item .text{
  box-sizing: border-box;
  padding:8px 0;
  border-bottom:2px solid #222;
}
.tab-item.active .text{
  color:#ffdc00;
  border-color:#ffdc00;
}
</style>

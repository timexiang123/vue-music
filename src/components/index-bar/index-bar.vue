<template>
  <div class="index-bar">
    <div class="index-item"
         v-for="(item,index) in indexList" :key="index"
         :class="{active:activeIndex == index}"
         @click="switchChar(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "index-bar",
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    indexList: {
      type: Array,
      default() {
        return []
      }

    }
  },
  methods:{
    //改变字符
    switchChar(index){
      if(this.activeIndex == index) return;
      this.$emit("switchChar",index);
    }
  }
}
</script>

<style scoped>
.active {
  color: #f00;
}
</style>

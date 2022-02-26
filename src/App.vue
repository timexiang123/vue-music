<template>
  <div id="app">
    <v-header>
      <div class="middle-container" slot="middle">
        <img src="./assets/images/logo.png" alt="图标" />
        <span>Chicken Music</span>
      </div>
      <div class="right-container" slot="right">
        <img src="./assets/images/person.png" alt="用户中心" />
      </div>
    </v-header>
    <tabs></tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from "./components/header/header";
import tabs from "./components/tabs/tabs";
export default {
  name: 'App',
  components: {
    vHeader,
    tabs
  }
}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/animate.min.css";
.middle-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
.middle-container img{
  width:32px;
  height:32px;
  margin-right: 8px;
}
.middle-container span{
  font-size: 18px;
  font-weight: 800;
  color:#ffdc00;
}
</style>

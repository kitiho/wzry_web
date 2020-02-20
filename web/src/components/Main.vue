<template>
  <div>
    <div class="topbar d-flex jc-center ai-center">
      <div class="logo ml-4"></div>
      <div class="d-flex flex-column jc-center ai-start flex-1 ml-3">
        <span class="text-white fs-sm">王者荣耀</span>
        <span class="text-grey-1 fs-xs">团队成就更多</span>
      </div>
      <div class="download mr-4"></div>
    </div>
    <div class="nav bg-yellow d-flex jc-around ai-center text-white fs-sm" style="height:3rem">
      <div>
      <router-link tag="div" to="/homePage" class="py-1 border-b-t border-active">首页</router-link>
      </div>
      <div>
      <router-link tag="div" to="/homePage" class="py-1 border-b-t">攻略中心</router-link>
      </div>
      <div >
      <router-link tag="div" to="/homePage" class="py-1 border-b-t">赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.topbar {
  position: sticky;
  background: url("../assets/img/index.png") no-repeat 0 87.195%;
  background-size: 375px 455px;
  width: 375px;
  height: 45px;
  .logo {
    background: url("../assets/img/index.png") no-repeat 0 72.588%;
    background-size: 375px 455px;
    width: 30px;
    height: 30px;
  }
  .download {
    background: url("../assets/img/index.png") no-repeat 18.73% 71.694%;
    background-size: 375px 455px;
    width: 60px;
    height: 24px;
  }
}
</style>
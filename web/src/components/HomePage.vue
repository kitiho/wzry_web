<template>
  <div>
    <div class="swiper pb-3">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
      >
        <!-- slides -->
        <swiper-slide><img
            src="https://ossweb-img.qq.com/upload/adw/image/20200220/8fc5f6cb4931514b8a7847e359e86476.jpeg"
            alt=""
            class="w-100"
          ></swiper-slide>
        <swiper-slide><img
            src="https://ossweb-img.qq.com/upload/adw/image/20200219/a08b97efe43eb744ae2e536ca2af1c4e.jpeg"
            alt=""
            class="w-100"
          ></swiper-slide>
        <swiper-slide><img
            src="https://ossweb-img.qq.com/upload/adw/image/20200220/dc04ab70c5c037d4455908042c60f9dc.jpeg"
            alt=""
            class="w-100"
          ></swiper-slide>

        <!-- Optional controls -->
        <div
          class="swiper-pagination text-right pr-3"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <!-- end of swiper -->
    <div class="nav">
      <div class="nav-icon d-flex flex-wrap bg-white">
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-disclose"></i>
          <span class="py-2 text-black-1 fs-sm">爆料站</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-story"></i>
          <span class="py-2 text-black-1 fs-sm">故事站</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-mall"></i>
          <span class="py-2 text-black-1 fs-sm">周边商城</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-experience"></i>
          <span class="py-2 text-black-1 fs-sm">体验服</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-new"></i>
          <span class="py-2 text-black-1 fs-sm">新人专区</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-inheritance"></i>
          <span class="py-2 text-black-1 fs-sm">荣耀·传承</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-simulation"></i>
          <span class="py-2 text-black-1 fs-sm">模拟战资料库</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-camp"></i>
          <span class="py-2 text-black-1 fs-sm">王者营地</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-officialAccounts"></i>
          <span class="py-2 text-black-1 fs-sm">公众号</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <i class="sprite sprite-version"></i>
          <span class="py-2 text-black-1 fs-sm">版本介绍</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <img
            src="https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/djhj.png"
            style="width:34px"
            alt=""
          >
          <span class="py-2 text-black-1 fs-sm">对局环境</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <img
            src="https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/wxwzt.png"
            alt=""
            class="mb-2"
            style="width:50%;"
          >
          <span class="py-2 text-black-1 fs-sm">无限王者团</span>
        </div>
        <div
          class=" text-center  
        d-flex
        flex-column
        jc-center
        ai-center mt-3 nav-item mb-2 py-1"
          style="width:25%"
        >
          <img
            src="https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/cyhdy.png"
            alt=""
            style="width:35%"
          >
          <span class="py-2 text-black-1 fs-sm">创意互动营</span>
        </div>
      </div>
      <div class="bg-grey-4 d-flex jc-center ai-center py-2">
        <div class="sprite sprite-packup"></div>
        <span class="fs-xs text-black-1 px-1">收起</span>
      </div>
    </div>
    <!-- end of nav -->
    <card></card>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Card from "./Card";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        loop: true,
        speed: 400,
        autoplay: {
          delay: 2500
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {},
  mounted() {},
  components: {
    swiper,
    swiperSlide,
    Card
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";
.swiper-pagination-bullet {
  border-radius: 0.1538rem;
  background: map-get($map: $colors, $key: "white");
  opacity: 1;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: map-get($map: $colors, $key: "blue-1");
}
.icon {
  background: url("../assets/img/index.png") no-repeat 63.546% 15.517%;
  background-size: 375px 455px;
  width: 23px;
  height: 20px;
}
.nav {
  border-bottom: 1px solid map-get($map: $colors, $key: "grey-3");
  border-top: 1px solid map-get($map: $colors, $key: "grey-3");
}
.nav-item:nth-child(4n) {
  border-right: 1px solid transparent;
}
.nav-item {
  border-right: 1px solid map-get($map: $colors, $key: "grey-3");
}
.sprite-packup {
  background: url("../assets/img/index.png") no-repeat 38.577% 52.076%;
  background-size: 375px 455px;
  width: 10px;
  height: 10px;
}
</style>
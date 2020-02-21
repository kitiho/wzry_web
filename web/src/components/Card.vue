<template>
  <div class="bg-white my-3">
    <div class="head mx-4">
      <div class=" d-flex jc-start ai-center py-3 ">
        <i :class="`sprite sprite-${icon}`"></i>
        <span class="fs-lg text-black-1 flex-1 px-2">{{title}}</span>
        <i class="sprite sprite-more"></i>
      </div>
      <div
        class="pb-3"
        v-if="newHero"
      >
        <img
          class="w-100"
          :src="newHero"
          alt=""
        >
      </div>
    </div>
    <div class="body px-2 pt-2">
      <div class="category d-flex jc-around ai-center fs-sm text-black-3 py-2">
        <span
          v-for="(category , i) in categories"
          :key="i"
          class="py-1 border-b-t"
          @click="$refs.mySwiper.swiper.slideTo(i);"
          :class="{active : active === i}"
        >{{category.name}}</span>
      </div>
      <swiper
        ref="mySwiper"
        @slide-change="active = $refs.mySwiper.swiper.realIndex "
      >
        <swiper-slide
          v-for="(category , ci) in categories"
          :key="ci"
        >
          <slot
            name="swiperslide"
            :category="category"
          ></slot>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true },
    newHero: { type: String }
  },
  data() {
    return {
      active: 0
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";
.active {
  border-bottom: 3px solid map-get($map: $colors, $key: "yellow");
  color: map-get($map: $colors, $key: "yellow");
}
.head {
  border-bottom: 1px solid map-get($map: $colors, $key: "grey-3");
}
</style>
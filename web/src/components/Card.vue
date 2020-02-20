<template>
  <div class="bg-white">
    <card-head
      title="英雄列表"
      icon="hero"
    ></card-head>
    <swiper>
      <swiper-slide></swiper-slide>
    </swiper>
    <div class="body px-2">
      <div class="category d-flex jc-around ai-center fs-sm text-black-3 py-2">
        <span
          v-for="(category , i) in categories"
          :key="i"
          class="py-1 border-b-t"
          @click="$refs.mySwiper.swiper.slideTo(i);"
          :class="{active : active === i}"
        >{{category.catName}}</span>
      </div>
      <swiper
        ref="mySwiper"
        @slide-change="active = $refs.mySwiper.swiper.realIndex "
      >
        <swiper-slide
          v-for="(category , ci) in categories"
          :key="ci"
        >
          <div class="d-flex ai-center jc-around flex-wrap pt-2">
            <div
              class="d-flex flex-column text-black-2 text-center p-2"
              style="width:20%"
              v-for="(hero,hi) in category.heros"
              :key="hi"
            >
              <img
                class="w-100"
                :src="hero.heroAvatar"
                alt=""
              >
              <span class="pt-2">{{hero.heroName}}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import CardHead from "./CardHead";
export default {
  data() {
    return {
      active: 0,
      categories: [
        {
          catName: "热门",
          heros: [
            {
              heroName: "后羿",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            },
            {
              heroName: "韩信",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            },
            {
              heroName: "铠",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            },
            {
              heroName: "亚瑟",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "孙悟空",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "安其拉",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            },
            {
              heroName: "鲁班七号",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "甄姬",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "妲己",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            },
            {
              heroName: "庄周",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }
          ]
        },
        {
          catName: "射手",
          heros: [
            {
              heroName: "后羿",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            },
            {
              heroName: "韩信",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            },
            {
              heroName: "铠",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            },
            {
              heroName: "亚瑟",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "孙悟空",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/147/147.jpg"
            },
            {
              heroName: "安其拉",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            },
            {
              heroName: "鲁班七号",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/145/145.jpg"
            },
            {
              heroName: "甄姬",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "妲己",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/143/143.jpg"
            },
            {
              heroName: "庄周",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }
          ]
        },
        {
          catName: "战士",
          heros: [
            {
              heroName: "后羿",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            },
            {
              heroName: "韩信",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            },
            {
              heroName: "铠",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            },
            {
              heroName: "亚瑟",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "孙悟空",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/147/147.jpg"
            },
            {
              heroName: "安其拉",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            },
            {
              heroName: "鲁班七号",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/145/145.jpg"
            },
            {
              heroName: "甄姬",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "妲己",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/143/143.jpg"
            },
            {
              heroName: "庄周",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }
          ]
        },
        {
          catName: "刺客",
          heros: [
            {
              heroName: "后羿",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            },
            {
              heroName: "韩信",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            },
            {
              heroName: "铠",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            },
            {
              heroName: "亚瑟",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "孙悟空",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/147/147.jpg"
            },
            {
              heroName: "安其拉",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            },
            {
              heroName: "鲁班七号",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/145/145.jpg"
            },
            {
              heroName: "甄姬",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "妲己",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/143/143.jpg"
            },
            {
              heroName: "庄周",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }
          ]
        },
        {
          catName: "法师",
          heros: [
            {
              heroName: "后羿",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            },
            {
              heroName: "韩信",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            },
            {
              heroName: "铠",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            },
            {
              heroName: "亚瑟",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "孙悟空",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/147/147.jpg"
            },
            {
              heroName: "安其拉",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            },
            {
              heroName: "鲁班七号",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/145/145.jpg"
            },
            {
              heroName: "甄姬",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "妲己",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/143/143.jpg"
            },
            {
              heroName: "庄周",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }
          ]
        },
        {
          catName: "辅助",
          heros: [
            {
              heroName: "后羿",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            },
            {
              heroName: "韩信",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            },
            {
              heroName: "铠",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            },
            {
              heroName: "亚瑟",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "孙悟空",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/147/147.jpg"
            },
            {
              heroName: "安其拉",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            },
            {
              heroName: "鲁班七号",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/145/145.jpg"
            },
            {
              heroName: "甄姬",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "妲己",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/143/143.jpg"
            },
            {
              heroName: "庄周",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }
          ]
        },
        {
          catName: "打野",
          heros: [
            {
              heroName: "后羿",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            },
            {
              heroName: "韩信",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            },
            {
              heroName: "铠",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            },
            {
              heroName: "亚瑟",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            },
            {
              heroName: "孙悟空",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/147/147.jpg"
            },
            {
              heroName: "安其拉",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            },
            {
              heroName: "鲁班七号",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/145/145.jpg"
            },
            {
              heroName: "甄姬",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            },
            {
              heroName: "妲己",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/143/143.jpg"
            },
            {
              heroName: "庄周",
              heroAvatar:
                "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }
          ]
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    CardHead,
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
</style>
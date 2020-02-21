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
          <span class="py-2 text-black-1 fs-xs">爆料站</span>
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
          <span class="py-2 text-black-1 fs-xs">故事站</span>
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
          <span class="py-2 text-black-1 fs-xs">周边商城</span>
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
          <span class="py-2 text-black-1 fs-xs">体验服</span>
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
          <span class="py-2 text-black-1 fs-xs">新人专区</span>
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
          <span class="py-2 text-black-1 fs-xs">荣耀·传承</span>
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
          <span class="py-2 text-black-1 fs-xs">模拟战资料库</span>
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
          <span class="py-2 text-black-1 fs-xs">王者营地</span>
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
          <span class="py-2 text-black-1 fs-xs">公众号</span>
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
          <span class="py-2 text-black-1 fs-xs">版本介绍</span>
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
          <span class="py-2 text-black-1 fs-xs">对局环境</span>
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
          <span class="py-2 text-black-1 fs-xs">无限王者团</span>
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
          <span class="py-2 text-black-1 fs-xs">创意互动营</span>
        </div>
      </div>
      <div class="bg-grey-4 d-flex jc-center ai-center py-2">
        <div class="sprite sprite-packup"></div>
        <span class="fs-xs text-black-1 px-1">收起</span>
      </div>
    </div>
    <!-- end of nav -->
    <card
      :categories="newsCats"
      title="新闻资讯"
      icon="news"
    >
      <template #swiperslide="{category}">
        <div
          class="p-3 fs-sm text-black-1 d-flex jc-center ai-center"
          v-for="(item,i) in category.newsItem"
          :key="i"
        >
          <span class="text-blue-2">[{{category.catName}}]</span>
          <span class="px-1">|</span>
          <span class="text-omit flex-1 fs-sm">{{item.title}}</span>
          <span class="text-grey-2 fs-xs pl-4">{{item.date}}</span>
        </div>
      </template>
    </card>
    <card
      :categories="categories"
      newHero="https://ossweb-img.qq.com/upload/webplat/info/yxzj/20200108/20796372351730.jpg"
      title="英雄列表"
      icon="hero"
    >
      <template #swiperslide="{category}">
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
      </template>
    </card>
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
      ],
      newsCats: [
        {
          catName: "新闻",
          newsItem: [
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            }
          ]
        },
        {
          catName: "公告",
          newsItem: [
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            }
          ]
        },
        {
          catName: "活动",
          newsItem: [
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            }
          ]
        },
        {
          catName: "赛事",
          newsItem: [
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            }
          ]
        },
        {
          catName: "热门",
          newsItem: [
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            },
            {
              title: "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光",
              date: "02/14"
            }
          ]
        }
      ],
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
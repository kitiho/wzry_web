<template>
  <div>
    <div v-if="model">
      <div class="head d-flex jc-center ai-center py-3 text-blue-3 fs-sm">
        <i class="iconfont icon-back"></i>
        <span
          class="flex-1 text-omit "
          style="font-weight:bold"
        >{{model.title}}</span>
        <span class="px-3 fs-xs text-grey-2">2020-02-21</span>
      </div>
      <div
        v-html="model.body"
        class="px-3 article-body"
      ></div>
      <div class="pb-4">
        <div class="fs-lg">
          <i class="iconfont icon-related pr-1"></i>
          <span
            class="text-blue-3 fs-sm"
            style="font-weight:bold"
          >相关资讯</span>
        </div>
        <div
          v-for="related in model.related"
          :key="related._id"
          class="d-flex jc-center ai-center"
        >
          <router-link
            class="text-black-2 fs-sm my-2 flex-1 text-omit"
            style="font-weight:bold"
            :to="`/article/${related._id}`"
            :key="related._id"
          >
            {{related.title}}
          </router-link>
          <span class="px-3 fs-xs text-grey-2">2020/02/21</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
.article-body {
  img {
    max-width: 100%;
    height: auto;
  }
  iframe {
    max-width: 100%;
    height: auto;
  }
}
</style>
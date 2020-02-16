<template>
  <div id="categoryedit">
    <h1>{{id ? '编辑':'新建'}}广告</h1>
    <el-form
      label-width="100px"
      @submit.native.prevent="save"
    >
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          @click="model.items.push({})"
        >添加广告</el-button>
      </el-form-item>
      <el-row
        type="flex"
        style="flex-wrap:wrap"
        :gutter="50"
      >
        <el-col
          style="max-width:400px"
          :md="12"
          v-for="(item,index) in model.items"
          :key="index"
        >
          <el-form-item
            label="广告图"
            style="display:block"
          >
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/uploads'"
              :show-file-list="false"
              :on-success="res=>{
                $set(item,'img',res.src)
              }"
            >
              <img
                v-if="item.img"
                :src="item.img"
                class="avatar"
              >
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"
              ></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="跳转链接">
            <el-input v-model="item.url"></el-input>
          </el-form-item>
          <el-form-item>
                <el-button
                  type="danger"
                  @click="model.items.splice(index,1)"
                >删除</el-button>
              </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      }
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/ads/${this.id}`, this.model);
      } else {
        await this.$http.post("/ads", this.model);
      }

      this.$router.push("/adList");

      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`/ads/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
</style>
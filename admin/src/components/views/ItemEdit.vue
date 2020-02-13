<template>
  <div>
    <h1>{{id?'编辑':'新建'}}装备</h1>
    <el-form
      :inline="true"
      class="demo-form-inline"
      @submit.native.prevent="save"
    >
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标" style="display:block">
        <el-upload
          class="avatar-uploader"
          :action= "$http.defaults.baseURL + '/uploads'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img
            v-if="model.icon"
            :src="model.icon"
            class="avatar"
          >
          <i
            v-else
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-upload>
      </el-form-item>
      <el-form-item style="margin-left:40px;">
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
  data() {
    return {
      model: {},
    };
  },
  props: {
    id: null
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/items/${this.id}`, this.model);
      } else {
        await this.$http.post("/items", this.model);
      }
      this.$router.push("/itemList");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`/items/${this.id}`);
      console.log(res);
      this.model = res.data;
    },
    async fetchParent() {
      const res = await this.$http.get("/items");
      this.parent = res.data;
    },
    async afterUpload(res){
      this.$set(this.model,'icon',res.src)
    }
  },
  created() {
    this.fetchParent();
    this.id && this.fetch();
  }
};
</script>

<style>
</style>
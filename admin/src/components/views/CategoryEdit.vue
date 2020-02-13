<template>
  <div>
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <el-form
      :inline="true"
      class="demo-form-inline"
      @submit.native.prevent="save"
    >
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="父级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parent"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
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
  data() {
    return {
      model: {
      },
      parent: {}
    };
  },
  props: {
    id: null
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/categories/${this.id}`, this.model);
      } else {
        await this.$http.post("/categories", this.model);
      }
      this.$router.push("/categoryList");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`/categories/${this.id}`);
      console.log(res);
      this.model = res.data;
    },
    async fetchParent() {
      const res = await this.$http.get("/categories");
      this.parent = res.data;
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
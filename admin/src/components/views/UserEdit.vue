<template>
  <div id="categoryedit">
    <h1>{{id ? '编辑':'注册'}}用户</h1>
    <el-form
      label-width="100px"
      @submit.native.prevent="save"
    >
      <el-form-item label="账号">
        <el-input v-model="model.username" style="max-width:300px"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password" style="max-width:300px"></el-input>
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
  props: {
    id: {}
  },
  data() {
    return {
      model: {
      }
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/users/${this.id}`, this.model);
      } else {
        await this.$http.post("/users", this.model);
      }

      this.$router.push("/userList");

      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`/users/${this.id}`);
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
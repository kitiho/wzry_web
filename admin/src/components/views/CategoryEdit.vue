<template>
  <div>
    <h1>新建分类</h1>
    <el-form
      :inline="true"
      class="demo-form-inline"
      @submit.native.prevent="save"
    >
      <el-form-item label="名称">
        <el-input
          placeholder="名称"
          v-model="model.name"
        ></el-input>
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
      model: {}
    };
  },
  methods: {
    async save(){
      await this.$http.post('/categories',this.model)
      this.$router.push('/categoryList')
      this.$message({
        type:'success',
        message:'保存成功'
      })
    }
  }
};
</script>

<style>
</style>
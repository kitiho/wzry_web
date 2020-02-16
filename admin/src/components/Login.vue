<template>
  <div class="container">
    <el-card header="请登录" class="box-card login">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input
            type="text"
            v-model="model.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="model.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        model:{}
    };
  },
  methods:{
      async login(){
          const res = await this.$http.post('login',this.model)
          localStorage.token = res.data
          this.$router.push('/')
          this.$message({
              message:'登录成功',
              type:'success'
          })
      }
  }
};
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.login{
    min-width: 400px;
    margin-top: 13rem
}
</style>

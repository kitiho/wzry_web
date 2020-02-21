<template>
  <el-container style="min-height:100vh; border: 1px solid #eee">
    <el-aside
      width="200px"
      style="background-color: rgb(238, 241, 246)"
    >
      <el-menu
        router
        default-active="1"
        unique-opened
      >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>内容管理</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categoryCreate">新建分类</el-menu-item>
            <el-menu-item index="/categoryList">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>装备管理</template>
          <el-menu-item-group>
            <template slot="title">装备</template>
            <el-menu-item index="/itemCreate">新建装备</el-menu-item>
            <el-menu-item index="/itemList">装备列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>英雄管理</template>
          <el-menu-item-group>
            <template slot="title">英雄</template>
            <el-menu-item index="/heroCreate">新建英雄</el-menu-item>
            <el-menu-item index="/heroList">英雄列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-message"></i>文章管理</template>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articleCreate">新建文章</el-menu-item>
            <el-menu-item index="/articleList">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-message"></i>广告管理</template>
          <el-menu-item-group>
            <template slot="title">广告</template>
            <el-menu-item index="/adCreate">新建广告</el-menu-item>
            <el-menu-item index="/adList">广告列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item-group>
            <template slot="title">用户</template>
            <el-menu-item index="/userCreate">新建用户</el-menu-item>
            <el-menu-item index="/userList">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-button
          type="danger"
          @click="quit"
        >退出登录</el-button>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    quit() {
      this.$router.push("/login");
      this.$message({
        message: "退出成功",
        type: "success"
      });
      localStorage.clear();
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

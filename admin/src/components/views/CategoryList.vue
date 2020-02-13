<template>
  <el-table
    style="width: 100%"
    :data="items.data"
  >
    <el-table-column
      label="ID"
      width="300"
    >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row._id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="分类名称"
      width="180"
    >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="$router.push(`/categoryEdit/${scope.row._id}`)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="remove(scope.row._id)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
export default {
  data() {
    return {
      items: {}
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/categories");
      this.items = res;
    },
    async remove(id) {
      await this.$http.delete(`/categories/${id}`);
      this.$message({
        type: "success",
        message: "删除成功"
      });
      this.fetch();
    }
  }
};
</script>

<style>
</style>
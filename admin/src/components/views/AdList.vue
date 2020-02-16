<template>
  <el-table
    style="width: 100%"
    :data="items.data"
  >
    <el-table-column
      label="ID"
      width="300"
      prop="_id"
    >
    </el-table-column>
    <el-table-column
      label="广告名称"
      width="180"
      prop="title"
    >
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="$router.push(`/adEdit/${scope.row._id}`)"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="remove(scope.row)"
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
      const res = await this.$http.get("/ads");
      this.items = res;
    },
    remove(row) {
      this.$confirm(`是否要删除「${row.title}」`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`/ads/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  }
};
</script>

<style>
</style>
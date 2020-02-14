<template>
  <div>
    <h1>{{id?'编辑':'新建'}}英雄</h1>
    <el-form
      class="demo-form-inline"
      @submit.native.prevent="save"
    >
      <el-tabs type="border-card">
        <el-tab-pane
          label="基本信息"
          name="first"
        >

          <el-form-item label="名称">
            <el-input
              v-model="model.name"
              style="max-width:300px"
            ></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input
              v-model="model.title"
              style="max-width:300px"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/uploads'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img
                v-if="model.avatar"
                :src="model.avatar"
                class="avatar"
              >
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"
              ></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="分类">
            <el-select
              v-model="model.categories"
              multiple
            >
              <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度评分">
            <el-rate
              v-model="model.scores.difficult"
              style="padding-top:10px"
            >>
            </el-rate>
          </el-form-item>
          <el-form-item label="技能评分">
            <el-rate
              v-model="model.scores.skill"
              style="padding-top:10px"
            >>
            </el-rate>
          </el-form-item>
          <el-form-item label="攻击评分">
            <el-rate
              v-model="model.scores.attack"
              style="padding-top:10px"
            >>
            </el-rate>
          </el-form-item>
          <el-form-item label="生存评分">
            <el-rate
              v-model="model.scores.survive"
              style="padding-top:10px"
            >
            </el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select
              v-model="model.items1"
              multiple
            >
              <el-option
                v-for="item in items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select
              v-model="model.items2"
              multiple
            >
              <el-option
                v-for="item in items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input
              v-model="model.usageTips"
              type="textarea"
              style="max-width:500px"
            ></el-input>
          </el-form-item>
          <el-form-item label="战斗技巧">
            <el-input
              v-model="model.battleTips"
              type="textarea"
              style="max-width:500px"
            ></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input
              v-model="model.teamTips"
              type="textarea"
              style="max-width:500px"
            ></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane
          label="技能编辑"
          name="second"
        >

          <el-form-item>
            <el-button
              type="primary"
              plain
              icon="el-icon-plus"
              @click="model.skills.push({})"
            >添加技能</el-button>
          </el-form-item>
          <el-row
            type="flex"
            style="flex-wrap:wrap"
            :gutter="50"
          >
            <el-col
              v-for="(skill,index) of model.skills"
              :key="index"
              :md="12"
            >
              <el-form-item label="技能名称">
                <el-input
                  style="max-width:350px"
                  v-model="skill.name"
                ></el-input>
              </el-form-item>
              <el-form-item label="技能图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/uploads'"
                  :show-file-list="false"
                  :on-success="res=>{
                    $set(skill,'icon',res.src)
                  }"
                >
                  <img
                    v-if="skill.icon"
                    :src="skill.icon"
                    class="avatar"
                  >
                  <i
                    v-else
                    class="el-icon-plus avatar-uploader-icon"
                  ></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="技能描述">
                <el-input
                  style="max-width:350px"
                  type="textarea"
                  v-model="skill.description"
                ></el-input>
              </el-form-item>
              <el-form-item label="技能提示">
                <el-input
                  style="max-width:350px"
                  type="textarea"
                  v-model="skill.tips"
                ></el-input>
              </el-form-item>
              <el-form-item style="padding-left:10rem">
                <el-button
                  type="danger"
                  @click="model.skills.splice(index,1)"
                >删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>

        </el-tab-pane>
      </el-tabs>
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
      model: {
        scores: {
          difficult: null,
          survive: null,
          skill: null,
          attack: null
        },
        skills: []
      },
      categories: {},
      items: {}
    };
  },
  props: {
    id: null
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/heros/${this.id}`, this.model);
      } else {
        await this.$http.post("/heros", this.model);
      }
      this.$router.push("/heroList");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`/heros/${this.id}`);
      console.log(res);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get("/categories");
      this.categories = res.data;
    },
    async fetchItems() {
      const res = await this.$http.get("/items");
      this.items = res.data;
    },
    async afterUpload(res) {
      this.$set(this.model, "avatar", res.src);
    }
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
    this.id && this.fetch();
  }
};
</script>

<style>
</style>
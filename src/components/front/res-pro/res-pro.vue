<template>
  <div class="res-pro" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav :status="status"></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'ResPro' }">科研项目</el-breadcrumb-item>
          <el-breadcrumb-item>查看</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-button @click="addPro">添加科研获奖</el-button>
      <el-table
      :data="resAwards"
      v-if="resAwards.length > 0"
      style="width: 100%">
      <el-table-column
        prop="awardedProName"
        align="center"
        label="获奖项目名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="awardLevel"
        align="center"
        label="获奖等级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="awardCategory"
        align="center"
        label="获奖类别">
      </el-table-column>
      <el-table-column
        prop="awardRank"
        align="center"
        label="获奖级别">
      </el-table-column>
      <el-table-column
        prop="applicant"
        align="center"
        label="申请人">
      </el-table-column>
      <el-table-column
        prop="personalReward"
        align="center"
        label="个人奖励">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        label="结题/获得日期">
      </el-table-column>
      <el-table-column
        prop="appStatus"
        align="center"
        label="审核状态">
      </el-table-column>
      <el-table-column
        prop="operating"
        align="center"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="viewClick(scope.row)" type="text" size="mini">查看</el-button>
          <el-button @click="modifyClick(scope.row)" type="text" size="mini">修改</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
const resAwardsUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/resAwards';

import Nav from '../../nav/nav.vue'
import Footer from '../../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
    return {
      status: 1,
      resAwards: [],
      fullscreenLoading: false,
    }
  },
  created (){
    this.render();
  },
  methods: {
    addPro() {
      this.$router.push({ name: 'AddRespro' });
    },
    render() {
      this.fullscreenLoading = true;

      this.axios.get(resAwardsUrl)
      .then(resp => {
        let respon = resp.data;

        if(respon.success) {
          this.resAwards = respon.data.resAwards;
        }
        this.fullscreenLoading = false;
      })
    },
    viewClick(row) {
      this.$router.push({path: '/query-detail', query: {id: row.id}});
    },
  }
}
</script>

<style lang="scss">
  @import "./res-pro.scss";
</style>

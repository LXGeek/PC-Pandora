<template>
  <div class="res-pro">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/res-pro' }">科研项目</el-breadcrumb-item>
          <el-breadcrumb-item>查看</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-button @click="addPro">添加科研获奖</el-button>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
import Nav from '../nav/nav.vue'
import Footer from '../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  methods: {
    addPro() {
      this.$router.push({path: '/add-respro'});
    }
  }
}
</script>

<style lang="scss">
  @import "./res-pro.scss";
</style>

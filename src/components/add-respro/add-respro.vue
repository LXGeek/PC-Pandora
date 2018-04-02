<template>
  <div class="add-respro">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/res-pro' }">科研项目</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础信息" name="first">基础信息</el-tab-pane>
        <el-tab-pane label="项目成员及介绍" name="second">项目成员及介绍</el-tab-pane>
        <el-tab-pane label="简介/创新点/预期成果" name="third">简介/创新点/预期成果</el-tab-pane>
        <el-tab-pane label="目标/内容/计划进度" name="fourth">目标/内容/计划进度</el-tab-pane>
        <el-tab-pane label="图片/附件" name="fifth">图片/附件</el-tab-pane>
      </el-tabs>
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
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss">
  @import "./add-respro.scss";
</style>

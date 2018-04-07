<template>
   <div class="awards-detail">
     <el-nav></el-nav>
     <div class="content">
       <div class="breadcrumb clearfix">
         <div class="title">您的当前位置&nbsp;:&nbsp;</div>
         <el-breadcrumb separator-class="el-icon-arrow-right">
           <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
           <el-breadcrumb-item :to="{ path: '/res-pro' }">科研获奖</el-breadcrumb-item>
           <el-breadcrumb-item>查看</el-breadcrumb-item>
         </el-breadcrumb>
       </div>
       <div class="baseState">
         <p>基本状况</p>
       </div>
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
}
</script>

<style lang="scss">
@import "./awards-detail.scss";
</style>

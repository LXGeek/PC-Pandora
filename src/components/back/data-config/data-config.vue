<template>
  <div class="data-config" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'HomeManage' }">管理首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'DataConfig' }">数据配置</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-table
        :data="dataConfig"
        stripe
        border>
        <el-table-column
          prop="statTime"
          label="统计数据年份"
          align="center"
          min-width="50%">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          min-width="50%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="medium">修改配置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
const queryUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/dataConfig';

import Nav from '../../nav/nav.vue'
import Footer from '../../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
     return {
       fullscreenLoading: false,
       dataConfig: [],
     }
   },
   created (){
     this.onSubmit();
   },
   methods: {
     onSubmit() {
       this.fullscreenLoading = true;

       this.axios.get(queryUrl)
        .then(resp => {
          let respon = resp.data;

          if(respon.success){
            this.dataConfig = respon.data.dataConfig;
          }
          this.fullscreenLoading = false;
        }).catch(error => {
          this.messageNotify(error, 'error');
        });
     },
     messageNotify(msg, type) {
       this.$notify({
         title: '提示',
         message: msg,
         type: type,
         duration: 2000
       });
       this.fullscreenLoading = false;
     },
     handleClick(row) {
       console.log(row);
     },
   }
}
</script>

<style lang="scss">
  @import "./data-config.scss";
</style>

<template>
  <div class="docx-notice" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav :status="status"></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'HomeManage' }">管理首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'NoticeManage' }">文档-通知</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-table
        :data="newsList"
        border
        style="width: 100%">
        <el-table-column
          prop="newsTitle"
          label="标题"
          align="center"
          min-width="40%">
        </el-table-column>
        <el-table-column
          prop="pubDepart"
          label="发布部门"
          align="center"
          min-width="20%">
        </el-table-column>
        <el-table-column
          prop="pubTime"
          label="发布时间"
          align="center"
          min-width="20%">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          min-width="20%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="medium">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
const newsUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/newsList'

import Nav from '../../nav/nav.vue'
import Footer from '../../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
    return {
      status: 2,
      fullscreenLoading: false,
      newsList: [],
    }
  },
  created (){
    this.requireNewsList();
  },
  methods: {
    requireNewsList() {
      this.fullscreenLoading = true;

      this.axios.get(newsUrl).then(resp => {
        let respon = resp.data;
        if(respon.success){
          this.newsList = respon.data.newsList;
        }
        this.fullscreenLoading = false;
      }).catch(error => {
        this.messageNotify(error, 'error');
      });
    },
    handleClick(row) {
      this.$router.push({name: 'DocxDetail', query: {id: row.id}});
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
  },
}
</script>

<style lang="scss">
  @import "./docx-notice.scss";
</style>

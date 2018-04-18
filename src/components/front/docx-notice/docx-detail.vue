<template>
  <div class="docx-detail" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/docx-notice' }">文档-通知</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/docx-notice' }">{{ newsTitle }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="main-text">
        <p>{{ newsTitle }}</p>
        <div class="detail">
          <span>时间 : {{ time }}</span>
          <span>来源 : {{ sources }}</span>
          <span>作者 : {{ author }}</span>
        </div>
        <ul class="list" v-for="(item, index) in list" :index="index">
          <li><img src="http://222.24.19.126/public/lib/ueditor/dialogs/attachment/fileTypeImages/icon_rar.gif"><a v-bind:href="[item.link]">{{ item.title }}</a></li>
        </ul>
      </div>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
const newsUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/newsDetail'

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
      newsTitle: '',
      time: '',
      sources: '',
      author: '',
      list: []
    }
  },
  created (){
    this.requireNewsDetail();
  },
  methods: {
    requireNewsDetail() {
      this.fullscreenLoading = true;

      let id = this.$route.query.id;
      this.axios.get(newsUrl, {
        id: id
      }).then(resp => {
        let respon = resp.data;
        if(respon.success){
          this.newsTitle = respon.data.newsTitle;
          this.time = respon.data.time;
          this.sources = respon.data.sources;
          this.author = respon.data.author;
          this.list = respon.data.list;
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
  }
}
</script>

<style lang="scss">
  @import "./docx-detail.scss";
</style>

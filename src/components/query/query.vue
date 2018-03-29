<template>
  <div class="query" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/query' }">条件查询</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="时间范围 : ">
          <el-date-picker
            v-model="formInline.timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="奖励类型 : ">
          <el-select v-model="formInline.rewardType" placeholder="请选择奖励类型">
            <el-option label="科研项目" value="1"></el-option>
            <el-option label="科研获奖" value="2"></el-option>
            <el-option label="学术论文" value="3"></el-option>
            <el-option label="知识产权" value="4"></el-option>
            <el-option label="技术标准" value="5"></el-option>
            <el-option label="创作成果" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键词 : ">
          <el-input v-model="formInline.keyWords" placeholder="请输入关键词"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableList"
        stripe
        border>
        <el-table-column
          prop="awardedName"
          label="获奖名称"
          align="center"
          min-width="20%">
        </el-table-column>
        <el-table-column
          prop="applicant"
          label="申请人"
          align="center"
          min-width="20%">
        </el-table-column>
        <el-table-column
          prop="reward"
          label="奖励"
          align="center"
          min-width="20%">
        </el-table-column>
        <el-table-column
          prop="getTime"
          label="获取时间"
          align="center"
          min-width="20%">
        </el-table-column>
        <el-table-column
          prop="status"
          label="审核状态"
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
      <el-pagination
        v-if="tableList.length !== 0"
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total">
      </el-pagination>
    </div>
    <div class="footer">
       <p>Copyright © 2013-2019 <a href="http://222.24.19.31/">西安邮电大学科技处</a></p>
    </div>
  </div>
</template>

<script>
const queryUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/queryList';

import Nav from '../nav/nav.vue'

export default {
  components: {
    'el-nav': Nav
  },
  data() {
     return {
       fullscreenLoading: false,
       formInline: {
         timeRange: '',
         rewardType: '',
         keyWords: ''
       },
       tableList: [],
       pageSize: 10,
       total: 0,
       curentPage: 1
     }
   },
   created (){
     this.onSubmit();
   },
   methods: {
     onSubmit() {
       this.fullscreenLoading = true;

       this.axios.get(queryUrl, this.formInline)
        .then(resp => {
          let respon = resp.data;

          if(respon.success){
            this.tableList = respon.data.tableList;
            this.total = respon.data.total;
            this.curentPage = respon.data.curentPage;
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
       this.$router.push({path: '/query-detail', query: {id: row.id}});
     }
   }
}
</script>

<style lang="scss">
  @import "./query.scss";
</style>

<template>
  <div class="reward-query" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav :status="status"></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'HomeManage' }">管理首页</el-breadcrumb-item>
          <el-breadcrumb-item>条件查询</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'RewQueryManage' }">奖励查询</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :span="9">
            <el-form-item label="时间范围 : ">
              <el-date-picker
                v-model="formInline.timeRange"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="奖励类型 : ">
              <el-select v-model="formInline.rewardType" placeholder="请选择奖励类型">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="科研项目" value="科研项目"></el-option>
                <el-option label="科研获奖" value="科研获奖"></el-option>
                <el-option label="学术论文" value="学术论文"></el-option>
                <el-option label="学术专著" value="学术专著"></el-option>
                <el-option label="知识产权" value="知识产权"></el-option>
                <el-option label="技术标准" value="技术标准"></el-option>
                <el-option label="创作成果" value="创作成果"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="学院 : ">
              <el-select v-model="formInline.college" placeholder="请选择学院">
                <el-option label="电子工程学院" value="电子工程学院"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9">
            <el-form-item label="教师姓名 : ">
              <el-input v-model="formInline.teacherName" placeholder="请输入教师姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="关键词汇 : ">
              <el-input v-model="formInline.keyWords" placeholder="请输入关键词"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
    <el-footer></el-footer>
  </div>
</template>

<script>
const queryUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/queryList';

import Nav from '../../../nav/nav.vue'
import Footer from '../../../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
     return {
       status: 2,
       fullscreenLoading: false,
       formInline: {
         timeRange: '',
         rewardType: '全部',
         teacherName: '',
         keyWords: '',
         college: '电子工程学院'
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
       console.log(row);
     }
   }
}
</script>

<style lang="scss">
  @import "./reward-query.scss";
</style>

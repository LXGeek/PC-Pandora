<template>
  <div class="user-manage" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav :status="status"></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'HomeManage' }">管理首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'UserManage' }">用户管理</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :span="6">
            <el-form-item label="学院 : ">
              <el-select v-model="formInline.college" placeholder="请选择学院">
                <el-option label="电子工程学院" value="电子工程学院"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="系部 : ">
              <el-select v-model="formInline.departments" placeholder="请选择系部">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="学院办公室" value="学院办公室"></el-option>
                <el-option label="教务办公室" value="教务办公室"></el-option>
                <el-option label="学生工作办公室" value="学生工作办公室"></el-option>
                <el-option label="电路与电子技术基础教学部" value="电路与电子技术基础教学部"></el-option>
                <el-option label="光电子技术系" value="光电子技术系"></el-option>
                <el-option label="电子信息工程系" value="电子信息工程系"></el-option>
                <el-option label="微电子学系" value="微电子学系"></el-option>
                <el-option label="电工电子实验教学部" value="电工电子实验教学部"></el-option>
                <el-option label="电子工程应用训练中心" value="电子工程应用训练中心"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        :data="tableList"
        ref="multipleTable"
        tooltip-effect="dark"
        stripe
        border
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          min-width="5%"
          align="center">
        </el-table-column>
        <el-table-column
          prop="awardedName"
          label="获奖名称"
          align="center"
          min-width="15%">
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
       formInline: {
         college: '电子工程学院',
         departments: '全部',
       },
       multipleSelection: [],
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
     },
     handleSelectionChange(val) {
       this.multipleSelection = val;
     }
   }
}
</script>

<style lang="scss">
  @import "./user-manage.scss";
</style>

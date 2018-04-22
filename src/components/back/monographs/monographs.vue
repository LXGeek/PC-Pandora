<template>
  <div class="monographs" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div>您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'HomeManage' }">管理首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励审核</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'MonogMange' }">学术专著</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form :label-position="labelPosition"  label-width="90px" :inline="true" :model="formInline" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="时间 : ">
              <el-select v-model="formInline.time">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="2011年" value="2011年"></el-option>
                <el-option label="2012年" value="2012年"></el-option>
                <el-option label="2013年" value="2013年"></el-option>
                <el-option label="2014年" value="2014年"></el-option>
                <el-option label="2015年" value="2015年"></el-option>
                <el-option label="2016年" value="2016年"></el-option>
                <el-option label="2017年" value="2017年"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="学院 : ">
              <el-select v-model="formInline.college">
                <el-option label="电子工程学院" value="电子工程学院"></el-option>
                <el-option label="通信工程学院" value="通信工程学院"></el-option>
                <el-option label="计算机学院" value="计算机学院"></el-option>
                <el-option label="自动化学院" value="自动化学院"></el-option>
                <el-option label="数媒院" value="数媒院"></el-option>
                <el-option label="理学院" value="理学院"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="系部 : ">
              <el-select v-model="formInline.departments">
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
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="奖励金额 : ">
              <el-select v-model="formInline.reAmount">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="大于0" value="大于0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态 : ">
              <el-select v-model="formInline.appStatus">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="未审核" value="未审核"></el-option>
                <el-option label="审核未通过" value="审核未通过"></el-option>
                <el-option label="审核通过" value="审核通过"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="著作类型 : ">
              <el-select v-model="formInline.workType">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="专著" value="专著"></el-option>
                <el-option label="译著" value="译著"></el-option>
                <el-option label="编著/教材" value="编著/教材"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" style="text-align: center;">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">点击查询</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12" style="text-align: center;">
            <el-form-item>
              <el-button type="primary" @click="downLoad">下载详情</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        :data="projectList"
        stripe
        border>
        <el-table-column
          prop="projectName"
          label="项目名称"
          align="center"
          min-width="15%">
        </el-table-column>
        <el-table-column
          prop="projectType"
          label="项目类型"
          align="center"
          min-width="10%">
        </el-table-column>
        <el-table-column
          prop="itemCategory"
          label="项目类别"
          align="center"
          min-width="8%">
        </el-table-column>
        <el-table-column
          prop="applyTime"
          label="申请日期"
          align="center"
          min-width="8%">
        </el-table-column>
        <el-table-column
          prop="applicant"
          label="申请人"
          align="center"
          min-width="8%">
        </el-table-column>
        <el-table-column
          prop="department"
          label="部门"
          align="center"
          min-width="10%">
        </el-table-column>
        <el-table-column
          prop="proStatus"
          label="立项状态"
          align="center"
          min-width="8%">
        </el-table-column>
        <el-table-column
          prop="checkStatus"
          label="检查状态"
          align="center"
          min-width="8%">
        </el-table-column>
        <el-table-column
          prop="conState"
          label="结题状态"
          align="center"
          min-width="8%">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          min-width="17%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="medium">详情</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="medium">审核</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="medium">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-if="totalProject !== 0"
        @current-change="currentProject"
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totalProject">
      </el-pagination>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
const projectList = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/projectManage'

import Nav from '../../nav/nav.vue'
import Footer from '../../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
    return {
      labelPosition: 'right',
      fullscreenLoading: false,
      projectList: [],
      curProjectPage: 1,
      pageSize: 10,
      totalProject: 0,
      formInline: {
        time: '全部',
        college: '电子工程学院',
        departments: '全部',
        reAmount: '全部',
        appStatus: '全部',
        workType: '全部',
      },
    };
  },
  created (){
    this.onSubmit();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    onSubmit() {
      let obj = {};

      this.fullscreenLoading = true;
      obj.curProjectPage = this.curProjectPage;
      obj.totalProject = this.totalProject;
      obj.pageSize = this.pageSize;
      this.projectList = [];
      obj = Object.assign(obj, this.fomatData)

      this.axios.get(projectList, obj)
        .then(resp => {
          let respon = resp.data;

          if(respon.success){
            this.curProjectPage = respon.data.curProjectPage;
            this.totalProject = respon.data.totalProject;
            this.pageSize = respon.data.pageSize;
            this.projectList = respon.data.projectList;
          }
          this.fullscreenLoading = false;
        }).catch(error => {
          this.messageNotify(error, 'error');
        });
    },
    downLoad() {
      console.log('download');
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
    tabClick(tab) {
      this.currentTab = tab.name;
    },
    currentProject(page) {
      this.curProjectPage = page
      this.onSubmit();
    },
  },
  computed: {
    fomatData() {
      let time = this.moment(this.formInline.time).format('YYYY');
      return {
        time: this.formInline.time,
        college: this.formInline.college,
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "./monographs.scss";
</style>

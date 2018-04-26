<template>
  <div class="pro-manage" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav :status="status"></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div>您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'HomeManage' }">管理首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'ProManage' }">项目管理</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form :label-position="labelPosition"  label-width="90px" :inline="true" :model="formInline" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="6">
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
          <el-col :span="6">
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
          <el-col :span="6">
            <el-form-item label="项目类型 : ">
              <el-select v-model="formInline.proType">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="国家级" value="国家级"></el-option>
                <el-option label="省部级" value="省部级"></el-option>
                <el-option label="厅局级" value="厅局级"></el-option>
                <el-option label="横向项目" value="横向项目"></el-option>
                <el-option label="校级" value="校级"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="项目类别 : ">
              <el-select v-model="formInline.itemCate">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="教育部人文社科项目" value="教育部人文社科项目"></el-option>
                <el-option label="工信部软科学项目" value="工信部软科学项目"></el-option>
                <el-option label="陕西省自然基金" value="陕西省自然基金"></el-option>
                <el-option label="陕西省软科学" value="陕西省软科学"></el-option>
                <el-option label="陕西省工业攻关" value="陕西省工业攻关"></el-option>
                <el-option label="陕西省国际合作" value="陕西省国际合作"></el-option>
                <el-option label="陕西省农业攻关" value="陕西省农业攻关"></el-option>
                <el-option label="陕西省社发攻关" value="陕西省社发攻关"></el-option>
                <el-option label="陕西省科技新星" value="陕西省科技新星"></el-option>
                <el-option label="陕西省社科基金" value="陕西省社科基金"></el-option>
                <el-option label="国家体育总局" value="国家体育总局"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="立项状态 : ">
              <el-select v-model="formInline.proStatus">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="未立项" value="未立项"></el-option>
                <el-option label="立项未通过" value="立项未通过"></el-option>
                <el-option label="立项通过" value="立项通过"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="检查状态 : ">
              <el-select v-model="formInline.checkStatus">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="未检查" value="未检查"></el-option>
                <el-option label="检查未通过" value="检查未通过"></el-option>
                <el-option label="检查通过" value="检查通过"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="结题状态 : ">
              <el-select v-model="formInline.conState">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="未结题" value="未结题"></el-option>
                <el-option label="结题未通过" value="结题未通过"></el-option>
                <el-option label="结题通过" value="结题通过"></el-option>
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
      status: 2,
      labelPosition: 'right',
      fullscreenLoading: false,
      projectList: [],
      curProjectPage: 1,
      pageSize: 10,
      totalProject: 0,
      formInline: {
        time: '全部',
        college: '电子工程学院',
        proType: '全部',
        itemCate: '全部',
        proStatus: '全部',
        checkStatus: '全部',
        conState: '全部',
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
  @import "./pro-manage.scss";
</style>

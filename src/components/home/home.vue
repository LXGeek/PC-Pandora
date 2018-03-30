<template>
  <div class="home" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div>您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="奖励类别">
          <el-select v-model="formInline.reward" placeholder="请选择奖励类别">
            <el-option label="科研项目" value="1"></el-option>
            <el-option label="科研获奖" value="2"></el-option>
            <el-option label="学术论文" value="3"></el-option>
            <el-option label="知识产权" value="4"></el-option>
            <el-option label="技术标准" value="5"></el-option>
            <el-option label="创作成果" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目类型">
          <el-select v-model="formInline.project" placeholder="请选择项目类型">
            <el-option label="国家级" value="1"></el-option>
            <el-option label="省部级" value="2"></el-option>
            <el-option label="厅局级" value="3"></el-option>
            <el-option label="院校级" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择年份">
          <el-date-picker
            v-model="formInline.time"
            type="year"
            placeholder="请选择年份">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">点击查询</el-button>
        </el-form-item>
      </el-form>
      <el-tabs type="border-card" v-model="activeName" @tab-click="tabClick">
        <el-tab-pane label="项目一览" name="first">
          <el-table
            :data="projectList"
            stripe
            border>
            <el-table-column
              prop="projectType"
              label="项目类型"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              prop="submitNum"
              label="提交数"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              prop="passedNum"
              label="审核通过数"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              prop="rewardNum"
              label="[审核通过]奖励总数"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              min-width="20%">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="medium">查看详情</el-button>
                <el-button type="text" size="medium">添加</el-button>
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
        </el-tab-pane>
        <el-tab-pane label="奖励一览" name="second">
          <el-table
            :data="rewardList"
            stripe
            border>
            <el-table-column
              prop="rewardType"
              label="奖励类型"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              prop="submitNum"
              label="提交数"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              prop="passedNum"
              label="审核通过数"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              prop="rewardNum"
              label="[审核通过]奖励总数"
              align="center"
              min-width="20%">
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              min-width="20%">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="medium">查看详情</el-button>
                <el-button type="text" size="medium">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            v-if="totalReward.length !== 0"
            @current-change="currentReward"
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="totalReward">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
const projectList = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/projectList'
const rewardList = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/rewardList'

import Nav from '../nav/nav.vue'
import Footer from '../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
    return {
      fullscreenLoading: false,
      projectList: [],
      rewardList: [],
      curProjectPage: 1,
      curRewardPage: 1,
      pageSize: 10,
      totalProject: 0,
      totalReward: 0,
      formInline: {
        reward: '1',
        project: '1',
        time: this.moment().format('YYYY')
      },
      activeName: 'first',
      currentTab: 'first'
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

      let url = '';
      let obj = {};
      this.fullscreenLoading = true;
      if(this.currentTab == 'first'){
        url = projectList;
        obj.curProjectPage = this.curProjectPage;
        obj.totalProject = this.totalProject;
        obj.pageSize = this.pageSize;
        this.projectList = [];
      } else {
        url = rewardList;
        obj.curRewardPage = this.curRewardPage;
        obj.totalReward = this.totalReward;
        obj.pageSize = this.pageSize;
        this.rewardList = [];
      }
      obj = Object.assign(obj, this.fomatData)
      this.axios.get(url, obj)
        .then(resp => {
          let respon = resp.data;

          if(respon.success){
            if(this.currentTab == 'first'){
              this.curProjectPage = respon.data.curProjectPage;
              this.totalProject = respon.data.totalProject;
              this.pageSize = respon.data.pageSize;
              this.projectList = respon.data.projectList;
            } else {
              this.curRewardPage = respon.data.curRewardPage;
              this.totalReward = respon.data.totalReward;
              this.pageSize = respon.data.pageSize;
              this.rewardList = respon.data.rewardList;
            }
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
    tabClick(tab) {
      this.currentTab = tab.name;
    },
    currentProject(page) {
      this.curProjectPage = page
      this.onSubmit();
    },
    currentReward(page) {
      this.curRewardPage = page
      this.onSubmit()
    }
  },
  computed: {
    fomatData() {
      let time = this.moment(this.formInline.time).format('YYYY');
      return {
        reward: this.formInline.reward,
        project: this.formInline.project,
        time: time
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "./home.scss";
</style>

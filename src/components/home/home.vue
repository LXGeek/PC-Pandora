<template>
  <div class="home">
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
      <el-tabs type="border-card">
        <el-tab-pane label="项目一览">
          <el-table
            :data="projectList"
            border>
            <el-table-column
              prop="projectType"
              label="项目类型"
              align="center">
            </el-table-column>
            <el-table-column
              prop="submitNum"
              label="提交数"
              align="center">
            </el-table-column>
            <el-table-column
              prop="passedNum"
              label="审核通过数"
              align="center">
            </el-table-column>
            <el-table-column
              prop="rewardNum"
              label="[审核通过]奖励总数"
              align="center">
            </el-table-column>
            <el-table-column
              label="操作"
              align="center">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="medium">查看详情</el-button>
                <el-button type="text" size="medium">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            v-if="totalProjec !== 0"
            background
            layout="prev, pager, next"
            :total="totalProjec">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="奖励一览">
          <el-table
            :data="rewardList"
            border
            width="980">
            <el-table-column
              prop="rewardType"
              label="奖励类型"
              align="center">
            </el-table-column>
            <el-table-column
              prop="submitNum"
              label="提交数"
              align="center">
            </el-table-column>
            <el-table-column
              prop="passedNum"
              label="审核通过数"
              align="center">
            </el-table-column>
            <el-table-column
              prop="rewardNum"
              label="[审核通过]奖励总数"
              align="center">
            </el-table-column>
            <el-table-column
              label="操作"
              align="center">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="medium">查看详情</el-button>
                <el-button type="text" size="medium">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            v-if="totalReward !== 0"
            background
            layout="prev, pager, next"
            :total="totalReward">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="footer">
       <p>Copyright © 2013-2019 <a href="http://222.24.19.31/">西安邮电大学科技处</a></p>
    </div>
  </div>
</template>

<script>
import Nav from '../nav/nav.vue'

export default {
  components: {
    'el-nav': Nav
  },
  data() {
    return {
      projectList: [{
        projectType: '国家级',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }, {
        projectType: '国家级',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }, {
        projectType: '国家级',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }, {
        projectType: '国家级',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }],
      rewardList: [{
        rewardType: '科研项目',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }, {
        rewardType: '科研项目',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }, {
        rewardType: '科研项目',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }, {
        rewardType: '科研项目',
        submitNum: 2,
        passedNum: 5,
        rewardNum: 10,
      }],
      totalProjec: 100,
      totalReward: 50,
      formInline: {
        reward: '',
        project: '',
        time: ''
      },
      activeNames: ['1']
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    onSubmit() {
      console.log('submit!');
    },
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style lang='scss'>
  @import "./home.scss";
</style>

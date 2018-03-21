<template>
  <div class="home">
    <el-nav></el-nav>
    <div class="content">
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
      totalReward: 50
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
}
</script>

<style lang='scss'>
  @import "./home.scss";
</style>

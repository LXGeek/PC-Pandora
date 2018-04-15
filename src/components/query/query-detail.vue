<template>
  <div class="query-detail" v-loading.fullscreen.lock="fullscreenLoading">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home' }">{{ type }}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/query-detail' }">详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="base-data">
        <p>基本状况 : </p>
        <el-row>
          <el-col :span="4"><div class="grid-content border">获奖项目名称</div></el-col>
          <el-col :span="8"><div class="grid-content border">{{ awardedPro }}</div></el-col>
          <el-col :span="4"><div class="grid-content border">获奖等级</div></el-col>
          <el-col :span="8"><div class="grid-content border">{{ awardLevel }}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content">获奖类别</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ awardCate }}</div></el-col>
          <el-col :span="4"><div class="grid-content">获奖级别</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ awardType }}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content">授奖单位</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ authorUnit }}</div></el-col>
          <el-col :span="4"><div class="grid-content">获奖日期</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ awardTime }}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content">获奖编号</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ awardNum }}</div></el-col>
          <el-col :span="4"><div class="grid-content">个人金额</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ perAmount }}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content">证明网址</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ proofUrl }}</div></el-col>
          <el-col :span="4"><div class="grid-content">审核状态</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ appStatus }}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content">单位排名</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ unitRanking }}</div></el-col>
          <el-col :span="4"><div class="grid-content">证明图片</div></el-col>
          <el-col :span="8"><div class="grid-content">{{ proofPic }}</div></el-col>
        </el-row>
      </div>
      <div class="part-status">
        <p>参与者情况 : </p>
        <el-table
          :data="partStatus"
          border>
          <el-table-column
            prop="partName"
            label="参与者姓名"
            align="center"
            min-width="25%">
          </el-table-column>
          <el-table-column
            prop="department"
            label="部门"
            align="center"
            min-width="25%">
          </el-table-column>
          <el-table-column
            prop="schRanking"
            label="校内排名(前 % )"
            align="center"
            min-width="25%">
          </el-table-column>
          <el-table-column
            prop="rewardAmount"
            label="奖励金额(单位 : 元)"
            align="center"
            min-width="25%">
          </el-table-column>
        </el-table>
      </div>
      <div class="appr-status">
        <p>审核状态 : </p>
        <el-table
          :data="apprStatus"
          border>
          <el-table-column
            prop="unitLevel"
            label="单位级别"
            align="center"
            min-width="18%">
          </el-table-column>
          <el-table-column
            prop="auditRes"
            label="审核结果"
            align="center"
            min-width="18%">
          </el-table-column>
          <el-table-column
            prop="reviewer"
            label="审核人"
            align="center"
            min-width="18%">
          </el-table-column>
          <el-table-column
            prop="auditTime"
            label="审核时间"
            align="center"
            min-width="18%">
          </el-table-column>
          <el-table-column
            prop="auditOpin"
            label="审核意见"
            align="center"
            min-width="28%">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
const detailUrl = 'https://easy-mock.com/mock/5ab605ce72286c70d351bc2f/example/queryDetail';

import Nav from '../nav/nav.vue'
import Footer from '../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
    return {
      type: '',
      awardedPro: '',
      awardLevel: 1,
      awardCate: '',
      awardType: '',
      authorUnit: '',
      awardTime: '',
      awardNum: '',
      perAmount: 0,
      proofUrl: '',
      appStatus: '',
      unitRanking: 0,
      proofPic: '',
      partStatus: [],
      apprStatus: [],
      fullscreenLoading: false,
    }
  },
  created (){
    this.getData();
  },
  methods: {
    getData() {
      this.fullscreenLoading = true;

      let id = this.$route.query.id;
      this.axios.get(detailUrl, {
        id: id
      }).then(resp => {
        let respon = resp.data;

        if(respon.success){
          this.type = respon.data.type;
          this.awardedPro = respon.data.awardedPro;
          this.awardLevel = respon.data.awardLevel;
          this.awardCate = respon.data.awardCate;
          this.awardType = respon.data.awardType;
          this.authorUnit = respon.data.authorUnit;
          this.awardTime = respon.data.awardTime;
          this.awardNum = respon.data.awardNum;
          this.perAmount = respon.data.perAmount;
          this.proofUrl = respon.data.proofUrl;
          this.appStatus = respon.data.appStatus;
          this.unitRanking = respon.data.unitRanking;
          this.proofPic = respon.data.proofPic;
          this.partStatus = respon.data.partStatus;
          this.apprStatus = respon.data.apprStatus;
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
  @import "./query-detail.scss";
</style>

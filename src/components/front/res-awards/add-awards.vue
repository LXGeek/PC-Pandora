<template>
  <div class="add-awards">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'ResAwards' }">科研获奖</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title main">科研获奖基础信息 : </div>
      <el-form :model="formInline" :rules="rules" ref="formInline" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="6">
            <el-form-item label="奖励编号 : " prop="rewardNum">
              <el-input v-model="formInline.rewardNum" placeholder="请输入奖励编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="获奖项目 : " prop="awardsPro">
              <el-input v-model="formInline.awardsPro" placeholder="请输入获奖项目"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="获奖等级 : " prop="awardLevel">
              <el-select v-model="formInline.awardLevel" placeholder="请选择获奖等级">
                <el-option label="国家级" value="1"></el-option>
                <el-option label="省部级" value="2"></el-option>
                <el-option label="厅局级" value="3"></el-option>
                <el-option label="校级" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="获奖类别 : " prop="awardCate">
              <el-select v-model="formInline.awardCate" placeholder="请选择获奖类别">
                <el-option label="自然科学" value="1"></el-option>
                <el-option label="技术发明" value="2"></el-option>
                <el-option label="科技进步" value="3"></el-option>
                <el-option label="社会基金(著作类)" value="4"></el-option>
                <el-option label="社会基金(论文类)" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="获奖级别 : " prop="awardType">
              <el-select v-model="formInline.awardType" placeholder="请输入获奖等级">
                <el-option label="一等奖" value="1"></el-option>
                <el-option label="二等奖" value="2"></el-option>
                <el-option label="三等奖" value="3"></el-option>
                <el-option label="特别荣誉奖" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="授奖单位 : " prop="awardUnit">
              <el-input v-model="formInline.awardUnit" placeholder="请输入授奖单位"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="单位排名 : " prop="unitRanking">
              <el-input-number v-model="formInline.unitRanking" controls-position="right" :min="1" :max="100"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="授奖日期 : " prop="awardDate">
              <el-date-picker
                v-model="formInline.awardDate"
                type="date"
                placeholder="授奖日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
import Nav from '../../nav/nav.vue'
import Footer from '../../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
    return {
      formInline: {
        rewardNum: '',
        awardsPro: '',
        awardLevel: '',
        awardCate: '',
        awardType: '',
        awardUnit: '',
        unitRanking: '',
        awardDate: '',
      },
      rules: {
        rewardNum: [
          { required: true, message: '请输入奖励编号', trigger: 'blur' }
        ],
        awardsPro: [
          { required: true, message: '请输入获奖项目', trigger: 'blur' }
        ],
        awardLevel: [
          { required: true }
        ],
        awardCate: [
          { required: true }
        ],
        awardType: [
          { required: true }
        ],
        awardUnit: [
          { required: true, message: '请输入授奖单位', trigger: 'blur' }
        ],
        unitRanking: [
          { required: true, message: '请输入单位排名', trigger: 'blur' }
        ],
        awardDate: [
          { type: 'date', required: true, message: '请选择授奖日期', trigger: 'change'}
        ],
      },
    };
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import "./add-awards.scss";
</style>

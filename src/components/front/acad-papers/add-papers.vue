<template>
  <div class="add-papers">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'AcadPapers' }">学术论文</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title main">学术论文基础信息 : </div>
      <el-form :model="formInline" :rules="rules" ref="formInline" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="6">
            <el-form-item label="论文名称 : " prop="paperName">
              <el-input v-model="formInline.paperName" placeholder="请输入论文名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="期刊名称 : " prop="jourTitle">
              <el-input v-model="formInline.jourTitle" placeholder="请输入期刊名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="期刊类型 : " prop="jourType">
              <el-select v-model="formInline.jourType" placeholder="请选择期刊类型">
                <el-option label="Science" value="1"></el-option>
                <el-option label="Nature" value="2"></el-option>
                <el-option label="SCI" value="3"></el-option>
                <el-option label="SSCI" value="4"></el-option>
                <el-option label="EI" value="5"></el-option>
                <el-option label="中国科学" value="6"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="期刊期号 : " prop="jourNum">
              <el-input v-model="formInline.jourNum" placeholder="请输入期刊期号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="期刊页码 : " prop="jourPage">
              <el-input v-model="formInline.jourPage" placeholder="请输入期刊页码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="检索日期 : " prop="searchDate">
              <el-date-picker
                v-model="formInline.searchDate"
                type="date"
                placeholder="检索日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="单位排名 : " prop="unitRanking">
              <el-input-number v-model="formInline.unitRanking" controls-position="right" :min="1" :max="100"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="发表日期 : " prop="publishDate">
              <el-date-picker
                v-model="formInline.publishDate"
                type="date"
                placeholder="发表日期">
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
        paperName: '',
        jourTitle: '',
        jourType: '',
        jourNum: '',
        jourPage: '',
        searchDate: '',
        unitRanking: '',
        publishDate: '',
      },
      rules: {
        paperName: [
          { required: true, message: '请输入论文名称', trigger: 'blur' }
        ],
        jourTitle: [
          { required: true, message: '请输入期刊名称', trigger: 'blur' }
        ],
        jourType: [
          { required: true }
        ],
        jourNum: [
          { required: true, message: '请输入期刊期号', trigger: 'blur' }
        ],
        jourPage: [
          { required: true, message: '请输入期刊页码', trigger: 'blur' }
        ],
        searchDate: [
          { type: 'date', required: true, message: '请选择检索日期', trigger: 'change'}
        ],
        unitRanking: [
          { required: true, message: '请输入单位排名', trigger: 'blur' }
        ],
        publishDate: [
          { type: 'date', required: true, message: '请选择发表日期', trigger: 'change'}
        ],
      },
    };
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import "./add-papers.scss";
</style>

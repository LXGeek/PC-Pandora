<template>
  <div class="add-tech">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/tech-stand' }">技术标准</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title main">技术标准基础信息 : </div>
      <el-form :model="formInline" :rules="rules" ref="formInline" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="7">
            <el-form-item label="标准编号 : " prop="standNum">
              <el-input v-model="formInline.standNum" placeholder="请输入标准编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="标准名称 : " prop="standName">
              <el-input v-model="formInline.standName" placeholder="请输入标准名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="标准类型 : " prop="standType">
              <el-select v-model="formInline.standType" placeholder="请选择标准类型">
                <el-option label="国际标准" value="1"></el-option>
                <el-option label="国家标准" value="2"></el-option>
                <el-option label="行业标准" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="单位排名 : " prop="unitRanking">
              <el-input-number v-model="formInline.unitRanking" controls-position="right" :min="1" :max="100"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="发布日期 : " prop="publishDate">
              <el-date-picker
                v-model="formInline.publishDate"
                type="date"
                placeholder="发布日期">
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
        standNum: '',
        standName: '',
        standType: '',
        unitRanking: '',
        publishDate: '',
      },
      rules: {
        standNum: [
          { required: true, message: '请输入标准编号', trigger: 'blur' }
        ],
        standName: [
          { required: true, message: '请输入标准名称', trigger: 'blur' }
        ],
        standType: [
          { required: true }
        ],
        unitRanking: [
          { required: true }
        ],
        publishDate: [
          { type: 'date', required: true, message: '请选择发布日期', trigger: 'change'}
        ],
      },
    };
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import "./add-tech.scss";
</style>

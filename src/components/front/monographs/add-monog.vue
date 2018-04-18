<template>
  <div class="add-monog">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/monographs' }">学术专著</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title main">学术专著基础信息 : </div>
      <el-form :model="formInline" :rules="rules" ref="formInline" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="6">
            <el-form-item label="著作名称 : " prop="monogName">
              <el-input v-model="formInline.monogName" placeholder="请输入著作名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="ISBN : " prop="ISBN">
              <el-input v-model="formInline.ISBN" placeholder="请输入ISBN"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出版名称 : " prop="publishName">
              <el-input v-model="formInline.publishName" placeholder="请输入出版社名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="著作类型 : " prop="monogType">
              <el-select v-model="formInline.monogType" placeholder="请选择著作类型">
                <el-option label="专著" value="1"></el-option>
                <el-option label="译著" value="2"></el-option>
                <el-option label="编著" value="3"></el-option>
                <el-option label="其他" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="出版类型 : " prop="publishType">
              <el-select v-model="formInline.publishType" placeholder="请选择出版类型">
                <el-option label="A类" value="1"></el-option>
                <el-option label="其他" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="字数 : " prop="wordCount">
              <el-input v-model="formInline.wordCount" placeholder="请输入字数"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出版时间 : " prop="publishDate">
              <el-date-picker
                v-model="formInline.publishDate"
                type="date"
                placeholder="出版时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6"></el-col>
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
        monogName: '',
        ISBN: '',
        publishName: '',
        monogType: '',
        publishType: '',
        wordCount: '',
        publishDate: '',
      },
      rules: {
        monogName: [
          { required: true, message: '请输入著作名称', trigger: 'blur' }
        ],
        ISBN: [
          { required: true, message: '请输入ISBN', trigger: 'blur' }
        ],
        publishName: [
          { required: true, message: '请输入出版社名称', trigger: 'blur' }
        ],
        monogType: [
          { required: true }
        ],
        publishType: [
          { required: true }
        ],
        wordCount: [
          { required: true, message: '请输入字数', trigger: 'blur' }
        ],
        publishDate: [
          { type: 'date', required: true, message: '请选择出版时间', trigger: 'change'}
        ],
      },
    };
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import "./add-monog.scss";
</style>

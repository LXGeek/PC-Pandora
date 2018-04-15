<template>
  <div class="add-intel">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/intel-prop' }">知识产权</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title main">知识产权基础信息 : </div>
      <el-form :model="formInline" :rules="rules" ref="formInline" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="8">
            <el-row>
              <el-col :span="18">
                <el-form-item label="编号 : " prop="numbering">
                  <el-input v-model="formInline.numbering" placeholder="请输入编号"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row>
              <el-col :span="18">
                <el-form-item label="名称 : " prop="name">
                  <el-input v-model="formInline.name" placeholder="请输入名称"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-form-item label="获取日期 : " prop="obtainDate">
              <el-date-picker
                v-model="formInline.obtainDate"
                type="date"
                placeholder="获取日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="类型 : " prop="type">
              <el-select v-model="formInline.type" placeholder="请选择类型">
                <el-option label="发明专利" value="1"></el-option>
                <el-option label="实用新型专利" value="2"></el-option>
                <el-option label="外观设计专利" value="3"></el-option>
                <el-option label="软件著作权" value="4"></el-option>
                <el-option label="集成电路布局设计" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态 : " prop="status">
              <el-select v-model="formInline.status" placeholder="请选择状态">
                <el-option label="专利授权" value="1"></el-option>
                <el-option label="采纳应用" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位排名 : " prop="unitRanking">
              <el-input-number v-model="formInline.unitRanking" controls-position="right" :min="1" :max="100"></el-input-number>
            </el-form-item>
          </el-col>

        </el-row>

      </el-form>
    </div>
    <el-footer></el-footer>
  </div>
</template>

<script>
import Nav from '../nav/nav.vue'
import Footer from '../footer/footer.vue'

export default {
  components: {
    'el-nav': Nav,
    'el-footer': Footer
  },
  data() {
    return {
      formInline: {
        numbering: '',
        name: '',
        type: '',
        status: '',
        unitRanking: '',
        obtainDate: '',
      },
      rules: {
        numbering: [
          { required: true, message: '请输入编号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        type: [
          { required: true }
        ],
        status: [
          { required: true }
        ],
        unitRanking: [
          { required: true },
        ],
        obtainDate: [
          { type: 'date', required: true, message: '请选择获取日期', trigger: 'change'}
        ],
      },
    };
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import "./add-intel.scss";
</style>

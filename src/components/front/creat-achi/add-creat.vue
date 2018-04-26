<template>
  <div class="add-creat">
    <el-nav :status="status"></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'CreatAchi' }">创作成果</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title main">创作成果基础信息 : </div>
      <el-form :model="formInline" :rules="rules" ref="formInline" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="8">
            <el-row>
              <el-col :span="18">
                <el-form-item label="成果名称 : " prop="creatName">
                  <el-input v-model="formInline.creatName" placeholder="请输入成果名称"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row>
              <el-col :span="18">
                <el-form-item label="奖项名称 : " prop="rewardName">
                  <el-input v-model="formInline.rewardName" placeholder="请输入奖项名称"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-form-item label="奖励级别 : " prop="rewLevel">
              <el-select v-model="formInline.rewLevel" placeholder="请选择奖励级别">
                <el-option label="国家级" value="1"></el-option>
                <el-option label="省部级" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="奖励类型 : " prop="rewType">
              <el-select v-model="formInline.rewType" placeholder="请选择奖励类型">
                <el-option label="金奖" value="1"></el-option>
                <el-option label="银奖" value="2"></el-option>
                <el-option label="铜奖" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="批准日期 : " prop="approveDate">
              <el-date-picker
                v-model="formInline.approveDate"
                type="date"
                placeholder="批准日期">
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
      status: 1,
      formInline: {
        creatName: '',
        rewardName: '',
        rewLevel: '',
        rewType: '',
        approveDate: '',
      },
      rules: {
        creatName: [
          { required: true, message: '请输入成果名称', trigger: 'blur' }
        ],
        rewardName: [
          { required: true, message: '请输入奖项名称', trigger: 'blur' }
        ],
        rewLevel: [
          { required: true }
        ],
        rewType: [
          { required: true }
        ],
        approveDate: [
          { type: 'date', required: true, message: '请选择批准日期', trigger: 'change'}
        ],
      },
    };
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import "./add-creat.scss";
</style>

<template>
  <div class="setting">
    <el-nav></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/setting' }">关于个人</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-info"></i>基本信息</span>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="电话号码 : " prop="number">
              <el-input v-model.number="ruleForm.number"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱 : " prop="email">
              <el-input v-model.email="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="身份证号 : " prop="idCard">
              <el-input v-model="ruleForm.idCard"></el-input>
            </el-form-item>
            <el-form-item label="建行卡号 : " prop="bankCard">
              <el-input v-model.number="ruleForm.bankCard"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="changePass()">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-edit"></i>更改密码</span>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="旧密码 : " prop="oldPass">
              <el-input type="password" v-model="ruleForm2.oldPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码 : " prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码 : " prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="baseData()">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        oldPass: ''
      },
      rules2: {
        oldPass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      ruleForm: {
          sex: 1,
          number: null,
          email: null,
          idCard: null
        },
        rules: {
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          number: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { type: 'number', message: '号码必须为数字类型', trigger: 'blur,change' },
          ],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
          ],
          idCard: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
          ],
          bankCard: [
            { required: true, message: '请输入建行卡号', trigger: 'blur' },
            { type: 'number', message: '卡号必须为数字类型', trigger: 'blur,change' },
          ]
        }
    }
  },
  methods: {
    baseData() {
      console.log(this.ruleForm2);
    },
    changePass() {
      console.log(this.ruleForm);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
  @import "./setting.scss";
</style>

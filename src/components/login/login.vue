<template>
  <div class="particles">
    <vue-particles
      class="vue-particles"
      color="#ffffff"
      :particleOpacity="0.6"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="login">
      <div class="header">
        <span class="clearfix" style="display: inline-block;">
          <img class="logo" src="../../assets/img/logo-mini.png" alt="">
          <span class="title">科研业务综合管理系统</span>
        </span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号 : " prop="account">
          <el-input type="account" v-model="ruleForm.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码 : " prop="pass">
          <el-input type="pass" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码 : " prop="verCode" class="ver-code">
          <el-input v-model="ruleForm.verCode" style="width: 32%;" placeholder="请输入验证码"></el-input>
          <img src="../../assets/img/code.png" alt="">
          <router-link :to="{ name: 'ForgetPass'}">忘记密码?</router-link>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-footer></el-footer>
    <router-view/>
  </div>
</template>

<script>
import Footer from '../footer/footer.vue'
export default {
  components: {
    'el-footer': Footer
  },
  data() {
    return {
      ruleForm: {
        account: '',
        pass: '',
        verCode: ''
      },
      rules: {
        account: [
          { message: '请输入账号', trigger: 'blur' }
        ],
        pass: [
          { message: '请输入密码', trigger: 'blur' }
        ],
        verCode: [
          { message: '请输入验证码', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'Home'});
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss">
  @import "./login.scss";
</style>

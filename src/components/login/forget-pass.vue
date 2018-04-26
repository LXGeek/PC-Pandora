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
        <el-form-item label="姓名 : " prop="name">
          <el-input type="name" v-model="ruleForm.name" auto-complete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱 : " prop="email">
          <el-input type="email" v-model.email="ruleForm.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button @click="goBack()">返回首页</el-button>
          <el-button type="primary" @click="submitForm()">提交</el-button>
        </el-form-item>
      </el-form>
      <p>提示：请正确输入您的姓名和邮箱，您的密码将会被重置，新密码会被发送到您的邮箱中。</p>
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
        name: '',
        email: '',
      },
      rules: {
        name: [
          { message: '请输入姓名', trigger: 'blur' }
        ],
        email: [
          { message: '请输入邮箱', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    goBack() {
      this.$router.push({name: 'Login'});
    },
    submitForm() {
      this.$router.push({name: 'Login'});
    },
  }
}
</script>

<style lang="scss">
  @import "./login.scss";
</style>

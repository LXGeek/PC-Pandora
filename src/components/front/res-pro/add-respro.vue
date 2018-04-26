<template>
  <div class="add-respro">
    <el-nav :status="status"></el-nav>
    <div class="content">
      <div class="breadcrumb clearfix">
        <div class="title">您的当前位置&nbsp;:&nbsp;</div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>奖励详情</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'ResPro' }">科研项目</el-breadcrumb-item>
          <el-breadcrumb-item>添加</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础信息" name="first">
          <el-form :model="form.ruleForm1" :rules="rules" ref="form.ruleForm1" label-width="100px" class="demo-ruleForm">
            <el-form-item label="项目编号 : " prop="itemNumber">
              <el-input v-model="form.ruleForm1.itemNumber"></el-input>
            </el-form-item>
            <el-form-item label="项目名称 : " prop="projectName">
              <el-input v-model="form.ruleForm1.projectName"></el-input>
            </el-form-item>
            <el-form-item label="项目类型 : " prop="projectType">
              <el-select v-model="form.ruleForm1.projectType" placeholder="请选择活动区域">
                <el-option label="国家级" value="1"></el-option>
                <el-option label="省部级" value="2"></el-option>
                <el-option label="厅局级" value="3"></el-option>
                <el-option label="横向项目" value="4"></el-option>
                <el-option label="校级" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="经费总额 : " prop="totalFunds">
              <el-input v-model="form.ruleForm1.totalFunds" placeholder="单位为元，若为自筹类型，请填0"></el-input>
            </el-form-item>
            <el-form-item label="是否自筹 : " prop="selfRaised">
              <el-select v-model="form.ruleForm1.selfRaised">
                <el-option label="否" value="1"></el-option>
                <el-option label="是" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="分期到款 : " prop="stagedPayment">
              <el-select v-model="form.ruleForm1.stagedPayment">
                <el-option label="否" value="1"></el-option>
                <el-option label="是" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="分布比例 : " prop="distrRatio">
              <el-tag
                :key="tag"
                v-for="tag in form.ruleForm1.distrRatio"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{ tag }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm">
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-form-item label="时间范围 : " prop="daterange">
              <el-date-picker
                v-model="form.ruleForm1.daterange"
                type="daterange"
                range-separator="至"
                start-placeholder="开题日期"
                end-placeholder="结题日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="单位排名 : " prop="unitRanking">
              <el-input-number v-model="form.ruleForm1.unitRanking" controls-position="right" :min="1" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item label="申请日期 : " prop="applicaData">
              <el-date-picker
                v-model="form.ruleForm1.applicaData"
                type="date"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('form.ruleForm1')">重置内容</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="简介/创新点/预期成果" name="third">
          <el-form :model="form.ruleForm3" :rules="rules" ref="form.ruleForm3" label-width="100px" class="demo-ruleForm">
            <el-form-item label="项目简介 : " prop="projectDes">
              <el-input type="textarea" v-model="form.ruleForm3.projectDes"></el-input>
            </el-form-item>
            <el-form-item label="创新点 : " prop="innovation">
              <el-input type="textarea" v-model="form.ruleForm3.innovation"></el-input>
            </el-form-item>
            <el-form-item label="预期成果 : " prop="expResults">
              <el-input type="textarea" v-model="form.ruleForm3.expResults"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('form.ruleForm3')">重置内容</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="目标/内容/计划进度" name="fourth">
          <el-form :model="form.ruleForm4" :rules="rules" ref="form.ruleForm4" label-width="100px" class="demo-ruleForm">
            <el-form-item label="项目目标 : " prop="projectObj">
              <el-input type="textarea" v-model="form.ruleForm4.projectObj"></el-input>
            </el-form-item>
            <el-form-item label="项目内容 : " prop="proDes">
              <el-input type="textarea" v-model="form.ruleForm4.proDes"></el-input>
            </el-form-item>
            <el-form-item label="计划进度 : " prop="plannSche">
              <el-input type="textarea" v-model="form.ruleForm4.plannSche"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('form.ruleForm4')">重置内容</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="图片/附件" name="fifth">
          <el-form :model="form.ruleForm5" :rules="rules" ref="form.ruleForm5" label-width="100px" class="demo-ruleForm">
            <el-form-item label="证明文件 : " prop="certiDocu">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="form.ruleForm5.certiDocu">
                <el-button size="small" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip">单张照片大小建议在5M以内，最多不要超过10M</span>
              </el-upload>
            </el-form-item>
            <el-form-item label="证明网址 : " prop="proofUrl">
              <el-input v-model="form.ruleForm5.proofUrl"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('form.ruleForm5')">重置内容</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div class="btn">
        <el-button type="primary" @click="submitForm()">提交信息</el-button>
      </div>
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
      activeName: 'first',
      form: {
        ruleForm1: {
          itemNumber: '',
          projectName: '',
          projectType: '',
          totalFunds: '',
          selfRaised: '1',
          stagedPayment: '2',
          distrRatio: [50, 30, 20],
          daterange: '',
          unitRanking: '1',
          applicaData: '',
        },
        ruleForm3: {
          projectDes: '',
          innovation: '',
          expResults: '',
        },
        ruleForm4: {
          projectObj: '',
          proDes: '',
          plannSche: '',
        },
        ruleForm5: {
          certiDocu: [],
          proofUrl: '',
        },
      },
      inputVisible: false,
      inputValue: '',
      rules: {
        itemNumber: [
          { required: true, message: '请输入项目编号', trigger: 'blur' },
        ],
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
        ],
        projectType: [
          { required: true, message: '请选择项目类型', trigger: 'blur' },
        ],
        totalFunds: [
          { required: true, message: '请输入经费总额', trigger: 'blur' },
        ],
        selfRaised: [
          { required: true },
        ],
        stagedPayment: [
          { required: true },
        ],
        distrRatio: [
          { required: true },
        ],
        daterange: [
          { required: true, message: '请选择时间范围', trigger: 'blur' },
        ],
        unitRanking: [
          { required: true },
        ],
        applicaData: [
          { required: true, message: '请输入申请日期', trigger: 'blur' },
        ],
        projectDes: [
          { required: true, message: '请输入项目简介', trigger: 'blur' },
        ],
        innovation: [
          { required: true, message: '请输入创新点', trigger: 'blur' },
        ],
        expResults: [
          { required: true, message: '请输入预期结果', trigger: 'blur' },
        ],
        projectObj: [
          { required: true, message: '请输入项目目标', trigger: 'blur' },
        ],
        proDes: [
          { required: true, message: '请输入项目内容', trigger: 'blur' },
        ],
        plannSche: [
          { required: true, message: '请输入计划进度', trigger: 'blur' },
        ],
        certiDocu: [
          { required: true },
        ],
        proofUrl: [
          { required: true, message: '请输入证明网址', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(tag) {
      this.ruleForm.distrRatio.splice(this.ruleForm.distrRatio.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.ruleForm.distrRatio.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    submitForm() {
      console.log(this.form);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(file, fileList) {
      // this.fileList3 = fileList.slice(-3);
    }
  }
}
</script>

<style lang="scss">
  @import "./add-respro.scss";
</style>

<template>
  <div class="main">
    <div class="header clearfix">
      <img src="@/assets/img/logo.png"/>
      <div class="title">科研业务综合管理系统</div>
      <el-header style="text-align: right; font-size: 17px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link :to="{ name: 'Setting'}">个人设置</router-link></el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>张三</span>
    </el-header>
    </div>
    <div class="nav">
      <div class="head-v3">
      	<div class="navigation-up">
      		<div class="navigation-inner">
      			<div class="navigation-v3 clearfix">
      				<ul>

                <li v-if="status == 1" _t_nav="home">
      						<h2>
                    <router-link :to="{ name: 'Home'}">首页</router-link>
      						</h2>
      					</li>

      					<li v-if="status == 2" _t_nav="manageHome">
      						<h2>
                    <router-link :to="{ name: 'HomeManage'}">管理首页</router-link>
      						</h2>
      					</li>

      					<li v-if="status == 2" _t_nav="product">
      						<h2>
                    <router-link :to="{ name: 'ProManage'}">项目管理</router-link>
      						</h2>
      					</li>

                <li v-if="status == 1" _t_nav="rewardDetail">
      						<h2>
                    <router-link :to="{ name: 'ResPro'}">奖励详情</router-link>
      						</h2>
      					</li>

      					<li v-if="status == 2" _t_nav="rewardReview">
      						<h2>
      							<a href="#">奖励审核</a>
      						</h2>
      					</li>

      					<li _t_nav="search">
      						<h2>
                    <router-link :to="{ name: 'Query'}">条件查询</router-link>
      						</h2>
      					</li>

      					<li v-if="status == 2" _t_nav="user">
      						<h2>
      							<a href="#">用户管理</a>
      						</h2>
      					</li>

      					<li v-if="status == 2" _t_nav="data">
      						<h2>
      							<a href="#">数据配置</a>
      						</h2>
      					</li>
                <li _t_nav="news">
      						<h2>
                    <router-link :to="{ name: 'DocxNotice'}">文档-通知</router-link>
      						</h2>
      					</li>
                <li _t_nav="goto">
      						<h2>
      							<a v-if="status == 1" href="#">进入后台审核</a>
                    <a v-if="status == 2" href="#">进入前台录入</a>
      						</h2>
      					</li>
      				</ul>
      			</div>
      		</div>
      	</div>
      	<div class="navigation-down">

          <div v-if="status == 1" id="home" class="nav-down-menu menu-1" style="display: none;" _t_nav="home">

      			<div class="navigation-down-inner">

      				<dl style="margin-left: 130px;">
      					<dt>项目录入</dt>
      					<dd>
                  <router-link hotrep="hp.header.home.compute1" :to="{ name: 'AddRespro'}">新增项目</router-link>
      					</dd>
      				</dl>

      				<dl>
      					<dt>成果录入</dt>
      					<dd>
                  <router-link hotrep="hp.header.home.storage2" :to="{ name: 'AddAwards'}">新增获奖</router-link>
      					</dd>

      					<dd>
                  <router-link hotrep="hp.header.home.storage2" :to="{ name: 'AddPapers'}">新增论文</router-link>
      					</dd>

      					<dd>
                  <router-link hotrep="hp.header.home.storage2" :to="{ name: 'AddMonog'}">新增专著</router-link>
      					</dd>

      					<dd>
                  <router-link hotrep="hp.header.home.storage2" :to="{ name: 'AddIntel'}">新增知识产权</router-link>
      					</dd>

                <dd>
                  <router-link hotrep="hp.header.home.storage2" :to="{ name: 'AddTech'}">新增标准</router-link>
      					</dd>

                <dd>
                  <router-link hotrep="hp.header.home.storage2" :to="{ name: 'AddCreat'}">新增创作成果</router-link>
      					</dd>
      				</dl>

      				<dl>
      					<dt>关于个人</dt>
      					<dd>
      						<!-- <a hotrep="hp.header.home.monitoring1" href="#">个人信息维护</a> -->
                  <router-link hotrep="hp.header.home.monitoring1" :to="{ name: 'Setting'}">个人信息维护</router-link>
      					</dd>

      				</dl>
      			</div>
      		</div>

          <div v-if="status == 2" id="manageHome" class="nav-down-menu menu-1" style="display: none;" _t_nav="manageHome">

      			<div class="navigation-down-inner">

      				<dl style="margin-left: 135px;">
      					<dt>项目管理</dt>
      					<dd>
      						<a hotrep="hp.header.manageHome.compute1" href="#">审核立项</a>
      					</dd>

      					<dd>
      						<a hotrep="hp.header.manageHome.compute2" href="#">过程检查</a>
      					</dd>

      					<dd>
      						<a hotrep="hp.header.manageHome.compute3" href="#">审核结题</a>
      					</dd>

      				</dl>

      				<dl>
      					<dt>奖励审核</dt>
      					<dd>
      						<a hotrep="hp.header.manageHome.storage1" href="#">审核项目</a>
      					</dd>

      					<dd>
      						<a hotrep="hp.header.manageHome.storage2" href="#">审核获奖</a>
      					</dd>

      					<dd>
      						<a hotrep="hp.header.manageHome.storage4" href="#">审核论文</a>
      					</dd>

      					<dd>
      						<a hotrep="hp.header.manageHome.storage3" href="#">审核知识产权</a>
      					</dd>

                <dd>
      						<a hotrep="hp.header.manageHome.storage3" href="#">审核标准</a>
      					</dd>

                <dd>
      						<a hotrep="hp.header.manageHome.storage3" href="#">审核创作成果</a>
      					</dd>
      				</dl>

      				<dl>
      					<dt>关于个人</dt>
      					<dd>
                  <router-link hotrep="hp.header.manageHome.monitoring1" :to="{ name: 'Setting'}">个人信息维护</router-link>
      					</dd>
      				</dl>

      			</div>

      		</div>

      		<div id="rewardReview" class="nav-down-menu menu-3 menu-1" style="display: none;" _t_nav="rewardReview">

      			<div class="navigation-down-inner">

      				<dl style="margin-left: 90px;">
      					<dd>
                  <router-link hotrep="hp.header.rewardReview.1" :to="{ name: 'ResMange'}">科研项目</router-link>
      					</dd>

      				</dl>

      				<dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardReview.1" :to="{ name: 'AwardsMange'}">科研获奖</router-link>
      					</dd>
      				</dl>

      				<dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardReview.1" :to="{ name: 'PapersMange'}">学术论文</router-link>
      					</dd>
      				</dl>

              <dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardReview.1" :to="{ name: 'MonogMange'}">学术专著</router-link>
      					</dd>
      				</dl>

              <dl>
      					<dd>
      						<a class="link" hotrep="hp.header.rewardReview.3" href="#">知识产权</a>
      					</dd>
      				</dl>

              <dl>
      					<dd>
      						<a class="link" hotrep="hp.header.rewardReview.3" href="#">技术标准</a>
      					</dd>
      				</dl>

              <dl>
      					<dd>
      						<a class="link" hotrep="hp.header.rewardReview.3" href="#">创作成果</a>
      					</dd>
      				</dl>
      			</div>
      		</div>

          <div id="rewardDetail" class="nav-down-menu menu-3 menu-1" style="display: none;" _t_nav="rewardDetail">

      			<div class="navigation-down-inner">

      				<dl style="margin-left: 80px;">
      					<dd>
                  <router-link hotrep="hp.header.rewardDetail.3" :to="{ name: 'ResPro'}">科研项目</router-link>
      					</dd>
      				</dl>

      				<dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardDetail.3" :to="{ name: 'ResAwards'}">科研获奖</router-link>
      					</dd>
      				</dl>

      				<dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardDetail.3" :to="{ name: 'AcadPapers'}">学术论文</router-link>
      					</dd>
      				</dl>

              <dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardDetail.3" :to="{ name: 'Monographs'}">学术专著</router-link>
      					</dd>
      				</dl>

              <dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardDetail.3" :to="{ name: 'IntelProp'}">知识产权</router-link>
      					</dd>
      				</dl>

              <dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardDetail.3" :to="{ name: 'TechStand'}">技术标准</router-link>
      					</dd>
      				</dl>

              <dl>
      					<dd>
                  <router-link hotrep="hp.header.rewardDetail.3" :to="{ name: 'CreatAchi'}">创作成果</router-link>
      					</dd>
      				</dl>
      			</div>
      		</div>

      		<div v-if="status == 2" id="search" class="nav-down-menu menu-3 menu-1" style="display: none;" _t_nav="search">
      			<div class="navigation-down-inner">

      				<dl style="margin-left: 415px;">
      					<dd>
      						<a class="link" hotrep="hp.header.search.1" href="#">项目查询</a>
      					</dd>
      				</dl>

      				<dl>
      					<dd>
      						<a class="link" hotrep="hp.header.search.2" href="#">奖励查询</a>
      					</dd>
      				</dl>

      			</div>
      		</div>

      	</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 2
    }
  },
  methods: {

  },
  created() {
    jQuery(document).ready(function(){

    	let qcloud = {};

    	$('[_t_nav]').hover(function(){

    		let _nav = $(this).attr('_t_nav');

    		clearTimeout( qcloud[ _nav + '_timer' ] );

    		qcloud[ _nav + '_timer' ] = setTimeout(function(){

    		$('[_t_nav]').each(function(){

    		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');

    		});

    		$('#'+_nav).stop(true,true).slideDown(400);

    	}, 200);

    	},function(){

    		let _nav = $(this).attr('_t_nav');

    		clearTimeout( qcloud[ _nav + '_timer' ] );

    		qcloud[ _nav + '_timer' ] = setTimeout(function(){

    		$('[_t_nav]').removeClass('nav-up-selected');

    		$('#'+_nav).stop(true,true).slideUp(400);

    	}, 200);

    	});

    });

  }
}
</script>

<style lang='scss'>
  @import "./nav.scss";
</style>
